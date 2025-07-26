import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { translations } from "./translations";
import artistPhoto from "../assets/gabriella-tattoo-artist.webp";
import heroImage from "../assets/image-eyes-hero-section.webp";
import tattoo1 from "../assets/Screenshot 2025-07-26 at 16.21.47.webp";
import tattoo2 from "../assets/Screenshot 2025-07-26 at 16.22.16.webp";
import tattoo3 from "../assets/Screenshot 2025-07-26 at 16.23.04.webp";
import tattoo4 from "../assets/Screenshot 2025-07-26 at 16.23.23.webp";
import tattoo5 from "../assets/Screenshot 2025-07-26 at 16.24.02.webp";
import tattoo6 from "../assets/Screenshot 2025-07-26 at 16.24.43.webp";

type Language = "en" | "pt" | "es";

interface HomeProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setCurrentPage: (page: "home" | "gallery") => void;
}

export function Home({ language, setLanguage, setCurrentPage }: HomeProps) {
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Portfolio images with actual tattoo work
  const portfolioImages = [
    {
      id: 1,
      src: tattoo1,
      alt: t.portfolio.images.butterfly,
      title: "Fine Line Butterfly",
    },
    {
      id: 2,
      src: tattoo2,
      alt: t.portfolio.images.floral,
      title: "Minimalist Floral",
    },
    {
      id: 3,
      src: tattoo3,
      alt: t.portfolio.images.geometric,
      title: "Geometric Pattern",
    },
    {
      id: 4,
      src: tattoo4,
      alt: t.portfolio.images.rose,
      title: "Delicate Rose",
    },
    {
      id: 5,
      src: tattoo5,
      alt: t.portfolio.images.abstract,
      title: "Abstract Design",
    },
    {
      id: 6,
      src: tattoo6,
      alt: t.portfolio.images.nature,
      title: "Nature Elements",
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

      {/* Hero Section - Reduced Height */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center"
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
                    className={`hero-title text-white ${
                      language === "en"
                        ? "text-4xl sm:text-6xl lg:text-8xl"
                        : "text-3xl sm:text-5xl lg:text-7xl"
                    }`}
                  >
                    {t.hero.title}
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
                    variant="outline"
                    size="lg"
                    onClick={() => setCurrentPage("gallery")}
                    className="px-8 py-6 text-base border-gray-300 hover:bg-white/50 bg-white/20 backdrop-blur-sm text-white"
                    aria-label="View gallery page"
                  >
                    {t.hero.cta}
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
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setCurrentPage("gallery")}
              className="px-8 py-4 gradient-button hover:gradient-button text-white"
              aria-label="View full gallery of tattoo work"
            >
              {t.portfolio.viewGallery}
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
                <p className="text-lg body-text leading-relaxed">
                  {t.about.description}
                </p>
                <p className="text-base body-text">
                  Based in Philadelphia, I specialize in creating delicate,
                  meaningful tattoos that celebrate individuality. Ready to book
                  your session? Send me a DM on Instagram to discuss your
                  vision!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="luxury-card p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🌟</div>
                  <span className="text-sm text-soft-black">
                    {t.about.experience}
                  </span>
                </div>
                <div className="luxury-card p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <span className="text-sm text-soft-black">
                    {t.about.tattoos}
                  </span>
                </div>
                <div className="luxury-card p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <span className="text-sm text-soft-black">
                    {t.about.specialty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Compact */}
      <section
        className="py-16 px-6 gradient-elegant"
        role="region"
        aria-labelledby="services-title"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            id="services-title"
            className="text-3xl lg:text-4xl text-center mb-12 text-soft-black"
          >
            {t.services.title}
          </h2>

          <div
            className="grid md:grid-cols-3 gap-6"
            role="list"
            aria-label="Services offered"
          >
            <div
              className="text-center p-8 luxury-card rounded-2xl"
              role="listitem"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                ✏️
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.fineLine}
              </h3>
              <p className="text-sm body-text">{t.services.fineLineDesc}</p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl"
              role="listitem"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                🌸
              </div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.minimalist}
              </h3>
              <p className="text-sm body-text">{t.services.minimalistDesc}</p>
            </div>

            <div
              className="text-center p-8 luxury-card rounded-2xl"
              role="listitem"
            >
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
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 mr-2" aria-hidden="true" />
                  @gabriella_tattoo
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-white">{t.footer.credits}</h4>
              <p className="text-gray-300 text-sm mb-2">
                {t.footer.madeWithLove}{" "}
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
