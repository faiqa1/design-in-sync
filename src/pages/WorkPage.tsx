
import React from 'react';
import Navbar from '@/components/Navbar';
import Work from '@/components/Work';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const WorkPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Work />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
