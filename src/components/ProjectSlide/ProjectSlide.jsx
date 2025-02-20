import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import ProjectModal from '../ProjectModal/ProjectModal.jsx';

const ProjectSlide = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="project-slide">
            <button className="slide-btn slide-prev" onClick={handlePrev}>❮</button>
            <div className="slide-content">
                <div className="slide-card">
                    <div className='slide-img'>
                        <img src={currentProject.img} alt={currentProject.title} />
                    </div>
                    <div className='slide-txt'>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.description}</p>
                        <div className='slide-links'>
                            <button onClick={openModal}>En savoir plus</button>
                            <a href={currentProject.repository} target="_blank" rel="noopener noreferrer">
                                <button>
                                    <FontAwesomeIcon icon={faGithub} />
                                </button>
                            </a>
                            {currentProject.website && (
                                <a href={currentProject.website} target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className="slide-btn slide-next" onClick={handleNext}>❯</button>

            <ProjectModal
                project={currentProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
};

export default ProjectSlide;
