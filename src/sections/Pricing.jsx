import React, { useState } from 'react';
import { Button } from "@mui/material";
import Promociondlg from "../components/dialogo/Promociondlg";

export default function Pricing({ translate }) {

    const promociones = translate("promociones", { returnObjects: true });

    const [formPaquete, setFormPaquete] = useState({});
    const [open, setOpen] = useState(false);

    const handleClickOpen = (paquete) => {
        setFormPaquete(paquete);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className="pricing-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title mb_50 centred">
                        <span className="sub-title">{promociones.titulo}</span>
                        <h2>{promociones.subTitulo}</h2>
                    </div>

                    <div className="row clearfix">
                        {promociones.paquetes.map((paquete, index) => {
                            return (
                                <>
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="pricing-table">
                                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                                                <div className="table-header">
                                                    <h5>{paquete.titulo}</h5>
                                                    <h2>{paquete.precio}</h2>
                                                    <span>{paquete.subTitulo}</span>
                                                </div>
                                                <div className="table-content">
                                                    <ul className="feature-list clearfix">
                                                        {paquete.elementos.map((elemen, i) => {
                                                            return (
                                                                <li key={i}>{elemen}</li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="table-footer">
                                                    <Button variant="outlined" color="primary" className="theme-btn btn-three" onClick={() => handleClickOpen(paquete)} style={{ width: "15em" }}>
                                                        {promociones.selecciona} <i className="icon-25"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <br />
                    <div className="sec-title">
                        <span className="sub-title" style={{ color: "red" }}>{promociones.nota}</span>
                    </div>
                </div>
            </section>

            <Promociondlg open={open} handleClose={handleClose} paquete={formPaquete} translate={translate} />
        </>
    );
};