interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export const Section = ({ 
  id, 
  className = '', 
  children, 
  backgroundColor = 'bg-[#141E46]' 
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-20 px-[80px] ${backgroundColor} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};