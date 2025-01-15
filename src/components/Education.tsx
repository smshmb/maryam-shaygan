import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      year: "2014",
      degree: "Ph.D. in Pain Psychology",
      institution: "University of Göttingen",
      location: "Germany",
      description: "Ranked 63rd globally by Times Higher Education World University Rankings 2013-2014"
    },
    {
      year: "2010",
      degree: "Master of Science in Psychiatric Nursing",
      institution: "Shiraz University of Medical Sciences",
      location: "Shiraz, Iran",
      description: "Graduated as the Top Student in the MSc program"
    },
    {
      year: "2008",
      degree: "Bachelor of Science in Nursing",
      institution: "Isfahan University of Medical Sciences",
      location: "Isfahan, Iran",
      description: "Recognized as the Top Student in the BSc program"
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="timeline-dot">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <div className="ml-4">
                <span className="text-secondary font-bold">{edu.year}</span>
                <h3 className="text-xl font-bold text-primary mt-1">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.location}</p>
                <p className="text-gray-600 mt-2 italic">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};