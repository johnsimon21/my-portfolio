interface SkillsCTAProps {
  isPortuguese: boolean;
}

export const SkillsCTA = ({ isPortuguese }: SkillsCTAProps) => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-[#208FBB]/20 to-[#4277DE]/20 rounded-2xl p-8 border border-[#208FBB]/30">
        <h3 className="text-2xl font-bold text-[#D0D8EA] mb-4">
          {isPortuguese ? 'Vamos trabalhar juntos?' : 'Ready to work together?'}
        </h3>
        <p className="text-[#B1BDDF] mb-6 max-w-2xl mx-auto">
          {isPortuguese 
            ? 'Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades em projetos inovadores.'
            : 'I\'m always looking for new challenges and opportunities to apply my skills in innovative projects.'
          }
        </p>
        <button className="bg-[#208FBB] hover:bg-[#1A7A9A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
          {isPortuguese ? 'Entrar em Contato' : 'Get In Touch'}
        </button>
      </div>
    </div>
  );
};