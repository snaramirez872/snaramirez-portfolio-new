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
                                GitHub Repo
                            </a>
                            <p>This very portfolio website</p>
                        </li>
                    </ul>
                    <ul className="proj-lists">
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/SeanVGO" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                GitHub Repo
                            </a>
                            <p>A video game organizer service</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
