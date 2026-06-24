#!/usr/bin/env python3
"""Generate self-hosted REST API documentation assets for gratheon.com.

The source of truth is each microservice-owned OpenAPI document. This script
copies those specs into website content, prepares a static Swagger UI page, and
creates lightweight Postman, Bruno, Insomnia, and cURL examples that can be
published as static files by blog-engine-md.
"""

from __future__ import annotations

import json
import pathlib
import re
import shutil
import tempfile
import urllib.request
import zipfile
from typing import Any

ROOT = pathlib.Path(__file__).resolve().parents[1]
REPO_ROOT = ROOT.parent
OUT_DIR = ROOT / "content" / "docs" / "API" / "rest-docs"
SWAGGER_VERSION = "5.32.8"
SWAGGER_FILES = {
    "swagger-ui-bundle.js": f"https://unpkg.com/swagger-ui-dist@{SWAGGER_VERSION}/swagger-ui-bundle.js",
    "swagger-ui.css": f"https://unpkg.com/swagger-ui-dist@{SWAGGER_VERSION}/swagger-ui.css",
}

SERVICES = [
    {
        "id": "telemetry-api",
        "name": "Telemetry API",
        "source": REPO_ROOT / "telemetry-api" / "openapi.json",
    },
    {
        "id": "gate-video-stream",
        "name": "Gate Video Stream API",
        "source": REPO_ROOT / "gate-video-stream" / "openapi.json",
    },
]


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ensure_swagger_assets()

    service_entries: list[dict[str, str]] = []
    for service in SERVICES:
        spec = load_service_spec(service)
        spec_path = OUT_DIR / f"{service['id']}.openapi.json"
        write_json(spec_path, spec)

        write_json(OUT_DIR / f"{service['id']}.postman_collection.json", build_postman_collection(spec, service["name"]))
        write_json(OUT_DIR / f"{service['id']}.insomnia_collection.json", build_insomnia_collection(spec, service["name"]))
        write_bru_collection(OUT_DIR / f"{service['id']}.bru", spec, service["name"])
        write_bruno_archive(OUT_DIR / f"{service['id']}.bruno.zip", spec, service["name"])
        write_curl_examples(OUT_DIR / f"{service['id']}.curl.sh", spec)

        service_entries.append(
            {
                "id": service["id"],
                "name": service["name"],
                "specUrl": f"./{service['id']}.openapi.json",
                "postmanUrl": f"./{service['id']}.postman_collection.json",
                "insomniaUrl": f"./{service['id']}.insomnia_collection.json",
                "brunoUrl": f"./{service['id']}.bruno.zip",
                "curlUrl": f"./{service['id']}.curl.sh",
            }
        )

    write_json(OUT_DIR / "services.json", service_entries)
    write_swagger_page(service_entries)
    print(f"Generated REST API docs in {OUT_DIR.relative_to(ROOT)}")



def load_service_spec(service: dict[str, Any]) -> dict[str, Any]:
    """Load a service-owned spec, with generated website spec as deploy fallback.

    Production website deploys may check out only gratheon.com. In that case the
    previously generated OpenAPI JSON in content/ keeps the static docs buildable,
    while local monorepo builds still sync from the real microservice contracts.
    """
    source = service["source"]
    if source.exists():
        return load_json(source)

    fallback = OUT_DIR / f"{service['id']}.openapi.json"
    if fallback.exists():
        print(f"Using generated fallback spec for {service['id']}: {fallback.relative_to(ROOT)}")
        return load_json(fallback)

    raise FileNotFoundError(f"OpenAPI spec not found: {source}; fallback not found: {fallback}")
def ensure_swagger_assets() -> None:
    for filename, url in SWAGGER_FILES.items():
        target = OUT_DIR / filename
        if target.exists() and target.stat().st_size > 0:
            continue
        print(f"Downloading {url}")
        with urllib.request.urlopen(url, timeout=30) as response:
            target.write_bytes(response.read())


def load_json(path: pathlib.Path) -> dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"OpenAPI spec not found: {path}")
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: pathlib.Path, data: Any) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def first_server_url(spec: dict[str, Any]) -> str:
    servers = spec.get("servers") or []
    if servers and servers[0].get("url"):
        return str(servers[0]["url"]).rstrip("/")
    return "{{baseUrl}}"


