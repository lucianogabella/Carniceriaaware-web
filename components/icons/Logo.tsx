import React from 'react';

export const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center" aria-label="Página de inicio de Carniceria Aware">
      <div className="leading-none">
        <span className="block font-serif text-sm text-stone-500 tracking-wider">CARNICERIA</span>
        <span className="block font-sans text-2xl font-extrabold text-[#70282C]">AWARE</span>
      </div>
    </a>
  );
};