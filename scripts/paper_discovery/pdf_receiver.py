"""One-shot HTTP server that accepts base64 PDF uploads from a browser helper."""

from __future__ import annotations

import base64
import http.server
import socketserver
from pathlib import Path

from .constants import PDF_DIR


def serve_pdf_receiver(*, port: int = 9999, pdf_dir: Path = PDF_DIR, once: bool = True) -> None:
    pdf_dir.mkdir(parents=True, exist_ok=True)

    class PDFHandler(http.server.SimpleHTTPRequestHandler):
        def do_POST(self) -> None:  # noqa: N802
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length)

            filename = self.path.strip("/")
            if not filename.endswith(".pdf"):
                filename = "downloaded_temp.pdf"

            dest_path = pdf_dir / filename
            try:
                pdf_data = base64.b64decode(post_data)
                dest_path.write_bytes(pdf_data)
                print(f"Saved {filename} to {dest_path}")
                self.send_response(200)
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(b"OK")
            except Exception as exc:
                print(f"Error saving PDF: {exc}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(exc).encode())

        def do_OPTIONS(self) -> None:  # noqa: N802
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.end_headers()

    with socketserver.TCPServer(("", port), PDFHandler) as httpd:
        print(f"Serving PDF receiver on port {port}")
        if once:
            httpd.handle_request()
        else:
            httpd.serve_forever()
