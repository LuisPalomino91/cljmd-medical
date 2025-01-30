import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Navigate } from "react-router-dom";
import { API_SERVICEID } from "../../../env";

export default function Promociondlg({ open, handleClose, paquete, translate }) {

    const dlgPromocion = translate("dlgPromocion", { returnObjects: true });

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

    const generaCodigo = (e) => {
        let codigoFinal = "CL-";
        const numRandom = (Math.round(Math.random() * 99999) * 9);
        setCodigo(codigoFinal + numRandom);
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{dlgPromocion.titulo}</DialogTitle>
            <DialogContent>
                {dlgPromocion.infoText}<b>{paquete.titulo}</b>{dlgPromocion.infoText2}<b>{paquete.precio}</b>{dlgPromocion.infoText3}
                <br /><br />
                <form ref={form} onSubmit={registraPromocion} className="default-form">
                    <input name="paquete" value={paquete.titulo} hidden />
                    <input name="precio" value={paquete.precio} hidden />
                    <input name="codigo" value={codigo} hidden />
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="nombrePac" placeholder={dlgPromocion.lblPaciente} required onChange={generaCodigo} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="telContacto" placeholder={dlgPromocion.lblNumero} required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="email" name="correoContacto" placeholder={dlgPromocion.lblCorreo} required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            {dlgPromocion.informacionFooter}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group" style={{ textAlign: "center" }}>
                            <Button onClick={handleClose} color="primary">
                                {dlgPromocion.btnCancelar}
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group" style={{ textAlign: "center" }}>
                            <Button type="submit" color="primary">
                                {dlgPromocion.btnGuardar}
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}