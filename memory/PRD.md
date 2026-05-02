# PRD

## Original Problem Statement
I need a static website to showcase the info

## Architecture Decisions
- Built a responsive React marketing website tailored to the uploaded agriculture/company PDFs and later evolved it into a multi-page site.
- Used the existing FastAPI backend to support a real contact inquiry submission flow via `/api/inquiries`.
- Kept MongoDB usage minimal and safe by storing inquiry submissions without exposing Mongo `_id` values in responses.
- Followed a light organic earthy visual direction with image-led storytelling and strong farmer-impact sections.
- Added bilingual content switching directly in the frontend so visitors can toggle between English and Hindi without page reloads.
- Restructured the navigation into dedicated route pages and later replaced the Impact page with a Team page based on updated requirements.
- Incorporated later DOCX/DOC uploads as source material for company wording, founder details, and leadership team information.

## What’s Implemented
- Branded homepage with hero, about, founder, products, impact, values, and contact sections.
- Full bilingual English/Hindi experience across navigation, page content, founder story, footer, and contact form copy.
- Multi-page navigation with dedicated routes for About, Founder, Team, Products, and Contact.
- Shared site layout with persistent header, language toggle, logo, footer, and mobile hamburger menu across all pages.
- Dedicated founder section for Mahant Mritunjay Das (Mritunjay Kumar) with biography, quote, milestones, focus areas, address details, and gallery using uploaded photos.
- Updated founder spotlight to use the newly provided portrait with stronger mobile placement.
- Dedicated Team page with a featured founder block plus director cards, locations, and email links.
- About page now contains the impact content and value-based positioning instead of using a separate Impact page.
- Contact page with a working inquiry form and backend API support.
- Improved hero text contrast, mobile section balance, and responsive navigation behavior.

## Prioritized Backlog
### P0
- Review and approve all bilingual copy, especially founder wording, team labels, and Hindi phrasing.
- Add official team member photos when provided by the user.

### P1
- Replace remaining stock imagery with more official business/farm/product visuals.
- Add a dedicated gallery/news page using approved company photos and press mentions.
- Add downloadable bilingual brochure/PDF section.

### P2
- Add testimonials, certifications, and partner logos.
- Further split the large section file into smaller reusable components for easier long-term maintenance.
- Add simple CMS/admin editing flow for future content updates.

## Next Tasks
- Add real team photos as they become available.
- Finalize approved English and Hindi content.
- Add gallery, press, and downloadable materials once assets are approved.

## Recent UI Tweaks
- Improved hero eyebrow text contrast on the image banner by replacing the low-visibility orange with a lighter cream tone and subtle shadow for better readability in Hindi and English.

## Mobile UX Updates
- Added a mobile hamburger menu with all navigation options, keeping route-based navigation usable on phone screens.
- Reworked mobile section flow to prioritize text before oversized images, reduced mobile image heights, and tightened vertical spacing for a cleaner reading experience.

## Founder Media Updates
- Updated the founder spotlight to use the newly provided portrait as the primary image, with a cleaner framed treatment and earlier placement on mobile for stronger visual storytelling.

## Product Media Updates
- Replaced generic product visuals with the newly provided real product images for brown rice, nutritious millets, and spice/masala ranges, and aligned the product copy to match them.

## Footer Updates
- Upgraded the footer into a richer constant site-wide footer with quick links, contact details, a Facebook icon/link, and a stronger brand presentation.
- Added Hindi footer notes for the site-wide footer while keeping Facebook as the only social link as requested.

## About Page Media Updates
- Replaced the About page supporting image with the newly provided event/leadership photo.

## SEO & Performance Updates
- Replaced generic head tags with brand-specific title, description, Open Graph, Twitter, theme color, manifest, and favicon metadata.
- Added route-aware SEO updates in the frontend so each page now sets its own title, description, canonical URL, og:url, and structured data.
- Added robots.txt, sitemap.xml, favicon.svg, and site.webmanifest for stronger crawlability and site metadata completeness.
- Improved frontend performance by removing heavy third-party head scripts/badges, moving font loading to the document head, and lazy-loading non-critical images with async decoding.
- Added semantic H1 structure for route pages and normalized canonicals to exclude query parameters for better SEO consistency.

## Homepage Performance Refinements
- Slimmed the homepage by replacing the full founder and full contact sections with lighter preview sections, while preserving full content on their dedicated pages for better speed and reduced content depth.

## Image Optimization Updates
- Generated and switched to optimized local WEBP assets for the heaviest uploaded custom images (logo, founder, gallery, about image, and product packaging) to reduce transfer size and improve Lighthouse consistency.
- Localized the remaining external hero, about-field, and sustainability images into optimized local WEBP assets so the site no longer depends on those third-party image hosts for key visuals.

## Codebase Cleanup Updates
- Split the former large `SiteSections.jsx` into smaller section modules under `src/components/sections/` and converted the original file into a lightweight barrel export for easier maintenance.

## Content Updates
- Updated the displayed address across brand, contact, founder, team, and map-link references to Repura, Muzaffarpur, Bihar 843113 where applicable.

## Hindi Typography Updates
- Added sitewide Hindi typography overrides so Devanagari text no longer breaks apart from English letter-spacing/uppercase styles, and heading/body fonts render more naturally in Hindi mode.

## Contact Experience Updates
- Replaced the full contact form on the Contact page with direct WhatsApp and email contact cards using the provided WhatsApp number and existing email address.
- Added quick WhatsApp buttons in both the header and footer for faster direct access to the business contact number.
- Added a floating WhatsApp button on mobile for quicker direct contact access on smaller screens.
