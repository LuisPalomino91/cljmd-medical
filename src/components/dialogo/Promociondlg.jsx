import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Navigate } from "react-router-dom";
import { API_SERVICEID } from "../../../env";

export default function Promociondlg({ open, handleClose, paquete }) {

    const form = useRef();
    const [codigo, setCodigo] = useState("");

    const registraPromocion = (e) => {
        e.preventDefault();

        emailjs.sendForm(API_SERVICEID, API_TEMPLATE_PROMO, form.current, {
            publicKey: API_PUBLICKEY
        }).then(
            () => {
                handleClose();
                alert('Se envio correo a la cuenta proporcionada.');
            },
            (error) => {
                alert('OCURRIO UN ERROR -> ', error.text);
            },
        );
    };

    const generaCodigo = (e) =>{
        let codigoFinal = "CL-";
        const numRandom = (Math.round(Math.random() * 99999)*9);
        setCodigo(codigoFinal+numRandom);
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Paquete Seleccionado</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    El paquete que seleccionaste es un <b>{paquete.titulo}</b> con un costo de <b>{paquete.precio}</b> MXN,
                    el cual ya cuenta con consulta incluida y estudios de laboratorio.<br />
                    Para poder continuar con su registro favor ingresar la siguiente información:
                </DialogContentText>
                <br />
                <form ref={form} onSubmit={registraPromocion} className="default-form">
                    <input name="paquete" value={paquete.titulo} hidden/>
                    <input name="precio" value={paquete.precio} hidden/>
                    <input name="codigo" value={codigo} hidden/>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="nombrePac" placeholder="Nombre del Paciente" required onChange={generaCodigo} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="telContacto" placeholder="99-9999-9999" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="email" name="correoContacto" placeholder="me@example.com" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            Para mas información sobre su paquete, favor de revisar su cuenta de correo electronico de contacto.
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group" style={{ textAlign: "center" }}>
                            <Button onClick={handleClose} color="primary">
                                Salir
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group" style={{ textAlign: "center" }}>
                            <Button type="submit" color="primary">
                                Guardar
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}