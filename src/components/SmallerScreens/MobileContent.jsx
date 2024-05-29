import React from "react";
import MobileAbout from "./mobile-components/MobileAbout";
import MobileProjects from "./mobile-components/MobileProjects";
import "./styles/MobileContent.css";

export default function MobileContent() {
    return (
        <div className="mobile-content">
            <MobileAbout />
            <MobileProjects />
        </div>
    );
}
