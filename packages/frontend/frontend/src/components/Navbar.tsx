import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 text-white ${
        scrolled
          ? 'bg-black shadow-xl'
          : 'bg-black/50 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-500">AutoHub</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition duration-300 font-medium">Home</Link>
            <Link to="/gallery" className="hover:text-cyan-400 transition duration-300 font-medium">Gallery</Link>
            <Link to="/services" className="hover:text-cyan-400 transition duration-300 font-medium">Services</Link>
            <Link to="/about" className="hover:text-cyan-400 transition duration-300 font-medium">About</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition duration-300 font-medium">Contact</Link>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-current hover:text-opacity-90 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-cyan-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-cyan-500/20 transition duration-300">Home</Link>
            <Link to="/gallery" className="block px-3 py-2 rounded hover:bg-cyan-500/20 transition duration-300">Gallery</Link>
            <Link to="/services" className="block px-3 py-2 rounded hover:bg-cyan-500/20 transition duration-300">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded hover:bg-cyan-500/20 transition duration-300">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded hover:bg-cyan-500/20 transition duration-300">Contact</Link>
            <button className="w-full text-left bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 rounded hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 font-semibold mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
