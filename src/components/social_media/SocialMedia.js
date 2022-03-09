import React from 'react';
import './SocialMedia.css';
import git from '../../images/social-media/git.png';
import linkedin from '../../images/social-media/linkedin.png';
import insta from '../../images/social-media/insta.png';
import {motion} from 'framer-motion'

function SocialMedia() {
    return (
        <div className="social__media">
            <motion.div whileHover={{scale:1.02}}>
                <a href="https://www.instagram.com/sam.cuber/" target="_blank"><img src={insta}/></a>
            </motion.div>
            <motion.div whileHover={{scale:1.02}}>
                <a href="https://github.com/Samarthnehe" target="_blank"><img src={git}/></a>
            </motion.div>
            <motion.div whileHover={{scale:1.02}}>
                <a href="https://www.linkedin.com/in/samarth-nehe-a0b9b519b/"><img src={linkedin}/></a> 
            </motion.div>
            
        </div>
    )
}

export default SocialMedia
