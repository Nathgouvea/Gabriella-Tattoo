import { useState, useEffect, useMemo } from "react";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { ErrorBoundary } from "./components/ErrorBoundary";

type Language = "en" | "pt" | "es";
type Page = "home" | "gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");
  const [isNavigating, setIsNavigating] = useState(false);

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
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      localStorage.setItem("gabriella-tattoo-language", newLanguage);
    }
  };

  // Handle page navigation with debouncing
  const handlePageChange = (newPage: Page) => {
    if (!isNavigating && newPage !== currentPage) {
      setIsNavigating(true);
      setCurrentPage(newPage);
      // Reset navigation flag after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    }
  };

  // Memoize components to prevent unnecessary re-renders
  const homeComponent = useMemo(
    () => (
      <Home
        language={language}
        setLanguage={handleLanguageChange}
        setCurrentPage={handlePageChange}
      />
    ),
    [language, handleLanguageChange, handlePageChange]
  );

  const galleryComponent = useMemo(
    () => (
      <Gallery
        language={language}
        setLanguage={handleLanguageChange}
        setCurrentPage={handlePageChange}
      />
    ),
    [language, handleLanguageChange, handlePageChange]
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {currentPage === "home" && homeComponent}
        {currentPage === "gallery" && galleryComponent}
      </div>
    </ErrorBoundary>
  );
}
