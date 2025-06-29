import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const services = [
    'Wedding Planning',
    'Event Decor',
    'Venue Selection',
    'Catering Services',
    'Photography',
    'Entertainment',
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logo-white.svg"
                alt="Zephyr Events"
                className="h-16 w-auto"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="hidden text-xl font-heading font-bold text-white">
                Zephyr Events
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Creating unforgettable weddings and events with elegant design and flawless execution. 
              Your special day deserves nothing less than perfection.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/wezephyr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-300 hover:text-rose-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-neutral-300 hover:text-rose-400 transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-300 hover:text-rose-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-neutral-300 text-sm">info@zephyrevents.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-neutral-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-rose-400 mt-0.5" />
                <span className="text-neutral-300 text-sm">
                  123 Event Plaza<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Zephyr Events. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;