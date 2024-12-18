import React from 'react';
import { Search } from 'lucide-react';

export default function BlogHeader() {
  return (
    <div className="bg-[#1a472a] pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Notre Blog</h1>
          <p className="mt-4 text-xl text-gray-300">
            Découvrez les dernières actualités et conseils sur la microfinance en Afrique
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full px-4 py-3 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}