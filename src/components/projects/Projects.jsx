import './project.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ProjectData from './projectdata'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () =>{
    return(
        <div id='projects' className="projectsmain" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <h1 className='projectheading'>Projects</h1>
            <div className="projectinnercontainer">
              {
                ProjectData.map((data)=>{
                    return(
                        <div className='projectcontainer'>
                <Carousel 
                 swipeable={false}
                 draggable={false}
                 infinite={true}
                 autoPlay={true}
                 infiniteLoop={true}
                 showThumbs={false}
                 autoPlaySpeed={2000}
                 slidesToSlide={1}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px"
                 containerClass="carousel-container">
                <div>
                    <img src={data.url} className='projectimage' alt='projectimage'/>
                </div>
                <div>
                    <img src={data.url2} className='projectimage' alt='projectimage'/>
                </div>
                <div>
                <img src={data.url3} className='projectimage' alt='projectimage'/>
                </div>
            </Carousel>
                            <p className='projectname'>{data.name}</p>
                            <ul className='project-points'>
                                <li>{data.point1}</li>
                                <li>{data.point2}</li>
                                <li>{data.point3}</li>
                                {
                                    data.point4 && <li>{data.point4}</li>
                                }
                            </ul>
                            <p className='tech-used'><strong><u>Technology Used:</u><br /><br /> {data.techuesd}</strong></p>
                            <div className="projectbtn">
                            <a className='projectlink'href={data.projectlink}><button className='projectbutton'>Project Link <AttachmentIcon/></button></a>
                            {
                                data.livedemo && <a className='projectlink'href={data.livedemo}><button className='projectbutton'>Live Demo<OpenInBrowserIcon/></button></a> 
                            }
                            </div>
                        </div>
                    )
                })
              }
            </div>
        </div>
    )
}
export default Projects