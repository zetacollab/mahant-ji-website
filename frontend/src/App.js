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
import { ThemeProvider } from "next-themes";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { siteContent } from "@/data/siteContent";
import "@/App.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const featureIcons = {
  "direct-sourcing": Handshake,
  "natural-farming": Leaf,
  "quality-assurance": ShieldCheck,
  "transparent-trust": PackageCheck,
};

const impactIcons = [Users, CircleDollarSign, Globe];

const contactItems = [
  {
    id: "address",
    label: "Visit us",
    value: siteContent.contact.address,
    href: "https://maps.google.com/?q=Repura,+Muzaffarpur,+Bihar+843113",
    Icon: MapPin,
  },
  {
    id: "phone",
    label: "Call us",
    value: siteContent.contact.phone,
    href: `tel:${siteContent.contact.phone.replace(/\s+/g, "")}`,
    Icon: Phone,
  },
  {
    id: "email",
    label: "Email us",
    value: siteContent.contact.email,
    href: `mailto:${siteContent.contact.email}`,
    Icon: Mail,
  },
  {
    id: "website",
    label: "Website",
    value: siteContent.brand.website,
    href: siteContent.contact.website,
    Icon: Globe,
  },
];

const SectionEyebrow = ({ children, testId }) => (
  <p
    className="text-xs font-bold uppercase tracking-[0.24em] text-[#9E4723]"
    data-testid={testId}
  >
    {children}
  </p>
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
        data-testid={`product-image-${product.id}`}
        src={product.image}
      />
    </div>
    <CardContent className="space-y-4 p-6">
      <h3
        className="font-[Playfair_Display] text-2xl text-[#1A1A1A]"
        data-testid={`product-title-${product.id}`}
      >
        {product.title}
      </h3>
      <p
        className="text-sm leading-7 text-[#4A4A4A]"
        data-testid={`product-description-${product.id}`}
      >
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
      <h3
        className="font-[Playfair_Display] text-2xl text-[#1A1A1A]"
        data-testid={`value-title-${value.id}`}
      >
        {value.title}
      </h3>
      <p
        className="mt-3 text-sm leading-7 text-[#4A4A4A]"
        data-testid={`value-description-${value.id}`}
      >
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
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]"
          data-testid={`contact-label-${item.id}`}
        >
          {item.label}
        </p>
        <p
          className="text-base leading-7 text-[#1A1A1A] group-hover:text-[#2C402E]"
          data-testid={`contact-value-${item.id}`}
        >
          {item.value}
        </p>
      </div>
    </div>
  </a>
);

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-[var(--page-bg)] text-[#1A1A1A]">
        <header
          className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(249,248,246,0.78)] backdrop-blur-xl"
          data-testid="site-header"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <a
              className="flex items-center gap-3"
              data-testid="brand-home-link"
              href="#top"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d2c6] bg-white text-[#2C402E]">
                <Sprout className="h-5 w-5" data-testid="brand-logo-icon" />
              </div>
              <div>
                <p
                  className="font-[Playfair_Display] text-xl text-[#1A1A1A]"
                  data-testid="brand-name"
                >
                  {siteContent.brand.name}
                </p>
                <p
                  className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]"
                  data-testid="brand-location"
                >
                  {siteContent.brand.location}
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex" data-testid="site-navigation">
              {navigationItems.map((item) => (
                <a
                  className="text-sm font-semibold tracking-wide text-[#1A1A1A] transition duration-300 hover:text-[#9E4723]"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              asChild
              className="hidden rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20] sm:inline-flex"
              data-testid="header-contact-button"
            >
              <a href="#contact">Reach us</a>
            </Button>
          </div>
        </header>

        <main data-testid="landing-page" id="top">
          <section
            className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8 lg:pt-14"
            data-testid="hero-section"
          >
            <div className="absolute inset-0">
              <img
                alt="Agricultural landscape"
                className="h-full w-full object-cover"
                data-testid="hero-background-image"
                src={siteContent.hero.image}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="hero-glow absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-[#d4a373]/35 blur-3xl" />
              <div className="hero-glow absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#2C402E]/35 blur-3xl" />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="section-reveal max-w-3xl space-y-8 text-white">
                <SectionEyebrow testId="hero-eyebrow">{siteContent.hero.eyebrow}</SectionEyebrow>
                <h1
                  className="max-w-4xl font-[Playfair_Display] text-4xl tracking-tight sm:text-5xl lg:text-6xl"
                  data-testid="hero-title"
                >
                  {siteContent.hero.title}
                </h1>
                <p
                  className="max-w-2xl text-sm leading-8 text-white/90 sm:text-base lg:text-lg"
                  data-testid="hero-subtitle"
                >
                  {siteContent.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20]"
                    data-testid="hero-primary-button"
                  >
                    <a href="#products">
                      {siteContent.hero.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-12 rounded-full border border-white/40 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-[#1A1A1A]"
                    data-testid="hero-secondary-button"
                    variant="outline"
                  >
                    <a href="#contact">{siteContent.hero.secondaryCta}</a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {siteContent.impact.map((item, index) => (
                    <div
                      className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
                      data-testid={`hero-impact-pill-${index + 1}`}
                      key={item}
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
                      <p
                        className="text-xs font-bold uppercase tracking-[0.2em] text-white/70"
                        data-testid="hero-highlight-label"
                      >
                        Rooted in rural India
                      </p>
                      <h2
                        className="font-[Playfair_Display] text-3xl"
                        data-testid="hero-highlight-title"
                      >
                        Naturally grown. Honestly delivered.
                      </h2>
                    </div>
                    <p className="text-sm leading-7 text-white/85" data-testid="hero-highlight-text">
                      A farmer-driven brand connecting trusted produce, responsible sourcing, and modern market access.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {siteContent.stats.map((stat) => (
                        <div
                          className="rounded-[1.5rem] border border-white/15 bg-black/10 p-4"
                          data-testid={`hero-stat-card-${stat.id}`}
                          key={stat.id}
                        >
                          <p className="text-2xl font-semibold" data-testid={`hero-stat-value-${stat.id}`}>
                            {stat.value}
                          </p>
                          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/70" data-testid={`hero-stat-label-${stat.id}`}>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
            data-testid="about-section"
            id="about"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
                    <img
                      alt="Farmer community"
                      className="aspect-[4/5] h-full w-full object-cover"
                      data-testid="about-farmer-image"
                      src={siteContent.about.farmerImage}
                    />
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
                    <img
                      alt="Agricultural field"
                      className="aspect-[4/3] h-full w-full object-cover"
                      data-testid="about-field-image"
                      src={siteContent.about.fieldImage}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 lg:pl-8">
                <div className="section-reveal space-y-8">
                  <SectionEyebrow testId="about-eyebrow">About brand & FPO</SectionEyebrow>
                  <div className="space-y-4">
                    <h2
                      className="max-w-3xl font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl"
                      data-testid="about-title"
                    >
                      {siteContent.about.title}
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="about-description">
                      {siteContent.about.description}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] shadow-none" data-testid="mission-card">
                      <CardContent className="space-y-3 p-6">
                        <SectionEyebrow testId="mission-eyebrow">Mission</SectionEyebrow>
                        <p className="text-sm leading-7 text-[#1A1A1A]" data-testid="mission-text">
                          {siteContent.about.mission}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] shadow-none" data-testid="vision-card">
                      <CardContent className="space-y-3 p-6">
                        <SectionEyebrow testId="vision-eyebrow">Vision</SectionEyebrow>
                        <p className="text-sm leading-7 text-[#1A1A1A]" data-testid="vision-text">
                          {siteContent.about.vision}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#efece7] p-6 md:p-8" data-testid="supporting-brand-panel">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="supporting-brand-label">
                      Supporting foundation
                    </p>
                    <h3 className="mt-3 font-[Playfair_Display] text-3xl text-[#1A1A1A]" data-testid="supporting-brand-title">
                      {siteContent.brand.supportingName}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#4A4A4A]" data-testid="supporting-brand-description">
                      The farmer producer organization strengthens small and marginal farmers through collective development, market access, packaging support, financial awareness, and sustainable agriculture practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
            data-testid="products-section"
            id="products"
          >
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <SectionEyebrow testId="products-eyebrow">Products overview</SectionEyebrow>
                <h2 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl" data-testid="products-title">
                  Purity in every category.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#4A4A4A]" data-testid="products-description">
                Our products reflect careful cultivation, responsible sourcing, and practical value for homes, retailers, and food partners.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {siteContent.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#2C402E] py-20 text-[#F9F8F6] lg:py-28" data-testid="impact-section" id="impact">
            <div className="editorial-marquee text-sm uppercase tracking-[0.35em] text-white/20" data-testid="impact-marquee">
              <span>{siteContent.marquee.repeat(2)}</span>
              <span>{siteContent.marquee.repeat(2)}</span>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl space-y-4">
                <SectionEyebrow testId="impact-eyebrow">Farmer network impact</SectionEyebrow>
                <h2 className="font-[Playfair_Display] text-4xl text-[#F9F8F6] sm:text-5xl" data-testid="impact-title">
                  Growing value across the entire agricultural chain.
                </h2>
                <p className="text-base leading-8 text-white/75" data-testid="impact-description">
                  Every purchase supports a wider movement for better market access, stronger rural livelihoods, and sustainable food systems.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {siteContent.stats.map((stat, index) => {
                  const Icon = impactIcons[index] ?? Users;

                  return (
                    <div
                      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                      data-testid={`impact-stat-card-${stat.id}`}
                      key={stat.id}
                    >
                      <Icon className="h-6 w-6 text-[#D4A373]" data-testid={`impact-stat-icon-${stat.id}`} />
                      <p className="mt-8 font-[Playfair_Display] text-5xl" data-testid={`impact-stat-value-${stat.id}`}>
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/70" data-testid={`impact-stat-label-${stat.id}`}>
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28" data-testid="why-us-section">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-[#E2DFD9] bg-[#efece7]">
                  <img
                    alt="Sustainable farming landscape"
                    className="aspect-[4/5] h-full w-full object-cover"
                    data-testid="why-us-image"
                    src="https://images.pexels.com/photos/33786776/pexels-photo-33786776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </div>
                <div className="rounded-[2rem] border border-[#E2DFD9] bg-[#F9F8F6] p-6" data-testid="core-values-panel">
                  <SectionEyebrow testId="core-values-eyebrow">Core values</SectionEyebrow>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {["Integrity", "Commitment", "Sustainability", "Collaboration"].map((value, index) => (
                      <div
                        className="rounded-full border border-[#d9d2c6] px-4 py-3 text-sm text-[#1A1A1A]"
                        data-testid={`core-value-pill-${index + 1}`}
                        key={value}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <SectionEyebrow testId="why-us-eyebrow">Sustainability & trust</SectionEyebrow>
                <h2 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl" data-testid="why-us-title">
                  Why customers and farming communities choose us.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-[#4A4A4A]" data-testid="why-us-description">
                  We bring together responsible farming, transparent operations, and dependable quality so that producers and buyers both benefit.
                </p>

                <div className="grid gap-5">
                  {siteContent.values.map((value) => (
                    <ValueCard key={value.id} value={value} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#EFECE7] py-20 lg:py-28" data-testid="contact-section" id="contact">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <SectionEyebrow testId="contact-eyebrow">Contact & partnerships</SectionEyebrow>
                  <h2 className="font-[Playfair_Display] text-4xl text-[#1A1A1A] sm:text-5xl" data-testid="contact-title">
                    Let’s grow something meaningful together.
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-[#4A4A4A]" data-testid="contact-description">
                    Reach out for product inquiries, distribution opportunities, sourcing partnerships, or farmer network collaboration.
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactItems.map((item) => (
                    <ContactItem item={item} key={item.id} />
                  ))}
                </div>

                <div className="rounded-[2rem] border border-[#d9d2c6] bg-[#f9f8f6] p-6" data-testid="farmer-support-panel">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E4723]" data-testid="farmer-support-label">
                    Farmer support lines
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {siteContent.contact.farmerSupport.map((number, index) => (
                      <a
                        className="rounded-full border border-[#d9d2c6] px-4 py-3 text-sm text-[#1A1A1A] transition hover:border-[#2C402E] hover:text-[#2C402E]"
                        data-testid={`farmer-support-number-${index + 1}`}
                        href={`tel:${number}`}
                        key={number}
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="bg-[#2C402E] px-4 py-10 text-[#F9F8F6] sm:px-6 lg:px-8" data-testid="site-footer">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-[Playfair_Display] text-3xl" data-testid="footer-brand-name">
                {siteContent.brand.name}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/70" data-testid="footer-brand-description">
                Choose better. Support farmers. Live healthier.
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.16em] text-white/60" data-testid="footer-supporting-text">
              {siteContent.brand.supportingName}
            </p>
          </div>
        </footer>

        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
