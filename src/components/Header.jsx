import React from "react";
import ResumeButton from "./Buttons/ResumeButton";
import "./styles/Header.css";

export default function Header() {
    return(
        <div className="header">
            <h1>Sean A Ramirez</h1>
            <ResumeButton />
        </div>
    );
}
