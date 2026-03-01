# ICSD Recruitment Portal - Setup Guide

## Overview
This is a complete recruitment portal with:
- Landing page with image carousel
- Email verification
- Department-based application forms
- Application limit enforcement (max 2 departments per email)
- Google Apps Script webhook integration

## Getting Started

### 1. Environment Variables
Add the following environment variable to your `.env.local` file or Vercel project settings:

```
GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_webhook_url_here
```

### 2. Google Apps Script Setup
The portal submits applications to a Google Apps Script webhook. The script receives data in this format:

```json
{
  "email": "applicant@email.com",
  "name": "John Doe",
  "registrationNumber": "REG123",
  "department": "Engineering",
  "timestamp": "2024-02-26T10:30:00Z",
  "answers": {
    "answer_1": "Response to question 1",
    "answer_2": "Response to question 2",
    ...
  }
}
```

### 3. Project Structure

- **`/app/page.tsx`** - Landing page with hero section, carousel, and department grid
- **`/app/verify/page.tsx`** - Email verification page
- **`/app/apply/[dept]/page.tsx`** - Department-specific application form
- **`/app/success/page.tsx`** - Success confirmation page
- **`/app/api/submit/route.ts`** - API endpoint for form submission
- **`/data/departments.js`** - Department definitions
- **`/data/questions.js`** - Department-specific questions
- **`/app/globals.css`** - All styling (plain CSS)

### 4. Features

#### Landing Page
- Hero section with gradient background
- Auto-rotating image carousel (5-second intervals)
- Manual carousel navigation with dots
- Department grid with hover effects
- Responsive design

#### Verification Page
- Email validation with regex
- LocalStorage-based verification tracking
- Redirect to first department (/apply/engineering)

#### Application Form
- Auto-filled email field (read-only)
- Name and registration number fields
- Dynamic question loading based on department
- All fields required
- Real-time validation
- Department application limit enforcement (max 2)

#### Application Limit System
- Uses localStorage to track applications per email
- Prevents applying to more than 2 departments per email
- Blocks form submission if limit reached
- Warning message displayed to users

### 5. How It Works

1. User visits landing page
2. Clicks "Apply Now" on any department
3. Enters email and clicks "Continue" on verification page
4. Fills out department application form
5. Application submitted to `/api/submit`
6. API forwards to Google Apps Script webhook
7. User redirected to success page
8. User can apply to another department (if under limit)

### 6. Customization

#### Adding Departments
Edit `/data/departments.js`:
```javascript
{
  id: 'department-id',
  name: 'Department Name',
  description: 'Department description',
  image: 'https://image-url.com/image.jpg'
}
```

#### Adding Questions
Edit `/data/questions.js`:
```javascript
department_id: [
  'Question 1?',
  'Question 2?',
  ...
]
```

#### Styling
All styles are in `/app/globals.css` with:
- Plain CSS (no Tailwind for portal styles)
- Responsive design with mobile-first approach
- Purple gradient theme (customizable)

### 7. Testing Checklist

- [ ] Landing page displays correctly with carousel
- [ ] Email validation works on verification page
- [ ] Application form loads correct questions for each department
- [ ] All form fields are required and validate
- [ ] Department limit enforcement works (max 2)
- [ ] API submission succeeds
- [ ] Google Apps Script receives data correctly
- [ ] Success page displays after submission
- [ ] Mobile responsive on all pages

### 8. Troubleshooting

**"GOOGLE_APPS_SCRIPT_URL not set"**
- Add the environment variable to `.env.local` or Vercel project settings

**"Failed to submit application"**
- Check Google Apps Script webhook URL is correct
- Verify webhook is accepting POST requests
- Check browser console for additional error details

**Form not validating properly**
- Ensure all required fields are filled
- Email format must be valid (contain @ and domain)
- All questions must have answers

### 9. Security Notes

- Email addresses are stored in localStorage for session tracking
- Only used to enforce application limits
- Data is cleared from localStorage when browser cache is cleared
- All sensitive data should be handled by Google Apps Script
- API endpoint validates all required fields before forwarding
