import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/Project-Cards/ProjectCard";
import "./Projects.css"
import "../../components/Project-Cards/ProjectCard.css";

export default function Projects() {
    return (
        <div className='Projects'>
            <div className='button'>
                <Link className='back-button' to='/'>Back</Link>
            </div>
            <div className='project-cards'>
                <ProjectCard 
                    title="Band Geeks News App" 
                    link="https://github.com/ppauliuchenka02/bandgeeks-news-app"
                >
                    <p className='desc'>A personal news app developed using <a className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</a> and <a className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
                </ProjectCard>
                <div className='card'>
                    <div className='proj-details'>
                        <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                        <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.</p>
                    </div>
                </div>
                <ProjectCard 
                    title="SeanVGO" 
                    link="https://github.com/snaramirez872/SeanVGO"
                >
                    <p className='desc'>A video game collection organizer that was built using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <a className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</a>.</p>
                </ProjectCard>
                <ProjectCard 
                    title="SNAR-Dev" 
                    link="https://github.com/snaramirez872/snaramirez-dev"
                >
                    <p className='desc'>Still in-progress collection of coding tutorials. I am developing this using <span className='tools'>React.js</span> and <span className='tools'>CSS</span>.</p>
                </ProjectCard>
                <ProjectCard 
                    title="Effectiveness Dex" 
                    link="https://github.com/snaramirez872/Effectiveness-Dex"
                >
                    <p className="desc">Still in-progress Pok&eacute;mon type effectiveness finder. I am building this using <span className="tools">Next.js</span>, <span className="tools">TailwindCSS</span>, and <a className="tools" href="https://pokeapi.co/docs/v2" target="_blank" rel="noreferrer">Pok&eacute;APi</a>.</p>
                </ProjectCard>
            </div>
        </div>
    );
}
