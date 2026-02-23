import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <div className="min-h-screen bg-tactical-black font-inter text-white selection:bg-safety-orange selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-tactical-black/90 backdrop-blur-md shadow-lg border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <Target className="h-8 w-8 text-safety-orange group-hover:rotate-45 transition-transform" />
                <span className="text-xl font-black tracking-tighter uppercase italic leading-none">
                  Bow<span className="text-safety-orange">Ballistics</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-bold text-xs uppercase tracking-widest transition-colors hover:text-safety-orange text-white/70"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="inline-flex items-center px-5 py-2.5 bg-safety-orange text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-safety-orange/30 hover:-translate-y-0.5"
              >
                Download <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors text-white hover:text-safety-orange"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 md:hidden bg-tactical-black p-8 flex flex-col justify-center items-center space-y-8"
          >
            <button onClick={toggleMenu} className="absolute top-8 right-8"><X className="h-8 w-8 text-white" /></button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-safety-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#"
              className="w-full text-center py-5 bg-safety-orange text-white font-black uppercase italic tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Get The App
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-0">
        {children}
      </main>

      <footer className="bg-tactical-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
               <div className="flex items-center space-x-2 mb-6">
                 <Target className="h-8 w-8 text-safety-orange" />
                 <span className="text-2xl font-black tracking-tighter uppercase italic leading-none">
                   Bow<span className="text-safety-orange">Ballistics</span>
                 </span>
               </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm font-medium">
                The ultimate mobile-first archery calculator. Precision kinetic energy tracking for the dedicated bowhunter. Built for accuracy, reliability, and ethics in the field.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-safety-orange">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-white/50">
                <li><Link to="/#about" className="hover:text-white transition-colors">About App</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Technical Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-safety-orange">Compliance</h4>
              <ul className="space-y-4 text-sm font-bold text-white/50">
                <li><span className="block text-[10px] text-white/20 mb-2">Bundle ID: com.bowballistics.app</span></li>
                <li><span className="block text-[10px] text-white/20">Version 1.0.0 (Release Candidate)</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            <p>&copy; {new Date().getFullYear()} Bow Ballistics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">App Store</a>
               <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
