import { useState } from 'react'
import './App.css'

function App() {


  const [isFirstLang, setIsFirstLang] = useState<boolean>(true);

  const toggleLanguage = (langValue: number) => {
    if (langValue === 0 && !isFirstLang) {
      setIsFirstLang(!isFirstLang);
    } else if (langValue === 1 && isFirstLang) {
      setIsFirstLang(!isFirstLang);
    }
  }

  return (
    <div className="w-full h-screen bg-[#141E46]">
      <header className="h-[210px] flex px-[80px]">
        <nav className="flex w-full">

          <div className="justify-self-start grow flex items-center text-4xl font-semibold ">
            <h1 className="logo text-[#D0D8EA]">
              <span className="text-[#208FBB]">{"<"}</span>
              JoystLine
              <span className="text-[#208FBB]">{">"}</span>
            </h1>
          </div>

          <ul className="menu flex grow items-center text-white">
            <li className="about me-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] menu-item-active font-semibold	">About</li>
            <li className="skills mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold	">Skills</li>
            <li className="projects mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold	">Projects</li>
            <li className="contacts mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] font-semibold	">Contacts</li>
          </ul>
        </nav>
      </header>

      <hr className="hr border-[#182751] bg-[#182751] h-[8px]" />


      <section className="py-5 px-[80px] flex flex-col">
        <div className="flex items-center">
          <div className="flex grow">
            <div className="toggle shadow-button bg-[#141E46] w-32 h-6 rounded-full flex items-center relativo">
              <div className="switch-button brder-1 border-[#39559D] w-5 h-5 border border-[#39559D] rounded-full absolute mx-0.5"></div>
              <div className="dark flex justify-center items-center basis-1/2 w-full h-full bg-[#0D0D0D] rounded-l-full">
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_41)">
                    <path d="M2.69241 2.1154C2.69241 1.37879 2.80067 0.634375 3.07701 0C1.23973 0.799777 0 2.67612 0 4.80759C0 7.67522 2.32478 10 5.19241 10C7.32388 10 9.20022 8.76027 10 6.92299C9.36563 7.19933 8.62054 7.30759 7.8846 7.30759C5.01696 7.30759 2.69241 4.98304 2.69241 2.1154Z" fill="url(#paint0_linear_40_41)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_40_41" x1="5" y1="0" x2="5" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#666666" />
                    </linearGradient>
                    <clipPath id="clip0_40_41">
                      <rect width="10" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              <div className="light flex justify-center items-center basis-1/2 w-full h-full bg-[#ffffff] rounded-r-full">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_30)">
                    <path d="M6.99999 3.77778C5.22426 3.77778 3.77777 5.22426 3.77777 7C3.77777 8.77573 5.22426 10.2222 6.99999 10.2222C8.77572 10.2222 10.2222 8.77573 10.2222 7C10.2222 5.22426 8.77572 3.77778 6.99999 3.77778ZM6.99999 9.43423C5.66079 9.43423 4.56575 8.3429 4.56575 7C4.56575 5.6571 5.65709 4.56576 6.99999 4.56576C8.34289 4.56576 9.43423 5.6571 9.43423 7C9.43423 8.3429 8.33919 9.43423 6.99999 9.43423Z" fill="#231F20" />
                    <path d="M7.00003 3.18217C7.2183 3.18217 7.39587 3.03789 7.39587 2.86032V0.710936C7.39587 0.533362 7.2183 0.389084 7.00003 0.389084C6.78176 0.389084 6.60419 0.533362 6.60419 0.710936V2.86032C6.60419 3.03789 6.78176 3.18217 7.00003 3.18217Z" fill="#231F20" />
                    <path d="M3.29317 6.9963C3.29317 6.77803 3.14519 6.60046 2.96392 6.60046H0.766446C0.585173 6.60046 0.437195 6.77803 0.437195 6.9963C0.437195 7.21456 0.585173 7.39214 0.766446 7.39214H2.96392C3.14519 7.39214 3.29317 7.21456 3.29317 6.9963Z" fill="#231F20" />
                    <path d="M7.00003 10.8178C6.78176 10.8178 6.60419 10.9621 6.60419 11.1397V13.2891C6.60419 13.4666 6.78176 13.6109 7.00003 13.6109C7.2183 13.6109 7.39587 13.4666 7.39587 13.2891V11.1397C7.39587 10.9621 7.2183 10.8178 7.00003 10.8178Z" fill="#231F20" />
                    <path d="M3.78518 9.6377L2.26471 11.1545C2.13893 11.2803 2.16112 11.5096 2.3165 11.665C2.47188 11.8204 2.69754 11.8426 2.82702 11.7168L4.3475 10.1963C4.47328 10.0705 4.45108 9.84117 4.29571 9.68579C4.13663 9.53781 3.91096 9.51192 3.78518 9.6377Z" fill="#231F20" />
                    <path d="M3.7889 4.35859C3.91469 4.48437 4.14405 4.46218 4.29943 4.3068C4.4548 4.15142 4.477 3.92576 4.35122 3.79627L2.83075 2.2758C2.70497 2.15002 2.4756 2.17222 2.32022 2.32759C2.16485 2.48297 2.14265 2.70864 2.26843 2.83812L3.7889 4.35859Z" fill="#231F20" />
                    <path d="M13.2336 6.60786H11.0361C10.8548 6.60786 10.7068 6.78543 10.7068 7.0037C10.7068 7.22197 10.8548 7.39954 11.0361 7.39954H13.2336C13.4148 7.39954 13.5628 7.22197 13.5628 7.0037C13.5628 6.78543 13.4148 6.60786 13.2336 6.60786Z" fill="#231F20" />
                    <path d="M10.2148 4.36229L11.7353 2.84182C11.8611 2.71604 11.8389 2.48667 11.6835 2.33129C11.5281 2.17592 11.3025 2.15372 11.173 2.2795L9.65253 3.79998C9.52675 3.92576 9.54894 4.15512 9.70432 4.3105C9.86339 4.46218 10.0891 4.48807 10.2148 4.36229Z" fill="#231F20" />
                    <path d="M10.2111 9.6414C10.0853 9.51562 9.85597 9.53782 9.7006 9.69319C9.54522 9.84857 9.52302 10.0742 9.6488 10.2037L11.1693 11.7242C11.2951 11.85 11.5244 11.8278 11.6798 11.6724C11.8352 11.517 11.8574 11.2914 11.7316 11.1619L10.2111 9.6414Z" fill="#231F20" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40_30">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
            </div>

            <div className="toggle shadow-button bg-[#141E46] text-[#B1BDDF] text-[10px] w-32 h-6 ms-[15px] rounded-full flex items-center">
              <div onClick={() => toggleLanguage(0)} className={`lang flex justify-center items-center basis-1/2 w-full h-full bg-[#0D0D0D] rounded-l-full cursor-pointer ${isFirstLang ? 'lang-active' : ''}`}>
                PT
              </div>

              <div onClick={() => toggleLanguage(1)} className={`lang flex justify-center items-center basis-1/2 w-full h-full bg-[#ffffff] rounded-r-full cursor-pointer ${!isFirstLang ? 'lang-active' : ''}`}>
                EN
              </div>
            </div>
          </div>
          <div className="auto-control border border-[#2E3B63] text-[#B1BDDF] font-semibold w-[200px] h-[60px] ms-[15px] rounded-full flex items-center justify-center cursor-pointer">
            Automatic control
          </div>
        </div>

        <div className="flex my-10">
          <div className="first-cycle-image flex justify-center items-center bg-[#2E3C93] w-[420px] h-[395px] rounded-full" >
            <div className="flex justify-center items-center bg-gradient-to-b from-[#3251AE] to-[#0A1A43] size-[350px] rounded-full">
              <div className="flex justify-center items-center size-[268px] border-2 border-dashed border-[#3961C8] rounded-full">
                <div className="flex justify-center items-center size-[252px] border-2 border-dashed border-[#3961C8] rounded-full">
                  <div className="flex justify-center items-center size-[200px] bg-gradient-to-b from-[#1A41A7] to-[#325FD4] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col ms-[150px] text-[#D0D8EA]">
            <span className="text-4xl">
              Hey there, <br />
              I’m John
            </span>

            <p className="mt-24 max-w-[590px] font-serif">
              Web Developer, committed to continuous learning and hands-on experience in projects on GitHub. Focused on creating attractive interfaces and robust backend solutions, with a strong emphasis on collaboration and seeking challenges for professional growth
            </p>

            <p className="my-10 text-[#CFB76F] text-xl font-mono text-center underline underline-offset-1">Process & Persistence ++God++</p>

          </div>
        </div>

      </section>
    </div>
  )
}

export default App
