import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";

type Language = "en" | "pt" | "es";
type Page = "home" | "gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");

  // Detect browser language and load saved preference on component mount
  useEffect(() => {
    // Check if user has a saved language preference
    const savedLanguage = localStorage.getItem(
      "gabriella-tattoo-language"
    ) as Language;

    if (savedLanguage && ["en", "pt", "es"].includes(savedLanguage)) {
      // Use saved preference
      setLanguage(savedLanguage);
    } else {
      // Detect browser language if no saved preference
      const browserLang = navigator.language.toLowerCase();

      if (browserLang.startsWith("es")) {
        setLanguage("es");
      } else if (browserLang.startsWith("pt")) {
        setLanguage("pt");
      } else {
        setLanguage("en");
      }
    }
  }, []);

  // Save language preference to localStorage whenever it changes
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("gabriella-tattoo-language", newLanguage);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "home" && (
        <Home
          language={language}
          setLanguage={handleLanguageChange}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "gallery" && (
        <Gallery
          language={language}
          setLanguage={handleLanguageChange}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
