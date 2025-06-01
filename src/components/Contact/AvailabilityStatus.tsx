import { useState, useEffect } from 'react';
import { AVAILABILITY_STATUS } from '../../constants/contact';

interface AvailabilityStatusProps {
  isPortuguese: boolean;
}

export const AvailabilityStatus = ({ isPortuguese }: AvailabilityStatusProps) => {
  const [currentStatus] = useState<keyof typeof AVAILABILITY_STATUS>('available');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const status = AVAILABILITY_STATUS[currentStatus];

  return (
    <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 border border-[#2E3B63]/50">
      <div className="text-center">
        <div className="mb-4">
          <div 
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500 ${
              isAnimating ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundColor: `${status.color}20`, border: `2px solid ${status.color}` }}
          >
            <span className="text-2xl animate-pulse">{status.icon}</span>
            <span 
              className="font-semibold"
              style={{ color: status.color }}
            >
              {isPortuguese ? status.pt : status.en}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#D0D8EA] mb-2">
          {isPortuguese ? 'Status Atual' : 'Current Status'}
        </h3>
        
        <p className="text-[#B1BDDF] text-sm mb-4">
          {isPortuguese 
            ? 'Tempo de resposta médio: 2-4 horas'
            : 'Average response time: 2-4 hours'
          }
        </p>

        {/* Response Time Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#B1BDDF]">
              {isPortuguese ? 'Tempo de resposta' : 'Response time'}
            </span>
            <span className="text-[#10B981]">
              {isPortuguese ? 'Rápido' : 'Fast'}
            </span>
          </div>
          <div className="w-full bg-[#0A1428] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#10B981] to-[#208FBB] h-2 rounded-full transition-all duration-1000"
              style={{ width: '85%' }}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-[#2E3B63]/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#208FBB]">24h</div>
            <div className="text-xs text-[#B1BDDF]">
              {isPortuguese ? 'Resposta máxima' : 'Max response'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#10B981]">98%</div>
            <div className="text-xs text-[#B1BDDF]">
              {isPortuguese ? 'Taxa de resposta' : 'Response rate'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};