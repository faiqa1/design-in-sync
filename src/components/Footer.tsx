
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-portfolio-purple py-4 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-white text-center">© {new Date().getFullYear()} Faiqa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
