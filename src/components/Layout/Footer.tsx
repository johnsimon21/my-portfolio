import { SocialLinks } from '../Contact/SocialLinks';
import { Logo } from '../Logo/Logo';

interface FooterProps {
  isPortuguese: boolean;
}

export const Footer = ({ isPortuguese }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const content = {
    pt: {
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      followMe: 'Me Siga',
      copyright: 'Todos os direitos reservados.',
      madeWith: 'Feito com',
      location: 'São Paulo, Brasil',
      email: 'john@exemplo.com',
      phone: '+55 (11) 99999-9999'
    },
    en: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followMe: 'Follow Me',
      copyright: 'All rights reserved.',
      madeWith: 'Made with',
      location: 'São Paulo, Brazil',
      email: 'john@example.com',
      phone: '+55 (11) 99999-9999'
    }
  };

  const currentContent = isPortuguese ? content.pt : content.en;

  const quickLinks = [
    { id: 'about', label: isPortuguese ? 'Sobre' : 'About' },
    { id: 'skills', label: isPortuguese ? 'Habilidades' : 'Skills' },
    { id: 'projects', label: isPortuguese ? 'Projetos' : 'Projects' },
    { id: 'contacts', label: isPortuguese ? 'Contato' : 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1A43] border-t border-[#182751]">
      {/* Main Footer Content */}
      <div className="px-[80px] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div onClick={scrollToTop} className="cursor-pointer">
                <Logo className="text-2xl" />
              </div>
              <p className="text-[#B1BDDF] text-sm leading-relaxed max-w-xs">
                {isPortuguese 
                  ? 'Desenvolvedor Web focado em criar soluções digitais inovadoras e experiências de usuário excepcionais.'
                  : 'Web Developer focused on creating innovative digital solutions and exceptional user experiences.'
                }
              </p>
              <div className="flex items-center space-x-2 text-[#B1BDDF] text-sm">
                <span>{currentContent.madeWith}</span>
                <span className="text-red-500">❤️</span>
                <span>& React</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-[#208FBB] font-semibold text-lg">
                {currentContent.quickLinks}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-[#B1BDDF] hover:text-[#208FBB] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-[#208FBB] font-semibold text-lg">
                {currentContent.contact}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[#B1BDDF] text-sm">
                  <svg className="w-4 h-4 text-[#208FBB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{currentContent.location}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-[#B1BDDF] text-sm">
                  <svg className="w-4 h-4 text-[#208FBB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a 
                    href={`mailto:${currentContent.email}`}
                    className="hover:text-[#208FBB] transition-colors duration-200"
                  >
                    {currentContent.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-[#B1BDDF] text-sm">
                  <svg className="w-4 h-4 text-[#208FBB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a 
                    href={`tel:${currentContent.phone.replace(/\s/g, '')}`}
                    className="hover:text-[#208FBB] transition-colors duration-200"
                  >
                    {currentContent.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-[#208FBB] font-semibold text-lg">
                {currentContent.followMe}
              </h3>
              <SocialLinks />
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="mt-6 bg-[#208FBB] hover:bg-[#1a7299] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>{isPortuguese ? 'Voltar ao Topo' : 'Back to Top'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#182751] bg-[#0A1A43]">
        <div className="px-[80px] py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#B1BDDF] text-sm">
              © {currentYear} JoystLine. {currentContent.copyright}
            </div>
            
            <div className="flex items-center space-x-6 text-[#B1BDDF] text-sm">
              <button className="hover:text-[#208FBB] transition-colors duration-200">
                {isPortuguese ? 'Política de Privacidade' : 'Privacy Policy'}
              </button>
              <button className="hover:text-[#208FBB] transition-colors duration-200">
                {isPortuguese ? 'Termos de Uso' : 'Terms of Use'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
