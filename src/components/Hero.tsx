import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#1a472a] h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1604584918838-c3e7a22b60a9?auto=format&fit=crop&q=80"
          alt="African marketplace"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Favoriser la croissance</span>
            <span className="block text-[#8fbc8f]">économique en Afrique</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ensemble, construisons un avenir prospère en soutenant les entrepreneurs africains par la microfinance et le développement économique durable.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#1a472a] bg-[#ffd700] hover:bg-[#f0c800]">
              Découvrir
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}