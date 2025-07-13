import { useState } from 'react';
import { Section } from "../Layout/Section";
import { ContactMethodCard } from './ContactMethodCard';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { AvailabilityStatus } from './AvailabilityStatus';
import { ContactInfo } from './ContactInfo';
import { CONTACT_METHODS } from '../../constants/contact';

interface ContactSectionProps {
  id: string;
  isPortuguese: boolean;
} 

export const ContactSection = ({ id, isPortuguese }: ContactSectionProps) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'info'>('contact');

  return (
    <Section id={id} backgroundColor="bg-[#0E1F52]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#208FBB] mb-6">
            {isPortuguese ? 'Vamos Trabalhar Juntos' : 'Let\'s Work Together'}
          </h2>
          <p className="text-[#D0D8EA] text-xl max-w-3xl mx-auto leading-relaxed">
            {isPortuguese 
              ? 'Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível juntos!'
              : 'Ready to turn your ideas into reality? Get in touch and let\'s create something amazing together!'
            }
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A2B5C] rounded-full p-1 border border-[#2E3B63]">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-[#208FBB] text-white shadow-lg'
                  : 'text-[#B1BDDF] hover:text-[#D0D8EA]'
              }`}
            >
              {isPortuguese ? 'Contato' : 'Contact'}
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'info'
                  ? 'bg-[#208FBB] text-white shadow-lg'
                  : 'text-[#B1BDDF] hover:text-[#D0D8EA]'
              }`}
            >
              {isPortuguese ? 'Informações' : 'Information'}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTab === 'contact' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Methods & Status */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div>
                  <h3 className="text-2xl font-bold text-[#D0D8EA] mb-6">
                    {isPortuguese ? 'Como me encontrar' : 'How to reach me'}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {CONTACT_METHODS.map((method, index) => (
                      <ContactMethodCard
                        key={method.id}
                        method={method}
                        isPortuguese={isPortuguese}
                        index={index}
                      />
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <AvailabilityStatus isPortuguese={isPortuguese} />

                {/* Social Links */}
                <SocialLinks isPortuguese={isPortuguese} />
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm isPortuguese={isPortuguese} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <ContactInfo isPortuguese={isPortuguese} />

              {/* Right Column - Additional Info */}
              <div className="space-y-8">
                {/* Process Overview */}
                <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                  <h3 className="text-2xl font-bold text-[#208FBB] mb-6 flex items-center gap-2">
                    <span>🚀</span>
                    {isPortuguese ? 'Processo de Trabalho' : 'Work Process'}
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: '01',
                        title: isPortuguese ? 'Descoberta' : 'Discovery',
                        description: isPortuguese 
                          ? 'Entendemos suas necessidades e objetivos'
                          : 'We understand your needs and goals'
                      },
                      {
                        step: '02',
                        title: isPortuguese ? 'Planejamento' : 'Planning',
                        description: isPortuguese 
                          ? 'Criamos uma estratégia detalhada'
                          : 'We create a detailed strategy'
                      },
                      {
                        step: '03',
                        title: isPortuguese ? 'Desenvolvimento' : 'Development',
                        description: isPortuguese 
                          ? 'Construímos sua solução'
                          : 'We build your solution'
                      },
                      {
                        step: '04',
                        title: isPortuguese ? 'Entrega' : 'Delivery',
                        description: isPortuguese 
                          ? 'Lançamos e oferecemos suporte'
                          : 'We launch and provide support'
                      }
                    ].map((process, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#208FBB] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#D0D8EA] mb-1">{process.title}</h4>
                          <p className="text-sm text-[#B1BDDF]">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {/* <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <blockquote className="text-[#D0D8EA] italic mb-4">
                      "{isPortuguese 
                        ? 'Trabalhar com John foi uma experiência incrível. Profissional, dedicado e sempre entrega mais do que o esperado.'
                        : 'Working with John was an incredible experience. Professional, dedicated and always delivers more than expected.'
                      }"
                    </blockquote>
                    <div className="text-[#208FBB] font-semibold">
                      {isPortuguese ? 'Cliente Satisfeito' : 'Satisfied Client'}
                    </div>
                    <div className="text-[#B1BDDF] text-sm">⭐⭐⭐⭐⭐</div>
                  </div>
                </div> */}

                {/* Quick Contact CTA */}
                <div className="bg-gradient-to-r from-[#208FBB] to-[#4277DE] rounded-2xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {isPortuguese ? 'Projeto Urgente?' : 'Urgent Project?'}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {isPortuguese 
                      ? 'Entre em contato via WhatsApp para uma resposta rápida'
                      : 'Contact me via WhatsApp for a quick response'
                    }
                  </p>
                  <a
                    href="https://wa.me/244922691189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#208FBB] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span>💬</span>
                    {isPortuguese ? 'Chamar no WhatsApp' : 'Message on WhatsApp'}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-[#2E3B63]/50">
          <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-8 border border-[#2E3B63]/50">
            <h3 className="text-3xl font-bold text-[#D0D8EA] mb-4">
              {isPortuguese ? 'Pronto para começar?' : 'Ready to get started?'}
            </h3>
            <p className="text-[#B1BDDF] text-lg mb-6 max-w-2xl mx-auto">
              {isPortuguese 
                ? 'Não importa o tamanho do seu projeto, estou aqui para ajudar você a alcançar seus objetivos.'
                : 'No matter the size of your project, I\'m here to help you achieve your goals.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:john.johnsimonjs21@gmail.com"
                className="bg-[#208FBB] hover:bg-[#1A7A9A] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isPortuguese ? 'Enviar Email' : 'Send Email'}
              </a>
              <a
                href="https://wa.me/244922691189"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20B954] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isPortuguese ? 'WhatsApp' : 'WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
