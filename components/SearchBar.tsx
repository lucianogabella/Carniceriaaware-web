import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full sm:w-64">
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full pl-4 pr-10 py-2.5 bg-white border border-stone-300 rounded-full focus:ring-2 focus:ring-[#70282C] focus:outline-none transition-shadow text-stone-900"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button className="p-2 bg-[#70282C] rounded-full text-white">
            <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};