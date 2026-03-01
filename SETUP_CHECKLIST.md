# ✅ SETUP CHECKLIST

Follow these steps to get your recruitment portal fully customized and ready to go!

---

## 📋 PHASE 1: UNDERSTAND THE STRUCTURE (5 min)

- [ ] Read `DOCUMENTATION_INDEX.md` to understand what guides to use
- [ ] Skim `CHANGES_SUMMARY.md` to see what's new
- [ ] Understand you have two types of files:
  - **Config files** (Easy to edit): `/config/images.js`, `/config/departmentQuestions.js`
  - **Code files** (Don't touch unless you know code): `/app/*.tsx`

---

## 📸 PHASE 2: UPDATE SOCIAL MEDIA LINKS (5 min)

This is the quickest change you can make!

- [ ] Open file: `/config/images.js`
- [ ] Find the `socialMedia` array
- [ ] Update each URL to YOUR actual social media links:
  - [ ] Change `https://facebook.com` → your Facebook page
  - [ ] Change `https://twitter.com` → your Twitter profile
  - [ ] Change `https://linkedin.com` → your LinkedIn page
  - [ ] Change `https://instagram.com` → your Instagram profile
- [ ] Save the file
- [ ] **Done!** Social media buttons now link to your pages

---

## 🖼️ PHASE 3: UPDATE IMAGES (15 min)

### Step 1: Prepare Your Images
- [ ] Gather your images:
  - [ ] 1-3 carousel/gallery images (hero section)
  - [ ] 6 department images (one per department)
  - [ ] 4 social media icons (optional, keep defaults if you like)
- [ ] Resize images to recommended sizes (see `IMAGE_SETUP_GUIDE.md`)

### Step 2: Upload Carousel Images
- [ ] Upload carousel images to: `/public/images/carousel/`
- [ ] Name them: `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, etc.
- [ ] Open `/config/images.js`
- [ ] Update `carouselImages` array with paths to your images:
  ```javascript
  export const carouselImages = [
    '/images/carousel/image-1.jpg',  ← Your path here
    '/images/carousel/image-2.jpg',  ← Your path here
  ];
  ```
- [ ] Save the file

### Step 3: Upload Department Images
- [ ] Upload 6 department images to: `/public/images/departments/`
- [ ] Name them: `engineering.jpg`, `product.jpg`, `design.jpg`, `marketing.jpg`, `sales.jpg`, `hr.jpg`
- [ ] Open `/config/images.js`
- [ ] Update `departmentImages` object:
  ```javascript
  export const departmentImages = {
    engineering: '/images/departments/engineering.jpg',  ← Update
    product: '/images/departments/product.jpg',          ← Update
    design: '/images/departments/design.jpg',            ← Update
    marketing: '/images/departments/marketing.jpg',      ← Update
    sales: '/images/departments/sales.jpg',              ← Update
    hr: '/images/departments/hr.jpg',                    ← Update
  };
  ```
- [ ] Save the file

### Step 4: (Optional) Upload Social Media Icons
- [ ] Upload icons to: `/public/images/social/`
- [ ] Name them: `facebook.png`, `twitter.png`, `linkedin.png`, `instagram.png`
- [ ] Update paths in `/config/images.js` in `socialMedia` array
- [ ] Or skip this step and use the pre-included icons

---

## ❓ PHASE 4: UPDATE DEPARTMENT QUESTIONS (10 min)

- [ ] Open file: `/config/departmentQuestions.js`
- [ ] For each department, review and update questions:
  - [ ] **Engineering** - Update 5 questions
  - [ ] **Product** - Update 5 questions
  - [ ] **Design** - Update 5 questions
  - [ ] **Marketing** - Update 5 questions
  - [ ] **Sales** - Update 5 questions
  - [ ] **Human Resources** - Update 5 questions
- [ ] Make sure each question makes sense for your company
- [ ] Save the file
- [ ] **Questions now appear in application forms!**

---

## 🧪 PHASE 5: TEST EVERYTHING (10 min)

### Test Carousel
- [ ] Load the homepage
- [ ] Click ❮ button → Previous image should show
- [ ] Click ❯ button → Next image should show
- [ ] Click dots → Should jump to that image
- [ ] Wait 5 seconds → Image should auto-rotate
- [ ] Images should display correctly

### Test Social Media
- [ ] Scroll to footer
- [ ] See 4 social media icons
- [ ] Hover over icons → Should change color
- [ ] Click icons → Should open your social media pages in new tab

### Test Department Cards
- [ ] Check that all 6 departments show images
- [ ] Images should be the ones you uploaded
- [ ] Click "Apply Now" → Should go to verification page

### Test Application Form
- [ ] Go through application process
- [ ] Check that your questions appear
- [ ] Verify form submission works

---

## 📁 PHASE 6: FINAL CHECKS (5 min)

### File Organization
- [ ] All carousel images in `/public/images/carousel/` ✅
- [ ] All department images in `/public/images/departments/` ✅
- [ ] All social icons in `/public/images/social/` ✅

### Configuration Files
- [ ] `/config/images.js` updated with all your image paths ✅
- [ ] `/config/departmentQuestions.js` updated with your questions ✅
- [ ] `/config/images.js` updated with your social media links ✅

### Content
- [ ] All images display correctly ✅
- [ ] All questions are accurate ✅
- [ ] All social media links work ✅
- [ ] Carousel buttons work ✅
- [ ] Social media icons appear ✅

---

## 🚀 PHASE 7: LAUNCH (5 min)

- [ ] Deploy to your production environment
- [ ] Test on mobile devices
- [ ] Share the recruitment link with candidates
- [ ] Monitor submissions via your Google Apps Script webhook

---

## 📖 QUICK REFERENCE DURING SETUP

### If you get stuck:
- **Image questions?** → Read `IMAGE_SETUP_GUIDE.md`
- **Can't find a file?** → Check `QUICK_REFERENCE.md`
- **Want to understand changes?** → Read `ACCESSIBILITY_UPDATES.md`
- **Need file locations?** → Check `DOCUMENTATION_INDEX.md`

### Pre-Loaded Resources
- ✅ 3 carousel images (you can use these or replace)
- ✅ 6 department images (you can use these or replace)
- ✅ 4 social media icons (you can use these or replace)

### Estimated Time
- Quick setup (keep defaults): **15 minutes**
- Full customization (your images/content): **45 minutes**
- Thorough testing: **10 minutes**

---

## ⚠️ IMPORTANT REMINDERS

### DO:
✅ Edit only `/config/` folder files  
✅ Upload images to correct folders  
✅ Keep backup of original files  
✅ Test after each change  
✅ Follow file naming conventions  

### DON'T:
❌ Edit `/app/` files unless you know code  
❌ Upload images to random folders  
❌ Delete important files  
❌ Change file names without updating config  
❌ Skip the testing phase  

---

## 🎯 SUCCESS CRITERIA

You're done when:

- ✅ Carousel has your images and buttons work
- ✅ Social media icons link to YOUR pages
- ✅ Department cards show YOUR images
- ✅ Application form shows YOUR questions
- ✅ Everything looks good on mobile
- ✅ Form submission works
- ✅ You're happy with the design!

---

## 📞 NEED HELP?

| Problem | Solution |
|---------|----------|
| Don't know where to upload images | See `IMAGE_SETUP_GUIDE.md` → "HOW TO: Add..." |
| Can't find which file to edit | See `QUICK_REFERENCE.md` → "All files you might want to edit" |
| Image not showing | See `IMAGE_SETUP_GUIDE.md` → "Troubleshooting" |
| Question about structure | See `ACCESSIBILITY_UPDATES.md` |
| Lost in documentation | See `DOCUMENTATION_INDEX.md` → "Pick Your Path" |

---

## 🎉 YOU'RE READY!

You have everything you need:
- ✅ Clear folder structure
- ✅ Easy-to-edit config files
- ✅ Pre-loaded images
- ✅ Comprehensive guides
- ✅ Working application

**Next step: Start with PHASE 1 above!**

---

**Last Updated**: 2024  
**Status**: Ready to Use  
**Estimated Completion Time**: 1.5 hours
