# PRD

## Original Problem Statement
I need a static website to showcase the info

## Architecture Decisions
- Built a responsive one-page React marketing website tailored to the uploaded agriculture/company PDFs.
- Used the existing FastAPI backend to support a real contact inquiry submission flow via `/api/inquiries`.
- Kept MongoDB usage minimal and safe by storing inquiry submissions without exposing Mongo `_id` values in responses.
- Followed the generated design direction: light organic earthy theme, Playfair Display headings, Manrope body text, image-led storytelling, and strong farmer-impact sections.

## What’s Implemented
- Branded hero section for Ruwan Agro Products with strong CTAs and trust/impact highlights.
- About section blending Ruwan Agro brand story with Rupwara Marwan Fed FPO foundation and mission/vision.
- Products overview section for grains & cereals, natural agro products, and value-added products.
- Farmer impact section with marquee treatment and key stats.
- Sustainability / why choose us section with value cards and core values.
- Contact section with address, phone, email, website, farmer support numbers, and a working inquiry form.
- Backend API endpoint: `POST /api/inquiries` plus existing root API health response.
- Automated testing coverage added for the marketing site API; frontend and backend verification passed.

## Prioritized Backlog
### P0
- Replace stock imagery with official brand/farm/product photos from the business.
- Confirm final contact details, website domain, and any approved product catalog copy.

### P1
- Add bilingual support (English/Hindi) using the Hindi FPO content from the uploaded PDF.
- Add a dedicated gallery/news section using approved company photos and press mentions.
- Add map embed and richer partnership CTA blocks.

### P2
- Add downloadable brochure/PDF section.
- Add testimonials, certifications, and partner logos.
- Add simple CMS/admin editing flow for future content updates.

## Next Tasks
- Finalize brand-approved content and imagery.
- Expand product details and add real SKU-level product cards if needed.
- Add bilingual and gallery sections once content/assets are approved.
