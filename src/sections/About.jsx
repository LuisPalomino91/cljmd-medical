
export default function About({ translate }) {
    const about = translate("about", { returnObjects: true });
    return (
        <>
            <section className="about-style-three pt_120 pb_120 bg-color-1">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_three">
                                <div className="image-box">
                                    <div className="image-shape">
                                        <div className="shape-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
                                        <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                        <div className="shape-3" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                                        <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                        <div className="shape-5" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                                    </div>
                                    <figure className="image image-1"><img src="assets/images/about/about-2.jpg" alt="" style={{ height: "23em" }} /></figure>
                                    <figure className="image image-2" style={{ width: "22em" }}><img src="assets/images/about/about-3.jpg" alt="" /></figure>
                                    <div className="icon-box"><i className="icon-14"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box">
                                    <div className="sec-title mb_15">
                                        <span className="sub-title">{about.titulo}</span>
                                        <h2>{about.subtitulo}</h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p>
                                            {about.mensaje}
                                        </p>
                                        <br/>
                                        <ul className="list-style-one clearfix">
                                            {about.elementos.map((elemen, i) => {
                                                return (
                                                    <li key={i}>{elemen}</li>
                                                );
                                            })}
                                        </ul>
                                        <br/>
                                        <p>
                                            {about.mensaje2}
                                        </p>
                                    </div>
                                    <div className="lower-box">
                                        <div className="experience-box">
                                            <div className="icon-box"><i className="icon-29"></i></div>
                                            <h3>{about.aniosExp}</h3>
                                            <span className="designation">{about.experiencia}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
