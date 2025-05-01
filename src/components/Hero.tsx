
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-w-6xl mx-auto py-16 px-4">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-medium">
          Hey, I'm Faiqa,
        </h1>
        <h2 className="text-3xl font-medium text-portfolio-light-purple">
          Full Stack Engineer
        </h2>
        <p className="text-gray-700">
          based in Pakistan.
        </p>
        <div className="pt-4">
          <Button 
            asChild
            className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-md transition-all"
          >
            <Link to="/resume">Resume</Link>
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <img 
          src="/lovable-uploads/0e87fc19-0cab-47eb-a4d2-969e890c308d.png" 
          alt="Faiqa's avatar" 
          className="max-h-[250px] w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
