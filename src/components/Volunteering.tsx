
import React from 'react';

const Volunteering = () => {
  const experiences = [
    {
      organization: "ICPC EELU Community",
      period: "2025",
      position: "IT Specialist and Instructor",
      responsibilities: [
        "Guided students through advanced problem-solving techniques.",
        "Designed and organized problem sets and contests for Level 2 training."
      ]
    },
    {
      organization: "ICPC SCU Community",
      period: "2023 - 2025",
      position: "IT Specialist and Instructor",
      responsibilities: [
        "Mentored students from beginner to intermediate levels (Levels 0, 1, and 2).",
        "Helped develop their skills in algorithms, data structures, and competitive programming."
      ]
    }
  ];

  return (
    <section id="volunteering" className="section bg-darkBlack">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Volunteering Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-darkPurple rounded-xl p-6 md:p-8 shadow-lg animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.organization}</h3>
                  <p className="text-primaryPurple mt-1">{exp.position}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="inline-block bg-darkBlack/50 px-3 py-1 rounded-full text-sm">{exp.period}</p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex">
                    <div className="min-w-[20px] mt-1.5">
                      <div className="h-2 w-2 rounded-full bg-primaryPurple"></div>
                    </div>
                    <p className="text-gray-300 ml-2">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
