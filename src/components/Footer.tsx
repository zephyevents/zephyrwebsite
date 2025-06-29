import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left - Logo and Social Icons */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src="/logozephyrfooter.png"
                alt="Zephyr Events"
                className="h-20 w-auto"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="hidden text-xl font-opensauce font-medium text-white">
                Zephyr Events
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/wezephyr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/wezephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@zephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Center - Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-opensauce font-medium mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-neutral-300 text-sm font-opensauce">contact@wezephyr.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-neutral-300 text-sm font-opensauce">+91 7678590878</span>
              </div>
            </div>
          </div>

          {/* Right - Address */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-opensauce font-medium mb-4 text-white">Address</h4>
            <div className="flex items-start justify-center md:justify-end space-x-3">
              <MapPin className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-300 text-sm font-opensauce leading-relaxed">
                B 36, Second Floor, Block B,<br />
                Mayapuri Industrial Area Phase I,<br />
                Mayapuri, New Delhi, Delhi, 110064
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm font-opensauce mb-4 md:mb-0">
            © 2025 Zephyr Events. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors text-sm font-opensauce">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-rose-400 transition-colors text-sm font-opensauce">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;