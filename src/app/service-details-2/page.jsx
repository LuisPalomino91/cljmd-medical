
'use client'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from '@mui/material'

export default function Services2({ translate, cambioIdioma }) {

    const servicios = translate("servicios", { returnObjects: true });

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Service Details" translate={translate} handleIdioma={cambioIdioma}>
                <div>
                    {/* service-section */}
                    <section className="service-details pb_110" style={{ marginTop: "10px" }}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="default-sidebar service-sidebar mr_15">
                                        <div className="sidebar-widget category-widget">
                                            <div className="widget-title">
                                                <h3>{servicios.titulo}</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    {servicios.menu.map((elemen) => {
                                                        return (
                                                            <li><Link href={elemen.href} className={elemen.activo}>{elemen.label}</Link></li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/service/hipertension.jpg" alt="" /></figure>
                                                    <div className="icon-box"><i className="icon-14"></i></div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>{servicios.hipertension.titulo}</h3>
                                                    <p>{servicios.hipertension.mensaje}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one mb_60">
                                            <figure className="image-box mb_40"><img src="assets/images/service/service-7.jpg" alt="" /></figure>
                                            <div className="text-box">
                                                <h2>{servicios.hipertension.pregunta}</h2>
                                                <p>{servicios.hipertension.parrafo1}</p><br />
                                                <p>{servicios.hipertension.parrafo2}</p><br />
                                                <p>{servicios.hipertension.parrafo3}</p><br />
                                                <ul style={{ marginLeft: "2em" }}>
                                                    {servicios.hipertension.elementos.map((elemen) => {
                                                        return (
                                                            <li>{elemen}</li>
                                                        );
                                                    })}
                                                </ul>
                                                <br />
                                                <p>{servicios.hipertension.parrafo4}</p>
                                            </div>
                                        </div>
                                        {/*<div className="content-two">
                                            <div className="image-inner">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box mb_30"><img src="assets/images/service/service-8.jpg" alt="" /></figure>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box mb_30"><img src="assets/images/service/service-9.jpg" alt="" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor mque lauda totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vite sunt explicabo. Nemo ipsam voluptatem quia voluptas sit aspernatur.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam nmco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service-section end */}
                </div>

            </Layout>
        </>
    )
}