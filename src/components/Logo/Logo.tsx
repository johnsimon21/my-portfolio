interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <h1 className={`logo text-[#D0D8EA] ${className}`}>
      <span className="text-[#208FBB]">{"<"}</span>
      JoystLine
      <span className="text-[#208FBB]">{">"}</span>
    </h1>
  );
};