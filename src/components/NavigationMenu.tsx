import React from 'react';

const menuItems = ['Home', 'Product', 'About', 'Contact'];

export function NavigationMenu() {
  return (
    <div>
    <nav className=" mt-2 fixed mx-36 px-4 py-2 rounded-md top-0 left-0 right-0 z-20 flex items-center justify-center bg-white/5 backdrop-blur  ">
      <ul className="flex   space-x-1">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="group  z-50 inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2  text-xl transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
}