import {
  AboutSection,
  ContactSection,
  FounderSection,
  HeroSection,
  ImpactSection,
  PageIntro,
  ProductsSection,
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
    <PageIntro
      description={copy.about.description}
      eyebrow={copy.about.eyebrow}
      testIdPrefix="about"
      title={copy.about.title}
    />
    <AboutSection copy={copy} />
    <ValuesSection copy={copy} />
  </main>
);

export const FounderPage = ({ copy, language }) => (
  <main data-testid="founder-page">
    <PageIntro
      description={copy.founder.subtitle}
      eyebrow={copy.founder.eyebrow}
      testIdPrefix="founder"
      title={copy.founder.title}
    />
    <FounderSection copy={copy} language={language} />
  </main>
);

export const ProductsPage = ({ copy }) => (
  <main data-testid="products-page">
    <PageIntro
      description={copy.productsSection.description}
      eyebrow={copy.productsSection.eyebrow}
      testIdPrefix="products"
      title={copy.productsSection.title}
    />
    <ProductsSection copy={copy} />
  </main>
);

export const ImpactPage = ({ copy }) => (
  <main data-testid="impact-page">
    <PageIntro
      description={copy.impactSection.description}
      eyebrow={copy.impactSection.eyebrow}
      testIdPrefix="impact"
      title={copy.impactSection.title}
    />
    <ImpactSection copy={copy} />
    <ValuesSection copy={copy} />
  </main>
);

export const ContactPage = ({ copy }) => (
  <main data-testid="contact-page">
    <PageIntro
      description={copy.contactSection.description}
      eyebrow={copy.contactSection.eyebrow}
      testIdPrefix="contact"
      title={copy.contactSection.title}
    />
    <ContactSection copy={copy} />
  </main>
);