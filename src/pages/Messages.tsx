import React from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import MessageTabs from '../components/messages/MessageTabs';
import MessageList from '../components/messages/MessageList';

export default function Messages() {
  return (
    <AdminLayout>
      <div className="pt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Centre de Messages</h1>
        <MessageTabs />
        <MessageList />
      </div>
    </AdminLayout>
  );
}