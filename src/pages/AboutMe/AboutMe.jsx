import React from "react";
import { Link } from "react-router-dom";
import profilepic from '../../assets/images/profile.png';
import email from '../../assets/icons/envelope.svg';
import github from '../../assets/icons/github-mark-white.png';
import linkedin from '../../assets/icons/In-White-96@2x.png';
import instagram from '../../assets/icons/Instagram_Glyph_White.png';
import x from '../../assets/icons/x-logo-white.png';
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <div className='AboutMe'>
            <div className='words'>
                <p className='intro'>I am a <span className='keywords'>Front End Development/Design</span>. As such, I am proficient in <span className='keywords'>JavaScript</span> and <span className='keywords'>Python</span>.</p>
                <p className='extracurriculars'>When I'm not coding, I enjoy playing video games, photography, listening to music, and watching anime.</p>
                <p className='intro-to-projects'>I've been making <span className='keywords'>React.js</span> applications for several months now and they all can be viewed by <span className='desktop-mode'>clicking "Projects" at the top right</span><span className='mobile-mode'>tapping "Projects" below</span>.</p>
            </div>
            <div className='profile-card'>
                <img className='profile-picture' src={profilepic} alt='profile picture' height='170' width='170' />
                <div className='desktop-icons'>
                    <a href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><img src={email} alt='email link' height='40' width='40' /></a>
                    <a href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><img src={github} alt='github link' height='40' width='40' /></a>
                    <a href='http://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin link' height='40' width='40' /></a>
                    <a href='https://instagram.com/seannybboy' target='_blank' rel='noreferrer'><img src={instagram} alt='instagram link' height='40' width='40' /></a>
                    <a href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><img src={x} alt='x (formerly twitter) link' height='40' width='40' /></a>
                </div>
            </div>
            <div className='mobile-tabs'>
                <Link to='/projects'>Projects</Link>
                <a href={import.meta.env.VITE_resumeLink}>Projects</a>
            </div>
            <div className='mobile-icons'>
                <a href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><img src={email} alt='email link' height='40' width='40' /></a>
                <a href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><img src={github} alt='github link' height='40' width='40' /></a>
                <a href='http://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin link' height='40' width='40' /></a>
                <a href='https://instagram.com/seannybboy' target='_blank' rel='noreferrer'><img src={instagram} alt='instagram link' height='40' width='40' /></a>
                <a href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><img src={x} alt='x (formerly twitter) link' height='40' width='40' /></a>
            </div>
        </div>
    );
}
