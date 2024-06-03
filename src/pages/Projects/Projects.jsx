import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/Project-Cards/ProjectCard";
import projects from './project-details.json';
import "./Projects.css"

export default function Projects() {
    return (
        <div className='Projects'>
            <div className='button'>
                <Link className='back-button' to='/'>Back</Link>
            </div>
            <div className='project-cards'>
                {projects.map((proj, idx) => (
                    <ProjectCard 
                        key={idx}
                        title={proj.title}
                        desc={proj.desc}
                        links={proj.links}
                        img={proj.img}
                        url={proj.url}
                    />
                ))}
            </div>
        </div>
    );
}
