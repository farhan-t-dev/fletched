import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
    { name: 'Privacy', path: '/privacy' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 selection:bg-primary/20 selection:text-primary transition-colors">
      <header className={`sticky top-0 z-50 w-full border-b border-primary/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all ${scrolled ? 'py-2 shadow-sm' : 'py-0'}`}>
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary group">
            <div className="size-8 flex items-center justify-center border-2 border-primary rounded-lg group-hover:rotate-6 transition-transform">
              <span className="material-symbols-outlined text-xl font-bold">architecture</span>
            </div>
            <span className="text-xl font-black tracking-tighter">FLETCHED</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg font-bold text-xs tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              DOWNLOAD APP
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors text-slate-600 dark:text-slate-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background-light dark:bg-background-dark border-b border-primary/10 p-6 flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold tracking-tight ${isActive(link.path) ? 'text-primary' : 'text-slate-900 dark:text-slate-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-primary text-white px-5 py-3 rounded-lg font-bold text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              DOWNLOAD APP
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-background-light dark:bg-background-dark border-t border-primary/10 pt-20 pb-8 px-4 blueprint-grid transition-colors relative overflow-hidden">
        {/* Decorative Annotation Tag */}
        <div className="absolute top-0 right-10 bg-primary/5 border-x border-b border-primary/10 px-3 py-1 text-[8px] font-mono text-primary uppercase tracking-[0.2em] hidden md:block">
          Footer_Module [Ref: 0x4A67]
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <div className="size-8 flex items-center justify-center border-2 border-primary rounded-lg">
                  <span className="material-symbols-outlined text-xl font-bold">architecture</span>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">Fletched</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                Designing the future of mobile archery ballistics with architectural precision and modern aesthetics. Calibrated for the backcountry.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                <span className="size-1.5 rounded-full bg-primary-light animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-primary/70 uppercase tracking-widest">System Status: Active</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-slate-900 dark:text-white border-b border-primary/10 pb-2">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/"><span className="material-symbols-outlined text-xs">home</span> Home</Link></li>
                <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/about"><span className="material-symbols-outlined text-xs">info</span> About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/support"><span className="material-symbols-outlined text-xs">support_agent</span> Support</Link></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">new_releases</span> Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-slate-900 dark:text-white border-b border-primary/10 pb-2">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/privacy"><span className="material-symbols-outlined text-xs">security</span> Privacy Policy</Link></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">gavel</span> Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">description</span> License</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-slate-900 dark:text-white border-b border-primary/10 pb-2">Stay Annotated</h4>
              <p className="text-xs text-slate-500 mb-6 italic">Subscribe to our technical field logs for the latest updates.</p>
              <form className="flex gap-2">
                <input 
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm flex-1 focus:ring-2 focus:ring-primary/20 focus:border-primary p-3 outline-none transition-all dark:text-white" 
                  placeholder="email@address.spec" 
                  type="email"
                />
                <button className="bg-primary text-white px-4 rounded-lg flex items-center justify-center hover:brightness-110 transition-all shadow-lg shadow-primary/20 group">
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                </button>
              </form>
              <p className="mt-4 text-[9px] text-slate-400 font-mono italic uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[10px]">terminal</span> 
                Subscribing to BUILD_LOGS_v1.0.8...
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800 gap-6">
            <div className="flex gap-4">
              {[
                { icon: 'public', label: 'Web' },
                { icon: 'code', label: 'GitHub' },
                { icon: 'groups', label: 'Community' },
                { icon: 'share', label: 'Social' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href="#" 
                  className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary/30 transition-all group"
                  title={social.label}
                >
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right space-y-1">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                © {new Date().getFullYear()} FLETCHED ARCHERY INC. [LIC_33420]
              </p>
              <p className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter opacity-50">
                BUILD_HASH: 7a82bc1f | STACK: REACT_TS_VITE_TW4
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
