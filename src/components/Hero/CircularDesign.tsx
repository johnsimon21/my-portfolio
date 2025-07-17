export const CircularDesign = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Main circular design with water wave effect */}
      <div className="first-cycle-image water-wave-container flex justify-center items-center bg-[#2E3C93] w-[280px] h-[260px] sm:w-[320px] sm:h-[300px] md:w-[380px] md:h-[360px] lg:w-[420px] lg:h-[395px] rounded-full relative overflow-hidden">
        {/* Water wave effect */}
        <div className="water-wave absolute inset-0 rounded-full"></div>
        <div className="water-wave-2 absolute inset-0 rounded-full"></div>
        <div className="water-wave-3 absolute inset-0 rounded-full"></div>
        
        {/* Inner circles */}
        <div className="flex justify-center items-center bg-gradient-to-b from-[#3251AE] to-[#0A1A43] w-[230px] h-[210px] sm:w-[270px] sm:h-[250px] md:w-[320px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full relative z-10">
          <div className="flex justify-center items-center w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] md:w-[240px] md:h-[240px] lg:w-[268px] lg:h-[268px] border-2 border-dashed border-[#3961C8] rounded-full animate-spin-slow">
            <div className="flex justify-center items-center w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] lg:w-[252px] lg:h-[252px] border-2 border-dashed border-[#3961C8] rounded-full animate-spin-reverse">
              <div className="flex justify-center items-center w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bg-gradient-to-b from-[#1A41A7] to-[#325FD4] rounded-full shadow-inner-3d">
                {/* Profile image placeholder */}
                <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full bg-gradient-to-b from-[#208FBB] to-[#1A41A7] flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
                  JS
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="floating-particle absolute top-[20%] left-[15%] w-2 h-2 bg-[#208FBB] rounded-full opacity-70"></div>
        <div className="floating-particle absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-[#4277DE] rounded-full opacity-60"></div>
        <div className="floating-particle absolute bottom-[25%] left-[25%] w-1 h-1 bg-[#208FBB] rounded-full opacity-80"></div>
      </div>
    </div>
  );
};