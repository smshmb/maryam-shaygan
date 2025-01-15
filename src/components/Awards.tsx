import { Award } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Top Dean of Nursing Schools in Iran",
      description: "Honored by the President and the Minister of Health of Iran",
    },
    {
      year: "2024",
      title: "National Nursing Education Committee",
      description: "Appointed as member of Iran's Examination, Evaluation, and Curriculum Planning Committee for nursing education reform",
    },
    {
      year: "2024",
      title: "Pioneer in Nursing Innovation",
      description: "Established Iran's first Nursing Clinic with innovative features to enhance primary and tertiary health",
    },
    {
      year: "2024",
      title: "Digital Healthcare Innovation",
      description: "Developed an innovative online platform connecting nursing professors with patients for real-time professional guidance",
    },
    {
      year: "2023",
      title: "Top Researcher",
      description: "Recognized for outstanding contributions to research at Shiraz University of Medical Sciences",
    },
    {
      year: "2022",
      title: "Research Centre Excellence",
      description: "Led the Community-Based Psychiatric Care Research Centre to achieve top ranking among research centres at SUMS",
    },
    {
      year: "2019-2025",
      title: "Motahari Educational Festival Winner",
      description: "Multiple-time winner for exceptional achievements in education",
    },
    {
      year: "2014",
      title: "Nikon Company Grant",
      description: "Awarded for research on visual stimuli in chronic pain mitigation at George August University",
    },
    {
      year: "2013-2014",
      title: "International Research Recognition",
      description: "Commended by Red Cross Hospital in Kassel, Germany for collaborative research on chronic pain",
    },
    {
      year: "2011-2014",
      title: "University of Göttingen Fellowship",
      description: "Awarded faculty-funded Ph.D. and Research Position at the globally ranked University of Göttingen",
    }
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