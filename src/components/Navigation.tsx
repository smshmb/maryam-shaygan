import { Link } from "react-scroll";

export const Navigation = () => {
  const menuItems = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Education", to: "education" },
    { label: "Achievements", to: "achievements" },
    { label: "Awards", to: "awards" },
    { label: "Resources", to: "resources" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-primary/95 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-white hover:text-secondary cursor-pointer px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};