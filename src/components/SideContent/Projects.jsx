import React from "react";
import "./styles/Projects.css";

export default function Projects() {
    return(
        <div id="projects">
            <h2>Projects</h2>
            <div className="proj-content">
                <p>
                    I was on the dev team for the following projects:
                </p>
                <div className="team-proj">
                    <ul className="proj-lists">
                        <li>
                            <a 
                                href="https://github.com/ppauliuchenka02/bandgeeks-news-app" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                A Personal News App
                            </a>
                        </li>
                        <li>
                            <a 
                                href={import.meta.env.VITE_translationServiceLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                NJ Courts Notice Translation Service NJIT Fall 2023
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="solo-header">
                    I built the following solo projects:
                </p>
                <div className="solo-proj">
                    <ul className="proj-lists">
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/portfolio_new" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                This very portfolio website
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/SeanVGO" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                A video game organizer service (please email me for login credentials)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
