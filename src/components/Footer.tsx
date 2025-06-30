import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-500 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left - Logo and Social Icons */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3 md:mb-6">
              <img
                src="/logozephyrfooter.png"
                alt="Zephyr Events"
                className="h-28 w-auto"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="hidden text-xl font-opensauce font-medium text-neutral-800">
                Zephyr Events
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/wezephyr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-600 hover:text-primary-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/wezephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-600 hover:text-primary-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@zephyrevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-600 hover:text-primary-900 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Center - Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-opensauce font-medium mb-4" style={{ color: '#B03F3F' }}>Contact</h4>
            <div className="space-y-2">
              <div className="text-neutral-700 text-sm font-opensauce">contact@wezephyr.com</div>
              <div className="text-neutral-700 text-sm font-opensauce">+91 7678590878</div>
              <div className="text-neutral-700 text-sm font-opensauce">
                <a href="#" className="hover:text-primary-900 transition-colors">
                  Feedback Form
                </a>
              </div>
            </div>
          </div>

          {/* Right - Address */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-opensauce font-medium mb-4" style={{ color: '#B03F3F' }}>Address</h4>
            <div className="text-neutral-700 text-sm font-opensauce leading-relaxed">
              Zephyr Events E-Commerce Private Limited,<br />
              B 36, Second Floor, Block B,<br />
              Mayapuri Industrial Area Phase I,<br />
              Mayapuri, New Delhi, Delhi, 110064
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated for mobile layout */}
        <div className="border-t border-neutral-300 mt-6 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Left side - Copyright */}
            <p className="text-neutral-600 text-sm font-opensauce">
              © 2025 Zephyr Events. All Rights Reserved
            </p>
            
            {/* Right side - Privacy Policy and Terms */}
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-neutral-600 hover:text-primary-900 transition-colors text-sm font-opensauce">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-900 transition-colors text-sm font-opensauce">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;