
import React from 'react';

const Certifications = () => {
  const certifications = [
    "Qualified twice for the regional programming contest (ECPC - Egyptian Collegiate Programming Contest).",
    "Ranked 25th nationally and 606th globally among 6,000+ participants in IEEE Xtreme 18.0.",
    "Advanced to Round 2 in the Meta Hacker Cup (by Meta - Facebook).",
    "Solved over 2,000 programming problems and achieved a maximum Codeforces rating of 1500.",
    "Microsoft Azure Security Certification holder.",
    "Completed the Node.js, Express, and MongoDB course (Udemy).",
    "Completed the CCNA (Cisco Certified Network Associate) certification."
  ];

  return (
    <section id="certifications" className="section bg-gradient-to-b from-darkPurple to-darkBlack">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-darkPurple p-6 rounded-xl border-l-4 border-primaryPurple shadow-lg transform hover:scale-[1.02] transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-gray-200">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
