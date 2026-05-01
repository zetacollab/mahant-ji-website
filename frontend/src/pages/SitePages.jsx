import {
  AboutSection,
  ContactSection,
  FounderSection,
  HeroSection,
  ImpactSection,
  ProductsSection,
  TeamSection,
  ValuesSection,
} from "@/components/SiteSections";

export const HomePage = ({ copy, language }) => (
  <main data-testid="home-page">
    <HeroSection copy={copy} />
    <AboutSection copy={copy} />
    <FounderSection copy={copy} language={language} />
    <ProductsSection copy={copy} />
    <ImpactSection copy={copy} />
    <ValuesSection copy={copy} />
    <ContactSection copy={copy} />
  </main>
);

export const AboutPage = ({ copy }) => (
  <main data-testid="about-page">
    <AboutSection copy={copy} />
    <TeamSection copy={copy} />
    <ValuesSection copy={copy} />
  </main>
);

export const FounderPage = ({ copy, language }) => (
  <main data-testid="founder-page">
    <FounderSection copy={copy} language={language} />
  </main>
);

export const ProductsPage = ({ copy }) => (
  <main data-testid="products-page">
    <ProductsSection copy={copy} />
  </main>
);

export const ImpactPage = ({ copy }) => (
  <main data-testid="impact-page">
    <ImpactSection copy={copy} />
    <ValuesSection copy={copy} />
  </main>
);

export const ContactPage = ({ copy }) => (
  <main data-testid="contact-page">
    <ContactSection copy={copy} />
  </main>
);