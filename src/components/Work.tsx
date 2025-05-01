
import React from 'react';

const WorkCard = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => {
  return (
    <div className="bg-portfolio-purple rounded-lg overflow-hidden shadow-md h-[200px]">
      <div className="p-6 flex flex-col justify-center items-center h-full">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Web Application",
      imageUrl: "/placeholder.png"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Mobile App",
      imageUrl: "/placeholder.png"
    },
    {
      id: 3,
      title: "Project 3",
      description: "E-commerce Site",
      imageUrl: "/placeholder.png"
    }
  ];

  return (
    <section id="work" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-medium text-portfolio-light-purple mb-8">Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <WorkCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
