
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Create a Modern Web App",
      description: "Learn the essential steps to build a responsive web application using modern technologies.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "May 1, 2025"
    },
    {
      id: 2,
      title: "The Future of Front-End Development",
      description: "Discover emerging trends and technologies shaping the future of front-end development.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "April 20, 2025"
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      description: "Tips and tricks to make your React applications faster and more efficient.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "April 10, 2025"
    },
    {
      id: 4,
      title: "Building Accessible User Interfaces",
      description: "A comprehensive guide to creating inclusive and accessible web applications.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 28, 2025"
    }
  ];

  return (
    <section id="blog" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-medium text-portfolio-light-purple mb-8">Blog</h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {blogPosts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-xs text-gray-500">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-700">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="text-portfolio-purple hover:text-portfolio-light-purple p-0 flex items-center"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
        <CarouselNext className="hidden sm:flex right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </Carousel>
    </section>
  );
};

export default Blog;
