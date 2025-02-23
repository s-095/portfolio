import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Bouton de fermeture avec l'icône FontAwesome */}
                <button className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h2>
                    <img src={project.logo} alt={`Logo de ${project.title}`} className="project-logo" />
                </h2>
                <p>{project.details}</p>

                {project.objectives && project.objectives.length > 0 && (
                    <div className="objectives-section">
                        <h3>Objectifs principaux</h3>
                        <ul>
                            {project.objectives.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                    <div className="technologies-section">
                        <hr />
                        <ul>
                            {project.technologies.map((technology, index) => (
                                <li key={index}>
                                    <img
                                        src={technology}
                                        alt={`Logo ${technology}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
