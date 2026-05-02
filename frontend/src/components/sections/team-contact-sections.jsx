import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

import { ContactItem, SectionEyebrow } from "./shared";

export const TeamSection = ({ copy }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="team-section">
    <div className="space-y-8">
      <div className="space-y-4">
        <SectionEyebrow testId="team-eyebrow">{copy.team.eyebrow}</SectionEyebrow>
        <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="team-title">{copy.team.title}</h2>
        <p className="max-w-4xl text-base leading-8 text-[#4A4A4A]" data-testid="team-description">{copy.team.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {copy.team.values.map((value, index) => (
          <div className="rounded-full border border-[#d9d2c6] bg-[#F9F8F6] px-4 py-3 text-sm text-[#1A1A1A]" data-testid={`team-value-pill-${index + 1}`} key={`${value}-${index}`}>
            {value}
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[linear-gradient(180deg,#f7f4ee_0%,#efe6d9_100%)] p-4 sm:p-6" data-testid="team-founder-feature-card">
          <img alt="Mahant Mritunjay Das" className="aspect-square h-full w-full object-contain" data-testid="team-founder-feature-image" decoding="async" loading="lazy" src={siteContent.teamPhotos["mritunjay-kumar"]} />
        </div>

        <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6 md:p-8" data-testid="team-founder-feature-content">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="team-founder-feature-label">{copy.team.founderHighlightLabel}</p>
          <h3 className="mt-3 font-[Playfair_Display] text-3xl text-[#1A1A1A] md:text-4xl" data-testid="team-founder-feature-title">Mahant Mritunjay Das (Mritunjay Kumar)</h3>
          <p className="mt-4 text-base leading-8 text-[#4A4A4A]" data-testid="team-founder-feature-text">{copy.team.founderHighlightText}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.teamMembers.map((member) => (
          <div className="rounded-[1.75rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6" data-testid={`team-card-${member.id}`} key={member.id}>
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#E2DFD9] bg-white text-lg font-semibold text-[#2C402E]" data-testid={`team-member-avatar-${member.id}`}>
                {siteContent.teamPhotos[member.id] ? (
                  <img alt={member.name} className="h-full w-full object-cover" data-testid={`team-member-avatar-image-${member.id}`} decoding="async" loading="lazy" src={siteContent.teamPhotos[member.id]} />
                ) : (
                  <span>{member.name.charAt(0)}</span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid={`team-member-name-${member.id}`}>{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.18em] text-[#9E4723]" data-testid={`team-member-role-${member.id}`}>{copy.team.memberRole}</p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div data-testid={`team-member-location-block-${member.id}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A4A]">{copy.team.locationLabel}</p>
                <p className="mt-1 text-sm leading-7 text-[#1A1A1A]" data-testid={`team-member-location-${member.id}`}>{member.location}</p>
              </div>

              <div data-testid={`team-member-email-block-${member.id}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A4A]">{copy.team.emailLabel}</p>
                <a className="mt-1 block break-all text-sm leading-7 text-[#2C402E] underline-offset-4 hover:underline" data-testid={`team-member-email-${member.id}`} href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSection = ({ copy, language }) => {
  const contactItems = [
    { id: "address", label: copy.contactSection.labels.address, value: siteContent.contact.address[language], href: "https://maps.google.com/?q=Repura,+Muzaffarpur,+Bihar+843113", Icon: MapPin },
    { id: "phone", label: copy.contactSection.labels.phone, value: siteContent.contact.phone, href: `tel:${siteContent.contact.phone.replace(/\s+/g, "")}`, Icon: Phone },
    { id: "email", label: copy.contactSection.labels.email, value: siteContent.contact.email, href: `mailto:${siteContent.contact.email}`, Icon: Mail },
    { id: "website", label: copy.contactSection.labels.website, value: siteContent.brand.website, href: siteContent.contact.website, Icon: Globe },
  ];

  return (
    <section className="bg-[#EFECE7] py-14 sm:py-20 lg:py-28" data-testid="contact-section" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <SectionEyebrow testId="contact-eyebrow">{copy.contactSection.eyebrow}</SectionEyebrow>
            <h2 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl" data-testid="contact-title">{copy.contactSection.title}</h2>
            <p className="max-w-xl text-base leading-8 text-[#4A4A4A]" data-testid="contact-description">{copy.contactSection.description}</p>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => (
              <ContactItem item={item} key={item.id} />
            ))}
          </div>

          <div className="rounded-[2rem] border border-[#d9d2c6] bg-[#f9f8f6] p-6" data-testid="farmer-support-panel">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="farmer-support-label">{copy.contactSection.farmerSupportLabel}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteContent.contact.farmerSupport.map((number, index) => (
                <a className="rounded-full border border-[#d9d2c6] px-4 py-3 text-sm text-[#1A1A1A] transition hover:border-[#2C402E] hover:text-[#2C402E]" data-testid={`farmer-support-number-${index + 1}`} href={`tel:${number}`} key={number}>{number}</a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm content={copy.contactForm} />
      </div>
    </section>
  );
};

export const ContactPreviewSection = ({ copy, language }) => {
  const contactItems = [
    { id: "phone", label: copy.contactSection.labels.phone, value: siteContent.contact.phone, href: `tel:${siteContent.contact.phone.replace(/\s+/g, "")}`, Icon: Phone },
    { id: "email", label: copy.contactSection.labels.email, value: siteContent.contact.email, href: `mailto:${siteContent.contact.email}`, Icon: Mail },
    { id: "address", label: copy.contactSection.labels.address, value: siteContent.contact.address[language], href: "https://maps.google.com/?q=Repura,+Muzaffarpur,+Bihar+843113", Icon: MapPin },
  ];

  return (
    <section className="bg-[#EFECE7] py-14 sm:py-20 lg:py-24" data-testid="contact-preview-section">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <SectionEyebrow testId="contact-preview-eyebrow">{copy.contactSection.eyebrow}</SectionEyebrow>
          <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="contact-preview-title">{copy.contactSection.title}</h2>
          <p className="max-w-2xl text-base leading-8 text-[#4A4A4A]" data-testid="contact-preview-description">{copy.contactSection.description}</p>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactItems.map((item) => (
              <ContactItem item={item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d9d2c6] bg-[#F9F8F6] p-6 shadow-[0_24px_80px_rgba(44,64,46,0.08)] md:p-8" data-testid="contact-preview-cta-card">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="contact-preview-cta-eyebrow">{copy.headerCta}</p>
          <h3 className="mt-4 font-[Playfair_Display] text-3xl text-[#1A1A1A]" data-testid="contact-preview-cta-title">{copy.contactForm.title}</h3>
          <p className="mt-4 text-base leading-8 text-[#4A4A4A]" data-testid="contact-preview-cta-text">{copy.contactForm.note}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {siteContent.contact.farmerSupport.map((number, index) => (
              <a className="rounded-full border border-[#d9d2c6] bg-white px-4 py-3 text-sm text-[#1A1A1A] transition hover:border-[#2C402E] hover:text-[#2C402E]" data-testid={`contact-preview-support-number-${index + 1}`} href={`tel:${number}`} key={number}>{number}</a>
            ))}
          </div>

          <Button asChild className="mt-8 h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]" data-testid="contact-preview-button">
            <Link to="/contact">{copy.headerCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};