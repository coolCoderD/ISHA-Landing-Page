import React, { useState } from 'react';

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'FAQs', href: '#faqs' },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState(menuItems[0].name); // Default to the first item

  return (
    <div>
      <nav className="mt-2 py-4 z-50 fixed px-4 rounded-md top-0 left-0 right-0 flex items-center justify-center">
        <ul className="flex space-x-1 font-bold py-2 px-4 bg-black/5 backdrop-blur">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href} // Links to the section IDs
                onClick={() => setActiveTab(item.name)} // Set active tab on click
                className={`group z-50 inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === item.name
                    ? 'font-extrabold text-accent-foreground' // Style for active tab
                    : 'font-normal'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