def safe_name(value: str) -> str:
    return re.sub(r"[^A-Za-z0-9_-]+", "_", value).strip("_") or "request"


def operation_name(method: str, path: str, operation: dict[str, Any]) -> str:
    return operation.get("summary") or operation.get("operationId") or f"{method.upper()} {path}"


def example_body(spec: dict[str, Any], operation: dict[str, Any]) -> Any | None:
    content = operation.get("requestBody", {}).get("content", {})
    json_media = content.get("application/json")
    if not json_media:
        return None
    examples = json_media.get("examples") or {}
    for example in examples.values():
        if "value" in example:
            return example["value"]
    if "example" in json_media:
        return json_media["example"]
    schema = json_media.get("schema")
    if schema:
        return schema_example(spec, schema)
    return None


def schema_example(spec: dict[str, Any], schema: dict[str, Any]) -> Any:
    if "$ref" in schema:
        return schema_example(spec, resolve_ref(spec, schema["$ref"]))
    if "oneOf" in schema:
        return schema_example(spec, schema["oneOf"][0])
    if schema.get("type") == "array":
        return [schema_example(spec, schema.get("items", {}))]
    if "example" in schema:
        return schema["example"]
    if "examples" in schema and schema["examples"]:
        return schema["examples"][0]
    if schema.get("type") == "object" or "properties" in schema:
        result: dict[str, Any] = {}
        for key, value in (schema.get("properties") or {}).items():
            result[key] = schema_example(spec, value)
        return result
    if schema.get("type") == "integer":
        return 1
    if schema.get("type") == "number":
        return 1.0
    if schema.get("type") == "boolean":
        return True
    return "string"


def resolve_ref(spec: dict[str, Any], ref: str) -> dict[str, Any]:
    if not ref.startswith("#/"):
        raise ValueError(f"Only local refs are supported, got: {ref}")
    node: Any = spec
    for part in ref[2:].split("/"):
        node = node[part]
    return node


def operations(spec: dict[str, Any]) -> list[tuple[str, str, dict[str, Any]]]:
    result: list[tuple[str, str, dict[str, Any]]] = []
    for path, path_item in spec.get("paths", {}).items():
        for method, operation in path_item.items():
            if method.lower() in {"get", "post", "put", "patch", "delete"}:
                result.append((method.upper(), path, operation))
    return result


def build_postman_collection(spec: dict[str, Any], service_name: str) -> dict[str, Any]:
    base_url = first_server_url(spec)
    items = []
    for method, path, op in operations(spec):
        headers = []
        body = example_body(spec, op)
        if body is not None:
            headers.append({"key": "Content-Type", "value": "application/json"})
        if op.get("security"):
            headers.append({"key": "Authorization", "value": "Bearer {{apiToken}}"})
        item: dict[str, Any] = {
            "name": operation_name(method, path, op),
            "request": {
                "method": method,
                "header": headers,
                "url": {
                    "raw": "{{baseUrl}}" + path,
                    "host": ["{{baseUrl}}"],
                    "path": [segment for segment in path.strip("/").split("/") if segment],
                },
                "description": op.get("description", ""),
            },
        }
        if body is not None:
            item["request"]["body"] = {"mode": "raw", "raw": json.dumps(body, indent=2), "options": {"raw": {"language": "json"}}}
        items.append(item)
    return {
        "info": {
            "name": service_name,
            "description": spec.get("info", {}).get("description", ""),
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
        },
        "variable": [
            {"key": "baseUrl", "value": base_url},
            {"key": "apiToken", "value": "replace-with-your-token"},
        ],
        "item": items,
    }


