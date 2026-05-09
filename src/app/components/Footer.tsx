import { Facebook, Instagram, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { translations } from '../translations';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language as keyof typeof translations].footer;

  return (
    <footer className="bg-gradient-to-b from-[#2C3E50] to-[#1a252f] dark:from-gray-900 dark:to-black text-gray-300 mt-16 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              {t.aboutUs}
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              {t.aboutUsText}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-600/10 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/20 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-400/20 group" title="Zalo">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
              {t.contact}
            </h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@mentalhealthawareness.org" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                <Mail size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                info@mentalhealthawareness.org
              </a>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                +84 (0) 123 456 789
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              {t.needHelp}
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              {t.needHelpText}
            </p>
            <button className="px-6 py-2 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black rounded-full text-sm font-bold transition-all duration-300 border border-yellow-500/50">
              Emergency Hotlines
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#depression" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400" />
                  Depression
                </a>
              </li>
              <li>
                <a href="#anxiety" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400" />
                  Anxiety
                </a>
              </li>
              <li>
                <a href="#library" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400" />
                  Medical Library
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 mb-8">
            <p className="text-xs text-gray-500 leading-relaxed italic text-center">
              {t.disclaimer}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {t.rightsReserved}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
