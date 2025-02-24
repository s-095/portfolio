import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");

    const navLinks = [
        { id: "hero", label: "Accueil" },
        { id: "about", label: "À propos" },
        { id: "projects", label: "Projets" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;

            navLinks.forEach((link) => {
                const element = document.getElementById(link.id);
                if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
                    setActiveSection(link.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="navbar">
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className={activeSection === link.id ? "active" : ""}
                            onClick={(event) => {
                                event.preventDefault();
                                scrollToSection(link.id);
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
