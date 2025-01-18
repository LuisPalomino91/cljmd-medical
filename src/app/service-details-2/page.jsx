
'use client'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from '@mui/material'

export default function Services2({translate}) {
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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Service Details" translate={translate}>
                <div>
                    {/* service-section */}
                    <section className="service-details pb_110" style={{marginTop:"10px"}}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="default-sidebar service-sidebar mr_15">
                                        <div className="sidebar-widget category-widget">
                                            <div className="widget-title">
                                                <h3>Servicios</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    <li><Link href="general">Diabetes</Link></li>
                                                    <li><Link href="service-details-2" className="current">Hipertensión</Link></li>
                                                    <li><Link href="service-details-3">Nutrición</Link></li>
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
                                                    <h3>Hipertensión</h3>
                                                    <p>Adquiere buenos hábitos alimenticios, haz ejercicio y controlarás tu presión arterial.</p>
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
                                                <h2>¿Qué es la Hipertensión?</h2>
                                                <p>La hipertensión arterial, también conocida como presión arterial alta, es una enfermedad que se produce cuando la presión de la sangre en las arterias es demasiado alta.</p><br/>
                                                <p>La hipertensión es un factor de riesgo cardiovascular que puede provocar enfermedades graves como infarto de corazón, accidente cerebrovascular o insuficiencia renal.</p><br/>
                                                <p>Factores de riesgo</p><br/>
                                                <ul style={{marginLeft:"2em"}}>
                                                    <li>Obesidad</li>
                                                    <li>Consumo excesivo de sal</li>
                                                    <li>Consumo de tabaco y alcohol</li>
                                                    <li>Falta de actividad física</li>
                                                    <li>Antecedentes familiares de hipertensión</li>
                                                    <li>Edad avanzada</li>
                                                    <li>Diabetes o nefropatías</li>
                                                </ul>
                                                <br/>
                                                <p>Para diagnosticar la hipertensión, se debe medir la presión arterial en dos días distintos</p>
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