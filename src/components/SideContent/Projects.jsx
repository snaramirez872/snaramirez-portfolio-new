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
                            <p className='nj-courts-project'>NJ Courts Notice Translation Service Prototype Fall 2023</p>
                            <p>No Link Available</p>
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
                                href="https://github.com/snaramirez872/snaramirez-portfolio-new" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                This very website (GitHub Repo)
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://seanvgo-f931c.web.app/login" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                A video game organizer service (Live Link) 
                            </a>
                            <p>Please email me for login credentials</p>
                        </li>
                        <li>
                            <a
                                href="https://github.com/snaramirez872/fanmade-fallout4-game-guide"
                                target="_blank"
                                rel="noreferrer"
                            >
                                An Unofficial Game Guide for Fallout 4 (currently still in-progress)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
