import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { translations } from "./translations";
import artistPhoto from "../assets/gabriella-tattoo-artist.webp";
import heroImage from "../assets/hero-gabriella-tattoo-artist.webp";
import whatsapp1 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (1).webp";
import whatsapp2 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (2).webp";
import whatsapp3 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (3).webp";
import whatsapp4 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (4).webp";
import whatsapp5 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (5).webp";
import whatsapp9 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49.webp";

type Language = "en" | "pt" | "es";

interface HomeProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setCurrentPage: (page: "home" | "gallery") => void;
}

export function Home({ language, setLanguage, setCurrentPage }: HomeProps) {
  const t = translations[language];
  const [isNavigating, setIsNavigating] = useState(false);

  // Check if device is mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Reset navigation state when component unmounts or after timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 5000); // Reset after 5 seconds as a safety measure

    return () => {
      clearTimeout(timeout);
      setIsNavigating(false);
    };
  }, []);

  // Mobile-specific navigation handler
  const handleMobileNavigation = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isNavigating) {
      setIsNavigating(true);
      // Use a small delay on mobile to prevent freezing
      setTimeout(
        () => {
          setCurrentPage("gallery");
        },
        isMobile ? 100 : 0
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Portfolio images with actual tattoo work - Newest first (WhatsApp images)
  const portfolioImages = [
    {
      id: 1,
      src: whatsapp9,
      alt: t.portfolio.images.abstract,
      title: "Latest Fine Line Artwork",
    },
    {
      id: 2,
      src: whatsapp1,
      alt: t.portfolio.images.butterfly,
      title: "Fine Line Butterfly",
    },
    {
      id: 3,
      src: whatsapp2,
      alt: t.portfolio.images.floral,
      title: "Minimalist Floral",
    },
    {
      id: 4,
      src: whatsapp3,
      alt: t.portfolio.images.geometric,
      title: "Geometric Pattern",
    },
    {
      id: 5,
      src: whatsapp4,
      alt: t.portfolio.images.rose,
      title: "Delicate Rose",
    },
    {
      id: 6,
      src: whatsapp5,
      alt: t.portfolio.images.abstract,
      title: "Abstract Design",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-soft-black text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="logo-font text-soft-black" role="banner">
              Gabriella Tattoo
            </div>

            <div
              className="hidden md:flex items-center space-x-8"
              role="menubar"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-medium-gray hover:text-soft-black transition-colors"
                aria-label="Go to home section"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => setCurrentPage("gallery")}
                className="text-medium-gray hover:text-soft-black transition-colors"
                aria-label="View gallery"
              >
                {t.nav.gallery}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div
                className="flex items-center space-x-1"
                role="group"
                aria-label="Language selection"
              >
                <Button
                  variant={language === "en" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className="h-8 px-2 text-xs"
                  aria-label="Switch to English"
                  aria-pressed={language === "en"}
                >
                  EN
                </Button>
                <Button
                  variant={language === "pt" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("pt")}
                  className="h-8 px-2 text-xs"
                  aria-label="Switch to Portuguese"
                  aria-pressed={language === "pt"}
                >
                  PT
                </Button>
                <Button
                  variant={language === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className="h-8 px-2 text-xs"
                  aria-label="Switch to Spanish"
                  aria-pressed={language === "es"}
                >
                  ES
                </Button>
              </div>

              {/* Social Icon */}
              <a
                href="https://instagram.com/gabriella_tattoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-medium-gray hover:text-soft-black"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Increased Height */}
      <section
        id="home"
        className="relative h-[90vh] md:h-[95vh] flex items-center"
        role="banner"
        aria-labelledby="hero-title"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="Fine line tattoo background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-3xl">
              <div className="space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-xs px-4 py-2 bg-white/90 border-white/30 text-soft-black"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Philadelphia, PA
                  </Badge>
                  <h1
                    id="hero-title"
                    className={`hero-title text-white leading-tight ${
                      language === "en"
                        ? "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                        : language === "es"
                        ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                        : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    }`}
                  >
                    {t.hero.title.split("\n").map((line, index) => (
                      <div key={index} className="block">
                        {line}
                      </div>
                    ))}
                  </h1>
                  <p className="text-lg body-text leading-relaxed max-w-xl text-white">
                    {t.hero.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base gradient-button hover:gradient-button text-white group"
                    onClick={() =>
                      window.open(
                        "https://instagram.com/gabriella_tattoo",
                        "_blank"
                      )
                    }
                    aria-label="Send a direct message to book a tattoo on Instagram"
                  >
                    <Instagram className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t.hero.dmButton}
                    <ArrowRight
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base gradient-button hover:gradient-button text-white group"
                    onClick={() =>
                      window.open("https://wa.me/12154335441", "_blank")
                    }
                    aria-label="Contact via WhatsApp to book"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp to Book
                    <ArrowRight
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleMobileNavigation}
                    className="px-8 py-6 text-base border-gray-300 hover:bg-white/50 bg-white/20 backdrop-blur-sm text-white shrink min-w-0 whitespace-normal body-text touch-manipulation"
                    aria-label="View gallery page"
                    disabled={isNavigating}
                  >
                    {isNavigating ? "Loading..." : t.hero.cta}
                  </Button>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    {t.hero.dmNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Uniform Grid */}
      <section
        id="main-content"
        className="py-20 px-6 gradient-luxury"
        role="main"
        aria-labelledby="portfolio-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="portfolio-title"
              className="text-4xl lg:text-5xl mb-6 text-soft-black"
            >
              {t.portfolio.title}
            </h2>
            <p className="text-lg body-text max-w-2xl mx-auto">
              {t.portfolio.description}
            </p>
          </div>

          {/* Uniform Grid - All images same size */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Portfolio gallery"
          >
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg"
                role="listitem"
              >
                <div className="aspect-[4/5] w-full">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleMobileNavigation}
              className="px-8 py-4 gradient-button hover:gradient-button text-white shrink min-w-0 whitespace-normal body-text touch-manipulation"
              aria-label="View full gallery of tattoo work"
              disabled={isNavigating}
            >
              {isNavigating ? "Loading..." : t.portfolio.viewGallery}
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Responsive Layout */}
      <section
        id="about"
        className="py-20 px-6 bg-white"
        role="region"
        aria-labelledby="about-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Artist Photo - Left on desktop/tablet, top on mobile */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-champagne to-cream rounded-3xl rotate-3 animate-shimmer"></div>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={artistPhoto}
                    alt="Gabriela, fine line tattoo artist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center luxury-card">
                  <div className="text-3xl">✨</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-champagne rounded-full shadow-xl flex items-center justify-center luxury-card">
                  <div className="text-2xl">🎨</div>
                </div>
              </div>
            </div>

            {/* Content - Right on desktop/tablet, bottom on mobile */}
            <div className="space-y-8 order-2 lg:order-2">
              <div className="space-y-6">
                <h2
                  id="about-title"
                  className="text-4xl lg:text-5xl text-soft-black"
                >
                  {t.about.title}
                </h2>
                <div className="text-lg body-text leading-relaxed space-y-4">
                  {t.about.description.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg body-text leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="text-base body-text">
                  Based in Philadelphia, I specialize in creating delicate,
                  meaningful tattoos that celebrate individuality. Ready to book
                  your session? Send me a DM on Instagram to discuss your
                  vision!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, #f0ede8 0%, #e8e4de 30%, #e0dcd6 70%, #d8d4ce 100%)",
        }}
        role="region"
        aria-labelledby="services-title"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            id="services-title"
            className="text-3xl lg:text-4xl text-center mb-16 text-soft-black"
          >
            {t.services.title}
          </h2>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Services offered"
          >
            <div
              className="text-center p-8 luxury-card rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Abstract flowing line decoration on cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-12 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M10 20 Q30 10 50 20 Q70 30 90 20"
                    stroke="#8B7355"
                    strokeWidth="0.8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 50 Q40 30 70 50 Q80 70 90 50"
                    stroke="#8B7355"
                    strokeWidth="0.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 80 Q30 70 50 80 Q70 90 90 80"
                    stroke="#8B7355"
                    strokeWidth="0.4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-4xl mb-4" aria-hidden="true">
                ✏️
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.fineLine}
              </h3>
              <p className="text-sm body-text">{t.services.fineLineDesc}</p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Subtle fine line decoration on cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M20 20 Q40 10 60 20 T100 20"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 40 Q40 30 60 40 T100 40"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 60 Q40 50 60 60 T100 60"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 80 Q40 70 60 80 T100 80"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="text-4xl mb-4" aria-hidden="true">
                ✍️
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.lettering}
              </h3>
              <p className="text-sm body-text">{t.services.letteringDesc}</p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Subtle fine line decoration on cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M20 20 Q40 10 60 20 T100 20"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 40 Q40 30 60 40 T100 40"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 60 Q40 50 60 60 T100 60"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 80 Q40 70 60 80 T100 80"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="text-4xl mb-4" aria-hidden="true">
                🔍
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.microRealism}
              </h3>
              <p className="text-sm body-text">{t.services.microRealismDesc}</p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Subtle fine line decoration on cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M20 20 Q40 10 60 20 T100 20"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 40 Q40 30 60 40 T100 40"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 60 Q40 50 60 60 T100 60"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 80 Q40 70 60 80 T100 80"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="text-4xl mb-4" aria-hidden="true">
                🎨
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.detailedStyles}
              </h3>
              <p className="text-sm body-text">
                {t.services.detailedStylesDesc}
              </p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl md:col-span-2 lg:col-span-1 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Subtle fine line decoration on cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M20 20 Q40 10 60 20 T100 20"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 40 Q40 30 60 40 T100 40"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 60 Q40 50 60 60 T100 60"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M20 80 Q40 70 60 80 T100 80"
                    stroke="#8B7355"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="text-4xl mb-4" aria-hidden="true">
                💝
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.custom}
              </h3>
              <p className="text-sm body-text">{t.services.customDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Info Section */}
      <section
        className="py-20 px-6 bg-white"
        role="region"
        aria-labelledby="studio-title"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="studio-title"
                className="text-3xl lg:text-4xl mb-8 text-soft-black"
              >
                {t.studio.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-button rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-soft-black">{t.studio.location}</h3>
                    <p className="body-text">Pennsylvania, United States</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-button rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-soft-black">{t.studio.hours}</h3>
                    <p className="body-text">{t.studio.schedule}</p>
                    <p className="body-text">{t.studio.closed}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="luxury-card border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4 text-soft-black">
                  {t.booking.title}
                </h3>
                <p className="body-text mb-6">{t.booking.description}</p>
                <Button
                  className="w-full mb-4 gradient-button hover:gradient-button text-white"
                  onClick={() =>
                    window.open(
                      "https://instagram.com/gabriella_tattoo",
                      "_blank"
                    )
                  }
                  aria-label="Book a tattoo consultation via Instagram"
                >
                  <Instagram className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t.booking.cta}
                </Button>
                <div className="text-center mb-4">
                  <p className="text-sm text-medium-gray mb-2">
                    Or contact via WhatsApp:
                  </p>
                  <a
                    href={`https://wa.me/12154335441`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-soft-black hover:text-champagne transition-colors"
                    aria-label="Contact via WhatsApp"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    {t.booking.whatsapp}
                  </a>
                </div>
                <p className="text-xs text-medium-gray text-center">
                  {t.booking.note}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Updated with black gradient and shine effect */}
      <footer
        className="gradient-footer text-white py-16 px-6"
        role="contentinfo"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="logo-font text-2xl mb-4 text-white">
                Gabriella Tattoo
              </h3>
              <p className="text-gray-300 mb-4">{t.footer.location}</p>
              <p className="text-gray-400 text-sm">{t.footer.experience}</p>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-white">{t.footer.bookTitle}</h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  {t.footer.bookDescription}
                </p>
                <a
                  href="https://instagram.com/gabriella_tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-2"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 mr-2" aria-hidden="true" />
                  @gabriella_tattoo
                </a>
                <a
                  href={`https://wa.me/12154335441`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                  aria-label="Contact via WhatsApp"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  {t.footer.whatsapp}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-white">{t.footer.credits}</h4>
              <p className="text-gray-300 text-sm mb-2">
                Made with{" "}
                <span className="inline-block animate-spin text-red-500">
                  ❤️
                </span>{" "}
                by{" "}
                <a
                  href="https://pickypixels.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Picky Pixels Studio
                </a>
              </p>
              <p className="text-gray-400 text-xs">{t.footer.crafting}</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
