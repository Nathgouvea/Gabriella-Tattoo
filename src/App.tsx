import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";

type Language = "en" | "pt" | "es";
type Page = "home" | "gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");

  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("es")) {
      setLanguage("es");
    } else if (browserLang.startsWith("pt")) {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "home" && (
        <Home
          language={language}
          setLanguage={setLanguage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "gallery" && (
        <Gallery
          language={language}
          setLanguage={setLanguage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
