# 📁 Images Directory

This folder contains all images used in the recruitment portal.

## Structure

```
images/
├── carousel/         ← Gallery/carousel images for hero section
├── departments/      ← Department card images (engineering, product, design, etc.)
└── social/           ← Social media icons (facebook, twitter, linkedin, etc.)
```

## What Goes Where

### 📸 `/carousel/`

**Purpose**: Images that rotate in the hero gallery section with Previous/Next buttons

**Upload here**:

- `image-1.jpg`
- `image-2.jpg`
- `image-3.jpg`
- etc.

**Then update**: `/config/images.js` → `carouselImages` section

---

### 🏢 `/departments/`

**Purpose**: Images displayed on department cards

**Upload here** (supported extensions: `.jpg` or `.jpeg`):

- `engineering.jpg` / `engineering.jpeg`
- `product.jpg` / `product.jpeg`
- `design.jpg` / `design.jpeg`
- `marketing.jpg` / `marketing.jpeg`
- `sales.jpg` / `sales.jpeg`
- `hr.jpg` / `hr.jpeg`

**Then update**: `/config/images.js` → `departmentImages` section

---

### 🔗 `/social/`

**Purpose**: Social media icons in the footer

**Upload here**:

- `facebook.svg` (or .png)
- `twitter.svg` (or .png)
- `linkedin.svg` (or .png)
- `instagram.svg` (or .png)

**Then update**: `/config/images.js` → `socialMedia` section

---

## 📖 Full Instructions

See **`IMAGE_SETUP_GUIDE.md`** in the root folder for detailed step-by-step instructions.

## Quick Tips

✅ **Do**:

- Use high-quality images
- Name files clearly
- Update `/config/images.js` after uploading
- Use SVG for icons (scalable and small)

❌ **Don't**:

- Upload to random folders
- Use images without updating config
- Use very large file sizes (compress first)
- Forget to update the image paths

---

Need help? Check `IMAGE_SETUP_GUIDE.md` 📖
