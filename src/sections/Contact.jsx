
import React, { useRef, useState } from 'react';
import { Link } from '@mui/material';
import emailjs from '@emailjs/browser';
import { Navigate } from 'react-router-dom';

export default function Contact() {

    const form = useRef();

    const envioCorreo = (e) => {
        e.preventDefault();

        emailjs.sendForm(API_SERVICEID, API_TEMPLATE_CONTAC, form.current, {
            publicKey: API_PUBLICKEY
        }).then(
            () => {
                Navigate({to: '/notificacion'});
            },
            (error) => {
                console.log('OCURRIO UN ERROR -> ', error.text);
            },
        );
    }

    const handleChange = (e) => {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
    };

    return (
        <section className="contact-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title centred mb_50">
                    <h2>CONTACTANOS</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                        <div className="info-inner">
                            <div className="info-block-one">
                                <h3>Llamanos</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-2"></i></div>
                                    <p>Consultorio: <br /><Link href="tel:5524569564">(+52)55-2456-9564</Link> </p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>Dirección Electronica</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-26"></i></div>
                                    <p>Correo: <br /><Link href="mailto:cljmdconsultorio@gmail.com">cljmdconsultorio@gmail.com</Link></p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>Dirección</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                    <p> C.3 24, Agrícola Pantitlán, Iztacalco,<br />08100 Ciudad de México, CDMX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                        <div className="form-inner ml_35">
                            <form ref={form} onSubmit={envioCorreo} className="default-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="nombre" placeholder="Primer Nombre" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="segNombre" placeholder="Segundo Nombre" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="correo" placeholder="Correo" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="telefono" placeholder="No. Telefono" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="asunto" placeholder="Asunto" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="mensaje" placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                        <button type='submit' className="theme-btn btn-one"><span>Enviar</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

