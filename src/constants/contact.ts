export interface ContactMethod {
  id: string;
  name: string;
  label: {
    pt: string;
    en: string;
  };
  value: string;
  href: string;
  icon: string;
  color: string;
  description: {
    pt: string;
    en: string;
  };
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  username: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'email',
    name: 'Email',
    label: { pt: 'Email', en: 'Email' },
    value: 'johnsimon21@example.com',
    href: 'mailto:johnsimon21@example.com',
    icon: '📧',
    color: '#208FBB',
    description: {
      pt: 'Envie-me um email para discussões detalhadas sobre projetos',
      en: 'Send me an email for detailed project discussions'
    }
  },
  {
    id: 'phone',
    name: 'Phone',
    label: { pt: 'Telefone', en: 'Phone' },
    value: '+55 (11) 99999-9999',
    href: 'tel:+5511999999999',
    icon: '📱',
    color: '#10B981',
    description: {
      pt: 'Ligue para conversas rápidas e urgentes',
      en: 'Call for quick and urgent conversations'
    }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    label: { pt: 'WhatsApp', en: 'WhatsApp' },
    value: '+55 (11) 99999-9999',
    href: 'https://wa.me/5511999999999',
    icon: '💬',
    color: '#25D366',
    description: {
      pt: 'Chat direto para comunicação instantânea',
      en: 'Direct chat for instant communication'
    }
  },
  {
    id: 'location',
    name: 'Location',
    label: { pt: 'Localização', en: 'Location' },
    value: 'São Paulo, Brasil',
    href: 'https://maps.google.com/?q=São+Paulo,+Brasil',
    icon: '📍',
    color: '#EF4444',
    description: {
      pt: 'Disponível para reuniões presenciais em SP',
      en: 'Available for in-person meetings in SP'
    }
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/johnsimon21',
    icon: 'github',
    color: '#333',
    username: '@johnsimon21'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johnsimon',
    icon: 'linkedin',
    color: '#0077B5',
    username: '/in/johnsimon'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/johnsimon21',
    icon: 'twitter',
    color: '#1DA1F2',
    username: '@johnsimon21'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/johnsimon21',
    icon: 'instagram',
    color: '#E4405F',
    username: '@johnsimon21'
  }
];

export const AVAILABILITY_STATUS = {
  available: {
    pt: 'Disponível para novos projetos',
    en: 'Available for new projects',
    color: '#10B981',
    icon: '🟢'
  },
  busy: {
    pt: 'Ocupado, mas aceito propostas',
    en: 'Busy, but accepting proposals',
    color: '#F59E0B',
    icon: '🟡'
  },
  unavailable: {
    pt: 'Indisponível no momento',
    en: 'Currently unavailable',
    color: '#EF4444',
    icon: '🔴'
  }
};