# IMAGE SETUP GUIDE - For Non-Technical Users

Welcome! This guide will help you easily upload and manage all images for the recruitment portal. **You don't need to know coding!**

## 📁 Folder Structure

Here's where all images go in your project:

```
public/
├── images/
│   ├── carousel/          ← Gallery/Carousel images (hero section)
│   ├── departments/       ← Department card images
│   └── social/            ← Social media icons
```

## 🖼️ HOW TO: Add Carousel Gallery Images

The carousel shows rotating images in the hero section with Previous/Next buttons.

### Step 1: Upload Images
1. Go to your project files
2. Navigate to `/public/images/carousel/`
3. Upload your images there (any size - the system will resize them)
4. Name them: `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, etc.

### Step 2: Register Images
1. Open the file: `/config/images.js`
2. Find the section that says `carouselImages`
3. Add your images (it looks like this):

```javascript
export const carouselImages = [
  '/images/carousel/image-1.jpg',
  '/images/carousel/image-2.jpg',
  '/images/carousel/image-3.jpg',
];
```

**That's it!** Your carousel is now updated.

---

## 🏢 HOW TO: Add Department Images

Each department (Engineering, Product, Design, etc.) has an image shown on a card.

### Step 1: Upload Images
1. Go to `/public/images/departments/`
2. Upload your department images
3. Name them to match the department ID:
   - `engineering.jpg`
   - `product.jpg`
   - `design.jpg`
   - `marketing.jpg`
   - `sales.jpg`
   - `hr.jpg`

### Step 2: Register Images
1. Open the file: `/config/images.js`
2. Find the section `departmentImages`
3. Update the paths to match your uploaded files:

```javascript
export const departmentImages = {
  engineering: '/images/departments/engineering.jpg',
  product: '/images/departments/product.jpg',
  design: '/images/departments/design.jpg',
  marketing: '/images/departments/marketing.jpg',
  sales: '/images/departments/sales.jpg',
  hr: '/images/departments/hr.jpg',
};
```

**Done!** Your department cards now show the right images.

---

## 🔗 HOW TO: Add Social Media Icons

Add clickable social media buttons to the footer.

### Step 1: Upload Icons
1. Go to `/public/images/social/`
2. Upload your social media icons
3. Name them clearly:
   - `facebook.svg` or `facebook.png`
   - `twitter.svg` or `twitter.png`
   - `linkedin.svg` or `linkedin.png`
   - `instagram.svg` or `instagram.png`
   - etc.

### Step 2: Register Social Media
1. Open the file: `/config/images.js`
2. Find the section `socialMedia`
3. Add or edit your social media links:

```javascript
export const socialMedia = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourpage',      ← Change this to YOUR Facebook URL
    icon: '/images/social/facebook.svg',       ← Path to your icon
    label: 'Facebook'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourprofile',    ← Change this to YOUR Twitter URL
    icon: '/images/social/twitter.svg',
    label: 'Twitter'
  },
  // Add more social media as needed
];
```

**Complete!** Social media buttons are ready.

---

## ❓ EDITING QUESTIONS FOR DEPARTMENTS

Each department has 5 application questions. Here's how to change them:

### How to Edit Questions
1. Open the file: `/config/departmentQuestions.js`
2. Find the department you want to edit:

```javascript
engineering: [
  'Question 1 here?',
  'Question 2 here?',
  'Question 3 here?',
  'Question 4 here?',
  'Question 5 here?'
],
```

3. Simply change the text in the quotes to your new questions
4. You can add more questions or remove some

### Example: Change Engineering Questions

**Before:**
```javascript
engineering: [
  'What programming languages are you most comfortable with?',
  'Describe your experience with system design',
  // ... etc
]
```

**After:**
```javascript
engineering: [
  'What is your favorite programming language and why?',
  'Tell us about your best coding project',
  // ... etc
]
```

---

## 🎨 Image Requirements

### Carousel Images
- **Size**: 800px × 400px (or any size, will be resized)
- **Format**: JPG, PNG, or WebP
- **Quality**: High quality recommended
- **Count**: 1 or more images

### Department Images
- **Size**: 500px × 400px (or any size, will be resized)
- **Format**: JPG, PNG, or WebP
- **Quality**: Professional photos recommended
- **Aspect Ratio**: Portrait or slightly wider

### Social Media Icons
- **Size**: 24px × 24px to 256px × 256px
- **Format**: SVG (best) or PNG
- **Style**: Consistent with your brand
- **Color**: Can be any color (will adapt to hover effects)

---

## 🔍 File Locations Quick Reference

| What | Where | File to Edit |
|------|-------|--------------|
| Carousel images | `/public/images/carousel/` | `/config/images.js` |
| Department images | `/public/images/departments/` | `/config/images.js` |
| Social media icons | `/public/images/social/` | `/config/images.js` |
| Department questions | N/A | `/config/departmentQuestions.js` |

---

## ✅ Checklist Before Going Live

- [ ] Carousel images uploaded and registered in `/config/images.js`
- [ ] Department images uploaded and registered in `/config/images.js`
- [ ] Social media URLs updated with your actual links
- [ ] Social media icons uploaded and registered in `/config/images.js`
- [ ] Department questions updated in `/config/departmentQuestions.js`
- [ ] All images are high quality and properly sized
- [ ] All social media links are correct

---

## 🆘 Troubleshooting

### "Image not showing"
- Check that the file path in `/config/images.js` matches the actual file location
- Verify the image file exists in the `/public/images/` folder
- Make sure the filename spelling is exactly correct (case-sensitive)

### "Social media button not working"
- Check that the URL starts with `https://`
- Verify the URL is correct (copy from the actual social media platform)

### "Questions not updating"
- Make sure you edited the right department in `/config/departmentQuestions.js`
- Reload the website after making changes

---

## 📞 Need Help?

If you get stuck:
1. Check the file structure above
2. Compare your edits with the examples provided
3. Make sure file paths match exactly

Good luck! 🎉
