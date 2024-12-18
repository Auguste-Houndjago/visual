import React from 'react';

const testimonials = [
  {
    content: "Grâce à MAIN, j'ai pu développer mon entreprise et créer des emplois dans ma communauté.",
    author: "Aminata Diallo",
    role: "Entrepreneure en agroalimentaire",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
  },
  {
    content: "Le soutien et l'accompagnement de MAIN ont été déterminants dans mon succès entrepreneurial.",
    author: "Samuel Osei",
    role: "Propriétaire d'une PME",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    content: "MAIN m'a donné les outils nécessaires pour transformer mon idée en une entreprise prospère.",
    author: "Fatima Nkrumah",
    role: "Start-up technologique",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Témoignages Inspirants
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez les histoires de réussite de nos entrepreneurs
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 p-6">
                <blockquote className="mt-4 text-lg text-gray-900">
                  "{testimonial.content}"
                </blockquote>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}