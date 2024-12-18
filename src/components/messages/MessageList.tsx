import React from 'react';
import { User, Clock, Tag, ChevronRight } from 'lucide-react';

const messages = [
  {
    id: 1,
    type: 'service',
    title: 'Demande de formation en gestion financière',
    sender: 'Aminata Diallo',
    date: '2024-03-15',
    status: 'En attente',
    priority: 'Haute',
    excerpt: 'Je souhaiterais bénéficier d\'une formation pour mieux gérer ma petite entreprise...'
  },
  {
    id: 2,
    type: 'loan',
    title: 'Demande de prêt pour expansion',
    sender: 'Ibrahim Koné',
    date: '2024-03-14',
    status: 'En cours',
    priority: 'Moyenne',
    excerpt: 'Notre entreprise cherche un financement pour l\'achat de nouveaux équipements...'
  },
  {
    id: 3,
    type: 'project',
    title: 'Projet d\'agriculture durable',
    sender: 'Marie Touré',
    date: '2024-03-13',
    status: 'Nouveau',
    priority: 'Haute',
    excerpt: 'Proposition d\'un projet innovant dans le domaine de l\'agriculture durable...'
  }
];

export default function MessageList() {
  return (
    <div className="mt-6">
      <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
        {messages.map((message) => (
          <div
            key={message.id}
            className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{message.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {message.date}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      {message.sender}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${message.priority === 'Haute' ? 'bg-red-100 text-red-800' : ''}
                  ${message.priority === 'Moyenne' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${message.priority === 'Basse' ? 'bg-green-100 text-green-800' : ''}
                `}>
                  {message.priority}
                </span>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${message.status === 'Nouveau' ? 'bg-blue-100 text-blue-800' : ''}
                  ${message.status === 'En cours' ? 'bg-purple-100 text-purple-800' : ''}
                  ${message.status === 'En attente' ? 'bg-gray-100 text-gray-800' : ''}
                `}>
                  {message.status}
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{message.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}