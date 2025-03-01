'use client'
import { Link } from "@mui/material";
import Layout from '../../components/layout/Layout'

export default function Testimonios({ translate }) {

    const testimonios = translate("testimonios", { returnObjects: true });

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Testimonio" translate={translate}>
                <div>
                    <br/>
                    <section className="testimonial-page-section sec-pad-2">
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* Repeat the testimonial blocks for each testimonial */}
                                {testimonios.lista.map((elemen, i) => {
                                    return (
                                        <>
                                            <div key={i} className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                                                <div className="testimonial-block-one">
                                                    <div className="inner-box">
                                                        <div className="icon-box"><i className="icon-23"></i></div>
                                                        <p>{elemen.mensaje}</p>
                                                        <div className="author-box">
                                                            <figure className="author-thumb"><img src={`assets/images/resource/principal.jpeg`} alt="" /></figure>
                                                            <ul className="rating clearfix">
                                                                {[...Array(Number(elemen.estrellas)).keys()].map((index) => (
                                                                    <li><i className="fas fa-star"></i></li>
                                                                ))}
                                                            </ul>
                                                            <h3>{elemen.nombre}</h3>
                                                        </div>
                                                    </div>
                                                </div><br/>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            {/*<div className="pagination-wrapper mt_20 centred">
                                <ul className="pagination clearfix">
                                    <li><Link href="testimonials" className="current">1</Link></li>
                                    <li><Link href="testimonials">2</Link></li>
                                    <li><Link href="testimonials">3</Link></li>
                                    <li><Link href="testimonials"><i className="icon-36"></i></Link></li>
                                </ul>
                            </div>*/}
                            <br/>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}