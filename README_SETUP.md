# 🎓 ICSD RECRUITMENT PORTAL - COMPLETE SETUP GUIDE

Welcome! This is your starting point for understanding and customizing the recruitment portal.

---

## 🚀 GET STARTED IN 3 STEPS

### Step 1: Understand What You Have
Read this first: **`SETUP_CHECKLIST.md`** (5-10 min read)
- Clear checklist of what to do
- Organized by phases
- Easy to follow

### Step 2: Follow the Checklist
Work through **`SETUP_CHECKLIST.md`**
- Update social media links (5 min)
- Upload your images (15 min)
- Edit questions (10 min)
- Test everything (10 min)

### Step 3: Reference Guides as Needed
When you need details:
- **Non-technical?** → `IMAGE_SETUP_GUIDE.md`
- **Need quick answer?** → `QUICK_REFERENCE.md`
- **Lost?** → `DOCUMENTATION_INDEX.md`

---

## 📚 DOCUMENTATION ROADMAP

### 👤 For Non-Technical Users
Start with these in order:

1. **`SETUP_CHECKLIST.md`** ← Start here!
   - Clear step-by-step checklist
   - Organized by phase
   - Estimated times for each task

2. **`IMAGE_SETUP_GUIDE.md`** ← Reference while working
   - Detailed instructions for uploads
   - How to edit questions
   - Troubleshooting

3. **`QUICK_REFERENCE.md`** ← Keep handy
   - Quick lookup guide
   - File locations at a glance
   - Common tasks

### 💻 For Developers/Technical Users
Start with these:

1. **`CHANGES_SUMMARY.md`** ← What's new
   - Overview of all changes
   - New features explained
   - Code modifications listed

2. **`ACCESSIBILITY_UPDATES.md`** ← How it works
   - Code structure overview
   - Before/after comparison
   - Where to find everything

3. **`QUICK_REFERENCE.md`** ← Code locations
   - File paths and purposes
   - Code examples

### 🔍 For Navigation
- **`DOCUMENTATION_INDEX.md`** - Master index of all docs
- **`QUICK_REFERENCE.md`** - Quick lookup for anything

---

## 🎯 WHAT'S INCLUDED

### ✨ New Features
- ⬅️ ➡️ Carousel navigation buttons (Previous/Next)
- 🔗 Social media icon buttons (Facebook, Twitter, LinkedIn, Instagram)
- 📁 Organized image folder structure
- 🎨 Professional styling with hover effects

### 📸 Pre-Loaded Assets
- 3 carousel/gallery images
- 6 department-specific images
- 4 social media icons

### 📖 Documentation
- 5 comprehensive guides
- 1,000+ lines of documentation
- Easy-to-follow checklists
- Troubleshooting sections

### ⚙️ Configuration Files
- `/config/images.js` - All image management
- `/config/departmentQuestions.js` - All interview questions

---

## 🎨 QUICK OVERVIEW

### Landing Page Features
```
┌─────────────────────────────────────────┐
│        HERO SECTION                      │
│    "Join Our Team"                       │
│                                          │
│    ┌──────────────────────────┐         │
│    │  ❮    CAROUSEL    ❯       │         │
│    │   Previous/Next Buttons   │         │
│    │   (Auto-rotates)          │         │
│    │   ● ● ●  Dot Navigation   │         │
│    └──────────────────────────┘         │
│                                          │
└─────────────────────────────────────────┘

AVAILABLE DEPARTMENTS (Grid)
├─ Engineering (with image)
├─ Product (with image)
├─ Design (with image)
├─ Marketing (with image)
├─ Sales (with image)
└─ HR (with image)

FOOTER
├─ 🔗 Facebook icon (clickable)
├─ 🔗 Twitter icon (clickable)
├─ 🔗 LinkedIn icon (clickable)
└─ 🔗 Instagram icon (clickable)
```

---

## 📁 FILE STRUCTURE

### Easy-to-Edit Files (Start Here!)
```
/config/
├── images.js              ← Carousel, department, social images
└── departmentQuestions.js ← Interview questions for each dept
```

### Application Code (Don't touch unless you know code!)
```
/app/
├── page.tsx              ← Landing page
├── verify/page.tsx       ← Email verification
├── apply/[dept]/page.tsx ← Application form
├── success/page.tsx      ← Confirmation page
├── api/submit/route.ts   ← Form submission endpoint
└── globals.css           ← All styling

/data/
├── departments.js        ← Department info
└── questions.js          ← Question exports
```

### Image Folders (Where to Upload)
```
/public/images/
├── carousel/
│   ├── image-1.jpg
│   ├── image-2.jpg
│   └── image-3.jpg
├── departments/
│   ├── engineering.jpg
│   ├── product.jpg
│   ├── design.jpg
│   ├── marketing.jpg
│   ├── sales.jpg
│   └── hr.jpg
└── social/
    ├── facebook.png
    ├── twitter.png
    ├── linkedin.png
    └── instagram.png
```

---

## ✅ WHAT TO DO FIRST

### Option A: Quick Setup (Keep defaults, update links only)
⏱️ **Time: 15 minutes**

1. Open `/config/images.js`
2. Update social media URLs to YOUR pages
3. Save and done!
4. The portal is ready with all pre-loaded images

### Option B: Full Customization (Your images, your content)
⏱️ **Time: 45 minutes**

1. Follow **`SETUP_CHECKLIST.md`** phases 1-4
2. Upload your images
3. Update questions
4. Update social media links
5. Test everything

### Option C: Complete Deep Dive
⏱️ **Time: 2+ hours**

