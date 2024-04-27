import './skills.css'
import SkillData from './Data';
const Skills = () =>{
    return(
        <div id='skills' className="skillsmain"><h1 className='skillheading'>Skills</h1>
            <div className="skillscontainer" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              {
                SkillData.map((data)=>{
                    return(
                        <div className='imagecontainer'>
                            <img src={data.url} alt="skills" className='iconimg'/>
                            <p className='icontext'>{data.name}</p>
                        </div>
                    )
                })
              }
            </div>
        </div>
    )
}
export default Skills;

