
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/sonner';
import { Mail, User, Send, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-medium text-portfolio-light-purple mb-8 text-center">Get In Touch</h2>
      
      <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-portfolio-light-purple">Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-portfolio-purple h-4 w-4" />
                      <Input 
                        placeholder="Your name" 
                        className="pl-10 bg-white/10 border-portfolio-purple/30 focus:border-portfolio-light-purple" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-portfolio-light-purple">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-portfolio-purple h-4 w-4" />
                      <Input 
                        placeholder="Your email" 
                        className="pl-10 bg-white/10 border-portfolio-purple/30 focus:border-portfolio-light-purple" 
                        type="email"
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-portfolio-light-purple">Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-portfolio-purple h-4 w-4" />
                      <Textarea 
                        placeholder="Your message" 
                        className="pl-10 min-h-[120px] bg-white/10 border-portfolio-purple/30 focus:border-portfolio-light-purple resize-none" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-portfolio-purple hover:bg-portfolio-light-purple text-white flex gap-2 items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
