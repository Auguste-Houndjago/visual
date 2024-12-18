import React from 'react';
import { Menu, X, Globe2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#1a472a] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-[#8fbc8f]" />
            <span className="ml-2 text-xl font-bold">MAIN</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2d5a3d]">Accueil</a>
              <a href="/Messages" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2d5a3d]">Services</a>
              <a href="/Blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2d5a3d]">Blog</a>
              <a href="/ContactPage" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#7aca96]">Contact</a>
              <a href="#" className="bg-[#ffd700] text-[#1a472a] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#f0c800]">
                Connexion
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#2d5a3d]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2d5a3d]">Accueil</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2d5a3d]">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2d5a3d]">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2d5a3d]">Contact</a>
            <a href="#" className="block bg-[#ffd700] text-[#1a472a] px-4 py-2 rounded-md text-base font-medium hover:bg-[#f0c800]">
              Connexion
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}