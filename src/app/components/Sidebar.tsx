import { useState } from 'react';
import { ChevronDown, ChevronRight, X, Home, CloudRain, Frown, BookOpen } from 'lucide-react';
import { translations } from '../translations';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
  language: string;
}

export function Sidebar({ activeSection, setActiveSection, isOpen, closeSidebar, language }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['depression']);
  const t = translations[language as keyof typeof translations].sidebar;

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const getSectionColor = (id: string) => {
    switch (id) {
      case 'home': return 'hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 dark:text-green-400 border-green-500';
      case 'depression': return 'hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-500';
      case 'anxiety': return 'hover:bg-pink-50 dark:hover:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-500';
      case 'library': return 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-500';
      default: return 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-500';
    }
  };

  const getActiveStyles = (id: string) => {
    if (id.includes('depression')) return 'bg-blue-600 text-white shadow-md shadow-blue-500/20';
    if (id.includes('anxiety')) return 'bg-pink-600 text-white shadow-md shadow-pink-500/20';
    if (id === 'home') return 'bg-green-600 text-white shadow-md shadow-green-500/20';
    if (id === 'library') return 'bg-yellow-500 text-white shadow-md shadow-yellow-500/20';
    return 'bg-[#1E2A38] text-white';
  };

  const menuItems = [
    { id: 'home', label: t.home, icon: Home, subsections: [] },
    {
      id: 'depression',
      label: t.depression,
      icon: CloudRain,
      subsections: [
        { id: 'what-is-depression', label: t.whatIsDepression },
        { id: 'misconceptions', label: t.misconceptions },
        { id: 'what-you-can-do', label: t.whatYouCanDo },
        { id: 'references', label: t.references }
      ]
    },
    {
      id: 'anxiety',
      label: t.anxiety,
      icon: Frown,
      subsections: [
        { id: 'what-is-anxiety', label: t.whatIsAnxiety },
        { id: 'cause', label: t.cause },
        { id: 'treatment', label: t.treatment },
        { id: 'anxiety-references', label: t.references }
      ]
    },
    {
      id: 'library',
      label: t.library,
      icon: BookOpen,
      subsections: []
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed md:sticky top-[60px] left-0 h-[calc(100vh-60px)] w-[260px] bg-[#F8FAFC] dark:bg-gray-800 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <button
          onClick={closeSidebar}
          className="md:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded"
        >
          <X size={20} />
        </button>

        <nav className="p-4 space-y-2">
          {menuItems.map(item => (
            <div key={item.id} className="group/item">
              {item.subsections?.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleSection(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      expandedSections.includes(item.id) 
                        ? 'bg-white dark:bg-gray-700 shadow-sm' 
                        : 'hover:bg-white dark:hover:bg-gray-700'
                    } ${getSectionColor(item.id).split(' ')[0]}`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon size={20} className={expandedSections.includes(item.id) ? getSectionColor(item.id).split(' ')[2] : 'text-gray-500'} />}
                      <span className={`font-semibold ${
                        expandedSections.includes(item.id) 
                          ? getSectionColor(item.id).split(' ')[2] 
                          : 'text-gray-700 dark:text-gray-200'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    {expandedSections.includes(item.id) ? (
                      <ChevronDown size={18} className={getSectionColor(item.id).split(' ')[2]} />
                    ) : (
                      <ChevronRight size={18} className="text-gray-400 group-hover/item:text-gray-600" />
                    )}
                  </button>

                  {expandedSections.includes(item.id) && (
                    <div className="mt-2 ml-2 pl-4 border-l-2 border-gray-100 dark:border-gray-700 space-y-1 animate-in slide-in-from-left-2 duration-300">
                      {item.subsections.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveSection(sub.id);
                            closeSidebar();
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeSection === sub.id
                              ? getActiveStyles(item.id)
                              : `text-gray-600 dark:text-gray-400 ${getSectionColor(item.id).split(' ').slice(0, 2).join(' ')}`
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    closeSidebar();
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                    activeSection === item.id
                      ? getActiveStyles(item.id)
                      : `text-gray-700 dark:text-gray-200 font-medium ${getSectionColor(item.id).split(' ').slice(0, 2).join(' ')}`
                  }`}
                >
                  {item.icon && (
                    <item.icon 
                      size={20} 
                      className={activeSection === item.id ? 'text-white' : getSectionColor(item.id).split(' ')[2]} 
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
