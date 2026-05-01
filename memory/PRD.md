# PRD

## Original Problem Statement
I need a static website to showcase the info

## Architecture Decisions
- Built a responsive React marketing website tailored to the uploaded agriculture/company PDFs and later evolved it into a multi-page site.
- Used the existing FastAPI backend to support a real contact inquiry submission flow via `/api/inquiries`.
- Kept MongoDB usage minimal and safe by storing inquiry submissions without exposing Mongo `_id` values in responses.
- Followed a light organic earthy visual direction with image-led storytelling and strong farmer-impact sections.
- Added bilingual content switching directly in the frontend so visitors can toggle between English and Hindi without page reloads.
- Restructured the navigation into dedicated route pages so each nav item now opens a separate page while still preserving a rich homepage.

## What’s Implemented
- Branded homepage with hero, about, founder, products, impact, values, and contact sections.
- Full bilingual English/Hindi experience across navigation, page content, founder story, footer, and contact form copy.
- Real multi-page navigation with dedicated routes for About, Founder, Products, Impact, and Contact.
- Shared site layout with persistent header, language toggle, logo, and footer across all pages.
- Dedicated founder section for Mahant Mritunjay Das (Mritunjay Kumar) with biography, quote, milestones, focus areas, address details, and gallery using uploaded photos.
- Contact page with a working inquiry form and backend API support.
- Improved hero text contrast and cleaned repeated intro duplication on route pages.

## Prioritized Backlog
### P0
- Replace remaining stock imagery with more official business/farm/product visuals.
- Review and approve all bilingual copy, especially founder wording and Hindi phrasing.

### P1
- Add a dedicated gallery/news page using approved company photos and press mentions.
- Add map embed and richer partnership CTA blocks.
- Add downloadable bilingual brochure/PDF section.

### P2
- Add testimonials, certifications, and partner logos.
- Further split the large section file into smaller reusable components for easier long-term maintenance.
- Add simple CMS/admin editing flow for future content updates.

## Next Tasks
- Finalize approved English and Hindi content.
- Expand product details and add real SKU-level product cards if needed.
- Add gallery, press, and downloadable materials once assets are approved.

## Recent UI Tweaks
- Improved hero eyebrow text contrast on the image banner by replacing the low-visibility orange with a lighter cream tone and subtle shadow for better readability in Hindi and English.

## Mobile UX Updates
- Added a mobile hamburger menu with all navigation options, keeping route-based navigation usable on phone screens.
