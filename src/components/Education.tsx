
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section bg-darkBlack">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="bg-darkPurple rounded-xl p-6 md:p-8 shadow-lg transform hover:scale-[1.01] transition-transform">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Egyptian E-Learning University</h3>
              <p className="text-primaryPurple mt-1">Bachelor's Degree in Computer Science</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-neutralGray">2021 - 2025</p>
            </div>
          </div>
          
          <div className="bg-darkBlack/50 rounded-lg p-4 mt-4">
            <h4 className="font-semibold mb-2 text-white">Relevant Coursework:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-darkBlack/30 rounded px-3 py-2 text-sm">Operating Systems</div>
              <div className="bg-darkBlack/30 rounded px-3 py-2 text-sm">Networks</div>
              <div className="bg-darkBlack/30 rounded px-3 py-2 text-sm">Natural Language Processing (NLP)</div>
              <div className="bg-darkBlack/30 rounded px-3 py-2 text-sm">Machine Learning</div>
              <div className="bg-darkBlack/30 rounded px-3 py-2 text-sm">Artificial Intelligence (AI)</div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-green-400">
            <span className="font-semibold mr-2">GPA:</span>
            <span>3.0 / 4.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
