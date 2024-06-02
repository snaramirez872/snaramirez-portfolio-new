import React from "react";
import X_Logo from '../../../assets/icons/x-logo-white.png';
import GitHub_Logo from '../../../assets/icons/github-mark-white.png';
import Insta_Logo from '../../../assets/icons/Instagram_Glyph_White.png';
import LI_Logo from '../../../assets/icons/In-White-96@2x.png';
import Email from '../../../assets/icons/envelope.svg';
import "./styles/MobileAbout.css";
import "../../logos.css";

export default function MobileAbout() {
    return(
        <div className="mobile-about">
            <h2>About Me</h2>
            <div className='link-icons-mobile'>
            <a href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'>
                <img className='logos' src={Email} alt="" />
            </a>
            <a href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'>
                <img className='logos-mobile' src={GitHub_Logo} alt="" />
            </a>
            <a href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'>
                <img className='logos-mobile' src={LI_Logo} alt="" />
            </a>
            <a href='https://instagram.com/seannybboy' target='_blank' rel='noreferrer'>
                <img className='logos-mobile' src={Insta_Logo} alt="" />
            </a>
            <a href='https://x.com/snaramirez' target='_blank' rel='noreferrer'>
                <img className='logos-mobile' src={X_Logo} alt="" />
            </a>
            </div>
            <div className="mobile-about-content">
                <p>
                I am a <span>Software Developer</span> who recently graduated 
                    from the New Jersey Institute of Technology. My focuses lie primarily 
                    in <span>Web Development</span> and <span>Frontend Development/Design</span>. I am proficient in <span>JavaScript</span> and <span>Python</span>. My skills are 
                    broken down further in my Resume which can be found <a href={import.meta.env.VITE_resumeLink} target="_blank" rel="noreferrer">here</a>.
                </p>
                <p>
                    When I am not coding, I enjoy playing video games, photography, listening to music, and watching anime.
                </p>
            </div>
        </div>
    );
}