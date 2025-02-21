
import React, { useRef, useState } from 'react';
import { Link } from '@mui/material';
import emailjs from '@emailjs/browser';
import { Navigate } from 'react-router-dom';
import { API_PUBLICKEY, API_SERVICEID, API_TEMPLATE_CONTAC } from '../../env';

export default function Contact({ translate }) {
    
    const contacto = translate("contactanos", { returnObjects: true });

    const form = useRef();
    const [isEmail, setIsEmail] = useState('none');
    const [isTelefono, setIsTelefono] = useState('none');

    const validaEmail = (e) => {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email = e.target.value;

        if (regex.test(email)) {
            setIsEmail('none');
        }else{
            setIsEmail('block');
        }
    }

    const validaTelefono = (e) => {
        var regex = /^\+?[1-9][0-9]{8,14}$/;
        var telefono = e.target.value;

        if (regex.test(telefono)) {
            setIsTelefono('none');
        }else{
            setIsTelefono('block');
        }
    }

    const envioCorreo = (e) => {
        e.preventDefault();

        if(isEmail === 'none' && isTelefono === 'none'){
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
        }else{
            alert('No se puede procesar con la solicitud tiene campos incorrectos.');
        }
    }

    return (
        <section className="contact-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title centred mb_50">
                    <h2>{contacto.titulo}</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                        <div className="info-inner">
                            <div className="info-block-one">
                                <h3>{contacto.llamanos.titulo}</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-2"></i></div>
                                    <p>{contacto.llamanos.subTitulo} <br /><Link href={contacto.llamanos.valor}>{contacto.llamanos.valor}</Link> </p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>{contacto.correo.titulo}</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-26"></i></div>
                                    <p>{contacto.correo.subTitulo} <br /><Link href={'mailto:'+contacto.correo.valor}>{contacto.correo.valor}</Link></p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>{contacto.direccion.titulo}</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></div>
                                    <p> {contacto.direccion.subTitulo}<br />{contacto.direccion.valor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                        <div className="form-inner ml_35">
                            <form ref={form} onSubmit={envioCorreo} className="default-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="nombre" placeholder={contacto.lblNombre} required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="segNombre" placeholder={contacto.lblApellido} required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="correo" placeholder={contacto.lblCorreo} required onChange={validaEmail}/>
                                        <span style={{marginLeft:"1em", color: "red", display: isEmail }}>Formato de Correo Incorrecto</span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="telefono" placeholder={contacto.lblTelefono} required onChange={validaTelefono}/>
                                        <span style={{marginLeft:"1em", color: "red", display: isTelefono }}>Formato de Telefono Incorrecto</span>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="asunto" placeholder={contacto.lblAsunto} required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="mensaje" placeholder={contacto.lblMensaje}></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                        <button type='submit' className="theme-btn btn-one"><span>{contacto.btnEnviar}</span></button>
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

