import React, { useState, useEffect, useRef } from 'react';
import { CartIcon } from './icons/CartIcon';
import { Logo } from './icons/Logo';

interface HeaderProps {
  cartItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isAnimating, setIsAnimating] = useState(false);
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
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 border-b border-stone-200">
          <Logo />
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-[#70282C] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#5a2124] transition-colors duration-200">
              Registrate
            </button>
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
          </div>
        </div>
      </div>
    </header>
  );
};