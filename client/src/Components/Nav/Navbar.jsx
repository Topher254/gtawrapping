import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl font-bold text-gray-900">
            GTA<span className="text-sm">.</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-1 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-1 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="services"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-1 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="process"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-1 relative group"
          >
            Our Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link 
            to="footer" 
            smooth={true} 
            duration={600} 
            offset={-80} 
            className="cursor-pointer bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="home" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded hover:bg-yellow-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="about" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded hover:bg-yellow-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              to="services" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded hover:bg-yellow-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            <Link 
              to="process" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded hover:bg-yellow-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </Link>
            
            <Link 
              to="footer" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors text-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;