import github from "../../assets/icons/github-mark-white.png";
import "./ProjectCard.css";

export function ProjectCard({ link, title, children }) {
    return (
        <div className='card'>
             <div className="image-container">
                 <a href={link} target="_blank" rel='noreferrer'>
                     <img src={github} alt="" width='80' height='80' />
                 </a>
             </div>
             <div className='proj-details'>
                 <p className='title'>{title}</p>
                 {children}
             </div>
         </div>
    );
}
