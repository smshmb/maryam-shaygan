import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Member of Examination, Evaluation, and Curriculum Planning Committee",
      organization: "Iranian Ministry of Health and Medical Education",
      location: "Tehran, Iran",
    },
    {
      period: "2023 - Present",
      title: "Professor of Nursing",
      organization: "Shiraz School of Nursing and Midwifery",
      location: "Shiraz, Iran",
    },
    {
      period: "2022 - Present",
      title: "Dean of College",
      organization: "Shiraz School of Nursing and Midwifery",
      location: "Shiraz, Iran",
    },
    {
      period: "2018 - Present",
      title: "Chairperson of Research Center",
      organization: "Community-based Psychiatric Care Research Center",
      location: "Shiraz, Iran",
    },
    {
      period: "2015 - 2018",
      title: "Assistant Professor",
      organization: "Shiraz University of Medical Sciences",
      location: "Shiraz, Iran",
    },
    {
      period: "2012 - 2014",
      title: "Research Assistant",
      organization: "Red Cross Hospital",
      location: "Kassel, Germany",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="timeline-dot">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div className="ml-4">
                <span className="text-secondary font-bold">{exp.period}</span>
                <h3 className="text-xl font-bold text-primary mt-1">{exp.title}</h3>
                <p className="text-gray-600">{exp.organization}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};