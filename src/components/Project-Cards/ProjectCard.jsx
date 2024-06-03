import React from "react";
import './ProjectCard.css';

export default function ProjectCard({ title, desc, links, img, url }) {
    return (
        <div className='card'>
            <div className='image-container'>
                {img && (
                    url ? (
                        <a href={url} target='_blank' rel='noreferrer'>
                            <img src={img} alt={title} width='80' height='80' />
                        </a>
                    ) : (
                        <img src={img} alt={title} />
                    )
                )}
            </div>
            <div className='proj-details'>
                <p className='title'>{title}</p>
                <p className='desc'>
                    {desc} {links.map((link, idx) => (
                        <span key={idx}>
                            <a className='tools' href={link.href} target='_blank' rel='noreferrer'>{link.text}</a>
                            {idx < links.length - 1 ? ' and ' : ''}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
