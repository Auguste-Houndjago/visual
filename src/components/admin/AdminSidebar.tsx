import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings,
  PieChart,
  DollarSign,
  Calendar
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Tableau de bord' },
  { icon: FileText, label: 'Articles' },
  { icon: Users, label: 'Utilisateurs' },
  { icon: DollarSign, label: 'Prêts' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Calendar, label: 'Événements' },
  { icon: PieChart, label: 'Statistiques' },
  { icon: Settings, label: 'Paramètres' },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md fixed h-full pt-16">
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#1a472a] hover:text-white transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}