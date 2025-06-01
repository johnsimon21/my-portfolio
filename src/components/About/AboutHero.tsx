interface AboutHeroProps {
    isPortuguese: boolean;
}

export const AboutHero = ({ isPortuguese }: AboutHeroProps) => {
    return (
        <div className="text-center mb-16">
            <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-bold text-[#208FBB] mb-6">
                    {isPortuguese ? 'Sobre Mim' : 'About Me'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#208FBB] to-[#4277DE] mx-auto rounded-full mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <p className="text-[#D0D8EA] text-xl md:text-2xl leading-relaxed mb-8">
                    {isPortuguese
                        ? 'Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras que fazem a diferença. Com foco em qualidade, performance e experiência do usuário.'
                        : 'I am a developer passionate about creating innovative digital solutions that make a difference. Focused on quality, performance and user experience.'
                    }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                        <div className="text-4xl mb-4">💡</div>
                        <h3 className="text-[#208FBB] font-bold text-lg mb-2">
                            {isPortuguese ? 'Inovação' : 'Innovation'}
                        </h3>
                        <p className="text-[#B1BDDF] text-sm">
                            {isPortuguese
                                ? 'Sempre buscando as melhores tecnologias e práticas'
                                : 'Always seeking the best technologies and practices'
                            }
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-[#208FBB] font-bold text-lg mb-2">
                            {isPortuguese ? 'Foco' : 'Focus'}
                        </h3>
                        <p className="text-[#B1BDDF] text-sm">
                            {isPortuguese
                                ? 'Dedicação total para entregar resultados excepcionais'
                                : 'Total dedication to deliver exceptional results'
                            }
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-[#208FBB] font-bold text-lg mb-2">
                            {isPortuguese ? 'Colaboração' : 'Collaboration'}
                        </h3>
                        <p className="text-[#B1BDDF] text-sm">
                            {isPortuguese
                                ? 'Trabalho em equipe para alcançar objetivos comuns'
                                : 'Teamwork to achieve common goals'
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Personal Quote */}
            <div className="mt-12 bg-gradient-to-r from-[#208FBB]/10 to-[#4277DE]/10 rounded-2xl p-8 border border-[#208FBB]/20">
                <blockquote className="text-[#D0D8EA] text-lg md:text-xl italic mb-4">
                    "{isPortuguese
                        ? 'Código é poesia em movimento. Cada linha escrita é uma oportunidade de criar algo extraordinário.'
                        : 'Code is poetry in motion. Every line written is an opportunity to create something extraordinary.'
                    }"
                </blockquote>
                <div className="text-[#208FBB] font-semibold">- John Simon</div>
            </div>
        </div>
    );
};
