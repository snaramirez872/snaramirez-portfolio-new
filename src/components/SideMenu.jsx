import React from "react";
import './styles/SideMenu.css';

export default function SideMenu() {
    return(
        <div className="side-menu">
            <div className="items">
                <a href="#about-me">
                    <button type="button">About Me</button>
                </a>
                <a href="#projects">
                    <button type="button">Projects</button>
                </a>
            </div>
        </div>
    );
}
