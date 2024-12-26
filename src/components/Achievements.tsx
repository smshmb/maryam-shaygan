import { Trophy, Star, BookOpen, Users, Globe, Brain, Stethoscope, Laptop, GraduationCap, UserPlus, Presentation } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Stethoscope,
      title: "Iran's First Nursing Clinic",
      description: "Pioneered a clinic with innovative and unique features to enhance patient care",
    },
    {
      icon: Laptop,
      title: "Multimedia Healthcare",
      description: "Designed and implemented multimedia and mobile-based tools for pain management education",
    },
    {
      icon: GraduationCap,
      title: "Master's Curriculum Innovation",
      description: "Introduced Iran's first Master's program in Pain Management Nursing",
    },
    {
      icon: BookOpen,
      title: "National Guidelines",
      description: "Created the official guideline for internship programs at the request of Iran's Ministry of Health",
    },
    {
      icon: Star,
      title: "Rehabilitation Program",
      description: "Designed a Short-term Rehabilitation Nursing Program for chronic patient management",
    },
    {
      icon: Users,
      title: "Internship Innovation",
      description: "Developed a groundbreaking program improving nursing students' competency",
    },
    {
      icon: Brain,
      title: "Pain Management Research",
      description: "Pioneered research on visual stimuli in chronic pain management",
    },
    {
      icon: Trophy,
      title: "Curriculum Leadership",
      description: "Led national curriculum planning committees for nursing education at all levels",
    },
    {
      icon: Globe,
      title: "Global Academic Impact",
      description: "Published 70+ articles in prestigious journals including The Lancet Rheumatology",
    },
    {
      icon: UserPlus,
      title: "Academic Mentorship",
      description: "Supervised over 20 graduate and doctoral theses in healthcare fields",
    },
    {
      icon: Presentation,
      title: "International Speaker",
      description: "Delivered keynotes on digital health innovations and AI in healthcare",
    },
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