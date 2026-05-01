import {
  ArrowRight,
  CircleDollarSign,
  Globe,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";

const featureIcons = {
  "direct-sourcing": Handshake,
  "natural-farming": Leaf,
  "quality-assurance": ShieldCheck,
  "transparent-trust": PackageCheck,
};

const productImages = {
  "grains-cereals": siteContent.media.productBrownRice,
  "natural-agro-products": siteContent.media.productMillets,
  "value-added-products": siteContent.media.productSpices,
};

const impactIcons = [Users, CircleDollarSign, Globe];
const founderGalleryImages = siteContent.media.founderGallery;

export const SectionEyebrow = ({ children, testId, className = "" }) => (
  <p
    className={`text-xs font-bold uppercase tracking-[0.24em] text-[#9E4723] ${className}`}
    data-testid={testId}
  >
    {children}
  </p>
);

export const PageIntro = ({ eyebrow, title, description, testIdPrefix }) => (
  <section className="bg-[#EFECE7] px-4 py-16 sm:px-6 lg:px-8 lg:py-20" data-testid={`${testIdPrefix}-page-intro`}>
    <div className="mx-auto max-w-7xl">
      <div className="max-w-4xl space-y-4">
        <SectionEyebrow testId={`${testIdPrefix}-page-intro-eyebrow`}>{eyebrow}</SectionEyebrow>
        <h1 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl lg:text-6xl" data-testid={`${testIdPrefix}-page-intro-title`}>
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid={`${testIdPrefix}-page-intro-description`}>
          {description}
        </p>
      </div>
    </div>
  </section>
);

const ProductCard = ({ product }) => (
  <Card
    className="group overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6]/90 shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,64,46,0.10)]"
    data-testid={`product-card-${product.id}`}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        alt={product.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        decoding="async"
        data-testid={`product-image-${product.id}`}
        loading="lazy"
        src={productImages[product.id]}
      />
    </div>
    <CardContent className="space-y-4 p-6">
      <h3 className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid={`product-title-${product.id}`}>
        {product.title}
      </h3>
      <p className="text-sm leading-7 text-[#4A4A4A]" data-testid={`product-description-${product.id}`}>
        {product.description}
      </p>
    </CardContent>
  </Card>
);

const ValueCard = ({ value }) => {
  const Icon = featureIcons[value.id] ?? Sprout;

  return (
    <div
      className="rounded-[1.75rem] border border-[#d9d2c6] bg-white/80 p-6 backdrop-blur-sm"
      data-testid={`value-card-${value.id}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e5dc] text-[#9E4723]">
        <Icon className="h-5 w-5" data-testid={`value-icon-${value.id}`} />
      </div>
      <h3 className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid={`value-title-${value.id}`}>
        {value.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#4A4A4A]" data-testid={`value-description-${value.id}`}>
        {value.description}
      </p>
    </div>
  );
};

const ContactItem = ({ item }) => (
  <a
    className="group rounded-[1.75rem] border border-[#d9d2c6] bg-[#f9f8f6] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2C402E]"
    data-testid={`contact-item-${item.id}`}
    href={item.href}
    rel="noreferrer"
    target={item.id === "website" || item.id === "address" ? "_blank" : undefined}
  >
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efece7] text-[#2C402E]">
        <item.Icon className="h-5 w-5" data-testid={`contact-icon-${item.id}`} />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid={`contact-label-${item.id}`}>
          {item.label}
        </p>
        <p className="text-base leading-7 text-[#1A1A1A] group-hover:text-[#2C402E]" data-testid={`contact-value-${item.id}`}>
          {item.value}
        </p>
      </div>
    </div>
  </a>
);

export const HeroSection = ({ copy }) => (
  <section
    className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8 lg:pt-14"
    data-testid="hero-section"
  >
    <div className="absolute inset-0">
      <img
        alt="Agricultural landscape"
        className="h-full w-full object-cover"
        decoding="async"
        data-testid="hero-background-image"
        fetchPriority="high"
        loading="eager"
        src={siteContent.media.hero}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="hero-glow absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-[#d4a373]/35 blur-3xl" />
      <div className="hero-glow absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#2C402E]/35 blur-3xl" />
    </div>

    <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="section-reveal max-w-3xl space-y-8 text-white">
        <SectionEyebrow
          className="text-[#F7E8CF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
          testId="hero-eyebrow"
        >
          {copy.hero.eyebrow}
        </SectionEyebrow>
        <h1 className="max-w-4xl font-[Playfair_Display] text-4xl tracking-tight sm:text-5xl lg:text-6xl" data-testid="hero-title">
          {copy.hero.title}
        </h1>
        <p className="max-w-2xl text-sm leading-8 text-white/90 sm:text-base lg:text-lg" data-testid="hero-subtitle">
          {copy.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]"
            data-testid="hero-primary-button"
          >
            <Link to="/products">
              {copy.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 rounded-full border border-white/40 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-[#1A1A1A]"
            data-testid="hero-secondary-button"
            variant="outline"
          >
            <Link to="/contact">{copy.hero.secondaryCta}</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          {copy.hero.impactPills.map((item, index) => (
            <div
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
              data-testid={`hero-impact-pill-${index + 1}`}
              key={`${item}-${index}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="section-reveal lg:justify-self-end">
        <Card
          className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/14 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md"
          data-testid="hero-highlight-card"
        >
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70" data-testid="hero-highlight-label">
                {copy.hero.highlightLabel}
              </p>
              <div className="mb-4 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm" data-testid="hero-brand-chip">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white p-1.5">
                  <img
                    alt="Ruwan Agro logo"
                    className="h-full w-full object-contain"
                    decoding="async"
                    data-testid="hero-brand-logo-image"
                    loading="eager"
                    src={siteContent.brand.logo}
                  />
                </div>
                <span className="text-sm font-semibold tracking-[0.12em] text-white/90" data-testid="hero-brand-chip-name">
                  {siteContent.brand.name}
                </span>
              </div>
              <h2 className="font-[Playfair_Display] text-3xl" data-testid="hero-highlight-title">
                {copy.hero.highlightTitle}
              </h2>
            </div>
            <p className="text-sm leading-7 text-white/85" data-testid="hero-highlight-text">
              {copy.hero.highlightText}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.impactSection.stats.map((stat) => (
                <div className="rounded-[1.5rem] border border-white/15 bg-black/10 p-4" data-testid={`hero-stat-card-${stat.id}`} key={stat.id}>
                  <p className="text-2xl font-semibold" data-testid={`hero-stat-value-${stat.id}`}>{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/70" data-testid={`hero-stat-label-${stat.id}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export const AboutSection = ({ copy }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="about-section" id="about">
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="order-2 lg:order-1 lg:col-span-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
            <img alt="Farmer community" className="aspect-[4/3] h-full w-full object-cover sm:aspect-[4/5]" data-testid="about-farmer-image" decoding="async" loading="lazy" src={siteContent.media.aboutFarmer} />
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
            <img alt="Agricultural field" className="aspect-[4/3] h-full w-full object-cover" data-testid="about-field-image" decoding="async" loading="lazy" src={siteContent.media.aboutField} />
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
        <div className="section-reveal space-y-8">
          <SectionEyebrow testId="about-eyebrow">{copy.about.eyebrow}</SectionEyebrow>
          <div className="space-y-4">
            <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="about-title">
              {copy.about.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="about-description">
              {copy.about.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] shadow-none" data-testid="mission-card">
              <CardContent className="space-y-3 p-6">
                <SectionEyebrow testId="mission-eyebrow">{copy.about.missionLabel}</SectionEyebrow>
                <p className="text-sm leading-7 text-[#1A1A1A]" data-testid="mission-text">{copy.about.mission}</p>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] shadow-none" data-testid="vision-card">
              <CardContent className="space-y-3 p-6">
                <SectionEyebrow testId="vision-eyebrow">{copy.about.visionLabel}</SectionEyebrow>
                <p className="text-sm leading-7 text-[#1A1A1A]" data-testid="vision-text">{copy.about.vision}</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#efece7] p-6 md:p-8" data-testid="supporting-brand-panel">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="supporting-brand-label">{copy.about.supportingLabel}</p>
            <h3 className="mt-3 font-[Playfair_Display] text-3xl text-[#1A1A1A]" data-testid="supporting-brand-title">{copy.about.supportingTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-[#4A4A4A]" data-testid="supporting-brand-description">{copy.about.supportingDescription}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
          <img
            alt={copy.founder.title}
            className="aspect-square h-full w-full object-contain"
            decoding="async"
            data-testid="founder-primary-image"
            loading="lazy"
            src={siteContent.media.founderPrimary}
          />
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

export const ProductsSection = ({ copy }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="products-section" id="products">
    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-4">
        <SectionEyebrow testId="products-eyebrow">{copy.productsSection.eyebrow}</SectionEyebrow>
        <h2 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl" data-testid="products-title">{copy.productsSection.title}</h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-[#4A4A4A]" data-testid="products-description">{copy.productsSection.description}</p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {copy.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export const ImpactSection = ({ copy }) => (
  <section className="relative overflow-hidden bg-[#2C402E] py-14 text-[#F9F8F6] sm:py-20 lg:py-28" data-testid="impact-section" id="impact">
    <div className="editorial-marquee text-sm uppercase tracking-[0.35em] text-white/20" data-testid="impact-marquee">
      <span>{copy.impactSection.marquee.repeat(2)}</span>
      <span>{copy.impactSection.marquee.repeat(2)}</span>
    </div>

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl space-y-4">
        <SectionEyebrow testId="impact-eyebrow">{copy.impactSection.eyebrow}</SectionEyebrow>
        <h2 className="font-[Playfair_Display] text-4xl text-[#F9F8F6] sm:text-5xl" data-testid="impact-title">{copy.impactSection.title}</h2>
        <p className="text-base leading-8 text-white/75" data-testid="impact-description">{copy.impactSection.description}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {copy.impactSection.stats.map((stat, index) => {
          const Icon = impactIcons[index] ?? Users;

          return (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm" data-testid={`impact-stat-card-${stat.id}`} key={stat.id}>
              <Icon className="h-6 w-6 text-[#D4A373]" data-testid={`impact-stat-icon-${stat.id}`} />
              <p className="mt-8 font-[Playfair_Display] text-5xl" data-testid={`impact-stat-value-${stat.id}`}>{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/70" data-testid={`impact-stat-label-${stat.id}`}>{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ValuesSection = ({ copy }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="why-us-section">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="order-2 space-y-6 lg:order-1">
        <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
          <img alt="Sustainable farming landscape" className="aspect-[4/3] h-full w-full object-cover sm:aspect-[4/5]" data-testid="why-us-image" decoding="async" loading="lazy" src={siteContent.media.sustainability} />
        </div>
        <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6" data-testid="core-values-panel">
          <SectionEyebrow testId="core-values-eyebrow">{copy.valuesSection.coreValuesLabel}</SectionEyebrow>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {copy.valuesSection.coreValues.map((value, index) => (
              <div className="rounded-full border border-[#d9d2c6] px-4 py-3 text-sm text-[#1A1A1A]" data-testid={`core-value-pill-${index + 1}`} key={`${value}-${index}`}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 space-y-6 lg:order-2">
        <SectionEyebrow testId="why-us-eyebrow">{copy.valuesSection.eyebrow}</SectionEyebrow>
        <h2 className="font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="why-us-title">{copy.valuesSection.title}</h2>
        <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="why-us-description">{copy.valuesSection.description}</p>

        <div className="grid gap-5">
          {copy.valuesSection.values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const TeamSection = ({ copy }) => (
  <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-28" data-testid="team-section">
    <div className="space-y-8">
      <div className="space-y-4">
        <SectionEyebrow testId="team-eyebrow">{copy.team.eyebrow}</SectionEyebrow>
        <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="team-title">
          {copy.team.title}
        </h2>
        <p className="max-w-4xl text-base leading-8 text-[#4A4A4A]" data-testid="team-description">
          {copy.team.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {copy.team.values.map((value, index) => (
          <div
            className="rounded-full border border-[#d9d2c6] bg-[#F9F8F6] px-4 py-3 text-sm text-[#1A1A1A]"
            data-testid={`team-value-pill-${index + 1}`}
            key={`${value}-${index}`}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[linear-gradient(180deg,#f7f4ee_0%,#efe6d9_100%)] p-4 sm:p-6" data-testid="team-founder-feature-card">
          <img
            alt="Mahant Mritunjay Das"
            className="aspect-square h-full w-full object-contain"
            decoding="async"
            data-testid="team-founder-feature-image"
            loading="lazy"
            src={siteContent.teamPhotos["mritunjay-kumar"]}
          />
        </div>

        <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6 md:p-8" data-testid="team-founder-feature-content">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="team-founder-feature-label">
            {copy.team.founderHighlightLabel}
          </p>
          <h3 className="mt-3 font-[Playfair_Display] text-3xl text-[#1A1A1A] md:text-4xl" data-testid="team-founder-feature-title">
            Mahant Mritunjay Das (Mritunjay Kumar)
          </h3>
          <p className="mt-4 text-base leading-8 text-[#4A4A4A]" data-testid="team-founder-feature-text">
            {copy.team.founderHighlightText}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.teamMembers.map((member) => (
          <div
            className="rounded-[1.75rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6"
            data-testid={`team-card-${member.id}`}
            key={member.id}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#E2DFD9] bg-white text-lg font-semibold text-[#2C402E]" data-testid={`team-member-avatar-${member.id}`}>
                {siteContent.teamPhotos[member.id] ? (
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover"
                    decoding="async"
                    data-testid={`team-member-avatar-image-${member.id}`}
                    loading="lazy"
                    src={siteContent.teamPhotos[member.id]}
                  />
                ) : (
                  <span>{member.name.charAt(0)}</span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid={`team-member-name-${member.id}`}>
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.18em] text-[#9E4723]" data-testid={`team-member-role-${member.id}`}>
                  {copy.team.memberRole}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div data-testid={`team-member-location-block-${member.id}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A4A]">{copy.team.locationLabel}</p>
                <p className="mt-1 text-sm leading-7 text-[#1A1A1A]" data-testid={`team-member-location-${member.id}`}>
                  {member.location}
                </p>
              </div>

              <div data-testid={`team-member-email-block-${member.id}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A4A]">{copy.team.emailLabel}</p>
                <a
                  className="mt-1 block break-all text-sm leading-7 text-[#2C402E] underline-offset-4 hover:underline"
                  data-testid={`team-member-email-${member.id}`}
                  href={`mailto:${member.email}`}
                >
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSection = ({ copy }) => {
  const contactItems = [
    {
      id: "address",
      label: copy.contactSection.labels.address,
      value: siteContent.contact.address,
      href: "https://maps.google.com/?q=Rupwara,+Muzaffarpur,+Bihar,+India",
      Icon: MapPin,
    },
    {
      id: "phone",
      label: copy.contactSection.labels.phone,
      value: siteContent.contact.phone,
      href: `tel:${siteContent.contact.phone.replace(/\s+/g, "")}`,
      Icon: Phone,
    },
    {
      id: "email",
      label: copy.contactSection.labels.email,
      value: siteContent.contact.email,
      href: `mailto:${siteContent.contact.email}`,
      Icon: Mail,
    },
    {
      id: "website",
      label: copy.contactSection.labels.website,
      value: siteContent.brand.website,
      href: siteContent.contact.website,
      Icon: Globe,
    },
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
                <a className="rounded-full border border-[#d9d2c6] px-4 py-3 text-sm text-[#1A1A1A] transition hover:border-[#2C402E] hover:text-[#2C402E]" data-testid={`farmer-support-number-${index + 1}`} href={`tel:${number}`} key={number}>
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm content={copy.contactForm} />
      </div>
    </section>
  );
};