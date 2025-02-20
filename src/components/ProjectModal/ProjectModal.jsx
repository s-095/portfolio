import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>{project.details}</p>

                {project.objectives && project.objectives.length > 0 && (
                    <div className="objectives-section">
                        <h3>Principaux objectifs :</h3>
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

                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default ProjectModal;
