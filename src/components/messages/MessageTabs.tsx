import React from 'react';
import { MessageCircle, DollarSign, Lightbulb, HelpCircle, Reply } from 'lucide-react';

const tabs = [
  { name: 'Demandes de services', icon: MessageCircle, count: 12 },
  { name: 'Demandes de prêts', icon: DollarSign, count: 8 },
  { name: 'Propositions de projets', icon: Lightbulb, count: 5 },
  { name: 'Demandes de conseil', icon: HelpCircle, count: 15 },
  { name: 'Messages retour', icon: Reply, count: 3 },
];

export default function MessageTabs() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === index
                ? 'border-[#1a472a] text-[#1a472a]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <tab.icon className={`
              ${activeTab === index ? 'text-[#1a472a]' : 'text-gray-400 group-hover:text-gray-500'}
              -ml-0.5 mr-2 h-5 w-5
            `} />
            {tab.name}
            {tab.count ? (
              <span className={`
                ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium
                ${activeTab === index
                  ? 'bg-[#1a472a] text-white'
                  : 'bg-gray-100 text-gray-900'}
              `}>
                {tab.count}
              </span>
            ) : null}
          </button>
        ))}
      </nav>
    </div>
  );
}