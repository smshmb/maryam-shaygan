import { Trophy, Star, BookOpen, Users, Globe, Brain, Stethoscope, Laptop, GraduationCap, UserPlus, Presentation } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Curriculum Innovation",
      description: "Led the redesign of Iran's Ph.D. Nursing Curriculum and spearheaded the development of the first DNP program, aligning with global standards.",
    },
    {
      icon: Brain,
      title: "Pain Management Research",
      description: "Pioneered research on visual stimuli in chronic pain management, leading to innovative non-pharmacological interventions.",
    },
    {
      icon: Globe,
      title: "Global Academic Impact",
      description: "Published 60+ articles in prestigious journals including The Lancet Rheumatology, Scientific Reports, and The Journal of Pain.",
    },
    {
      icon: Stethoscope,
      title: "National Guidelines",
      description: "Developed Iran's official nursing internship guideline, receiving commendations from the Deputy Minister and a Presidential plaque.",
    },
    {
      icon: Users,
      title: "Suicide Prevention Pioneer",
      description: "Delivered specialized training for Iran's first suicide emergency hotline and led research initiatives in suicide prevention.",
    },
    {
      icon: Star,
      title: "Academic Leadership",
      description: "Played key roles in national curriculum planning committees and examination teams for nursing education at all levels.",
    },
    {
      icon: UserPlus,
      title: "Academic Mentorship",
      description: "Supervised 20+ graduate and doctoral theses in healthcare fields, leading to significant findings in pain management and mental health.",
    },
    {
      icon: Presentation,
      title: "International Recognition",
      description: "Delivered presentations at international conferences and received endorsements from renowned academics like Dr. Andreas Böger.",
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <achievement.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};