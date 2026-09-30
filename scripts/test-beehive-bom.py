#!/usr/bin/env python3
"""Check the illustrated BOM and its image provenance after a website build."""
import json
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "content/docs/beehive-sensors/bill-of-materials.html"
MANIFEST = ROOT / "scripts/beehive-bom-images.json"


class PageParser(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.images = []
        self.items = 0
        self.has_toc = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()
        if tag == "li" and "bom-item" in classes:
            self.items += 1
        if tag == "nav" and "toc" in classes:
            self.has_toc = True
        if tag == "img" and "/bom-images/" in attrs.get("src", ""):
            self.images.append(attrs)


class BillOfMaterialsTests(unittest.TestCase):
    def test_source_and_provenance(self):
        source = PAGE.read_text()
        page = PageParser(source)
        manifest = json.loads(MANIFEST.read_text())
        self.assertIn("hideToc: true", source)
        self.assertFalse(PAGE.with_suffix(".md").exists())
        self.assertEqual(page.items, 42)
        self.assertEqual(len(page.images), len(manifest))
        self.assertEqual(len(manifest), 42)
        for entry in manifest.values():
            image = ROOT / entry["file"]
            data = image.read_bytes()
            self.assertEqual(data[:4], b"RIFF")
            self.assertEqual(data[8:12], b"WEBP")
            self.assertLess(image.stat().st_size, 100_000)
            self.assertTrue(entry["productUrl"].startswith("https://"))
            self.assertTrue(entry["imageUrl"].startswith("https://"))
            self.assertNotIn("wikimedia", entry["imageUrl"])
            self.assertTrue(entry["attribution"])
            self.assertTrue(entry["alt"])
        for image in page.images:
            self.assertEqual(image["loading"], "lazy")
            self.assertEqual(image["width"], "96")
            self.assertEqual(image["height"], "96")
            self.assertTrue(image["alt"])

    def test_built_page(self):
        built = ROOT / "dist/docs/beehive-sensors/bill-of-materials/index.html"
        self.assertTrue(built.exists(), "Run the website build first")
        page = PageParser(built.read_text())
        self.assertEqual(page.items, 42)
        self.assertEqual(len(page.images), 42)
        self.assertFalse(page.has_toc)
        for image in page.images:
            self.assertTrue((ROOT / "dist" / image["src"].lstrip("/")).is_file())


if __name__ == "__main__":
    unittest.main()
