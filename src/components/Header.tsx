import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blog' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-start h-20 pt-2">
          {/* Logo - Centered on mobile/tablet, left on desktop */}
          <div className="flex items-center lg:flex-none absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300"
              >
                <img
                  src="/logozephyrwh.png"
                  alt="Zephyr Events"
                  className="h-30 md:h-36 lg:h-30 w-auto transition-all duration-500"
                  onError={(e) => {
                    console.log('Logo failed to load, showing fallback text');
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.classList.remove('hidden');
                    }
                  }}
                />
                <div className="hidden text-2xl font-heading font-bold text-white tracking-wider">
                  ZEPHYR EVENTS
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-opensauce font-medium tracking-wide transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-white hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side - Instagram and Contact Button */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <a
              href="https://instagram.com/zephyrevents"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full text-sm font-opensauce font-medium hover:bg-white/30 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Increased size */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-opensauce font-medium tracking-wide transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-opensauce font-medium tracking-wide text-neutral-700 hover:text-primary-900 hover:bg-neutral-50 transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-neutral-200 flex justify-center">
                <a
                  href="https://instagram.com/wezephyr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-neutral-700 hover:text-primary-900 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;