import React from 'react';

const footerLinks = ['Technology', 'Product', 'Learn'];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-3 ">
      <p className="text-center text-lg leading-loose md:text-left">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}