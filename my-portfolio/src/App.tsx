import './App.css'

function App() {

  return (
    <div className="w-full h-screen bg-[#141E46] px-5">
      <header className="border-b-2 border-[#182751] h-[210px] flex">
        <nav className="flex bg-white w-full">

          <div className="justify-self-start grow align-items-center">
            <h1 className="logo">JoystLine</h1>
          </div>
 
          <div className="justify-self-end grow bg-black text-white">
            <div className="about">About</div>
            <div className="skills">Skills</div>
            <div className="projects">Projects</div>
            <div className="contacts">Contacts</div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default App
