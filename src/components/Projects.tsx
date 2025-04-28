
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Node_farm",
      description: [
        "Developed a dynamic Node.js server that generates and serves 50+ product pages using HTML templates and JSON data.",
        "Built a RESTful API capable of handling up to 100 concurrent requests efficiently.",
        "Implemented URL slugification, reducing link redundancy by 30%, enhancing SEO and user navigation."
      ],
      tech: ["Node.js", "Express.js", "RESTful API", "HTML", "JSON"]
    },
    {
      title: "Connect 4 with AI",
      description: [
        "Designed a full Connect 4 game application with an AI opponent using advanced search algorithms like Minimax and Alpha-Beta Pruning.",
        "Developed an intuitive UI that allows real-time challenging of an AI evaluating up to 1,000 game states per second.",
        "Optimized AI performance, achieving 40% faster computation compared to standard Minimax, maintaining a 90%+ win rate against human players."
      ],
      tech: ["AI Algorithms", "Minimax", "Alpha-Beta Pruning", "Game Development", "UI Design"]
    },
    {
      title: "Personal Portfolio Website",
      description: [
        "Created a responsive portfolio website using HTML, CSS, and JavaScript to showcase skills, CV, and project portfolio.",
        "Integrated dynamic project galleries and smooth scrolling for a modern user experience."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="section bg-darkPurple">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-darkBlack rounded-xl p-6 md:p-8 shadow-lg hover:shadow-primaryPurple/10 transition-all hover:translate-y-[-5px]"
            >
              <h3 className="text-2xl font-bold mb-4 text-primaryPurple">{project.title}</h3>
              
              <div className="space-y-3 mb-6">
                {project.description.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex">
                    <div className="min-w-[20px] mt-1.5">
                      <div className="h-2 w-2 rounded-full bg-primaryPurple"></div>
                    </div>
                    <p className="text-gray-300 ml-2">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-darkPurple px-3 py-1 text-xs rounded-full border border-primaryPurple/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
