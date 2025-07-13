interface ContactInfoProps {
    isPortuguese: boolean;
}

export const ContactInfo = ({ isPortuguese }: ContactInfoProps) => {
    const workingHours = [
        {
            day: isPortuguese ? 'Segunda - Sexta' : 'Monday - Friday',
            hours: '09:00 - 18:00',
            timezone: 'GMT-3 (São Paulo)'
        },
        {
            day: isPortuguese ? 'Sábado' : 'Saturday',
            hours: '10:00 - 14:00',
            timezone: 'GMT-3 (São Paulo)'
        },
        {
            day: isPortuguese ? 'Domingo' : 'Sunday',
            hours: isPortuguese ? 'Fechado' : 'Closed',
            timezone: ''
        }
    ];

    const services = [
        {
            icon: '🌐',
            title: isPortuguese ? 'Desenvolvimento Web' : 'Web Development',
            description: isPortuguese ? 'Sites e aplicações web modernas' : 'Modern websites and web applications'
        },
        {
            icon: '📱',
            title: isPortuguese ? 'Aplicações Mobile' : 'Mobile Applications',
            description: isPortuguese ? 'Apps nativos e híbridos' : 'Native and hybrid apps'
        },
        {
            icon: '⚡',
            title: isPortuguese ? 'Otimização' : 'Optimization',
            description: isPortuguese ? 'Performance e SEO' : 'Performance and SEO'
        },
        {
            icon: '🎨',
            title: isPortuguese ? 'UI/UX Design' : 'UI/UX Design',
            description: isPortuguese ? 'Interfaces intuitivas' : 'Intuitive interfaces'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Working Hours */}
            <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                <h3 className="text-xl font-bold text-[#208FBB] mb-4 flex items-center gap-2">
                    <span>🕒</span>
                    {isPortuguese ? 'Horário de Atendimento' : 'Working Hours'}
                </h3>

                <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-[#2E3B63]/30 last:border-b-0">
                            <span className="text-[#D0D8EA] font-medium">{schedule.day}</span>
                            <div className="text-right">
                                <div className="text-[#B1BDDF]">{schedule.hours}</div>
                                {schedule.timezone && (
                                    <div className="text-xs text-[#B1BDDF]/70">{schedule.timezone}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                <h3 className="text-xl font-bold text-[#208FBB] mb-4 flex items-center gap-2">
                    <span>🛠️</span>
                    {isPortuguese ? 'Serviços' : 'Services'}
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0A1428]/50 transition-colors duration-300">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                                <h4 className="font-semibold text-[#D0D8EA] mb-1">{service.title}</h4>
                                <p className="text-sm text-[#B1BDDF]">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                <h3 className="text-xl font-bold text-[#208FBB] mb-4 flex items-center gap-2">
                    <span>❓</span>
                    {isPortuguese ? 'Perguntas Frequentes' : 'FAQ'}
                </h3>

                <div className="space-y-4">
                    <details className="group">
                        <summary className="cursor-pointer text-[#D0D8EA] font-medium py-2 hover:text-[#208FBB] transition-colors duration-300 flex items-center justify-between">
                            {isPortuguese ? 'Qual é o prazo médio de entrega?' : 'What is the average delivery time?'}
                            <span className="group-open:rotate-180 transition-transform duration-300">▼</span>
                        </summary>
                        <p className="text-[#B1BDDF] text-sm mt-2 pl-4 border-l-2 border-[#208FBB]/30">
                            {isPortuguese
                                ? 'Depende da complexidade do projeto. Sites simples: 1-2 semanas. Aplicações complexas: 1-3 meses.'
                                : 'Depends on project complexity. Simple websites: 1-2 weeks. Complex applications: 1-3 months.'
                            }
                        </p>
                    </details>

                    <details className="group">
                        <summary className="cursor-pointer text-[#D0D8EA] font-medium py-2 hover:text-[#208FBB] transition-colors duration-300 flex items-center justify-between">
                            {isPortuguese ? 'Você oferece suporte pós-entrega?' : 'Do you offer post-delivery support?'}
                            <span className="group-open:rotate-180 transition-transform duration-300">▼</span>
                        </summary>
                        <p className="text-[#B1BDDF] text-sm mt-2 pl-4 border-l-2 border-[#208FBB]/30">
                            {isPortuguese
                                ? 'Sim! Ofereço 30 dias de suporte gratuito e planos de manutenção mensais.'
                                : 'Yes! I offer 30 days of free support and monthly maintenance plans.'
                            }
                        </p>
                    </details>

                    <details className="group">
                        <summary className="cursor-pointer text-[#D0D8EA] font-medium py-2 hover:text-[#208FBB] transition-colors duration-300 flex items-center justify-between">
                            {isPortuguese ? 'Como funciona o processo de pagamento?' : 'How does the payment process work?'}
                            <span className="group-open:rotate-180 transition-transform duration-300">▼</span>
                        </summary>
                        <p className="text-[#B1BDDF] text-sm mt-2 pl-4 border-l-2 border-[#208FBB]/30">
                            {isPortuguese
                                ? '50% no início do projeto, 50% na entrega. Aceito transferência bancária e cartão.'
                                : '50% at project start, 50% on delivery. I accept bank transfer, Wise, and credit cards.'
                            }
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};
