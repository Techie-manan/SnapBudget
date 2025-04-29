import pytesseract
from PIL import Image
import re

def extract_items(image_path):
    """
    Extract item names and prices from a receipt image.
    """
    try:
        text = pytesseract.image_to_string(Image.open(image_path))
    except Exception as e:
        print(f"OCR failed: {e}")
        return []

    items = []
    for line in text.split('\n'):
        line = line.strip()
        if not line:
            continue
        # Match lines like "Milk 45.00"
        match = re.search(r'(.+?)\s+(\d+\.\d{2})$', line)
        if match:
            item_name, price = match.groups()
            items.append((item_name.strip(), float(price)))
    return items
