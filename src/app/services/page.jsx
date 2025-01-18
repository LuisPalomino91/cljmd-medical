
'use client'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from '@mui/material'

export default function Services({translate}) {
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
                                                    <li><Link href="general" className="current">Diabetes</Link></li>
                                                    <li><Link href="service-details-2">Hipertención</Link></li>
                                                    <li><Link href="service-details-3">Nutrición</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/service/chequeo.jpg" alt="" /></figure>
                                                    <div className="icon-box"><i className="icon-9"></i></div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>Diabetes</h3>
                                                    <p>El paciente que más sabe y aplica lo que sabe, es el paciente que más y mejor vive.</p>
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
                                                <h2>¿Qué es la Diabetes?</h2>
                                                <p>La diabetes es una enfermedad crónica que se caracteriza por niveles elevados de azúcar en la sangre, también llamada glucosa, y por una deficiencia de insulina. La insulina es una hormona que el páncreas produce para ayudar a que la glucosa entre en las células y sea utilizada como energía.</p><br/>
                                                <p>La diabetes puede afectar al corazón, los ojos, los riñones y el sistema nervioso. Entre sus complicaciones se encuentran: </p>
                                                <ul style={{marginLeft:"2em"}}>
                                                    <li>Enfermedad cardíaca</li>
                                                    <li>Accidente cerebrovascular</li>
                                                    <li>Presión arterial alta</li>
                                                    <li>Ateroesclerosis</li>
                                                    <li>Neuropatía, que es un daño en los nervios de las extremidades</li>
                                                </ul>
                                                <br/>
                                                <p>Existen tres tipos principales de diabetes:</p>
                                                <ul style={{marginLeft:"2em"}}>
                                                    <li><b>Diabetes tipo 1</b><br/><p>Suele aparecer en la juventud y afecta al páncreas, produciendo poca o nada de insulina.</p></li>
                                                    <li><b>Diabetes tipo 2</b><br/><p>Es el tipo más común y se produce cuando el cuerpo no es capaz de producir insulina.</p></li>
                                                    <li><b>Diabetes gestacional</b><br/><p>Se presenta durante el embarazo y suele darse en una etapa avanzada de la gestación.</p></li>
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