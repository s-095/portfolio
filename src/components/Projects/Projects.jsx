import React from 'react';
import ProjectSlide from '../ProjectSlide/ProjectSlide.jsx';
import projects from '../../data/projects.json';


const Projects = () => {
    
    return (
        <section id="projects" className='projects'>
            <h2>Mes projets</h2>
            <div className='projects-container'>
                <ProjectSlide projects={projects} />
            </div>
        </section>
    );
};

export default Projects;
