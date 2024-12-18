import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import BlogGrid from '../components/blog/BlogGrid';
import BlogSidebar from '../components/blog/BlogSidebar';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}