# HayatID Teaser - Vercel Deployment

This project is a static React + Vite teaser landing page.

## 1) Required Environment Variables

Set these in Vercel Project Settings -> Environment Variables:

- VITE_DEMO_URL
- VITE_CONTACT_EMAIL
- VITE_FORMSPREE_ENDPOINT

Example values:

- VITE_DEMO_URL=https://hayatid.ma/demo
- VITE_CONTACT_EMAIL=contact@hayatid.ma
- VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id

## 2) Build Settings

Vercel should auto-detect Vite. If needed:

- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

## 3) Domain and SEO

- Assign custom domain: hayatid.ma
- Ensure og-image.png exists in public/
- Ensure favicon.ico exists in public/

## 4) Route Behavior

The project includes vercel.json for SPA rewrites.

## 5) Post-Deploy Checks

- Language auto-detect works on first load
- Language switch updates content instantly
- Arabic switches to RTL layout correctly
- Waitlist form submits to Formspree or falls back to email
- Demo link opens the urgent demo page in a new tab
- Mobile layout looks correct at 375px width
