import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Member of Examination, Evaluation, and Curriculum Planning Committee",
      organization: "Iranian Ministry of Health and Medical Education",
      location: "Tehran, Iran",
      description: "Appointed to a national committee responsible for overseeing and enhancing the nursing curriculum across Iran, ensuring alignment with international educational standards."
    },
    {
      period: "2023 - Present",
      title: "Professor of Nursing",
      organization: "Shiraz School of Nursing and Midwifery",
      location: "Shiraz, Iran",
      description: "Leading academic and research initiatives, teaching advanced nursing courses and mentoring graduate students."
    },
    {
      period: "2022 - Present",
      title: "Dean of College",
      organization: "Shiraz School of Nursing and Midwifery",
      location: "Shiraz, Iran",
      description: "Leading the School of Nursing and Midwifery, overseeing academic programs, faculty, and student affairs."
    },
    {
      period: "2018 - Present",
      title: "Chairperson and Founding Member",
      organization: "Community-Based Psychiatric Care Research Centre",
      location: "Shiraz, Iran",
      description: "Established and currently leading a research centre focused on community-based psychiatric care."
    },
    {
      period: "2012 - 2014",
      title: "Research Assistant",
      organization: "Red Cross Hospital & Georg August University",
      location: "Kassel/Göttingen, Germany",
      description: "Conducted clinical research in pain management and supported teaching activities."
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
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};