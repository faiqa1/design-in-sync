
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-portfolio-light-purple mb-8">Resume</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Faiqa</h2>
            <p className="text-gray-600">Full Stack Engineer based in Pakistan</p>
            <p className="text-gray-600">faiqa@example.com</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">Education</h3>
            <div>
              <p className="font-medium">Lahore College for Women University (LCWU)</p>
              <p className="text-gray-600">Bachelor's in Computer Science</p>
              <p className="text-gray-600">2020 - 2024</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">Skills</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Responsive Web Design</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">Experience</h3>
            <div>
              <p className="font-medium">Web Developer</p>
              <p className="text-gray-600">Freelance</p>
              <p className="text-gray-600">2023 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Building web applications with React.js</li>
                <li>Collaborating with clients on project requirements</li>
                <li>Developing backend solutions using Node.js and Express</li>
                <li>Creating responsive and user-friendly interfaces</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-md transition-all">
            Download PDF
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
