import { Section } from "../Layout/Section";

interface ContactSectionProps {
  id: string;
  isPortuguese: boolean;
} 

export const ContactSection = ({ id, isPortuguese }: ContactSectionProps) => {
  return (
    <Section id={id} className="flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-[#D0D8EA]">
          <h2 className="text-4xl font-bold mb-8 text-[#208FBB]">
            {isPortuguese ? 'Contato' : 'Contact'}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isPortuguese 
              ? 'Entre em contato comigo através das redes sociais ou e-mail.'
              : 'Get in touch with me through social media or email.'
            }
          </p>
          {/* More content */}
        </div>
        <div className="flex justify-center">
          {/* Contact image or animation */}
        </div>
      </div>
    </Section>
  );
};
