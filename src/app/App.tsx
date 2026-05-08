import { useState, useEffect } from "react";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { ContentSection } from "./components/ContentSection";
import { TableOfContents } from "./components/TableOfContents";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [activeSection, setActiveSection] = useState(
    "what-is-depression",
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () =>
    setLanguage(language === "EN" ? "VI" : "EN");
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const tocItems = [
    { id: "definition", label: "What is Depression?" },
    { id: "symptoms", label: "Common Symptoms" },
    { id: "myths", label: "Myth vs. Reality" },
    { id: "seek-help", label: "Seek Professional Help" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Topbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex pt-[60px]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          closeSidebar={closeSidebar}
        />

        <main className="flex-1 flex justify-center">
          <div className="max-w-[800px] w-full px-6 py-8">
            <ContentSection activeSection={activeSection} />
          </div>

          <TableOfContents items={tocItems} />
        </main>
      </div>

      <Footer />
    </div>
  );
}