1. Read `DOCUMENTATION_INDEX.md`
2. Read appropriate guides for your role
3. Understand the structure
4. Customize everything
5. Test thoroughly

---

## 🚦 QUICK START (5 minutes)

Just want to see it working?

1. ✅ Portal is already functional with pre-loaded images
2. ✅ Carousel buttons work (❮ ❯)
3. ✅ Social media buttons are in footer
4. ✅ All departments show sample images
5. ✅ Application form is ready

**To customize**:
- Edit `/config/images.js` → Update social media URLs
- That's it! Portal is ready to use.

---

## 📖 DOCUMENTATION FILES EXPLAINED

| File | Purpose | Read Time | Difficulty |
|------|---------|-----------|------------|
| `SETUP_CHECKLIST.md` | Step-by-step setup | 5 min | Easy |
| `IMAGE_SETUP_GUIDE.md` | Image upload instructions | 15 min | Easy |
| `QUICK_REFERENCE.md` | Quick lookup cheat sheet | 10 min | Easy |
| `CHANGES_SUMMARY.md` | What changed/new features | 10 min | Medium |
| `ACCESSIBILITY_UPDATES.md` | Technical details & structure | 20 min | Hard |
| `DOCUMENTATION_INDEX.md` | Master navigation guide | 10 min | Easy |
| `SETUP_CHECKLIST.md` | Implementation checklist | 5 min | Easy |

---

## 🎓 LEARNING PATH

### Path 1: I Just Want It Working
→ `SETUP_CHECKLIST.md` → Update social links → Done

### Path 2: I Want to Customize
→ `SETUP_CHECKLIST.md` → `IMAGE_SETUP_GUIDE.md` → Follow checklist → Done

### Path 3: I Want to Understand Everything
→ `DOCUMENTATION_INDEX.md` → `ACCESSIBILITY_UPDATES.md` → Explore code → Learn

### Path 4: I'm Lost, Help!
→ `DOCUMENTATION_INDEX.md` → Find relevant section → Read that guide

---

## 🆘 TROUBLESHOOTING

### "Where do I start?"
👉 Read **`SETUP_CHECKLIST.md`** first

### "How do I upload images?"
👉 Read **`IMAGE_SETUP_GUIDE.md`** section "HOW TO: Add Carousel Gallery Images"

### "Where's the file I need to edit?"
👉 Check **`QUICK_REFERENCE.md`** table "All files you might want to edit"

### "I don't understand something"
👉 Check **`DOCUMENTATION_INDEX.md`** for the right guide to read

### "Something isn't working"
👉 See **`IMAGE_SETUP_GUIDE.md`** section "Troubleshooting"

---

## 💡 KEY CONCEPTS

### Configuration Files (`/config/`)
These are **EASY to edit** - no coding knowledge needed:
- `/config/images.js` - Change image paths and social links
- `/config/departmentQuestions.js` - Change interview questions

### Code Files (`/app/`, `/data/`)
These handle the logic - only edit if you know code

### Image Folders (`/public/images/`)
Upload images here, then register paths in config files

---

## 🎯 SUCCESS CHECKLIST

After setup, you should have:

- ✅ Carousel with Previous/Next buttons working
- ✅ Social media icons linking to YOUR pages
- ✅ Department cards with YOUR images
- ✅ Application forms with YOUR questions
- ✅ Portal ready to receive applications
- ✅ All images properly organized
- ✅ Clear documentation for future edits

---

## 📞 QUICK HELP REFERENCE

### Common Tasks

| Task | File to Edit | Reference |
|------|--------------|-----------|
| Change carousel images | `/config/images.js` | `IMAGE_SETUP_GUIDE.md` |
| Change department images | `/config/images.js` | `IMAGE_SETUP_GUIDE.md` |
| Change questions | `/config/departmentQuestions.js` | `IMAGE_SETUP_GUIDE.md` |
| Change social links | `/config/images.js` | `QUICK_REFERENCE.md` |
| Upload images | `/public/images/` folders | `IMAGE_SETUP_GUIDE.md` |
| Find a file | `QUICK_REFERENCE.md` | File locations table |

---

## 🎉 YOU'RE READY!

Everything you need is here:
- ✅ Complete documentation
- ✅ Step-by-step guides
- ✅ Pre-loaded images and assets
- ✅ Easy-to-use config files
- ✅ Working application

**Next Step**: Read **`SETUP_CHECKLIST.md`** and follow along!

---

## 📋 FILES IN THIS PROJECT

### Documentation (Read These!)
- `README_SETUP.md` ← You are here
- `SETUP_CHECKLIST.md` ← Start here!
- `IMAGE_SETUP_GUIDE.md` ← Reference guide
- `QUICK_REFERENCE.md` ← Cheat sheet
- `CHANGES_SUMMARY.md` ← What's new
- `ACCESSIBILITY_UPDATES.md` ← Technical overview
- `DOCUMENTATION_INDEX.md` ← Master index

### Configuration (Edit These!)
- `/config/images.js` ← Images & social media
- `/config/departmentQuestions.js` ← Interview questions

### Application Code (Don't edit unless you know code)
- `/app/page.tsx` ← Landing page
- `/app/verify/page.tsx` ← Verification page
- `/app/apply/[dept]/page.tsx` ← Application form
- `/app/success/page.tsx` ← Success page
- `/app/api/submit/route.ts` ← API endpoint
- `/app/globals.css` ← Styling

### Images (Upload Here!)
- `/public/images/carousel/` ← Gallery images
- `/public/images/departments/` ← Department images
- `/public/images/social/` ← Social icons

---

**Welcome aboard! Happy recruiting! 🚀**
