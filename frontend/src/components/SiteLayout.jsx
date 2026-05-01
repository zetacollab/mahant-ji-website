import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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

      <footer className="bg-[#2C402E] px-4 py-10 text-[#F9F8F6] sm:px-6 lg:px-8" data-testid="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white p-2 shadow-sm" data-testid="footer-logo-wrapper">
              <img
                alt="Ruwan Agro logo"
                className="h-full w-full object-contain"
                data-testid="footer-logo-image"
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
          <p className="text-sm uppercase tracking-[0.16em] text-white/60" data-testid="footer-supporting-text">
            {copy.footer.supportingText}
          </p>
        </div>
      </footer>
    </div>
  );
};