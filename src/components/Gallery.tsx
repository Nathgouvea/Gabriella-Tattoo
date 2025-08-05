import { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { translations } from "./translations";
import tattoo1 from "../assets/Screenshot 2025-07-26 at 16.21.47.webp";
import tattoo2 from "../assets/Screenshot 2025-07-26 at 16.22.16.webp";
import tattoo3 from "../assets/Screenshot 2025-07-26 at 16.23.04.webp";
import tattoo4 from "../assets/Screenshot 2025-07-26 at 16.23.23.webp";
import tattoo5 from "../assets/Screenshot 2025-07-26 at 16.24.02.webp";
import tattoo6 from "../assets/Screenshot 2025-07-26 at 16.24.43.webp";
import tattoo7 from "../assets/Screenshot 2025-07-26 at 16.26.35.webp";
import tattoo8 from "../assets/Screenshot 2025-07-26 at 16.26.45.webp";
import tattoo9 from "../assets/Screenshot 2025-07-26 at 16.26.53.webp";
import tattoo10 from "../assets/Screenshot 2025-07-26 at 16.27.09.webp";
import tattoo12 from "../assets/Screenshot 2025-07-26 at 16.27.35.webp";
import tattoo13 from "../assets/Screenshot 2025-07-26 at 16.27.46.webp";
import whatsapp1 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (1).webp";
import whatsapp2 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (2).webp";
import whatsapp3 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (3).webp";
import whatsapp4 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (4).webp";
import whatsapp5 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (5).webp";
import whatsapp6 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (6).webp";
import whatsapp7 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (7).webp";
import whatsapp8 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49 (8).webp";
import whatsapp9 from "../assets/WhatsApp Image 2025-07-30 at 23.02.49.webp";

type Language = "en" | "pt" | "es";

interface GalleryProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setCurrentPage: (page: "home" | "gallery") => void;
}

export function Gallery({
  language,
  setLanguage,
  setCurrentPage,
}: GalleryProps) {
  const t = translations[language];

  // Scroll to top when component mounts
  useEffect(() => {
    // Use setTimeout to ensure component is fully mounted
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Portfolio with actual tattoo images
  const portfolioItems = [
    {
      id: 1,
      image: tattoo1,
      title: t.gallery.items.butterfly,
      category: "nature",
    },
    {
      id: 2,
      image: tattoo2,
      title: t.gallery.items.floral,
      category: "floral",
    },
    {
      id: 3,
      image: tattoo3,
      title: t.gallery.items.geometric,
      category: "geometric",
    },
    {
      id: 4,
      image: tattoo4,
      title: t.gallery.items.rose,
      category: "floral",
    },
    {
      id: 5,
      image: tattoo5,
      title: t.gallery.items.abstract,
      category: "geometric",
    },
    {
      id: 6,
      image: tattoo6,
      title: t.gallery.items.nature,
      category: "nature",
    },
    {
      id: 7,
      image: tattoo7,
      title: t.gallery.items.portrait,
      category: "portrait",
    },
    {
      id: 8,
      image: tattoo8,
      title: t.gallery.items.sleeve,
      category: "geometric",
    },
    {
      id: 9,
      image: tattoo9,
      title: t.gallery.items.artwork,
      category: "geometric",
    },
    {
      id: 10,
      image: tattoo10,
      title: t.gallery.items.script,
      category: "lettering",
    },
    {
      id: 11,
      image: tattoo12,
      title: t.gallery.items.composition,
      category: "geometric",
    },
    {
      id: 12,
      image: tattoo13,
      title: t.gallery.items.linework,
      category: "floral",
    },
    {
      id: 13,
      image: whatsapp1,
      title: t.gallery.items.butterfly,
      category: "nature",
    },
    {
      id: 14,
      image: whatsapp2,
      title: t.gallery.items.floral,
      category: "floral",
    },
    {
      id: 15,
      image: whatsapp3,
      title: t.gallery.items.geometric,
      category: "geometric",
    },
    {
      id: 16,
      image: whatsapp4,
      title: t.gallery.items.rose,
      category: "floral",
    },
    {
      id: 17,
      image: whatsapp5,
      title: t.gallery.items.abstract,
      category: "geometric",
    },
    {
      id: 18,
      image: whatsapp6,
      title: t.gallery.items.nature,
      category: "nature",
    },
    {
      id: 19,
      image: whatsapp7,
      title: t.gallery.items.portrait,
      category: "portrait",
    },
    {
      id: 20,
      image: whatsapp8,
      title: t.gallery.items.sleeve,
      category: "geometric",
    },
    {
      id: 21,
      image: whatsapp9,
      title: t.gallery.items.artwork,
      category: "geometric",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-soft-black text-white px-4 py-2 rounded z-50"
      >
        {t.gallery.skipToContent}
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
        role="navigation"
        aria-label="Gallery navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2 text-medium-gray hover:text-soft-black"
              aria-label="Return to home page"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{t.gallery.backToHome}</span>
            </Button>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 logo-font text-soft-black"
              role="banner"
            >
              {t.gallery.portfolioTitle}
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

      {/* Gallery Header */}
      <section
        className="pt-32 pb-12 px-6 gradient-luxury"
        role="banner"
        aria-labelledby="gallery-title"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="gallery-title"
            className="hero-title text-5xl lg:text-6xl mb-6 text-soft-black"
          >
            {t.gallery.title}
          </h1>
          <p className="text-lg body-text max-w-2xl mx-auto mb-8">
            {t.gallery.description}
          </p>
        </div>
      </section>

      {/* Gallery Grid - Uniform Size, Responsive */}
      <section id="main-content" className="py-16 px-6 bg-white" role="main">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            role="list"
            aria-label="Gallery of tattoo work"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item group relative rounded-xl overflow-hidden shadow-md"
                role="listitem"
              >
                <div className="aspect-[4/5] w-full">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-title text-4xl lg:text-5xl mb-6 text-soft-black">
            {t.cta.title}
          </h2>
          <p className="text-lg body-text mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <Button
            size="lg"
            className="px-8 py-6 gradient-button hover:gradient-button text-white"
            onClick={() =>
              window.open("https://instagram.com/gabriella_tattoo", "_blank")
            }
            aria-label="Send a message to book a tattoo on Instagram"
          >
            <Instagram className="w-5 h-5 mr-2" aria-hidden="true" />
            {t.cta.button}
          </Button>
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
