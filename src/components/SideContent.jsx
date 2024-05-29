import React from "react";
import AboutMe from "./SideContent/AboutMe";
import Projects from "./SideContent/Projects";
import './styles/SideContent.css';

export default function SideContent() {
    return(
        <div className="side-content">
            <div className="sections">
                <AboutMe />
                <Projects />
            </div>
        </div>
    );
}
