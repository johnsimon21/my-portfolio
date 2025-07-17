import { CircularDesign } from './CircularDesign';
import { IntroContent } from './IntroContent';
import { ProjectsSlider } from './ProjectsSlider';

interface HeroSectionProps {
  isPortuguese: boolean;
}

export const HeroSection = ({ isPortuguese }: HeroSectionProps) => {
  return (
    <div className="flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
      {/* Main Hero Content - Responsive layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
        <div className="flex-shrink-0 order-2 lg:order-1">
          <CircularDesign />
        </div>
        <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
          <IntroContent isPortuguese={isPortuguese} />
        </div>
      </div>
      
      {/* Contact Button - Responsive sizing */}
      <div className="flex justify-center">
        <button className="bg-white text-[#4277DE] border-2 border-[#4277DE] font-semibold py-3 px-6 sm:py-4 sm:px-8 md:py-3 md:px-8 rounded-full shadow-lg hover:bg-[#E0E0E0] hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg _3d-button">
          {isPortuguese ? 'Contactar' : 'Contact Now'}
        </button>
      </div>

      {/* Projects Slider - Responsive spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ProjectsSlider isPortuguese={isPortuguese} />
      </div>
    </div>
  );
};
