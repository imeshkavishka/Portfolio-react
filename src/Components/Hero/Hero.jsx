import './Hero.css'
import profile_img from '../../assets/git.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
   

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Imesh Kavishaka,</span> Full Stack Developer Based In Sri Lanka.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum illum? Explicabo, accusamus ex. Fugiat expedita minima excepturi sapiente voluptates!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
        
    </div>
  )
}

export default Hero