import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formRef = useRef();

    const onSubmit = () => {
        emailjs.sendForm(
            'service_a4bnlvp',
            'template_5ezxcaa',
            formRef.current,
            'fVX8cGKTjSWBlYpHV'
        )
            .then((result) => {
                console.log('Message envoyé : ', result.text);
            }, (error) => {
                console.log('Erreur lors de l\'envoi : ', error.text);
            });
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <div className='contact-container'>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <h3>Laissez-moi un message</h3>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: "Le nom est obligatoire" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
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
            
        </section>
    );
};

export default Contact;