def build_insomnia_collection(spec: dict[str, Any], service_name: str) -> dict[str, Any]:
    base_url = first_server_url(spec)
    resources = [
        {
            "_id": f"wrk_{safe_name(service_name)}",
            "_type": "workspace",
            "name": service_name,
            "description": spec.get("info", {}).get("description", ""),
            "scope": "collection",
        },
        {
            "_id": f"env_{safe_name(service_name)}",
            "_type": "environment",
            "parentId": f"wrk_{safe_name(service_name)}",
            "name": "Base Environment",
            "data": {"baseUrl": base_url, "apiToken": "replace-with-your-token"},
        },
    ]
    for method, path, op in operations(spec):
        body = example_body(spec, op)
        headers = []
        if body is not None:
            headers.append({"name": "Content-Type", "value": "application/json"})
        if op.get("security"):
            headers.append({"name": "Authorization", "value": "Bearer {{ _.apiToken }}"})
        resources.append(
            {
                "_id": f"req_{safe_name(service_name)}_{safe_name(method + '_' + path)}",
                "_type": "request",
                "parentId": f"wrk_{safe_name(service_name)}",
                "name": operation_name(method, path, op),
                "method": method,
                "url": "{{ _.baseUrl }}" + path,
                "body": {"mimeType": "application/json", "text": json.dumps(body, indent=2)} if body is not None else {},
                "headers": headers,
            }
        )
    return {"_type": "export", "__export_format": 4, "__export_source": "gratheon-docs", "resources": resources}


def bruno_request_lines(spec: dict[str, Any], method: str, api_path: str, op: dict[str, Any]) -> list[str]:
    body = example_body(spec, op)
    lines = [
        "meta {",
        f"  name: {operation_name(method, api_path, op)}",
        "  type: http",
        "}",
        "",
        f"{method.lower()} {{",
        f"  url: {{{{baseUrl}}}}{api_path}",
        "}",
    ]
    if op.get("security") or body is not None:
        lines.extend(["", "headers {"])
        if op.get("security"):
            lines.append("  Authorization: Bearer {{apiToken}}")
        if body is not None:
            lines.append("  Content-Type: application/json")
        lines.append("}")
    if body is not None:
        lines.extend(["", "body:json {"])
        lines.extend("  " + line for line in json.dumps(body, indent=2).splitlines())
        lines.append("}")
    return lines


def write_bru_collection(path: pathlib.Path, spec: dict[str, Any], service_name: str) -> None:
    base_url = first_server_url(spec)
    lines = [
        "meta {",
        f"  name: {service_name}",
        "  type: collection",
        "}",
        "",
        "vars {",
        f"  baseUrl: {base_url}",
        "  apiToken: replace-with-your-token",
        "}",
    ]
    for method, api_path, op in operations(spec):
        lines.extend(["", "---", ""])
        lines.extend(bruno_request_lines(spec, method, api_path, op))
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_bruno_archive(path: pathlib.Path, spec: dict[str, Any], service_name: str) -> None:
    """Create a Bruno collection archive that can be imported directly."""
    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = pathlib.Path(tmp)
        (tmp_path / "collection.bru").write_text(
            "\n".join(["meta {", f"  name: {service_name}", "  type: collection", "}", ""]),
            encoding="utf-8",
        )
        (tmp_path / "environments").mkdir()
        (tmp_path / "environments" / "Default.bru").write_text(
            "\n".join(["vars {", f"  baseUrl: {first_server_url(spec)}", "  apiToken: replace-with-your-token", "}", ""]),
            encoding="utf-8",
        )
        for method, api_path, op in operations(spec):
            request_name = safe_name(operation_name(method, api_path, op))
            (tmp_path / f"{request_name}.bru").write_text(
                "\n".join(bruno_request_lines(spec, method, api_path, op)) + "\n",
                encoding="utf-8",
            )
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as archive:
            for file_path in tmp_path.rglob("*"):
                if file_path.is_file():
                    archive.write(file_path, file_path.relative_to(tmp_path))

def write_curl_examples(path: pathlib.Path, spec: dict[str, Any]) -> None:
    base_url = first_server_url(spec)
    lines = ["#!/usr/bin/env bash", "set -euo pipefail", "", f"BASE_URL=\"${{BASE_URL:-{base_url}}}\"", "API_TOKEN=\"${API_TOKEN:-replace-with-your-token}\"", ""]
    for method, api_path, op in operations(spec):
        body = example_body(spec, op)
        lines.append(f"# {operation_name(method, api_path, op)}")
        command = ["curl", "-X", method, f"\"$BASE_URL{api_path}\""]
        if op.get("security"):
            command.extend(["-H", "\"Authorization: Bearer $API_TOKEN\""])
        if body is not None:
            command.extend(["-H", '"Content-Type: application/json"', "--data", "'" + json.dumps(body, indent=2) + "'"])
        lines.append(" \\\n  ".join(command))
        lines.append("")
    path.write_text("\n".join(lines), encoding="utf-8")
    path.chmod(0o755)


