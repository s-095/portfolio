import React from 'react';
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
import Item from '../../assets/img/skills-icon.png';
const About = () => {
    return (
        <section id="about" className='about'>
            <h2>À propos</h2>
            <div className='about-content'>
                <div className='about-title'>
                    <h3>Entre créativité et technologie,</h3>
                </div>
                <div className='about-txt'>
                    <p>Guidée par mon attrait pour <em>l'art et la photographie</em>, j'ai également depuis longtemps fait preuve d'un intérêt pour <em>l'informatique</em>,
                        notamment à travers <em>l'édition de contenus visuels</em>.
                        Cette passion pour la <em>créativité</em> et la <em>technologie</em> m'a conduite à suivre une formation chez OpenClassrooms 
                        afin de me spécialiser dans le <em>développement web front-end</em>,
                        un domaine où je peux combiner design et expérience utilisateur pour créer des <em>interfaces modernes et fonctionnelles</em>.</p>
                </div>
                <div className='about-img'>
                    <img src={PencilIcon} alt='pencil icon' />
                </div>
            </div>
            <div className='tools-n-skills'>
                <div className='tools'>
                    <h3>Outils</h3>
                    <div className='tools-content'>
                        <img src={VSCode} alt='Logo Visual Studio Code' />
                        <img src={Figma} alt='Logo Figma' />
                        <img src={GitHub} alt='Logo GitHub' />
                        <img src={PhotoShop} alt='Logo PhotoShop' />
                        <img src={Canva} alt='Logo Canva' />
                        <img src={InkScape} alt='Logo InkScape' />
                    </div>
                </div>
                {/* <img src={Item} alt="stick img" /> */}
                <div className='skills'>
                    <h3>Compétences</h3>
                    <div className='skills-content'>
                        <img src={Html} alt='Logo HTML5' />
                        <img src={Css} alt='Logo CSS3' />
                        <img src={Sass} alt='Logo Sass' />
                        <img src={JavaScript} alt='Logo JavaScript' />
                        <img src={ReactLogo} alt='Logo React' />
                        <img src={Git} alt='Logo Git' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
