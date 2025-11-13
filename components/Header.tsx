import React, { useState, useEffect, useRef } from 'react';
import { CartIcon } from './icons/CartIcon';
import { Logo } from './icons/Logo';
import { InstagramIcon } from './icons/InstagramIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';


interface HeaderProps {
  cartItemCount: number;
}

const navLinks = [
  { href: '#', label: 'INICIO' },
  { href: '#', label: 'PRODUCTOS' },
  { href: '#', label: 'NOSOTROS' },
  { href: '#', label: 'MAYORISTA' },
  { href: '#', label: 'CONTACTO' },
];


export const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevCartItemCount = useRef(cartItemCount);

  useEffect(() => {
    if (cartItemCount > prevCartItemCount.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400); // Animation duration
      return () => clearTimeout(timer);
    }
    prevCartItemCount.current = cartItemCount;
  }, [cartItemCount]);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-stone-800 text-stone-300 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-8 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <a href="tel:+5491126540847" className="flex items-center space-x-1 hover:text-white transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span>+54 9 11 2654-0847</span>
            </a>
            <a href="mailto:info@carniceriaaware.com" className="flex items-center space-x-1 hover:text-white transition-colors">
              <MailIcon className="w-4 h-4" />
              <span>info@carniceriaaware.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://www.instagram.com/carniceriaaware" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-300 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-semibold text-stone-600 hover:text-[#70282C] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <button className="relative p-2 rounded-full hover:bg-stone-100 transition-colors">
              <div className={isAnimating ? 'animate-jiggle' : ''}>
                <CartIcon className="w-6 h-6 text-stone-700" />
              </div>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-600 text-white text-xs rounded-full w-5 h-5">
                  {cartItemCount}
                </span>
              )}
            </button>
             <button
              className="lg:hidden p-2 rounded-full hover:bg-stone-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon className="w-6 h-6 text-stone-700" /> : <MenuIcon className="w-6 h-6 text-stone-700" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="lg:hidden bg-white border-t border-stone-200">
            <nav className="flex flex-col items-center space-y-4 py-4">
                 {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="text-sm font-semibold text-stone-600 hover:text-[#70282C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};