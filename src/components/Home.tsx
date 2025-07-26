import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { translations } from "./translations";
import artistPhoto from "../assets/gabriella-tattoo-artist.webp";
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
      alt: "Fine line butterfly tattoo",
      title: "Fine Line Butterfly",
    },
    {
      id: 2,
      src: tattoo2,
      alt: "Minimalist floral tattoo",
      title: "Minimalist Floral",
    },
    {
      id: 3,
      src: tattoo3,
      alt: "Geometric pattern tattoo",
      title: "Geometric Pattern",
    },
    {
      id: 4,
      src: tattoo4,
      alt: "Delicate rose tattoo",
      title: "Delicate Rose",
    },
    {
      id: 5,
      src: tattoo5,
      alt: "Abstract design tattoo",
      title: "Abstract Design",
    },
    {
      id: 6,
      src: tattoo6,
      alt: "Nature elements tattoo",
      title: "Nature Elements",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="logo-font text-soft-black">Gabriela Tattoo</div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-medium-gray hover:text-soft-black transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => setCurrentPage("gallery")}
                className="text-medium-gray hover:text-soft-black transition-colors"
              >
                {t.nav.gallery}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1">
                <Button
                  variant={language === "en" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className="h-8 px-2 text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === "pt" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("pt")}
                  className="h-8 px-2 text-xs"
                >
                  PT
                </Button>
                <Button
                  variant={language === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className="h-8 px-2 text-xs"
                >
                  ES
                </Button>
              </div>

              {/* Social Icon */}
              <a
                href="https://instagram.com/gabriella_tattoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-medium-gray hover:text-soft-black"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reduced Height */}
      <section id="home" className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={tattoo3}
            alt="Fine line tattoo background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-3xl">
              <div className="space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-xs px-4 py-2 bg-white/90 border-gray-200"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Philadelphia, PA
                  </Badge>
                  <h1 className="hero-title text-6xl lg:text-8xl">
                    {t.hero.title}
                  </h1>
                  <h2 className="text-xl lg:text-2xl body-text">
                    {t.hero.subtitle}
                  </h2>
                  <p className="text-lg body-text leading-relaxed max-w-xl">
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
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Send a DM to Book
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection("portfolio")}
                    className="px-8 py-6 text-base border-gray-300 hover:bg-white/50 bg-white/20 backdrop-blur-sm"
                  >
                    {t.hero.cta}
                  </Button>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-medium-gray bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    ✨ To book a tattoo, send us a DM on Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Uniform Grid */}
      <section id="portfolio" className="py-20 px-6 gradient-luxury">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-soft-black">
              Explore Our Artistry
            </h2>
            <p className="text-lg body-text max-w-2xl mx-auto">
              Discover a collection of delicate, minimalist tattoos that
              showcase the beauty of fine-line artistry. Each piece tells a
              unique story through precision and elegance.
            </p>
          </div>

          {/* Uniform Grid - All images same size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/5] w-full">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">Fine line tattoo</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setCurrentPage("gallery")}
              className="px-8 py-4 gradient-button hover:gradient-button text-white"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Responsive Layout */}
      <section id="about" className="py-20 px-6 bg-white">
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
                <h2 className="text-4xl lg:text-5xl text-soft-black">
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
      <section className="py-16 px-6 gradient-elegant">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-center mb-12 text-soft-black">
            {t.services.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-8 luxury-card rounded-2xl">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.fineLine}
              </h3>
              <p className="text-sm body-text">{t.services.fineLineDesc}</p>
            </div>

            <div className="text-center p-8 luxury-card rounded-2xl">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.minimalist}
              </h3>
              <p className="text-sm body-text">{t.services.minimalistDesc}</p>
            </div>

            <div className="text-center p-8 luxury-card rounded-2xl">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg mb-3 text-soft-black">
                {t.services.custom}
              </h3>
              <p className="text-sm body-text">{t.services.customDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Info Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-8 text-soft-black">
                {t.studio.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-button rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-soft-black">{t.studio.location}</h3>
                    <p className="body-text">Pennsylvania, United States</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-button rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
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
                >
                  <Instagram className="w-4 h-4 mr-2" />
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

      {/* Footer - Updated with soft gray gradient and Gabriela branding */}
      <footer className="gradient-footer text-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="logo-font text-2xl mb-4 text-gray-800">
                Gabriela Tattoo
              </h3>
              <p className="text-gray-600 mb-4">Philadelphia, PA</p>
              <p className="text-gray-500 text-sm">
                Fine line tattoo artistry with 5+ years of experience
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-gray-800">Book Your Tattoo</h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  🎨 To book a tattoo, DM us on Instagram for personalized
                  consultation
                </p>
                <a
                  href="https://instagram.com/gabriella_tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @gabriella_tattoo
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-gray-800">Credits</h4>
              <p className="text-gray-600 text-sm mb-2">
                Made with love by{" "}
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Picky Pixels Studio
                </a>
              </p>
              <p className="text-gray-500 text-xs">
                Crafting beautiful web experiences
              </p>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
