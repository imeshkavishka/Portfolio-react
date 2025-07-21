import './Hero.css'
import profile_img from '../../assets/git.jpeg'
   

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Imesh Kavishaka,</span> Full Stack Developer Based In Sri Lanka.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum illum? Explicabo, accusamus ex. Fugiat expedita minima excepturi sapiente voluptates!</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
        
    </div>
  )
}

export default Hero