def write_swagger_page(services: list[dict[str, str]]) -> None:
    services_json = json.dumps(services, ensure_ascii=False)
    html = f"""<!doctype html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
  <title>Gratheon REST APIs</title>
  <link rel=\"stylesheet\" href=\"./swagger-ui.css\" />
  <style>
    body {{ margin: 0; background: #f7f7f7; color: #111; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }}
    .topbar {{ display: none; }}
    .gratheon-api-header {{ padding: 20px 24px; background: #fff; border-bottom: 1px solid #ddd; }}
    .gratheon-api-header h1 {{ margin: 0 0 8px; font-size: 26px; }}
    .gratheon-api-header p {{ margin: 0 0 16px; max-width: 860px; line-height: 1.5; }}
    .gratheon-api-controls {{ display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }}
    .gratheon-api-controls select, .gratheon-api-controls a {{ border: 1px solid #222; background: #fff; color: #111; padding: 8px 10px; text-decoration: none; font-size: 14px; }}
    .gratheon-api-controls a:hover {{ background: #111; color: #fff; }}
    #swagger-ui {{ background: #fff; }}
  </style>
</head>
<body>
  <header class=\"gratheon-api-header\">
    <h1>Gratheon REST APIs</h1>
    <p>Self-hosted OpenAPI documentation for REST endpoints exposed by Gratheon microservices. Choose a service below, try requests in Swagger UI, or download generated client collections and cURL examples.</p>
    <div class=\"gratheon-api-controls\">
      <label for=\"service-select\">Service</label>
      <select id=\"service-select\"></select>
      <a id=\"openapi-link\" href=\"#\">OpenAPI JSON</a>
      <a id=\"postman-link\" href=\"#\">Postman</a>
      <a id=\"bruno-link\" href=\"#\">Bruno</a>
      <a id=\"insomnia-link\" href=\"#\">Insomnia</a>
      <a id=\"curl-link\" href=\"#\">cURL examples</a>
    </div>
  </header>
  <main id=\"swagger-ui\"></main>
  <script src=\"./swagger-ui-bundle.js\"></script>
  <script>
    const services = {services_json};
    const select = document.getElementById('service-select');
    const links = {{
      openapiUrl: document.getElementById('openapi-link'),
      postmanUrl: document.getElementById('postman-link'),
      brunoUrl: document.getElementById('bruno-link'),
      insomniaUrl: document.getElementById('insomnia-link'),
      curlUrl: document.getElementById('curl-link'),
    }};
    let ui;

    for (const service of services) {{
      const option = document.createElement('option');
      option.value = service.id;
      option.textContent = service.name;
    function setService(id) {{
      const service = services.find((item) => item.id === id) || services[0];
      if (!service) return;
      const hrefByElement = {{
        openapiUrl: service.specUrl,
        postmanUrl: service.postmanUrl,
        brunoUrl: service.brunoUrl,
        insomniaUrl: service.insomniaUrl,
        curlUrl: service.curlUrl,
      }};
      for (const [key, node] of Object.entries(links)) {{
        node.href = hrefByElement[key];
        node.download = hrefByElement[key].replace('./', '');
      }}
      window.location.hash = service.id;
      if (ui) {{
        ui.specActions.updateUrl(service.specUrl);
        ui.specActions.download(service.specUrl);
      }} else {{
        ui.specActions.updateUrl(service.specUrl);
        ui.specActions.download(service.specUrl);
      }} else {{
        ui = SwaggerUIBundle({{
          url: service.specUrl,
          dom_id: '#swagger-ui',
          deepLinking: true,
          persistAuthorization: true,
          displayRequestDuration: true,
        }});
      }}
    }}

    select.addEventListener('change', (event) => setService(event.target.value));
    const initialId = window.location.hash.replace('#', '') || services[0]?.id;
    select.value = initialId;
    setService(initialId);
  </script>
</body>
</html>
"""
    (OUT_DIR / "index.html").write_text(html, encoding="utf-8")


if __name__ == "__main__":
    main()
