Detailed Website Plan: Personal Engineer Portfolio
1. Project Structure
personal-website/├── index.html              # Main page├── css/│   └── styles.css         # Main stylesheet├── js/│   └── script.js          # JavaScript functionality├── assets/│   ├── resume/│   │   └── resume.pdf     # Your CV/Resume PDF│   └── images/│       └── profile.jpg    # Your profile picture└── README.md              # Documentation
2. Page Sections (Single-Page Design)
Navigation bar (fixed on scroll)
Logo/Name
Links: About, Hobbies, Resume, Contact
Hero section
Name and title (e.g., "Giang Anh Vu - Mechanical Engineer")
Brief tagline
Subtle background/overlay
About Me
Professional background
Education
Skills/Expertise
Professional photo
Hobbies
Grid of hobby cards with images/icons
Brief descriptions
Resume/CV download
Button to download PDF
Optional: embedded preview
Email subscription
Form (email input + submit)
Success/error messages
Note about updates
Footer
Social links (optional)
Copyright
3. Design System (Modern Luxury White UI)
Color palette
Primary: White (#FFFFFF) / Off-white (#FAFAFA)
Accent: Deep navy/charcoal (#1A1A1A or #2C3E50)
Text: Dark gray (#333333)
Subtle gold accents (#D4AF37) optional
Typography
Headings: Sans-serif (Inter, Poppins, or Montserrat)
Body: Sans-serif or serif for contrast
Sizes: Large, readable hierarchy
Spacing and layout
Generous whitespace
Max-width container (1200px)
Smooth scroll and subtle animations
Visual elements
Subtle shadows
Thin borders
Minimal icons
Smooth hover effects
4. Technologies & Implementation
Frontend
HTML5
CSS3 (flexbox/grid)
Vanilla JavaScript
Email subscription (options)
Option A: EmailJS (client-side, no backend)
Option B: Formspree (form handling service)
Option C: Netlify Forms (if hosting on Netlify)
Option D: Custom backend (Node.js/Express + database)
Hosting
GitHub Pages
Netlify
Vercel
5. Features
Responsive design (mobile, tablet, desktop)
Smooth scroll navigation
Resume/CV download (PDF)
Email subscription with validation
Loading states and feedback
Accessibility (semantic HTML, ARIA labels)
6. Implementation Steps
Phase 1: Basic structure
Create HTML skeleton
Set up CSS structure
Build navigation
Phase 2: Content sections
Hero section
About Me
Hobbies
Resume section
Phase 3: Functionality
Email subscription form
Form validation
Integration with email service
Phase 4: Polish
Responsive design
Animations/transitions
Cross-browser testing
Phase 5: Deployment
Final testing
Deploy to hosting platform
Set up custom domain (optional)
7. Email Subscription Flow
User enters email
Client-side validation (format)
Submit to chosen service
Show success message
(Optional) Welcome email
Store email for future updates
Questions for You:
Single-page vs multi-page?
Email subscription backend preference? (EmailJS, Formspree, Netlify Forms, or custom)
Which resume file should we use? (I see several in /GVU/RESUME/)
Any specific hobbies to highlight?
Preferred hosting platform?