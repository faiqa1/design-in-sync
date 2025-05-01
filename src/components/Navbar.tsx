
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full max-w-6xl mx-auto py-4 px-4">
      <div className="flex-shrink-0">
        <Link to="/" className="bg-portfolio-purple text-white font-medium px-4 py-2 rounded-md">
          Chill Dev
        </Link>
      </div>
      
      <div className="flex items-center">
        <ul className="flex bg-portfolio-purple rounded-md overflow-hidden">
          <li>
            <Link to="/" className="text-white px-5 py-2 inline-block hover:bg-purple-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white px-5 py-2 inline-block hover:bg-purple-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-white px-5 py-2 inline-block hover:bg-purple-600 transition-colors">
              Work
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="flex gap-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
