# 📚 DOCUMENTATION INDEX

Welcome! This file helps you navigate all the documentation for the ICSD Recruitment Portal.

---

## 🎯 Pick Your Path

### 👤 I'm Not Technical (Non-Coder)
**Start here for step-by-step instructions:**

1. **`IMAGE_SETUP_GUIDE.md`** ← Read this first!
   - How to upload carousel images
   - How to change department images
   - How to update social media links
   - How to edit interview questions
   - Troubleshooting section

2. **`QUICK_REFERENCE.md`** ← Use as reference
   - Cheat sheet of what to edit
   - File locations at a glance
   - Common tasks explained

### 💻 I'm a Developer
**Start here for technical details:**

1. **`ACCESSIBILITY_UPDATES.md`** ← What changed
   - Summary of all improvements
   - Code structure overview
   - Where to find everything

2. **`QUICK_REFERENCE.md`** ← Quick lookup
   - File locations
   - What each config file does
   - Code examples

### 🎨 I Want to Understand the Structure
**See how everything is organized:**

1. **`ACCESSIBILITY_UPDATES.md`** - Structure overview
2. **`public/images/README.md`** - Image folder guide
3. **`QUICK_REFERENCE.md`** - File locations

---

## 📁 Key Files You Need to Know

### Configuration Files (Easy to Edit!)
| File | Purpose | Who Should Edit |
|------|---------|-----------------|
| `/config/images.js` | Carousel images, department images, social links | Anyone |
| `/config/departmentQuestions.js` | Interview questions for each department | Anyone |

### Data Files
| File | Purpose |
|------|---------|
| `/data/departments.js` | Department information |
| `/data/questions.js` | Questions export (uses config) |

### App Pages
| File | Purpose |
|------|---------|
| `/app/page.tsx` | Landing page (hero, carousel, departments, footer) |
| `/app/verify/page.tsx` | Email verification page |
| `/app/apply/[dept]/page.tsx` | Application form page |
| `/app/success/page.tsx` | Success confirmation page |
| `/app/api/submit/route.ts` | API endpoint for form submission |

### Styling
| File | Purpose |
|------|---------|
| `/app/globals.css` | All styling (colors, fonts, layouts) |

### Image Folders
| Folder | Purpose |
|--------|---------|
| `/public/images/carousel/` | Gallery images |
| `/public/images/departments/` | Department card images |
| `/public/images/social/` | Social media icons |

---

## 🚀 Common Tasks

### ❓ How do I...

#### Change carousel images?
1. Read: `IMAGE_SETUP_GUIDE.md` → "HOW TO: Add Carousel Gallery Images"
2. Upload images to: `/public/images/carousel/`
3. Update: `/config/images.js` → `carouselImages` section

#### Change department images?
1. Read: `IMAGE_SETUP_GUIDE.md` → "HOW TO: Add Department Images"
2. Upload images to: `/public/images/departments/`
3. Update: `/config/images.js` → `departmentImages` section

#### Change department questions?
1. Read: `IMAGE_SETUP_GUIDE.md` → "❓ EDITING QUESTIONS FOR DEPARTMENTS"
2. Edit: `/config/departmentQuestions.js`
3. Find your department and update questions

#### Change social media links?
1. Read: `IMAGE_SETUP_GUIDE.md` → "HOW TO: Add Social Media Icons"
2. Update: `/config/images.js` → `socialMedia` section
3. Change the `url` field to your actual social media link

#### Get information about navigation buttons?
- Read: `ACCESSIBILITY_UPDATES.md` → "Carousel Navigation Buttons"
- The carousel now has Previous/Next buttons in addition to dot navigation

#### Add new social media platform?
1. Open: `/config/images.js`
2. Add new entry to `socialMedia` array
3. Upload icon to: `/public/images/social/`
4. Update icon path in config

---

## 📖 Reading Order

### For First-Time Setup
1. `IMAGE_SETUP_GUIDE.md` - Complete setup guide
2. `QUICK_REFERENCE.md` - Quick reference for future
3. Upload your images and update config files

### For Adding/Changing Things
1. `QUICK_REFERENCE.md` - Find what file to edit
2. `IMAGE_SETUP_GUIDE.md` - Detailed instructions
3. Make your changes

### For Understanding the Code
1. `ACCESSIBILITY_UPDATES.md` - Overview of changes
2. Explore file structure as documented
3. Read code comments in config files

---

## 🎓 Learning the Config Files

### `/config/images.js`
Contains all image URLs and social media links in one place.

```javascript
// Update carousel images here
export const carouselImages = [
  '/images/carousel/image-1.jpg',
  '/images/carousel/image-2.jpg',
];

// Update department images here
export const departmentImages = {
  engineering: '/images/departments/engineering.jpg',
  // ... etc
};

// Update social media here
export const socialMedia = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/YOUR_PAGE',
    icon: '/images/social/facebook.png',
    label: 'Facebook'
  },
  // ... etc
];
```

### `/config/departmentQuestions.js`
Contains interview questions for each department.

```javascript
export const departmentQuestions = {
  engineering: [
    'Question 1?',
    'Question 2?',
    'Question 3?',
  ],
  // ... etc for other departments
};
```

---

## ✨ What's New (Improvements)

### 🎯 Carousel Buttons
- **Previous Button (❮)** - Go to previous image
- **Next Button (❯)** - Go to next image
- **Dot Navigation** - Click any dot to jump to that image
- **Auto-Rotate** - Changes every 5 seconds

Location: Hero section on landing page

### 🔗 Social Media Icons
- **Facebook** - Circular icon button
- **Twitter** - Circular icon button
- **LinkedIn** - Circular icon button
- **Instagram** - Circular icon button
- Hover effects and smooth animations included

Location: Footer section

### 📁 Better Organization
- All images organized in clear folders
- All config in dedicated files
- Easy to find and update anything
- No scattered hardcoded URLs

---

## ❓ FAQ

**Q: I'm not a programmer, can I still maintain the site?**
A: Yes! Read `IMAGE_SETUP_GUIDE.md` - it has step-by-step instructions.

**Q: Where do I upload images?**
A: See "Image Folders" section above, or read `IMAGE_SETUP_GUIDE.md`.

**Q: How do I change department questions?**
A: Edit `/config/departmentQuestions.js` or follow `IMAGE_SETUP_GUIDE.md`.

**Q: Where are all the configuration files?**
A: In the `/config/` folder:
- `/config/images.js` - Images and social media
- `/config/departmentQuestions.js` - Interview questions

**Q: Can I add more carousel images?**
A: Yes! Upload to `/public/images/carousel/` and add the path to `/config/images.js`.

**Q: How do I change social media links?**
A: Edit `/config/images.js` → `socialMedia` section → change the `url` field.

**Q: Where's the code for the carousel buttons?**
A: Logic in `/app/page.tsx`, styling in `/app/globals.css` (search for `.carousel-button`).

**Q: Can I customize colors and fonts?**
A: Yes! Edit `/app/globals.css` - see "Styling" section in `QUICK_REFERENCE.md`.

---

## 📞 Need Help?

1. **For setup**: Read `IMAGE_SETUP_GUIDE.md`
2. **For quick answers**: Check `QUICK_REFERENCE.md`
3. **For file locations**: See the table in this file
4. **For troubleshooting**: See `IMAGE_SETUP_GUIDE.md` → "Troubleshooting" section

---

## 🎉 You're Ready!

Now that you understand the structure:

1. Read the appropriate guide for your role
2. Upload your images
3. Update the config files
4. Test the portal
5. Enjoy! 

**Good luck! 🚀**
