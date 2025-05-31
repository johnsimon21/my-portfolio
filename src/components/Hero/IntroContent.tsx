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
    <div className="flex flex-col ms-[150px] text-[#D0D8EA]">
      <span className="text-4xl">
        {currentContent.greeting} <br />
        {currentContent.name}
      </span>

      <p className="mt-24 max-w-[590px] font-serif">
        {currentContent.description}
      </p>

      <p className="my-10 text-[#CFB76F] text-xl font-mono text-center underline underline-offset-1">
        {currentContent.motto}
      </p>
    </div>
  );
};