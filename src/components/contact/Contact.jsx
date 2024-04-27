import './contact.css';
import contactbackground from '../../assets/contact.jpg'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () =>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c798c0cf-25d2-447a-8413-4dbde33cc406");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return(
        <div id='contact' className="contactmain" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
          
        <h1 className='contact-heading'>Contact Me</h1>
        <div className="contact-container">
        <div className="contactleft">
           <div className="contact-inner-left">
            <h1 className='sub-heading'>Get in touch</h1><br />
            <p> I'd love to hear from you! Feel free to reach out via email at <a href="mailto:dsain6363@gmail.com" style={{textDecoration: 'none', fontWeight:900}}>dsain6363@gmail.com</a>,Ready to get started and connect on <a href="https://linkedin.com/in/dushyant-sain-a96b301b4" style={{textDecoration: 'none', fontWeight:900}}> LinkedIn</a>, and let's collaborate to turn your ideas into reality.</p><br />
            <p style={{fontSize:20}}><b>Looking forward to connecting with you! </b></p><br />
            <p style={{fontSize: 20}}><b>Dushyant sain</b></p>
            <p><b>Email: </b><a href="mailto:dsain6363@gmail.com" style={{textDecoration: 'none'}}>dsain6363@gmail.com</a></p>
            <p><b>Call Me at: </b><a href="tel:9772237336" style={{textDecoration: 'none'}}>+91 9772237336</a></p>
            <p><b>Lets connect: </b><a href="https://linkedin.com/in/dushyant-sain-a96b301b4" style={{textDecoration: 'none'}}>LinkedIn<LinkedInIcon/></a></p>
           </div>
            
        </div>
        <div className="contactright">
         
           <form onSubmit={onSubmit} className='contact-form'>
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name'  name='name' />
            <label htmlFor="">Your email</label>
            <input type="text" placeholder='Enter your name' name="email"/>
            <label htmlFor="">Write Your Message</label>
            <textarea name="message" rows="6" placeholder='Enter your Message'></textarea>
            <button type='submit' className='contact-submit'><b>Submit</b></button>
           </form>
        </div>
        </div>
        </div>
    )
}
export default Contact