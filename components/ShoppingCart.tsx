import React, { useState, useEffect, useRef } from 'react';
import { CartItem } from '../types';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { TrashIcon } from './icons/TrashIcon';

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const prevSubtotal = useRef(subtotal);
  
  useEffect(() => {
    if (subtotal !== prevSubtotal.current) {
        setIsFlashing(true);
        const timer = setTimeout(() => setIsFlashing(false), 700); // Animation duration
        prevSubtotal.current = subtotal;
        return () => clearTimeout(timer);
    }
  }, [subtotal]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-stone-200 shadow-sm">
      <h3 className="text-lg font-semibold text-center mb-4">Tu Carrito</h3>
      {items.length === 0 ? (
        <div className="text-center text-stone-500 py-8">
          <p className="font-semibold">Tu carrito está vacío</p>
          <p className="text-sm mt-2">Agregá productos para empezar tu compra.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center flex-1 min-w-0">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-1 mx-3 min-w-0">
                    <p className="text-sm font-semibold truncate text-stone-800">{item.name}</p>
                    <p className="text-sm text-stone-600">{formatPrice(item.price)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                   <div className="flex items-center border border-stone-200 rounded">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-stone-100 rounded-l"><MinusIcon className="w-4 h-4" /></button>
                    <span className="px-2 text-sm w-8 text-center text-stone-800">
                        <span key={item.quantity} className="animate-pop-in">{item.quantity}</span>
                    </span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-stone-100 rounded-r"><PlusIcon className="w-4 h-4" /></button>
                   </div>
                   <div className="w-20 text-right font-semibold text-sm text-stone-800">
                     {formatPrice(item.price * item.quantity)}
                   </div>
                  <button onClick={() => onRemoveItem(item.id)} className="text-stone-400 hover:text-red-500 p-1"><TrashIcon className="w-4 h-4"/></button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className={`flex justify-between items-center font-semibold text-stone-800 p-2 rounded-md ${isFlashing ? 'animate-flash' : ''}`}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button className="w-full mt-4 bg-[#70282C] text-white py-2.5 rounded-full font-semibold hover:bg-[#5a2124] transition-colors duration-200">
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};