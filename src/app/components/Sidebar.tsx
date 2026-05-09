import { useState } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

export function Sidebar({ activeSection, setActiveSection, isOpen, closeSidebar }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['depression']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    { id: 'home', label: 'Home', subsections: [] },
    {
      id: 'depression',
      label: 'Depression',
      subsections: [
        { id: 'what-is-depression', label: 'What is Depression?' },
        { id: 'misconceptions', label: 'Misconceptions' },
        { id: 'what-you-can-do', label: 'What You Can Do' },
        { id: 'references', label: 'References' }
      ]
    },
    {
      id: 'anxiety',
      label: 'Anxiety',
      subsections: [
        { id: 'what-is-anxiety', label: 'What is Anxiety?' },
        { id: 'cause', label: 'Cause' },
        { id: 'treatment', label: 'Treatment' },
        { id: 'anxiety-references', label: 'References' }
      ]
    },
    {
      id: 'library',
      label: 'Library',
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

        <nav className="p-4">
          {menuItems.map(item => (
            <div key={item.id} className="mb-2">
              {item.subsections?.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-[#E6EEF6] dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                    {expandedSections.includes(item.id) ? (
                      <ChevronDown size={16} className="text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" />
                    )}
                  </button>

                  {expandedSections.includes(item.id) && (
                    <div className="mt-1 ml-3">
                      {item.subsections.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveSection(sub.id);
                            closeSidebar();
                          }}
                          className={`w-full text-left px-3 py-2 rounded transition-colors ${
                            activeSection === sub.id
                              ? 'bg-[#1E2A38] text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-[#E6EEF6] dark:hover:bg-gray-700'
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
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#1E2A38] text-white'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-[#E6EEF6] dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
