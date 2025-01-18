import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import About from "../sections/About";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Pricing from "../sections/Pricing";
import Testimonial from "../sections/Testimonial";
import Notification from "../sections/Notification";
import AboutUs from "./about-us/page";
import Services from "./services/page";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Promotions from "./promotions/page";
import ContactUs from "./contact-us/page";
import Services2 from "./service-details-2/page";
import Services3 from "./service-details-3/page";


export default function Home() {
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        i18n.changeLanguage("es");
    },[]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Layout headerStyle={2} footerStyle={1} translate={t} >
                            <Banner />
                            <About />
                            <Pricing translate={t} />
                            <Testimonial />
                            <Contact />
                        </Layout>}>
                    </Route>
                    <Route path="/nosotros" element={<AboutUs translate={t}/>} />
                    <Route path="/testimonios" element={null} />
                    <Route path="/general" element={<Services translate={t}/>} />
                    <Route path="/service-details-2" element={<Services2 translate={t}/>} />
                    <Route path="/service-details-3" element={<Services3 translate={t}/>} />
                    <Route path="/promociones" element={<Promotions translate={t}/>} />
                    <Route path="/contacto" element={<ContactUs translate={t}/>} />
                    <Route path="/notificacion" element={<Notification translate={t}/>} />
                </Routes>
            </BrowserRouter>


        </>
    )
}