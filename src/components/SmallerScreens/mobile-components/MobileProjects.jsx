import React from "react";
import "./styles/MobileProjects.css";

export default function MobileProjects() {
    return(
        <div className="mobile-projects">
            <h2>Projects</h2>
            <div className="mobile-proj-content">
                <p>
                    I was on the dev team for the following projects:
                </p>
                <div className="mobile-team-proj">
                    <ul className="mobile-proj-lists">
                        <li>
                            <a 
                                href="https://github.com/ppauliuchenka02/bandgeeks-news-app" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                GitHub Repo
                            </a>
                            <p>A news app</p>
                        </li>
                        <li>
                            <a 
                                href={import.meta.env.VITE_translationServiceLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Prototype Link
                            </a>
                            <p>A court notice translation service</p>
                        </li>
                    </ul>
                </div>
                <p className="mobile-solo-header">
                    I built the following solo projects:
                </p>
                <div className="mobile-solo-proj">
                    <ul className="mobile-proj-lists">
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/portfolio_new" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                GitHub Repo
                            </a>
                            <p>This very portfolio website</p>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/SeanVGO" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                GitHub Repo
                            </a> | <a href="https://seanvgo-f931c.web.app/login" taregt="_blank" rel="noreferrer">Live Link</a>
                            <p>A video game organizer service (please email me for login credentials)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
