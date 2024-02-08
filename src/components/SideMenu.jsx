import React from "react";
import './styles/SideMenu.css';

export default function SideMenu() {
    return(
        <div className="side-menu">
            <div className="items">
                <a href="#about-me">
                    About Me
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#links">
                    Links
                </a>
            </div>
        </div>
    );
}
