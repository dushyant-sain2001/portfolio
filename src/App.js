import './App.css'
import Heropage from "./components/heropage/Heropage";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';

function App() {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.display = "flex";
  }
  
  const closeMenu = () => {
    menuRef.current.style.display = "none";
  }

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div>
      {/* responsive navbar */}
      <div className="res-navbar" ref={menuRef}>
        <CloseIcon className='close-icon' onClick={closeMenu}/>
    <div class="res-right">
      <a href="#heropage"><button className='res-navbtn'>Home</button></a>
      <a href="#about"><button className='res-navbtn'>About</button></a>
      <a href="#skills"><button className='res-navbtn'>Skills</button></a>
      <a href="#projects"><button className='res-navbtn'>Projects</button></a>
      <a href="#contact"><button className='res-navbtn'>Contact</button></a>
    </div>
</div>
{/* bigscreen-navbar */}
<div className="menu-icon" onClick={openMenu}><MenuIcon /></div>
      <div className="navbar">
          <div className="left">
            <h3 className='navname'>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'DUSHYANT SAIN... </>',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h3>
          </div>
    <div class="right">
      <a href="#heropage"><button className='navbtn'>Home</button></a>
      <a href="#about"><button className='navbtn'>About</button></a>
      <a href="#skills"><button className='navbtn'>Skills</button></a>
      <a href="#projects"><button className='navbtn'>Projects</button></a>
      <a href="#contact"><button className='navbtn'>Contact</button></a>
    </div>
</div>
      <div style={{marginTop: 60}}>
      <div id="heropage">
      <Heropage />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="skills">
      <Skills/>
      </div>
      <div id="projects">
      <Projects />
      </div>
      <div id="contact">
      <Contact/>
      </div>
      </div>
    </div>
  );
}

export default App;
