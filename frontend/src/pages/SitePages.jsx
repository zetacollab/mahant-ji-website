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
    <h1 className="sr-only" data-testid="about-page-heading">
      {copy.about.title}
    </h1>
    <AboutSection copy={copy} />
    <ImpactSection copy={copy} />
    <ValuesSection copy={copy} />
  </main>
);

export const FounderPage = ({ copy, language }) => (
  <main data-testid="founder-page">
    <h1 className="sr-only" data-testid="founder-page-heading">
      {copy.founder.title}
    </h1>
    <FounderSection copy={copy} language={language} />
  </main>
);

export const ProductsPage = ({ copy }) => (
  <main data-testid="products-page">
    <h1 className="sr-only" data-testid="products-page-heading">
      {copy.productsSection.title}
    </h1>
    <ProductsSection copy={copy} />
  </main>
);

export const ContactPage = ({ copy }) => (
  <main data-testid="contact-page">
    <h1 className="sr-only" data-testid="contact-page-heading">
      {copy.contactSection.title}
    </h1>
    <ContactSection copy={copy} />
  </main>
);

export const TeamPage = ({ copy }) => (
  <main data-testid="team-page">
    <h1 className="sr-only" data-testid="team-page-heading">
      {copy.team.title}
    </h1>
    <TeamSection copy={copy} />
  </main>
);