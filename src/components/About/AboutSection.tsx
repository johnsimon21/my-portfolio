import { Section } from "../Layout/Section";

interface AboutSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const AboutSection = ({ id, isPortuguese }: AboutSectionProps) => {
  return (
    <Section id={id} className="flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-[#D0D8EA]">
          <h2 className="text-4xl font-bold mb-8 text-[#208FBB]">
            {isPortuguese ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isPortuguese 
              ? 'Sou um desenvolvedor apaixonado por criar soluções digitais...'
              : 'I am a developer passionate about creating digital solutions...'
            }
          </p>
          {/* More content */}
        </div>
        <div className="flex justify-center">
          {/* About image or animation */}
        </div>
      </div>
    </Section>
  );
};