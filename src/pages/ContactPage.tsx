import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageCircle, DollarSign, Lightbulb, HelpCircle, Send, ChevronDown } from 'lucide-react';

const messageTypes = [
  {
    id: 'service',
    title: 'Demande de services',
    icon: MessageCircle,
    description: 'Formations, accompagnement, conseil...'
  },
  {
    id: 'loan',
    title: 'Demande de prêt',
    icon: DollarSign,
    description: 'Financement de projets, microcrédits...'
  },
  {
    id: 'project',
    title: 'Proposition de projet',
    icon: Lightbulb,
    description: 'Projets innovants, partenariats...'
  },
  {
    id: 'advice',
    title: 'Demande de conseil',
    icon: HelpCircle,
    description: 'Questions, orientation, assistance...'
  }
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(messageTypes[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#1a472a] pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nous sommes là pour vous accompagner dans vos projets. 
            Choisissez le type de demande qui vous correspond et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Message Types */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Type de demande</h2>
              <div className="space-y-3">
                {messageTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                      selectedType.id === type.id
                        ? 'bg-[#1a472a] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <type.icon className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{type.title}</div>
                      <div className={`text-sm ${
                        selectedType.id === type.id ? 'text-gray-200' : 'text-gray-500'
                      }`}>
                        {type.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                {selectedType.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Entreprise (optionnel)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1a472a] focus:border-[#1a472a]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1a472a] hover:bg-[#2d5a3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a472a]"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#1a472a] bg-opacity-10 mb-4">
                <MessageCircle className="h-6 w-6 text-[#1a472a]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">contact@main-africa.org</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#1a472a] bg-opacity-10 mb-4">
                <DollarSign className="h-6 w-6 text-[#1a472a]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
              <p className="mt-2 text-gray-600">+123 456 789</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#1a472a] bg-opacity-10 mb-4">
                <Lightbulb className="h-6 w-6 text-[#1a472a]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
              <p className="mt-2 text-gray-600">Siège social, Ville, Pays</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}