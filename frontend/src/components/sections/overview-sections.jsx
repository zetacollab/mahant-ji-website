import { ArrowRight, CircleDollarSign, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";

import { ProductCard, SectionEyebrow, ValueCard } from "./shared";

const impactIcons = [Users, CircleDollarSign, Globe];

export const HeroSection = ({ copy }) => (
  <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8 lg:pt-14" data-testid="hero-section">
    <div className="absolute inset-0">
      <img alt="Agricultural landscape" className="h-full w-full object-cover" data-testid="hero-background-image" decoding="async" fetchPriority="high" loading="eager" src={siteContent.media.hero} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="hero-glow absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-[#d4a373]/35 blur-3xl" />
      <div className="hero-glow absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#2C402E]/35 blur-3xl" />
    </div>

    <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="section-reveal max-w-3xl space-y-8 text-white">
        <SectionEyebrow className="text-[#F7E8CF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]" testId="hero-eyebrow">{copy.hero.eyebrow}</SectionEyebrow>
        <h1 className="max-w-4xl font-[Playfair_Display] text-4xl tracking-tight sm:text-5xl lg:text-6xl" data-testid="hero-title">{copy.hero.title}</h1>
        <p className="max-w-2xl text-sm leading-8 text-white/90 sm:text-base lg:text-lg" data-testid="hero-subtitle">{copy.hero.subtitle}</p>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]" data-testid="hero-primary-button">
            <Link to="/products">
              {copy.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="h-12 rounded-full border border-white/40 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-[#1A1A1A]" data-testid="hero-secondary-button" variant="outline">
            <Link to="/contact">{copy.hero.secondaryCta}</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          {copy.hero.impactPills.map((item, index) => (
            <div className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm" data-testid={`hero-impact-pill-${index + 1}`} key={`${item}-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="section-reveal lg:justify-self-end">
        <Card className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/14 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md" data-testid="hero-highlight-card">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70" data-testid="hero-highlight-label">{copy.hero.highlightLabel}</p>
              <div className="mb-4 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm" data-testid="hero-brand-chip">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white p-1.5">
                  <img alt="Ruwan Agro logo" className="h-full w-full object-contain" data-testid="hero-brand-logo-image" decoding="async" loading="eager" src={siteContent.brand.logo} />
                </div>
                <span className="text-sm font-semibold tracking-[0.12em] text-white/90" data-testid="hero-brand-chip-name">{siteContent.brand.name}</span>
              </div>
              <h2 className="font-[Playfair_Display] text-3xl" data-testid="hero-highlight-title">{copy.hero.highlightTitle}</h2>
            </div>
            <p className="text-sm leading-7 text-white/85" data-testid="hero-highlight-text">{copy.hero.highlightText}</p>
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
            <h2 className="max-w-3xl font-[Playfair_Display] text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl" data-testid="about-title">{copy.about.title}</h2>
            <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="about-description">{copy.about.description}</p>
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
          const Icon = impactIcons[index] ?? Globe;

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