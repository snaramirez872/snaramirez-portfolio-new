import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="NavBar">
            <div className='nav-container'>
                <Link to="/" className="logo">Sean A Ramirez</Link>
                <div className='links'>
                    <Link to="/" className='nav-link'>About Me</Link>
                    <Link to="/projects" className='nav-link'>Projects</Link>
                    <Link to={import.meta.env.VITE_RESUME_LINK} className='resume-link' target='_blank' rel='noreferrer'>Resume</Link>
                </div>
            </div>
        </nav>
    );
}
