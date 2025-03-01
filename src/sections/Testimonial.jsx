import React from 'react';
import TestimonialSlider1 from '../slider/TestimonialSlider1';


export default function Testimonial({ translate }) {
    const testimonios = translate("testimonios", { returnObjects: true });
    return (
        <section className="testimonial-style-two bg-color-1">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
                        <div className="thumb-box">
                            <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.jpeg" alt="" /></div>
                            <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.jpeg" alt="" /></div>
                            <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.jpeg" alt="" /></div>
                            <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.jpeg" alt="" /></div>
                            <div className="thumb thumb-5"><img src="assets/images/resource/thumb-5.jpeg" alt="" /></div>
                            <div className="thumb thumb-6"><img src="assets/images/resource/principal.jpeg" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title mb_50">
                                <span className="sub-title">{testimonios.titulo}</span>
                                <h2>{testimonios.subTitulo}</h2>
                            </div>
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider1 lstTestimonios={testimonios.lista} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};