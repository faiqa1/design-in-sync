
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-medium text-portfolio-light-purple mb-8">Contact</h2>
      
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <div>
            <Textarea 
              id="message" 
              placeholder="Your message" 
              className="w-full h-36 bg-portfolio-purple bg-opacity-50 rounded-md resize-none"
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-md transition-all"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
