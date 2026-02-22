import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <div className="min-h-screen bg-stone flex flex-col font-inter">
      <nav className="sticky top-0 z-50 bg-stone/80 backdrop-blur-md border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-forest tracking-tight">
                Fletched<span className="text-gold">.</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-forest/80 hover:text-forest font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-stone bg-forest hover:bg-forest/90 transition-all shadow-sm"
              >
                Download <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-forest hover:bg-forest/5 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone border-b border-forest/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-forest/80 hover:text-forest hover:bg-forest/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="block w-full text-center px-3 py-3 mt-4 text-base font-medium text-stone bg-forest rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Download on App Store
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-forest text-stone py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">Fletched.</h3>
              <p className="text-stone/60 text-sm">Elevate your outdoor archery experience.</p>
            </div>
            <div className="flex space-x-6 text-sm text-stone/60">
              <Link to="/privacy" className="hover:text-stone transition-colors">Privacy Policy</Link>
              <Link to="/support" className="hover:text-stone transition-colors">Support</Link>
              <span>&copy; {new Date().getFullYear()} Fletched. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
