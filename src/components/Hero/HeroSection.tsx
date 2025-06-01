import { CircularDesign } from './CircularDesign';
import { IntroContent } from './IntroContent';
import { ProjectsSlider } from './ProjectsSlider';

interface HeroSectionProps {
  isPortuguese: boolean;
}

export const HeroSection = ({ isPortuguese }: HeroSectionProps) => {
  return (
    <div className="flex-col my-10">
      {/* Main Hero Content */}
      <div className="flex my-10">
        <CircularDesign />
        <IntroContent isPortuguese={isPortuguese} />
      </div>
      
      {/* Contact Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-white text-[#4277DE] border border-2 inset-shadow-indigo-500 border-[#4277DE] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#E0E0E0] hover:scale-105 transition-all duration-300">
          {isPortuguese ? 'Contactar' : 'Contact Now'}
        </button>
      </div>

      {/* Projects Slider */}
      <ProjectsSlider isPortuguese={isPortuguese} />
    </div>
  );
};
