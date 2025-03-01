'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1({ lstTestimonios }) {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                {lstTestimonios.map((elemen, i) => {
                    return (
                        <SwiperSlide className="slide-item">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-23"></i></div>
                                    <p>{elemen.mensaje}</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpeg" alt="" /></figure>
                                        <ul className="rating clearfix">
                                            {[...Array(Number(elemen.estrellas)).keys()].map((index) => (
                                                <li><i className="fas fa-star"></i></li>
                                            ))}
                                        </ul>
                                        <h3>{elemen.nombre}</h3>
                                        {/*<span className="designation">Dog Trainer</span>*/}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    )
}