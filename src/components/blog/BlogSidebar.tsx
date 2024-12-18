import React from 'react';
import { Tag, Bookmark, TrendingUp } from 'lucide-react';

const categories = [
  "Entrepreneuriat",
  "Innovation",
  "Success Stories",
  "Finance",
  "Formation",
  "Développement"
];

const popularPosts = [
  {
    title: "Guide complet du financement des PME",
    date: "12 Mars 2024"
  },
  {
    title: "5 conseils pour réussir son projet",
    date: "8 Mars 2024"
  },
  {
    title: "L'importance du mentorat",
    date: "1 Mars 2024"
  }
];

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold flex items-center mb-4">
          <Tag className="h-5 w-5 mr-2 text-[#1a472a]" />
          Catégories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold flex items-center mb-4">
          <TrendingUp className="h-5 w-5 mr-2 text-[#1a472a]" />
          Articles Populaires
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Bookmark className="h-5 w-5 text-[#1a472a]" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}