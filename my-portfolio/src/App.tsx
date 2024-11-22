import './App.css'

function App() {

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

      <hr className="hr border-[#182751] bg-[#182751] h-[8px]"/>


      <section className="py-5 px-[80px]">
          <div className="toggle-mode bg-[#141E46] w-32 h-6 rounded-full flex items-center relativo">
            <div className="switch-button brder-1 border-[#39559D] w-5 h-5 border border-[#39559D] rounded-full absolute mx-0.5"></div>
            <div className="dark w-16 bg-[#0D0D0D] rounded-l-full">d</div>
            <div className="light  w-16 bg-[#ffffff] rounded-r-full">l</div>
          </div>
      </section>
    </div>
  )
}

export default App
