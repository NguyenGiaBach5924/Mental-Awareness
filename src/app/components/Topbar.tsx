import { Search, Moon, Sun, Menu } from 'lucide-react';
import { translations } from '../translations';
import heartIcon from '../../images/heart.png';

interface TopbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
  toggleSidebar: () => void;
}

export function Topbar({ darkMode, toggleDarkMode, language, toggleLanguage, toggleSidebar }: TopbarProps) {
  const t = translations[language as keyof typeof translations].topbar;

  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] bg-gradient-to-r from-[#1E2A38] via-[#2c3e50] to-[#1E2A38] border-b border-blue-500/30 z-50 flex items-center px-4 md:px-6 shadow-lg">
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white mr-4 hover:bg-white/10 p-2 rounded transition-all active:scale-95"
      >
        <Menu size={24} />
      </button>

      <div className="flex-shrink-0 text-white mr-8 flex items-center gap-2 group cursor-pointer" onClick={() => window.location.reload()}>
        <img src={heartIcon} alt="Logo" className="w-8 h-8 object-contain animate-pulse" />
        <h1 className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
      </div>

      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3 md:gap-4">
        <button
          onClick={toggleLanguage}
          className="text-white hover:bg-white/10 px-3 py-1 rounded transition-colors"
        >
          {t.languageToggle}
        </button>

        <button
          onClick={toggleDarkMode}
          className="text-white hover:bg-white/10 p-2 rounded transition-colors"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
}
