import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "L'impact de la microfinance sur l'entrepreneuriat féminin en Afrique",
    excerpt: "Découvrez comment la microfinance transforme la vie des femmes entrepreneures...",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    author: "Marie Koné",
    date: "15 Mars 2024",
    category: "Entrepreneuriat"
  },
  {
    title: "Les innovations technologiques dans la microfinance",
    excerpt: "Les nouvelles technologies révolutionnent l'accès aux services financiers...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    author: "Jean Mensah",
    date: "10 Mars 2024",
    category: "Innovation"
  },
  {
    title: "Success Story : De micro-entrepreneur à leader du marché",
    excerpt: "L'histoire inspirante d'un entrepreneur qui a transformé son activité...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    author: "Paul Diop",
    date: "5 Mars 2024",
    category: "Success Stories"
  }
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-block bg-[#1a472a] bg-opacity-10 text-[#1a472a] px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <button className="flex items-center text-[#1a472a] hover:text-[#2d5a3d] font-medium">
                Lire plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}