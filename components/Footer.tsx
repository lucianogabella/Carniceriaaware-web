import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="leading-none">
              <span className="block font-serif text-base text-stone-300">CARNICERIA</span>
              <span className="block font-sans text-2xl font-extrabold">AWARE</span>
            </div>
            <p className="text-stone-400 mt-2 text-sm">Calidad y tradición en cada corte.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navegación</h4>
            <ul className="mt-2 space-y-1 text-sm text-stone-300">
              <li><a href="#" className="hover:underline">Productos</a></li>
              <li><a href="#" className="hover:underline">Nosotros</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Soporte</h4>
            <ul className="mt-2 space-y-1 text-sm text-stone-300">
              <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:underline">Políticas de Envío</a></li>
              <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Seguinos</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/carniceriaaware" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-300 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-700 pt-4 text-center text-sm text-stone-400">
          &copy; {new Date().getFullYear()} Carniceria Aware. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};