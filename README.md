# Car Vision V2

Features:
- iPhone/Android browser camera
- Front/rear camera switch
- Manual Scan
- Auto Scan every 12 seconds
- OCR with Tesseract.js
- AI vehicle detection with TensorFlow.js + COCO-SSD (car/truck/bus/motorcycle)
- Basic dominant-color detection
- Auto-save and local History
- PWA-style service worker

Important:
- Camera requires HTTPS and user permission.
- OCR and AI libraries are loaded from public CDNs, so the first AI/OCR use needs internet.
- COCO-SSD identifies broad vehicle classes; it does not identify exact make/model or license-plate jurisdiction.
