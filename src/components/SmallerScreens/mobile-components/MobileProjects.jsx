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
                                A Personal News App (GitHub Repo)
                            </a>
                        </li>
                        <li>
                            <p className='nj-courts-project'>NJ Courts Notice Translation Service Prototype Fall 2023</p>
                            <p>No Link Available</p>
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
                                This very website (GitHub Repo)
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/snaramirez872/SeanVGO" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                A video game organizer service (GitHub Repo)
                            </a>
                            <p>For Live Link view this page on Desktop.</p>
                        </li>
                        <li>
                            <a
                                href="https://github.com/snaramirez872/fanmade-fallout4-game-guide"
                                target="_blank"
                                rel="noreferrer"
                            >
                                An Unofficial Game Guide for Fallout 4 (GitHub Repo)
                            </a>
                            <p>Currently in-progress</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
