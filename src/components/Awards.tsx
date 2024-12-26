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
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Honors & Awards</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="card flex items-start gap-6 animate-fade-up"
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