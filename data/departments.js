import { departmentImages } from '@/config/images';

/**
 * DEPARTMENTS DATA
 * ================
 *
 * This file defines all the departments available in the recruitment portal
 * IMAGES are managed in: /config/images.js
 *
 * To change a department image:
 * 1. Open /config/images.js
 * 2. Find the 'departmentImages' section
 * 3. Replace the image path for the department you want to change
 */

export const departments = [
  {
    id: 'technical',
    name: 'Technical',
    description: 'Build and maintain technical systems and solutions',
    image: departmentImages.technical
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Explore new ideas and drive innovation',
    image: departmentImages.research
  },
  {
    id: 'webdev',
    name: 'Webdev',
    description: 'Develop web applications and digital experiences',
    image: departmentImages.webdev
  },
  {
    id: 'operations',
    name: 'Operations',
    description: 'Keep things running smoothly behind the scenes',
    image: departmentImages.operations
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Connect with our community and grow our presence',
    image: departmentImages.socialMedia
  },
  {
    id: 'design-content',
    name: 'Design and Content',
    description: 'Create beautiful experiences and compelling content',
    image: departmentImages.designContent
  }
];
