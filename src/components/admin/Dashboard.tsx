import React from 'react';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const stats = [
  {
    label: 'Utilisateurs actifs',
    value: '12,361',
    change: '+12%',
    trend: 'up',
    icon: Users
  },
  {
    label: 'Prêts en cours',
    value: '854',
    change: '+5%',
    trend: 'up',
    icon: DollarSign
  },
  {
    label: 'Taux de croissance',
    value: '23%',
    change: '-2%',
    trend: 'down',
    icon: TrendingUp
  },
  {
    label: 'Événements',
    value: '42',
    change: '+8%',
    trend: 'up',
    icon: Calendar
  }
];

export default function Dashboard() {
  return (
    <div className="pt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500">Bienvenue dans votre espace d'administration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#1a472a] bg-opacity-10 rounded-lg">
                <stat.icon className="h-6 w-6 text-[#1a472a]" />
              </div>
              <span className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? 
                  <ArrowUp className="h-4 w-4 ml-1" /> : 
                  <ArrowDown className="h-4 w-4 ml-1" />
                }
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Derniers articles</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Article {index + 1}</h3>
                  <p className="text-sm text-gray-500">Publié le {new Date().toLocaleDateString()}</p>
                </div>
                <button className="text-[#1a472a] hover:text-[#2d5a3d]">Modifier</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Messages récents</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">Utilisateur {index + 1}</h3>
                  <p className="text-sm text-gray-500">Message {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}