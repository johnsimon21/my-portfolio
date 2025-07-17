interface IntroContentProps {
  isPortuguese: boolean;
}

export const IntroContent = ({ isPortuguese }: IntroContentProps) => {
  const content = {
    pt: {
      greeting: "Olá,",
      name: "Eu sou John",
      description: "Desenvolvedor Web, comprometido com o aprendizado contínuo e experiência prática em projetos no GitHub. Focado em criar interfaces atraentes e soluções backend robustas, com forte ênfase na colaboração e busca por desafios para crescimento profissional",
      motto: "Processo & Persistência ++Deus++"
    },
    en: {
      greeting: "Hey there,",
      name: "I'm John",
      description: "Web Developer, committed to continuous learning and hands-on experience in projects on GitHub. Focused on creating attractive interfaces and robust backend solutions, with a strong emphasis on collaboration and seeking challenges for professional growth",
      motto: "Process & Persistence ++God++"
    }
  };

  const currentContent = isPortuguese ? content.pt : content.en;

  return (
    <div className="flex flex-col lg:ml-8 xl:ml-12 2xl:ml-[150px] text-[#D0D8EA] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
      {/* Greeting and Name - Responsive text */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
        <span className="block gradient-text-3d">
          {currentContent.greeting}
        </span>
        <span className="block gradient-text-3d font-bold">
          {currentContent.name}
        </span>
      </div>

      {/* Description - Responsive text and spacing */}
      <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[590px] font-serif leading-relaxed text-shadow-3d mx-auto lg:mx-0">
        {currentContent.description}
      </p>

      {/* Motto - Responsive styling */}
      <p className="text-[#CFB76F] text-base sm:text-lg md:text-xl lg:text-xl font-mono text-center lg:text-center underline underline-offset-2 hover:underline-offset-4 transition-all duration-300 glow-text">
        {currentContent.motto}
      </p>
    </div>
  );
};