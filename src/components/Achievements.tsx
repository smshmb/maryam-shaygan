import { Trophy, Star, BookOpen, Users, Globe, Brain } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Iran's First Nursing Clinic",
      description: "Pioneered a clinic with innovative features to enhance patient care",
    },
    {
      icon: Star,
      title: "Multimedia Healthcare",
      description: "Designed multimedia and mobile-based tools for pain management education",
    },
    {
      icon: BookOpen,
      title: "Curriculum Innovation",
      description: "Introduced Iran's first Master's program in Pain Management Nursing",
    },
    {
      icon: Users,
      title: "National Leadership",
      description: "Created official guidelines for internship programs nationwide",
    },
    {
      icon: Globe,
      title: "International Impact",
      description: "Published in prestigious journals including The Lancet Rheumatology",
    },
    {
      icon: Brain,
      title: "Research Excellence",
      description: "Pioneered research on visual stimuli in chronic pain management",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card animate-fade-up"
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