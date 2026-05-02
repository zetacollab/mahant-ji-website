import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

import { founderGalleryImages, SectionEyebrow } from "./shared";

export const FounderSection = ({ copy, language }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="founder-section" id="founder">
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="order-2 space-y-6 lg:order-1">
        <div className="hidden overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[linear-gradient(180deg,#f7f4ee_0%,#efe6d9_100%)] p-4 sm:p-6 lg:block">
          <img alt={copy.founder.title} className="aspect-[4/3] h-full w-full object-contain sm:aspect-square lg:aspect-[4/5]" data-testid="founder-primary-image" decoding="async" loading="lazy" src={siteContent.media.founderPrimary} />
        </div>
        <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#2C402E] p-6 text-[#F9F8F6]" data-testid="founder-quote-card">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A373]" data-testid="founder-quote-label">{copy.founder.eyebrow}</p>
          <p className="mt-4 font-[Playfair_Display] text-xl leading-relaxed sm:text-2xl" data-testid="founder-quote-text">“{copy.founder.quote}”</p>
        </div>
      </div>

      <div className="order-1 space-y-6 lg:order-2">
        <SectionEyebrow testId="founder-eyebrow">{copy.founder.eyebrow}</SectionEyebrow>
        <div className="space-y-4">
          <h2 className="font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="founder-title">{copy.founder.title}</h2>
          <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="founder-subtitle">{copy.founder.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#E2DFD9] bg-[linear-gradient(180deg,#f7f4ee_0%,#efe6d9_100%)] p-4 lg:hidden" data-testid="founder-mobile-portrait-card">
          <img alt={copy.founder.title} className="aspect-square h-full w-full object-contain" data-testid="founder-primary-image" decoding="async" loading="lazy" src={siteContent.media.founderPrimary} />
        </div>

        <div className="space-y-4">
          {copy.founder.paragraphs.map((paragraph, index) => (
            <p className="text-base leading-8 text-[#4A4A4A]" data-testid={`founder-paragraph-${index + 1}`} key={`${language}-founder-paragraph-${index + 1}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {copy.founder.milestones.map((milestone) => (
            <div className="rounded-[1.75rem] border border-[#E2DFD9] bg-[#F9F8F6] p-5" data-testid={`founder-milestone-${milestone.id}`} key={`${language}-${milestone.id}`}>
              <p className="font-[Playfair_Display] text-3xl text-[#1A1A1A]" data-testid={`founder-milestone-value-${milestone.id}`}>{milestone.value}</p>
              <p className="mt-3 text-sm leading-7 text-[#4A4A4A]" data-testid={`founder-milestone-label-${milestone.id}`}>{milestone.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6" data-testid="founder-focus-card">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="founder-focus-title">{copy.founder.focusTitle}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {copy.founder.focusAreas.map((item, index) => (
                <div className="rounded-full border border-[#d9d2c6] bg-white px-4 py-3 text-sm text-[#1A1A1A]" data-testid={`founder-focus-pill-${index + 1}`} key={`${language}-founder-focus-${index + 1}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#efece7] p-6" data-testid="founder-address-card">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="founder-address-title">{copy.founder.addressTitle}</p>
            <div className="mt-4 space-y-2">
              {copy.founder.addressLines.map((line, index) => (
                <p className="text-sm leading-7 text-[#1A1A1A]" data-testid={`founder-address-line-${index + 1}`} key={`${language}-founder-address-${index + 1}`}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-14 space-y-6">
      <div className="space-y-3">
        <SectionEyebrow testId="founder-gallery-eyebrow">{copy.founder.galleryEyebrow}</SectionEyebrow>
        <h3 className="font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl" data-testid="founder-gallery-title">{copy.founder.galleryTitle}</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {copy.founder.gallery.map((item, index) => (
          <div className="overflow-hidden rounded-[1.75rem] border border-[#E2DFD9] bg-[#F9F8F6]" data-testid={`founder-gallery-card-${item.id}`} key={`${language}-${item.id}`}>
            <img alt={item.title} className="aspect-[4/5] h-full w-full object-cover" data-testid={`founder-gallery-image-${item.id}`} decoding="async" loading="lazy" src={founderGalleryImages[index]} />
            <div className="space-y-3 p-5">
              <h4 className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid={`founder-gallery-item-title-${item.id}`}>{item.title}</h4>
              <p className="text-sm leading-7 text-[#4A4A4A]" data-testid={`founder-gallery-item-caption-${item.id}`}>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FounderPreviewSection = ({ copy }) => {
  const founderNavLabel = copy.navigation.find((item) => item.path === "/founder")?.label ?? "Founder";

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" data-testid="founder-preview-section">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[linear-gradient(180deg,#f7f4ee_0%,#efe6d9_100%)] p-4 sm:p-6" data-testid="founder-preview-image-card">
          <img alt={copy.founder.title} className="aspect-[4/4] h-full w-full object-contain" data-testid="founder-preview-image" decoding="async" loading="lazy" src={siteContent.media.founderPrimary} />
        </div>

        <div className="space-y-6">
          <SectionEyebrow testId="founder-preview-eyebrow">{copy.founder.eyebrow}</SectionEyebrow>
          <div className="space-y-4">
            <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="founder-preview-title">{copy.founder.title}</h2>
            <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="founder-preview-subtitle">{copy.founder.subtitle}</p>
            <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="founder-preview-description">{copy.founder.paragraphs[0]}</p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6" data-testid="founder-preview-quote-card">
            <p className="font-[Playfair_Display] text-2xl leading-relaxed text-[#1A1A1A]" data-testid="founder-preview-quote-text">“{copy.founder.quote}”</p>
          </div>

          <Button asChild className="h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]" data-testid="founder-preview-button">
            <Link to="/founder">{founderNavLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};