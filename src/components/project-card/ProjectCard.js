import React from 'react';
import './ProjectCard.css';
import {motion} from 'framer-motion';
import Website from '../../images/website.png'

function ProjectCard({image,name,content,reverse,link,idx}) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} key={idx}>
          {reverse === 1 ? 
            <div className="project-card" data-aos="fade-left" data-aos-duration="1000" >
                
                <div className="project-card-right"  >
                    <div className="project-card-right-content">
                        <h1 style={{textAlign:"right"}}>{name}</h1>
                        <p>{content}</p>
                    </div>
                    
                    <div className="work__social__media__reverse"  >
                        <a href={link} target="_blank"><img src={Website}/></a>
                    </div>
                </div>
                <div  className="project-card-left-reverse" >
                    <img src={image}/>
                </div>
            </div>:
            <div className="project-card" data-aos="fade-right" data-aos-duration="1000" >
                <div className="project-card-left" >
                    <img src={image}/>
                </div>
                <div className="project-card-right">
                    <div className="project-card-right-content">
                        <h1>{name}</h1>
                        <p>{content}</p>
                    </div>
                    <div className="work__social__media">
                        <a href={link} target="_blank"><img src={Website} /></a>
                    </div>
                </div>
            </div>
        }
        </motion.div>
      
    )
}

export default ProjectCard
