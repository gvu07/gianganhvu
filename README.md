# Personal Portfolio Website

A modern, luxury white-themed personal portfolio website for Giang Anh Vu.

## Features

- **Home Page**: Displays "gianganhvu.com is being built" message with resume download button
- **About Me Page**: Professional about section and hobbies showcase
- **Resume Download**: Easy access to CV/Resume PDF
- **Email Subscription**: Users can subscribe to receive updates
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, luxury white design with smooth animations

## Project Structure

```
WEBSITE/
├── index.html              # Home page
├── about.html              # About me page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   └── resume/
│       └── resume.pdf     # Resume/CV PDF file
└── README.md              # This file
```

## Deployment to Cloudflare via GitHub

### Prerequisites
1. GitHub account
2. Cloudflare account
3. Domain name (gianganhvu.com) configured in Cloudflare

### Steps to Deploy

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd /Users/gianganhvu/Documents/WEBSITE
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it something like `personal-website` or `gianganhvu-portfolio`

3. **Push to GitHub**:
   
   First, make sure you have authentication set up. You have two options:
   
   **Option A: Using HTTPS with Personal Access Token (Recommended)**
   ```bash
   # Add remote (skip if already added)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Ensure you're on main branch
   git branch -M main
   
   # Push to GitHub (you'll be prompted for username and personal access token)
   git push -u origin main
   ```
   *Note: You'll need a GitHub Personal Access Token instead of your password. Create one at: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)*
   
   **Option B: Using SSH (if you have SSH keys set up)**
   ```bash
   # Change remote to SSH if currently using HTTPS
   git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git push -u origin main
   ```
   
   **How to verify it worked:**
   - Visit your GitHub repository URL: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
   - You should see all your files (index.html, about.html, css/, js/, assets/, etc.)
   - Check the commit history - you should see "Initial commit: Personal portfolio website"
   - Run `git remote -v` to confirm the remote is configured correctly
   - Run `git status` - it should show "Your branch is up to date with 'origin/main'"

4. **Connect to Cloudflare Pages**:
   - Log in to your Cloudflare dashboard
   - Go to "Workers & Pages" → "Create Application" → "Pages" → "Connect to Git"
   - Select your GitHub account and the repository you just created
   - Configure build settings:
     - **Build command**: (leave empty - static site)
     - **Build output directory**: `/` (root directory)
     - **Root directory**: `/`
   - Click "Save and Deploy"

5. **Configure Custom Domain**:
   - In Cloudflare Pages, go to your project settings
   - Navigate to "Custom domains"
   - Add `gianganhvu.com` and `www.gianganhvu.com`
   - Cloudflare will automatically configure DNS records

## Updating Resume

To update your resume:
1. Replace the file at `assets/resume/resume.pdf` with your new resume
2. Keep the filename as `resume.pdf` (or update the HTML links if you change it)
3. Commit and push the changes:
   ```bash
   git add assets/resume/resume.pdf
   git commit -m "Update resume"
   git push
   ```
4. Cloudflare Pages will automatically rebuild and deploy

## Email Subscription Setup

Currently, the email subscription uses localStorage for demonstration. To implement a real email subscription service, you have several options:

### Option 1: EmailJS (Recommended for simplicity)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Uncomment and configure the EmailJS code in `js/script.js`
4. Add EmailJS script to HTML:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Uncomment and configure the Formspree code in `js/script.js`

### Option 3: Netlify Forms (if using Netlify)
1. Add `netlify` attribute to form tags
2. Netlify will automatically handle form submissions

### Option 4: Custom Backend
Set up your own backend API endpoint to handle email subscriptions.

## Customization

### Updating Content
- **Home Page**: Edit `index.html`
- **About Me**: Edit the content in `about.html`
- **Hobbies**: Modify the hobby cards in `about.html`
- **Styling**: Customize colors, fonts, and layout in `css/styles.css`

### Color Scheme
The current color scheme uses CSS variables defined in `css/styles.css`:
- Primary: White (#FFFFFF)
- Dark: #1A1A1A
- Accent: #2C3E50
- Modify these in the `:root` section to change the theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Giang Anh Vu. All rights reserved.
