/**
 * IMAGE CONFIGURATION FILE
 * =======================
 *
 * This file contains all image URLs used throughout the website.
 * EASY TO EDIT: Simply replace the URLs below to change any image
 *
 * FOLDER STRUCTURE:
 * - /public/images/carousel/ - Gallery/carousel images
 * - /public/images/departments/ - Department card images
 * - /public/images/social/ - Social media icons
 *
 * HOW TO ADD YOUR OWN IMAGES:
 * 1. Upload image files to the appropriate folder in /public/images/
 * 2. Replace the URL below with the path: /images/folder-name/image-name.jpg
 * 3. That's it! The image will update everywhere automatically
 */

// CAROUSEL/GALLERY IMAGES
// Change these URLs to update the carousel on the landing page
// Must have at least 1 image, can add as many as you want
export const carouselImages = [
  '/images/carousel/image-1.jpeg',
  '/images/carousel/image-2.jpeg',
  '/images/carousel/image-3.jpeg',
];

// SOCIAL MEDIA ICONS
// Change these to use your own social media icons
// Format: { name: 'Platform Name', url: 'link', icon: 'icon-path' }
export const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/icsd-vit-chennai/',
    icon: '/images/social/linkedin.png',
    label: 'LinkedIn'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/icsd_vitcc?igsh=MWd6cjF5OWZyb3ZmcA==',
    icon: '/images/social/instagram.png',
    label: 'Instagram'
  },
];

/**
 * DEPARTMENT IMAGES
 * For each department, add your image path here
 * The image is used in the department card on landing page
 */
export const departmentImages = {
  technical: '/images/departments/technical.jpeg',
  research: '/images/departments/research.jpeg',
  webdev: '/images/departments/webdev.jpeg',         // unchanged filename
  operations: '/images/departments/operations.jpeg',
  socialMedia: '/images/departments/sm.jpeg',        // new social media image named "sm"
  designContent: '/images/departments/design.jpeg',  // already matches design & content
};
