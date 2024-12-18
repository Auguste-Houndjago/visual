import React from 'react';

const stats = [
  { id: 1, name: 'Micro-entrepreneurs soutenus', value: '500,000+' },
  { id: 2, name: 'Taux de remboursement', value: '98%' },
  { id: 3, name: 'Pays africains', value: '25+' },
  { id: 4, name: 'Projets financés', value: '750,000+' },
];

export default function Stats() {
  return (
    <div className="bg-[#1a472a]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Notre Impact en Chiffres
          </h2>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-[#8fbc8f]">
                {stat.name}
              </dt>
              <dd className="order-1 text-4xl font-extrabold text-[#ffd700]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}