import './about.css';
import aboutprofile from '../../assets/aboutprofile.png';
const About = () => {
  return (
    <div id='about' className='aboutmain' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <div className="aboutleft">
            <div className="aboutinnerleft">
                <img src={aboutprofile} alt="aboutprofile" className='aboutprofile'/>
            </div>
        </div>
        <div className="aboutright">
            <div className="aboutinnerright">
                <div className="aboutheading"><h1>About</h1></div>
                <div className="aboutdescription"><p>Hello! I'm <b>Dushyant Sain</b>, a recent graduate 
                with Bachelor's and Master's degrees in Computer Application. Excited to embark 
                on my journey as a MERN Stack and Web Developer, I bring a solid educational 
                foundation and a hunger for learning. With a passion for crafting intuitive user 
                experiences, I'm eager to contribute my skills to 
                innovative projects. As a fresher, I'm enthusiastic about diving into new 
                challenges, honing my expertise, and making a meaningful impact in the world of 
                web development. Let's collaborate and create something remarkable together!
                </p><br />
                <h2 className='eduhistory'>Education History</h2><br />
                <p> ► Bachelor's of Computer Application </p>
                <p> ► Master's in Computer Application</p><br />
                <h2 className='skills'>Skills</h2><br />
                <p><b>HTML , CSS , Material UI , Bootstrap , Javascript , React  , Redux , NodeJS , ExpressJS , C++ , JAVA , Python , PHP ,  Mongoose , MongoDB , MySQL ,  Rest API </b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About