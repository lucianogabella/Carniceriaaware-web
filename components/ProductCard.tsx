import React, { useState } from 'react';
import { Product } from '../types';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    setQuantity(1); 
  };
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden border border-stone-200 transition-all duration-300 flex flex-col"
    >
      <div className="flex-grow">
        <div className="relative">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-stone-800 h-10">{product.name}</h3>
          <p className="text-xl font-bold text-[#70282C] mt-1">{formatPrice(product.price)}</p>
          <p className="text-xs text-stone-500 mt-1">Precio k/g: {formatPrice(product.price)}</p>
          <p className="text-xs text-stone-500">Peso {product.weight}</p>
        </div>
      </div>
      <div className="p-4 pt-2 flex items-center justify-between gap-4">
        <div className="flex items-center border border-stone-200 rounded-full">
          <button 
            onClick={() => handleQuantityChange(-1)} 
            className="p-2 hover:bg-stone-100 rounded-l-full disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <MinusIcon className="w-4 h-4 text-stone-600" />
          </button>
          <span className="px-3 text-sm font-semibold w-10 text-center tabular-nums text-stone-800" aria-live="polite">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(1)} 
            className="p-2 hover:bg-stone-100 rounded-r-full"
            aria-label="Increase quantity"
          >
            <PlusIcon className="w-4 h-4 text-stone-600" />
          </button>
        </div>
        <button 
          onClick={handleAddToCartClick}
          className="flex-grow bg-[#70282C] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5a2124] transition-colors duration-200"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};