'use client'
import Layout from '../../components/layout/Layout'

export default function AboutUs({translate}) {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate}>
                <div>
                    <section className="sidebar-page-container sec-pad-2">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                                    <div className="blog-classic-content">
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box" style={{width:"17em"}}><img src="assets/images/news/news-7.jpeg" alt=""/></figure>
                                                <div className="lower-content">
                                                    <h3>MISION</h3>
                                                    <p>Preservar la salud y la confianza de nuestros paciente, con un trato más humanos, y mucha delicadeza a través de los mejores tratamientos integrales jmd personalizado y estrictos, basados en la evidencia médica y en nuestra investigación  clínica pero además adecuando en cada paciente  la atención médica, su propia investigación clínica . involucrándose en el conocimiento de la enfermedades Psico Inmuno Metabólicas orientándose e incluyendo a sus familiares, a la sociedad misma, porque no hay enfermedades hay enfermos, cada uno es especial para nosotros.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box" style={{width:"17em"}}><img src="assets/images/news/news-8.jpeg" alt=""/></figure>
                                                <div className="lower-content">
                                                    <h3>VISION</h3>
                                                    <p>Ser uno de los mejores pilares de la salud  en las enfermedades Psico Inmuno Metabólicas  lograr el mayor número de curación de ellas difundir la curación, fomentar su conocimiento  y su prevención sobre todo a nivel escolar,  aumentar su investigación médica, clínica, para ello es necesario establecer vínculos con más personas médicos y organizaciones que estén interesadas en estas enfermedades. Ser la Organización de salud líder  en la transformación del cuidado de estas enfermedades  por medio de curación, prevención e investigación continua , siendo un soporte importante para los pacientes y la  comunidad médica.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box" style={{width:"17em"}}><img src="assets/images/news/news-9.jpeg" alt=""/></figure>
                                                <div className="lower-content">
                                                    <h3>VALORES</h3>
                                                    <p>Humildad, honestidad, principios éticos, actitud de servir, calidez, calidad mejora continua por medio de la investigación basada en la evidencia médica y clínica pero sobre todo en la convivencia con el paciente y sus familiares .  Primero el paciente, después el paciente y siempre el paciente y detras de el médico y su familia.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}


