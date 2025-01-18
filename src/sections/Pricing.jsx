import React from 'react';
import { Link } from "@mui/material";

export default function Pricing({ translate }) {

    const promociones = translate("promociones", { returnObjects: true });

    return (
        <section className="pricing-section sec-pad">
            <div className="auto-container">
                <div className="sec-title mb_50 centred">
                    <span className="sub-title">{promociones.titulo}</span>
                    <h2>{promociones.subTitulo}</h2>
                </div>

                <div className="row clearfix">
                    {promociones.paquetes.map((paquete) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
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
                                                    {paquete.elementos.map((elemen) => {
                                                        return (
                                                            <li>{elemen}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/#" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <br/>
                <div className="sec-title">
                    <span className="sub-title" style={{color:"red"}}>Nota: Precios solo en linea.</span>
                </div>
            </div>
        </section>
    );
};