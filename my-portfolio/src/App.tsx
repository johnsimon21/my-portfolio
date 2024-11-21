import './App.css'

function App() {

  return (
    <div className="w-full h-screen bg-[#141E46] px-[80px]">
      <header className="border-b-2 border-[#182751] h-[210px] flex">
        <nav className="flex w-full">

          <div className="justify-self-start grow flex items-center text-4xl font-semibold ">
            <h1 className="logo text-[#D0D8EA]">
              <span className="text-[#208FBB]">{"<"}</span>
              JoystLine
              <span className="text-[#208FBB]">{">"}</span>
            </h1>
          </div>

          <ul className="menu flex grow items-center text-white">
            <li className="about me-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC] menu-item-active">About</li>
            <li className="skills mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC]">Skills</li>
            <li className="projects mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC]">Projects</li>
            <li className="contacts mx-[15px] bg-[#0E1F52] py-[15px] px-[30px] rounded-full cursor-pointer text-[#99B2EC]">Contacts</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
