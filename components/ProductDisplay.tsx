
import React, { useState, useMemo } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { SearchBar } from './SearchBar';
import { PRODUCTS, CATEGORIES, CATEGORY_INFO } from '../constants';
import { Product, ProductCategory } from '../types';

interface ProductDisplayProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Media Res');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const currentCategoryData = useMemo(() => {
    if (activeCategory === 'Todos' || !filteredProducts.length) {
      return null;
    }
    
    const info = CATEGORY_INFO[activeCategory as ProductCategory];

    if (info) {
        return {
            name: info.name,
            description: info.description
        }
    }
    
    return null;
  }, [activeCategory, filteredProducts]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {currentCategoryData && (
        <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-stone-800">{currentCategoryData.name}</h1>
            <p className="mt-2 text-stone-600">{currentCategoryData.description}</p>
        </div>
      )}
      
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </div>
  );
};