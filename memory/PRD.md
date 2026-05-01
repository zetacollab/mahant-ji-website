# PRD

## Original Problem Statement
I need a static website to showcase the info

## Architecture Decisions
- Built a responsive one-page React marketing website tailored to the uploaded agriculture/company PDFs.
- Used the existing FastAPI backend to support a real contact inquiry submission flow via `/api/inquiries`.
- Kept MongoDB usage minimal and safe by storing inquiry submissions without exposing Mongo `_id` values in responses.
- Followed the generated design direction: light organic earthy theme, image-led storytelling, and strong farmer-impact sections.
- Added bilingual content switching directly in the frontend so visitors can toggle between English and Hindi without page reloads.

## What’s Implemented
- Branded hero section for Ruwan Agro with updated logo, latest address details, and trust/impact highlights.
- Full bilingual English/Hindi experience across navigation, hero, about, products, impact, why choose us, contact, footer, and contact form copy.
- Language toggle in the header for instant switching between English and Hindi.
- About section blending Ruwan Agro brand story with Rupwara Marwan Fed FPO foundation and mission/vision.
- Products overview section for grains & cereals, natural agro products, and value-added products.
- Farmer impact section with marquee treatment and key stats.
- Sustainability / why choose us section with value cards and core values.
- Contact section with address, phone, email, website, farmer support numbers, and a working inquiry form.
- Backend API endpoint: `POST /api/inquiries` plus existing root API health response.
- Localized contact form labels/placeholders/toasts for both languages.

## Prioritized Backlog
### P0
- Replace stock imagery with official brand/farm/product photos from the business.
- Confirm final bilingual brand copy and approve the Hindi wording.

### P1
- Add a dedicated gallery/news section using approved company photos and press mentions.
- Add map embed and richer partnership CTA blocks.
- Add bilingual downloadable brochure/PDF section.

### P2
- Add testimonials, certifications, and partner logos.
- Add simple CMS/admin editing flow for future content updates.
- Modularize the homepage into smaller section components for easier long-term maintenance.

## Next Tasks
- Finalize brand-approved English and Hindi copy.
- Expand product details and add real SKU-level product cards if needed.
- Add gallery, press, and downloadable materials once assets are approved.
