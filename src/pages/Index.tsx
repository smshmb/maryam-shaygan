import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Achievements } from "../components/Achievements";
import { Awards } from "../components/Awards";
import { Resources } from "../components/Resources";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Achievements />
      <Awards />
      <Resources />
      <Contact />
    </div>
  );
};

export default Index;