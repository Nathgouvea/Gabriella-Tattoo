import { useState } from "react";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";

type Language = "en" | "pt" | "es";
type Page = "home" | "gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");

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
