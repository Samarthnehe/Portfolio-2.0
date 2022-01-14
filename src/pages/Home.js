import React from 'react'
import AboutMe from '../components/about-me/AboutMe'
import Footer from '../components/footer/Footer'
import Landing from '../components/landing/Landing'
import Navbar from '../components/navbar/Navbar'
import TechStack from '../components/tech-stack/TechStack'

function Home() {
    return (
        <div className="home" style={{backgroundColor:'var(--background)'}}>
       
            <Landing/>
            <AboutMe/>
            <TechStack/>
            <Footer/>
        </div>
    )
}

export default Home
