interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="hidden xl:block sticky top-[80px] w-[220px] ml-8">
      <div className="p-4 bg-[#F8FAFC] dark:bg-gray-800 rounded-lg">
        <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-200">On this page</h3>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1E2A38] dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
