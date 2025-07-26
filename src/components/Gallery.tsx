import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { translations } from "./translations";
import exampleTattoo1 from "figma:asset/9bc706fd2d858c8d9e5e2c453a2f7c176bfacc29.svg";
import exampleTattoo2 from "figma:asset/b099e7919f42b1e0778bada2617c6b0fd70c9b5b.svg";
import tattooExample1 from "figma:asset/2d84f200dbfea1ff64ef5ba618db7652ce0e935c.svg";
import tattooExample2 from "figma:asset/07a9a0df8db5c4c3bd7e0dd0838b0919c3cfe184.svg";
import newTattoo2 from "figma:asset/96619490dcdef265bdca81447264a9ec2b776985.svg";
import newTattoo3 from "figma:asset/c9a08f084654744d9058dbf5f6ce6288d87638b2.svg";

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

  // Updated portfolio - removed bamboo plant, uniform sizes
  const portfolioItems = [
    {
      id: 1,
      image: exampleTattoo1,
      title: "Delicate Butterfly",
      category: "nature",
    },
    {
      id: 2,
      image: newTattoo2,
      title: "Celestial Eye",
      category: "portrait",
    },
    {
      id: 3,
      image: newTattoo3,
      title: "Ornate Sleeve",
      category: "geometric",
    },
    {
      id: 4,
      image: exampleTattoo2,
      title: "Geometric Symbols",
      category: "geometric",
    },
    {
      id: 5,
      image: tattooExample1,
      title: "Realistic Portrait",
      category: "portrait",
    },
    {
      id: 6,
      image: tattooExample2,
      title: "Wing Design",
      category: "nature",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=800&fit=crop",
      title: "Floral Branch",
      category: "nature",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      title: "Minimalist Rose",
      category: "floral",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      title: "Script Lettering",
      category: "lettering",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
      title: "Constellation",
      category: "geometric",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=600&fit=crop",
      title: "Abstract Lines",
      category: "geometric",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop",
      title: "Line Art Portrait",
      category: "portrait",
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2 text-medium-gray hover:text-soft-black"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>

            <div className="logo-font text-soft-black">Portfolio Gallery</div>

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

      {/* Gallery Header */}
      <section className="pt-24 pb-12 px-6 gradient-luxury">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title text-5xl lg:text-6xl mb-6 text-soft-black">
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
      <section className="py-8 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
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
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Uniform Size, Responsive */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item group relative rounded-xl overflow-hidden shadow-md"
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
          >
            <Instagram className="w-5 h-5 mr-2" />
            Message @gabriella_tattoo
          </Button>
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
