import { Linkedin, Globe, BookOpen } from "lucide-react";

export const Resources = () => {
  const resources = [
    {
      icon: Linkedin,
      title: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/maryam-shaygan-33b86562/",
      description: "Connect with me on LinkedIn",
    },
    {
      icon: BookOpen,
      title: "Google Scholar",
      url: "https://scholar.google.com/citations?user=eJd97uIAAAAJ&hl=en",
      description: "View my published research",
    },
    {
      icon: Globe,
      title: "University Profile",
      url: "https://isid.research.ac.ir/Maryam_Shaygan",
      description: "Visit my academic profile",
    },
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <resource.icon className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};