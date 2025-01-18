
'use client'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from '@mui/material'

export default function Services3({translate}) {
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
                                                    <li><Link href="service-details-2">Hipertensión</Link></li>
                                                    <li><Link href="service-details-3" className="current">Nutrición</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/service/nutricion.jpg" alt="" /></figure>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>Nutrición</h3>
                                                    <p>Para perder peso no solo es necesario hacer dieta y practicar deporte, debes seguir  las reglas para quemar calorías, esto es lo que te permitirá lograr tu objetivo.</p>
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
                                                <h2>¿Qué es la Nutrición?</h2>
                                                <p>La nutrición es el proceso de consumir y utilizar alimentos y nutrientes para que el cuerpo funcione. Es un tema que se relaciona con la salud y que es importante a lo largo de la vida. </p><br/>
                                                <p>La nutrición incluye: La obtención de alimentos, La digestión de los alimentos, La asimilación de los nutrientes, El transporte de los nutrientes al torrente sanguíneo, El uso de los nutrientes en el cuerpo.</p><br/>
                                                <p>Para tener una buena nutrición, es importante consumir alimentos y bebidas que contengan los nutrientes necesarios. Estos nutrientes son proteínas, carbohidratos, grasas, vitaminas, minerales y agua.</p>
                                                <p>Una alimentación saludable puede ayudar a: </p><br/>
                                                <ul style={{marginLeft:"2em"}}>
                                                    <li>Reducir el riesgo de enfermedades como diabetes tipo 2, obesidad y enfermedades del corazón</li>
                                                    <li>Vivir más tiempo</li>
                                                    <li>Disponer de energía para el funcionamiento del organismo</li>
                                                    <li>Renovar tejidos dañados</li>
                                                </ul>
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