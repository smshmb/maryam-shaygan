import { Award } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Top Dean of Nursing Schools in Iran",
      description: "Honored by the President and the Minister of Health of Iran",
    },
    {
      year: "2023",
      title: "Top Researcher",
      description: "Recognized for outstanding contributions to research at Shiraz University of Medical Sciences",
    },
    {
      year: "2024",
      title: "Committee Leadership",
      description: "Appointed as leader in Iran's Examination, Evaluation, and Curriculum Planning Committee",
    },
    {
      year: "2020",
      title: "National Educational Innovation Award",
      description: "Honored for integrating technology and innovative methodologies into nursing education",
    },
    {
      year: "2019",
      title: "Motahari Educational Festival Winner",
      description: "Awarded for exceptional achievements in education",
    },
    {
      year: "2018",
      title: "Healthcare Leadership Award",
      description: "Received for significant contributions to improving nursing care and education in Iran",
    },
    {
      year: "2014",
      title: "Nikon Company Grant",
      description: "Awarded for research on visual stimuli in chronic pain mitigation at George August University",
    },
    {
      year: "2016",
      title: "Excellence in Clinical Education",
      description: "Awarded for outstanding leadership in clinical training programs",
    },
    {
      year: "2014",
      title: "International Collaboration Recognition",
      description: "Commended by George August University of Göttingen for research collaboration",
    },
    {
      year: "2010",
      title: "First Top Student MSc",
      description: "Faculty of Nursing, Shiraz University of Medical Sciences",
    },
    {
      year: "2008",
      title: "Top Student BSc",
      description: "Faculty of Nursing, Isfahan University of Medical Sciences",
    },
    {
      year: "2023",
      title: "International Publication Impact",
      description: "Recognized for high citation rates in pain management and nursing education",
    },
  ];

  return (
    <section id="awards" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Honors & Awards</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Award className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-secondary font-bold">{award.year}</span>
                  <h3 className="text-xl font-bold text-primary">{award.title}</h3>
                </div>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};