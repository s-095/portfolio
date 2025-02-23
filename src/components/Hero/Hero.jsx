import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className='hero-txt'>
                <h1>Sab, <br />développeuse Front-End</h1>
                <p>Bienvenue sur mon portfolio</p>
            </div>
            <div className='hero-btn'>
                <a href="#projects">
                <button>Voir mes projets</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;
