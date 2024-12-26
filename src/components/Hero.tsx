import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-down">
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
          <div className="flex flex-wrap justify-center gap-8">
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
              <span>60+ Publications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};