import { useState } from "react";
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
  const [filter, setFilter] = useState("all");

  // Portfolio with actual tattoo images
  const portfolioItems = [
    {
      id: 1,
      image: tattoo1,
      title: "Fine Line Butterfly",
      category: "nature",
    },
    {
      id: 2,
      image: tattoo2,
      title: "Minimalist Floral",
      category: "floral",
    },
    {
      id: 3,
      image: tattoo3,
      title: "Geometric Pattern",
      category: "geometric",
    },
    {
      id: 4,
      image: tattoo4,
      title: "Delicate Rose",
      category: "floral",
    },
    {
      id: 5,
      image: tattoo5,
      title: "Abstract Design",
      category: "geometric",
    },
    {
      id: 6,
      image: tattoo6,
      title: "Nature Elements",
      category: "nature",
    },
    {
      id: 7,
      image: tattoo7,
      title: "Fine Line Portrait",
      category: "portrait",
    },
    {
      id: 8,
      image: tattoo8,
      title: "Ornate Sleeve Design",
      category: "geometric",
    },
    {
      id: 9,
      image: tattoo9,
      title: "Minimalist Artwork",
      category: "geometric",
    },
    {
      id: 10,
      image: tattoo10,
      title: "Elegant Script",
      category: "lettering",
    },
    {
      id: 11,
      image: tattoo12,
      title: "Geometric Composition",
      category: "geometric",
    },
    {
      id: 12,
      image: tattoo13,
      title: "Delicate Linework",
      category: "floral",
    },
  ];

  const categories = [
    { key: "all", label: "All" },
    { key: "nature", label: "Nature" },
    { key: "geometric", label: "Geometric" },
    { key: "portrait", label: "Portrait" },
    { key: "floral", label: "Floral" },
    { key: "lettering", label: "Lettering" },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

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
        aria-label="Gallery navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2 text-medium-gray hover:text-soft-black"
              aria-label="Return to home page"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Button>

            <div className="logo-font text-soft-black" role="banner">
              Portfolio Gallery
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
        className="pt-24 pb-12 px-6 gradient-luxury"
        role="banner"
        aria-labelledby="gallery-title"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="gallery-title"
            className="hero-title text-5xl lg:text-6xl mb-6 text-soft-black"
          >
            Fine Line Portfolio
          </h1>
          <p className="text-lg body-text max-w-2xl mx-auto mb-8">
            Explore our complete collection of delicate, minimalist tattoos.
            Each piece represents hours of careful planning and precise
            execution, showcasing the artistry of fine-line tattooing.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section
        className="py-8 px-6 bg-white border-b border-gray-100"
        role="region"
        aria-labelledby="filter-title"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 ${
                  filter === category.key
                    ? "gradient-button text-white"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                aria-label={`Filter by ${category.label}`}
                aria-pressed={filter === category.key}
              >
                {category.label}
              </Button>
            ))}
          </div>
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
            {filteredItems.map((item) => (
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
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-300 capitalize">
                    {item.category}
                  </p>
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
            Ready for Your Fine Line Tattoo?
          </h2>
          <p className="text-lg body-text mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Send me a message on
            Instagram to discuss your design ideas and book your personalized
            consultation.
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
            Message @gabriella_tattoo
          </Button>
        </div>
      </section>

      {/* Footer - Updated with soft gray gradient and Gabriela branding */}
      <footer
        className="gradient-footer text-gray-800 py-16 px-6"
        role="contentinfo"
      >
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
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 mr-2" aria-hidden="true" />
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
