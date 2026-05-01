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
- Incorporated later DOCX/DOC uploads as source material for company wording, founder details, and leadership team information.

## What’s Implemented
- Branded homepage with hero, about, founder, products, impact, values, and contact sections.
- Full bilingual English/Hindi experience across navigation, page content, founder story, footer, and contact form copy.
- Real multi-page navigation with dedicated routes for About, Founder, Products, Impact, and Contact.
- Shared site layout with persistent header, language toggle, logo, footer, and mobile hamburger menu across all pages.
- Dedicated founder section for Mahant Mritunjay Das (Mritunjay Kumar) with biography, quote, milestones, focus areas, address details, and gallery using uploaded photos.
- Updated founder spotlight to use the newly provided portrait with stronger mobile placement.
- About page now includes a full leadership/team section based on uploaded team docs, with 10 director cards and direct email links.
- Contact page with a working inquiry form and backend API support.
- Improved hero text contrast, mobile section balance, and responsive navigation behavior.

## Prioritized Backlog
### P0
- Review and approve all bilingual copy, especially founder wording, team labels, and Hindi phrasing.
- Replace any remaining stock imagery with more official business/farm/product visuals.

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
- Reworked mobile section flow to prioritize text before oversized images, reduced mobile image heights, and tightened vertical spacing for a cleaner reading experience.

## Founder Media Updates
- Updated the founder spotlight to use the newly provided portrait as the primary image, with a cleaner framed treatment and earlier placement on mobile for stronger visual storytelling.
