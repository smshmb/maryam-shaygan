import { Hero } from "../components/Hero";
import { Achievements } from "../components/Achievements";
import { Awards } from "../components/Awards";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <Awards />
    </div>
  );
};

export default Index;