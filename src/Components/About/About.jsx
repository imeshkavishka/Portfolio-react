import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/git.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="abour-left">
                <img className='pi' src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nesciunt beatae veritatis amet quos modi ut perferendis cum voluptatum libero?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat hic consequatur non possimus odio!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CUSTOMERS</p>
            </div>
        </div>
    </div>
  )
}

export default About