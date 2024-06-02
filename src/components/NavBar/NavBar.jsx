import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/" className="logo">Sean A Ramirez</Link>
            <div className='mr-[7vh] space-x-11 text-xl hidden md:flex'>
                <Link to="/" className='nav-link'>About Me</Link>
                <Link to="/projects" className='nav-link'>Projects</Link>
                <a href={import.meta.env.VITE_resumeLink} className='resume-link' target='_blank' rel='noreferrer'>Resume</a>
            </div>
        </nav>
    );
}
