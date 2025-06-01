import { useState } from 'react';
import { ContactMethod } from '../../constants/contact';

interface ContactMethodCardProps {
  method: ContactMethod;
  isPortuguese: boolean;
  index: number;
}

export const ContactMethodCard = ({ method, isPortuguese, index }: ContactMethodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(method.value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClick = () => {
    window.open(method.href, '_blank');
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50 hover:border-[#208FBB]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
        style={{ backgroundColor: method.color }}
      />

      {/* Icon */}
      <div className="relative mb-4">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${method.color}20` }}
        >
          <span>{method.icon}</span>
        </div>
        
        {/* Copy Button */}
        {(method.id === 'email' || method.id === 'phone') && (
          <button
            onClick={handleCopy}
            className={`absolute -top-2 -right-2 w-8 h-8 bg-[#208FBB] text-white rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            title={isPortuguese ? 'Copiar' : 'Copy'}
          >
            {isCopied ? '✓' : '📋'}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-[#D0D8EA] mb-2 group-hover:text-[#208FBB] transition-colors duration-300">
          {isPortuguese ? method.label.pt : method.label.en}
        </h3>
        
        <p className="text-[#B1BDDF] text-sm mb-3 leading-relaxed">
          {isPortuguese ? method.description.pt : method.description.en}
        </p>
        
        <div className="flex items-center justify-between">
          <span 
            className="font-semibold transition-colors duration-300"
            style={{ color: method.color }}
          >
            {method.value}
          </span>
          
          <svg 
            className={`w-5 h-5 text-[#208FBB] transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Copied Notification */}
      {isCopied && (
        <div className="absolute top-2 left-2 bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce">
          {isPortuguese ? 'Copiado!' : 'Copied!'}
        </div>
      )}
    </div>
  );
};