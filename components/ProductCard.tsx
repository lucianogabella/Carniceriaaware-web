import React from 'react';
import { Product } from '../types';
import { PlusCircleIcon } from './icons/PlusCircleIcon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-md hover:border-[#70282C] transition-all duration-300 group cursor-pointer"
      onClick={() => onAddToCart(product)}
    >
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlusCircleIcon className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-stone-800">{product.name}</h3>
        <p className="text-xl font-bold text-[#70282C] mt-1">{formatPrice(product.price)}</p>
        <p className="text-xs text-stone-500 mt-1">Precio k/g: {formatPrice(product.price)}</p>
        <p className="text-xs text-stone-500">Peso {product.weight}</p>
      </div>
    </div>
  );
};