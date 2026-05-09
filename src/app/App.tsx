import { useState, useEffect } from "react";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { ContentSection } from "./components/ContentSection";
import { TableOfContents } from "./components/TableOfContents";
import { Footer } from "./components/Footer";
import { translations } from "./translations";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [activeSection, setActiveSection] = useState(
    "home",
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

  const t = translations[language as keyof typeof translations].toc;

  const tocItems = [
    { id: "definition", label: t.definition },
    { id: "symptoms", label: t.symptoms },
    { id: "myths", label: t.myths },
    { id: "biological", label: t.biological },
    { id: "seek-help", label: t.seekHelp },
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
          language={language}
        />

        <main className="flex-1 flex justify-center">
          <div className={`${activeSection === 'home' ? 'max-w-[1000px]' : 'max-w-[800px]'} w-full px-6 py-8 transition-all duration-500`}>
            <ContentSection 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              language={language}
            />
          </div>

          {activeSection !== 'home' && <TableOfContents items={tocItems} language={language} />}
        </main>
      </div>

      <Footer language={language} />
    </div>
  );
}