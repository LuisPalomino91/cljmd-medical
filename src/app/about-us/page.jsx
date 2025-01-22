'use client'
import Layout from '../../components/layout/Layout'

export default function AboutUs({translate, cambioIdioma }) {

    const about = translate("about", { returnObjects: true });

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate} handleIdioma={cambioIdioma}>
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
                                                    <h3>{about.tituloMision}</h3>
                                                    <p>{about.mision}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box" style={{width:"17em"}}><img src="assets/images/news/news-8.jpeg" alt=""/></figure>
                                                <div className="lower-content">
                                                <h3>{about.tituloVision}</h3>
                                                <p>{about.vision}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box" style={{width:"17em"}}><img src="assets/images/news/news-9.jpeg" alt=""/></figure>
                                                <div className="lower-content">
                                                <h3>{about.tituloValores}</h3>
                                                <p>{about.valores}</p>
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


