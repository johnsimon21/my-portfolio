interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <h1 className={`logo text-[#D0D8EA] transition-all duration-300 ${className}`}>
      <span className="text-[#208FBB]">{"<"}</span>
      <span className="inline-block">JoystLine</span>
      <span className="text-[#208FBB]">{">"}</span>
    </h1>
  );
};