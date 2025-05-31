import { CircularDesign } from './CircularDesign';
import { IntroContent } from './IntroContent';

interface HeroSectionProps {
  isPortuguese: boolean;
}

export const HeroSection = ({ isPortuguese }: HeroSectionProps) => {
  return (
    <div className="flex my-10">
      <CircularDesign />
      <IntroContent isPortuguese={isPortuguese} />
    </div>
  );
};