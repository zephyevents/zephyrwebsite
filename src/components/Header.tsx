import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const rightNavigation = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine menu text colors based on page and scroll
  const getMenuTextColor = () => {
    if (isHomePage) {
      // Homepage: white when not scrolled, black when scrolled
      return isScrolled ? 'text-neutral-700' : 'text-white';
    } else {
      // Other pages: always black text
      return 'text-neutral-700';
    }
  };

  const getMenuHoverColor = () => {
    if (isHomePage) {
      return isScrolled ? 'hover:text-rose-600' : 'hover:text-rose-300';
    } else {
      return 'hover:text-rose-600';
    }
  };

  const getActiveColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-rose-600' : 'text-rose-300';
    } else {
      return 'text-rose-600';
    }
  };

  const getActiveIndicatorColor = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-rose-500' : 'bg-rose-300';
    } else {
      return 'bg-rose-500';
    }
  };

  // Logo logic
  const getLogoSrc = () => {
    if (isHomePage) {
      // Homepage: white logo when not scrolled, colored when scrolled
      return isScrolled 
        ? "/src/assets/Untitled design (2).svg" 
        : "/src/assets/Untitled design (1).svg";
    } else {
      // Other pages: always colored logo
      return "/src/assets/Untitled design (2).svg";
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28 py-3">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? getActiveColor()
                    : `${getMenuTextColor()} ${getMenuHoverColor()}`
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${getActiveIndicatorColor()}`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Centered Logo - Much Larger */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300"
              >
                <img
                  src={getLogoSrc()}
                  alt="Zephyr Events"
                  className="h-28 lg:h-32 w-auto transition-all duration-500"
                />
              </motion.div>
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? getActiveColor()
                    : `${getMenuTextColor()} ${getMenuHoverColor()}`
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${getActiveIndicatorColor()}`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${getMenuTextColor()}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only shows when menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200"
          >
            <div className="px-4 py-4 space-y-2">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-rose-600 bg-rose-50'
                      : 'text-neutral-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;