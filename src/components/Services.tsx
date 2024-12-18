import React from 'react';
import { Coins, Users, TrendingUp, BookOpen } from 'lucide-react';

const services = [
  {
    title: "Accès aux prêts",
    description: "Solutions de financement adaptées aux besoins des entrepreneurs africains",
    icon: Coins
  },
  {
    title: "Soutien aux entrepreneurs",
    description: "Accompagnement personnalisé et formation pour développer votre activité",
    icon: Users
  },
  {
    title: "Croissance communautaire",
    description: "Création de réseaux d'entraide et de partage d'expériences",
    icon: TrendingUp
  },
  {
    title: "Formation continue",
    description: "Programmes éducatifs pour renforcer vos compétences entrepreneuriales",
    icon: BookOpen
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions complètes pour accompagner votre réussite
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#1a472a] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-[#1a472a] text-[#8fbc8f] ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}