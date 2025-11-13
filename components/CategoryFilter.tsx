import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex items-center space-x-2 bg-white p-1 rounded-full shadow-sm border border-stone-200">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
            activeCategory === category
              ? 'bg-[#70282C] text-white shadow'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};