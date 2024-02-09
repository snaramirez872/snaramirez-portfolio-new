import React from "react";
import "./styles/AboutMe.css";

export default function AboutMe() {
    return(
        <div id="about-me">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    I am a <span>Software Developer</span> that recently graduated 
                    from the New Jersey Institute of Technology. My focuses lie primarily 
                    in <span>Web Development</span> and <span>Frontend Development/Design</span>. I also 
                    have varying levels of experience with <span>Data Engineering</span> and other <span>Backend Technologies and Practices</span>.
                </p>
                <p>
                    I am proficient in <span>JavaScript</span> and <span>Python</span>. My skills are 
                    broken down further in my Resume which can be found <a href="#">here</a>.
                </p>
            </div>
        </div>
    );
}
