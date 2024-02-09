import React from "react";
import "./styles/ResumeButton.css";

export default function ResumeButton() {
    return(
        <a  
            className="resume-btn"
            href={import.meta.env.VITE_resumeLink} 
            target="_blank" 
            rel="noreferrer"
        >
            <button type="button">Resume</button>
        </a>
    );
}
