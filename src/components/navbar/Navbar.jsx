import './Navbar.css'
import { TypeAnimation } from 'react-type-animation';
const Navbar = () => {
    return(
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
      <button className='navbtn'>Home</button>
      <button className='navbtn'>About</button>
      <button className='navbtn'>Skills</button>
      <button className='navbtn'>Projects</button>
      <button className='navbtn'>Contact</button>
    </div>
</div>
    )
}

export default Navbar;