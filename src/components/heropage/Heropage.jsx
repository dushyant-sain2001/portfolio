import "./Heropage.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { TypeAnimation } from "react-type-animation";
import Profile from "../../assets/profile2.png";
import resume from '../../assets/resume.pdf';

const Heropage = () => {
  return (
    <div id="home" className="main" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div className="leftside">
        <div className="innerleft">
          <h1>
            Hi i'am <span style={{ color: "#944fd8" }}>Dushyant Sain</span>
          </h1>
          <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "A Mern Stack Developer...",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "A Web Developer...",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="type-animation"
          />
          <h3 className="herotagline">
            Transforming visions into dynamic MERN realities.
          </h3>
          <a
            className="profilelinks"
            href="https://www.linkedin.com/in/dushyant-sain-a96b301b4/"
          >
            <LinkedInIcon style={{ fontSize: 45, marginTop: 20 }} />
          </a>
          <a
            className="profilelinks"
            href="https://github.com/dushyant-sain2001"
          >
            <GitHubIcon style={{ fontSize: 45 }} />
          </a>
          <a className="profilelinks" href="mailto:dsain6363@gmail.com">
            <MailOutlineIcon style={{ fontSize: 45 }} />
          </a><br />
         <a href={resume} download='resume'> <button className="download-resume">Download Resume</button></a> 
        </div>
      </div>
      <div className="left-side">
        <div className="innerright">
          <img src={Profile} className="profile" />
        </div>
      </div>
    </div>
  );
};
export default Heropage;
