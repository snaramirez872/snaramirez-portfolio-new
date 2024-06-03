import React from "react";
import { Link } from "react-router-dom";
import github from '../../assets/icons/github-mark-white.png';
import "./Projects.css"
import "../../components/Project-Cards/ProjectCard.css";

export default function Projects() {
    return (
        <div className='Projects'>
            <div className='button'>
                <Link className='back-button' to='/'>Back</Link>
            </div>
            <div className='project-cards'>
                <div className='card'>
                    <div className="image-container">
                        <a href="" target="_blank" rel='noreferrer'>
                            <img src={github} alt="" width='80' height='80' />
                        </a>
                    </div>
                    <div className='proj-details'>
                        <p className='title'>Band Geeks News App</p>
                        <p className='desc'>A personal news app developed using <a className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</a> and <a className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='proj-details'>
                        <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                        <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="image-container">
                        <a href="" target="_blank" rel='noreferrer'>
                            <img src={github} alt="" width='80' height='80' />
                        </a>
                    </div>
                    <div className='proj-details'>
                        <p className='title'>SeanVGO</p>
                        <p className='desc'>A video game collection organizer using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <a className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</a>.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="image-container">
                        <a href="https://github.com/snaramirez872/fanmade-fallout4-game-guide" target="_blank" rel='noreferrer'>
                            <img src={github} alt="" width='80' height='80' />
                        </a>
                    </div>
                    <div className='proj-details'>
                        <p className='title'>Unofficial Fallout 4 Game Guide</p>
                        <p className='desc'>Still in-progress fanmade game guide for the Fallout 4 video game. Developing using <span className='tools'>React.js</span> and <span className='tools'>CSS</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
