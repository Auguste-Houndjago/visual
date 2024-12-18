import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#1a472a]">MAIN Admin</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Admin</span>
            <User className="h-8 w-8 text-gray-600 bg-gray-200 rounded-full p-1" />
          </div>
        </div>
      </div>
    </header>
  );
}