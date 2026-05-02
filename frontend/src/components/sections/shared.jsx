import { Globe, Handshake, Leaf, PackageCheck, ShieldCheck, Sprout } from "lucide-react";

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

export const founderGalleryImages = siteContent.media.founderGallery;
export const impactIconFallback = Globe;

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

export const ProductCard = ({ product }) => (
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

export const ValueCard = ({ value }) => {
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

export const ContactItem = ({ item }) => (
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