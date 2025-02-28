import React, { useState, useRef, useEffect } from 'react';
import PencilIcon from '../../assets/img/pencil-icon.svg';
import VSCode from '../../assets/img/vscode.svg';
import GitHub from '../../assets/img/github.svg';
import Figma from '../../assets/img/figma.svg';
import Canva from '../../assets/img/canva.svg';
import InkScape from '../../assets/img/inkscape.svg';
import PhotoShop from '../../assets/img/photoshop.svg';
import Html from '../../assets/img/html.svg';
import Css from '../../assets/img/css.svg';
import JavaScript from '../../assets/img/javascript.svg';
import Sass from '../../assets/img/sass.svg';
import ReactLogo from '../../assets/img/react.svg';
import Git from '../../assets/img/git.svg';

const About = () => {
    const [activeItem, setActiveItem] = useState(null);
    const timeoutRef = useRef(null);

    const handleItemClick = (alt) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setActiveItem(alt);

        timeoutRef.current = setTimeout(() => {
            setActiveItem(null);
            timeoutRef.current = null;
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const tools = [
        { src: VSCode, alt: 'VSCode' },
        { src: Figma, alt: 'Figma' },
        { src: GitHub, alt: 'GitHub' },
        { src: PhotoShop, alt: 'PhotoShop' },
        { src: Canva, alt: 'Canva' },
        { src: InkScape, alt: 'InkScape' }
    ];

    const skills = [
        { src: Html, alt: 'HTML5' },
        { src: Css, alt: 'CSS3' },
        { src: Sass, alt: 'Sass' },
        { src: JavaScript, alt: 'JavaScript' },
        { src: ReactLogo, alt: 'React' },
        { src: Git, alt: 'Git' }
    ];

    return (
        <section id="about" className="about">
            <h2>À propos</h2>
            <div className="about-content">
                <div className="about-title">
                    <h3>Entre créativité et technologie,</h3>
                </div>
                <div className="about-txt">
                    <p>Guidée par mon attrait pour <em>l'art et la photographie</em>, j'ai également depuis longtemps fait preuve d'un intérêt pour <em>l'informatique</em>,
                        notamment à travers <em>l'édition de contenus visuels</em>.
                        Cette passion pour la <em>créativité</em> et la <em>technologie</em> m'a conduite à suivre une formation chez OpenClassrooms
                        afin de me spécialiser dans le <em>développement web front-end</em>,
                        un domaine où je peux combiner design et expérience utilisateur pour créer des <em>interfaces modernes et fonctionnelles</em>.</p>
                </div>
                <div className="about-img">
                    <img src={PencilIcon} alt="Icon d'une bulle d'écriture" />
                </div>
            </div>
            <div className="tools-n-skills">
                <div className="tools">
                    <h3>Outils</h3>
                    <div className="tools-content">
                        {tools.map(({ src, alt }) => (
                            <div
                                key={alt}
                                onClick={() => handleItemClick(alt)}
                                className={`clickable-item ${activeItem === alt ? 'show-text' : ''}`}
                            >
                                <img className="item-icon" src={src} alt={`Logo ${alt}`} />
                                <span className="item-text">{alt}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills">
                    <h3>Compétences</h3>
                    <div className="skills-content">
                        {skills.map(({ src, alt }) => (
                            <div
                                key={alt}
                                onClick={() => handleItemClick(alt)}
                                className={`clickable-item ${activeItem === alt ? 'show-text' : ''}`}
                            >
                                <img className="item-icon" src={src} alt={`Logo ${alt}`} />
                                <span className="item-text">{alt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;