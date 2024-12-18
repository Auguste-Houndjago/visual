import React from 'react';
import { User, Calendar, Tag, MessageCircle, Clock, ArrowLeft } from 'lucide-react';

export default function MessageDetail({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <User className="h-12 w-12 text-gray-400 bg-gray-100 rounded-full p-2" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Demande de formation en gestion financière</h2>
              <div className="flex items-center space-x-4 mt-1">
                <span className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  15 Mars 2024
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Tag className="h-4 w-4 mr-1" />
                  Aminata Diallo
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  14:30
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              Haute priorité
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              En attente
            </span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p>Bonjour,</p>
          <p>Je souhaiterais bénéficier d'une formation pour mieux gérer ma petite entreprise. 
             J'ai récemment lancé une boutique de produits locaux et j'aimerais améliorer mes 
             compétences en gestion financière.</p>
          <p>Mes principaux besoins sont :</p>
          <ul>
            <li>Gestion de la trésorerie</li>
            <li>Comptabilité de base</li>
            <li>Planification financière</li>
          </ul>
          <p>Merci de votre aide.</p>
          <p>Cordialement,<br />Aminata</p>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Répondre</h3>
          <div className="space-y-4">
            <textarea
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a472a] focus:ring-[#1a472a]"
              placeholder="Votre réponse..."
            />
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Enregistrer comme brouillon
              </button>
              <button className="px-4 py-2 bg-[#1a472a] text-white rounded-md text-sm font-medium hover:bg-[#2d5a3d]">
                Envoyer la réponse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}