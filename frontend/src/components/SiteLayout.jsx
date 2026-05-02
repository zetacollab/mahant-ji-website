import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Facebook, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

const languageButtonClass = (active) =>
  `rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 ${
    active
      ? "bg-[#2C402E] text-[#F9F8F6]"
      : "bg-transparent text-[#1A1A1A] hover:bg-[#EFECE7]"
  }`;

export const SiteLayout = ({ copy, language, setLanguage }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const seo = useMemo(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const toAbsolute = (url) => (url.startsWith("http") ? url : `${origin}${url}`);

    switch (location.pathname) {
      case "/about":
        return {
          title: `${copy.about.title} | ${siteContent.brand.name}`,
          description: copy.about.description,
          image: toAbsolute(siteContent.media.aboutFarmer),
          schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: copy.about.title,
            description: copy.about.description,
            url: `${origin}/about`,
          },
        };
      case "/founder":
        return {
          title: `${copy.founder.title} | ${siteContent.brand.name}`,
          description: copy.founder.subtitle,
          image: toAbsolute(siteContent.media.founderPrimary),
          schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            name: copy.founder.title,
            jobTitle: language === "hi" ? "संस्थापक" : "Founder",
            description: copy.founder.subtitle,
            image: toAbsolute(siteContent.media.founderPrimary),
            worksFor: {
              "@type": "Organization",
              name: siteContent.brand.name,
            },
          },
        };
      case "/team":
        return {
          title: `${copy.team.title} | ${siteContent.brand.name}`,
          description: copy.team.description,
          image: toAbsolute(siteContent.teamPhotos["mritunjay-kumar"]),
          schema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteContent.brand.name,
            employee: siteContent.teamMembers.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: copy.team.memberRole,
            })),
          },
        };
      case "/products":
        return {
          title: `${copy.productsSection.title} | ${siteContent.brand.name}`,
          description: copy.productsSection.description,
          image: toAbsolute(siteContent.media.productBrownRice),
          schema: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: copy.productsSection.title,
            description: copy.productsSection.description,
          },
        };
      case "/contact":
        return {
          title: `${copy.contactSection.title} | ${siteContent.brand.name}`,
          description: copy.contactSection.description,
          image: toAbsolute(siteContent.brand.logo),
          schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: copy.contactSection.title,
            description: copy.contactSection.description,
          },
        };
      default:
        return {
          title: `${siteContent.brand.name} | ${copy.hero.title}`,
          description: copy.hero.subtitle,
          image: toAbsolute(siteContent.media.founderPrimary),
          schema: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: siteContent.brand.name,
                url: origin,
                logo: toAbsolute(siteContent.brand.logo),
                sameAs: [siteContent.socials.facebook],
              },
              {
                "@type": "WebSite",
                name: siteContent.brand.name,
                url: origin,
              },
            ],
          },
        };
    }
  }, [copy, language, location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi" : "en";
    document.title = seo.title;

    const ensureMeta = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
        document.head.appendChild(element);
      }
      return element;
    };

    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", seo.description);
    ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute("content", "index, follow");
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", siteContent.brand.name);
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", seo.title);
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", seo.description);
    ensureMeta('meta[property="og:type"]', { property: "og:type" }).setAttribute("content", "website");
    const normalizedCanonical = `${window.location.origin}${window.location.pathname}`;

    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", normalizedCanonical);
    ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", seo.image);
    ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).setAttribute("content", language === "hi" ? "hi_IN" : "en_IN");
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary_large_image");
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", seo.title);
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", seo.description);
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", seo.image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", normalizedCanonical);

    let structuredData = document.head.querySelector("#structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("id", "structured-data");
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(seo.schema);
  }, [language, seo]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[#1A1A1A]">
      <header
        className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(249,248,246,0.78)] backdrop-blur-xl"
        data-testid="site-header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-3" data-testid="brand-home-link" to="/">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#d9d2c6] bg-white p-2 shadow-sm">
              <img
                alt="Ruwan Agro logo"
                className="h-full w-full object-contain"
                data-testid="brand-logo-image"
                decoding="async"
                fetchPriority="high"
                loading="eager"
                src={siteContent.brand.logo}
              />
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
                {siteContent.brand.location[language]}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" data-testid="site-navigation">
            {copy.navigation.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  className={`text-sm font-semibold tracking-wide transition duration-300 hover:text-[#9E4723] ${
                    isActive ? "text-[#9E4723]" : "text-[#1A1A1A]"
                  }`}
                  data-testid={`nav-link-${index + 1}`}
                  key={`${language}-${item.label}`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-1 rounded-full border border-[#d9d2c6] bg-white p-1"
              data-testid="language-toggle-group"
            >
              <button
                className={languageButtonClass(language === "en")}
                data-testid="language-toggle-en"
                onClick={() => setLanguage("en")}
                type="button"
              >
                EN
              </button>
              <button
                className={languageButtonClass(language === "hi")}
                data-testid="language-toggle-hi"
                onClick={() => setLanguage("hi")}
                type="button"
              >
                हिं
              </button>
            </div>

            <Button
              asChild
              className="hidden rounded-full bg-[#2C402E] px-6 text-[#F9F8F6] hover:bg-[#1f2d20] md:inline-flex"
              data-testid="header-contact-button"
            >
              <Link to="/contact">{copy.headerCta}</Link>
            </Button>

            <a
              className="hidden h-12 items-center gap-2 rounded-full border border-[#cfe7d5] bg-[#e8f7ec] px-5 text-sm font-semibold text-[#1f8f47] transition hover:bg-[#d8f0de] lg:inline-flex"
              data-testid="header-whatsapp-link"
              href="https://wa.me/919155417338"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>

            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d2c6] bg-white text-[#1A1A1A] shadow-sm transition hover:border-[#2C402E] hover:text-[#2C402E] md:hidden"
              data-testid="mobile-menu-trigger"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[70] md:hidden" data-testid="mobile-menu-overlay">
          <button
            aria-label="Close mobile menu overlay"
            className="absolute inset-0 bg-black/40"
            data-testid="mobile-menu-backdrop"
            onClick={() => setMenuOpen(false)}
            type="button"
          />

          <div
            className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col border-l border-[#E2DFD9] bg-[#F9F8F6] shadow-2xl"
            data-testid="mobile-menu-panel"
          >
            <div className="flex items-start justify-between border-b border-[#E2DFD9] px-6 py-6">
              <div>
                <p className="font-[Playfair_Display] text-2xl text-[#1A1A1A]" data-testid="mobile-menu-title">
                  {siteContent.brand.name}
                </p>
                <p className="text-sm uppercase tracking-[0.16em] text-[#4A4A4A]" data-testid="mobile-menu-location">
                  {siteContent.brand.location[language]}
                </p>
              </div>

              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d2c6] bg-white text-[#1A1A1A]"
                data-testid="mobile-menu-close"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
              <nav className="flex flex-col gap-3" data-testid="mobile-navigation">
                {copy.navigation.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      className={`rounded-[1.25rem] border px-4 py-4 text-base font-semibold transition ${
                        isActive
                          ? "border-[#2C402E] bg-[#2C402E] text-[#F9F8F6]"
                          : "border-[#E2DFD9] bg-white text-[#1A1A1A] hover:border-[#2C402E] hover:text-[#2C402E]"
                      }`}
                      data-testid={`mobile-nav-link-${index + 1}`}
                      key={`${language}-mobile-${item.label}`}
                      onClick={() => setMenuOpen(false)}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      ) : null}

      <Outlet />

      <a
        className="fixed bottom-5 right-5 z-[65] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f47] text-white shadow-[0_18px_40px_rgba(31,143,71,0.35)] transition hover:bg-[#18753a] md:hidden"
        data-testid="floating-whatsapp-button"
        href="https://wa.me/919155417338"
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <footer className="bg-[#2C402E] px-4 py-10 text-[#F9F8F6] sm:px-6 lg:px-8" data-testid="site-footer">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white p-2 shadow-sm" data-testid="footer-logo-wrapper">
                  <img
                    alt="Ruwan Agro logo"
                    className="h-full w-full object-contain"
                    data-testid="footer-logo-image"
                    decoding="async"
                    loading="lazy"
                    src={siteContent.brand.logo}
                  />
                </div>
                <div>
                  <p className="font-[Playfair_Display] text-3xl" data-testid="footer-brand-name">
                    {siteContent.brand.name}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-white/70" data-testid="footer-brand-description">
                    {copy.footer.tagline}
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/70" data-testid="footer-supporting-text">
                {copy.footer.supportingText}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A373]" data-testid="footer-links-title">
                {copy.footer.linksTitle}
              </p>
              <div className="grid gap-3" data-testid="footer-links-list">
                {copy.navigation.map((item, index) => (
                  <Link
                    className="text-sm text-white/80 transition hover:text-white"
                    data-testid={`footer-link-${index + 1}`}
                    key={`${language}-footer-${item.label}`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A373]" data-testid="footer-contact-title">
                {copy.footer.contactTitle}
              </p>
              <div className="grid gap-4">
                <a
                  className="flex items-start gap-3 text-sm text-white/80 transition hover:text-white"
                  data-testid="footer-address-link"
                  href="https://maps.google.com/?q=Repura,+Muzaffarpur,+Bihar+843113"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{siteContent.contact.address[language]}</span>
                </a>

                <a
                  className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
                  data-testid="footer-phone-link"
                  href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{siteContent.contact.phone}</span>
                </a>

                <a
                  className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
                  data-testid="footer-email-link"
                  href={`mailto:${siteContent.contact.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{siteContent.contact.email}</span>
                </a>

                <a
                  className="inline-flex h-12 w-fit items-center gap-3 rounded-full border border-[#52b66d]/30 bg-[#1f8f47] px-5 text-sm font-semibold text-white transition hover:bg-[#18753a]"
                  data-testid="footer-whatsapp-link"
                  href="https://wa.me/919155417338"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  className="inline-flex h-12 w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#2C402E]"
                  data-testid="footer-facebook-link"
                  href={siteContent.socials.facebook}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Facebook className="h-4 w-4" />
                  <span>{copy.footer.facebookLabel}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p data-testid="footer-bottom-line">{copy.footer.bottomLine}</p>
            <p data-testid="footer-copyright">© {new Date().getFullYear()} {siteContent.brand.name}. {copy.footer.copyrightLine}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};