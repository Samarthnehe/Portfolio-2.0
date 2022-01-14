import React from 'react';
import './SocialMedia.css';
import git from '../../images/social-media/git.png';
import linkedin from '../../images/social-media/linkedin.png';
import insta from '../../images/social-media/insta.png'

function SocialMedia() {
    return (
        <div className="social__media">
             <a href="https://www.instagram.com/sam.cuber/" target="_blank"><img src={insta}/></a>
            <a href="https://github.com/Samarthnehe" target="_blank"><img src={git}/></a>
            <a href="https://www.linkedin.com/in/samarth-nehe-a0b9b519b/"><img src={linkedin}/></a>
        </div>
    )
}

export default SocialMedia
