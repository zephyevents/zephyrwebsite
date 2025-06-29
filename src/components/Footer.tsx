import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
    <footer className="bg-background-500 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logozephyrwh.png"
                alt="Zephyr Events"
                className="h-20 w-auto"
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
              <div className="hidden text-xl font-heading font-bold text-neutral-800">
                Zephyr Events
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Creating unforgettable weddings and events with elegant design and flawless execution. 
              Your special day deserves nothing less than perfection.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/wezephyr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-primary-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/wezephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-primary-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@zephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-primary-900 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-600 hover:text-primary-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-neutral-600 hover:text-primary-900 transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-600 hover:text-primary-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-600 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-900" />
                <span className="text-neutral-600 text-sm">contact@wezephyr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-900" />
                <span className="text-neutral-600 text-sm">+91 7678590878</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-900 mt-0.5" />
                <span className="text-neutral-600 text-sm">
                  B 36, Second Floor, Block B,<br />
                  Mayapuri Industrial Area Phase I,<br />
                  Mayapuri, New Delhi, Delhi, 110064
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-300 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-neutral-500 text-sm">
            © 2025 Zephyr Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;