
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Concepts & Practices",
      skills: ["Object-Oriented Programming (OOP)", "Data Structures", "Algorithms", "SOLID Principles", "Design Patterns"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Database Management",
      skills: ["SQL"]
    },
    {
      category: "Version Control",
      skills: ["Git & GitHub"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Pandas (Python)", "Linux", "System Design", "Software Architectures"]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Decision Making",
    "Strong Communication Skills",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-darkBlack to-darkPurple">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-primaryPurple">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <h4 className="text-lg font-semibold mb-3 text-white">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-darkBlack px-3 py-1.5 rounded-full text-sm border border-primaryPurple/30 hover:border-primaryPurple hover:bg-primaryPurple/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills Column */}
          <div className="bg-darkBlack/50 rounded-xl p-6 h-min">
            <h3 className="text-2xl font-bold mb-6 text-primaryPurple">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-darkPurple p-4 rounded-lg flex items-center animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="h-3 w-3 rounded-full bg-primaryPurple mr-3"></div>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
