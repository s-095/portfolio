import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const formRef = useRef();

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const onSubmit = () => {
        emailjs.sendForm(
            'service_a4bnlvp',
            'template_5ezxcaa',
            formRef.current,
            'fVX8cGKTjSWBlYpHV'
        )
            .then(() => {
                setSuccessMessage(true);
                setErrorMessage(false);
                reset();

                setTimeout(() => setSuccessMessage(false), 4000);
            })
            .catch(() => {
                setErrorMessage(true);
                setSuccessMessage(false);

                setTimeout(() => setErrorMessage(false), 4000);
            });
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <div className="contact-container">
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <h3>Laissez-moi un message</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            placeholder="Nom"
                            {...register("name", { required: "Le nom est obligatoire" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "L'email est obligatoire",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Veuillez entrer un email valide"
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <textarea
                            id="message"
                            placeholder="Message"
                            {...register("message", { required: "Le message est obligatoire" })}
                        />
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>

            <a
                href="https://github.com/s-095"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            {successMessage && <div className="popup-success">Message envoyé avec succès !</div>}

            {errorMessage && <div className="popup-error">Erreur lors de l'envoi du message.</div>}
        </section>
    );
};

export default Contact;
