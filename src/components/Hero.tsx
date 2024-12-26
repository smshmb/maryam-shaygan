import { GraduationCap, Award, BookOpen, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div id="about" className="bg-primary text-white py-16 md:py-24 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-down">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-secondary">
              <AvatarImage src="/lovable-uploads/d70ff873-8193-4efa-9cd1-e45d2c567a7f.png" alt="Dr. Maryam Shaygan" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dr. Maryam Shaygan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professor of Nursing
          </p>
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            A dedicated academic leader with over 10 years of experience in nursing education,
            research, and innovation. Committed to advancing healthcare through education and research.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <span>PhD in Pain Psychology</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-secondary" />
              <span>Multiple National Awards</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-secondary" />
              <span>70+ Publications</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="achievements"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors cursor-pointer"
            >
              View Achievements <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="awards"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
            >
              View Awards <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};