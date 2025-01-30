
'use client'
import { useEffect, useState } from "react";

// Dynamic import for the WOW library
//const WOW = import('wowjs/dist/wow');

import Header2 from './header/Header2';
import DataBg from "../elements/DataBg";
import BackToTop from "../elements/BackToTop";
import Footer from "../footer/Footer";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls, translate }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    };
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        /*const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()*/

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, []);

    return (
        <>
            <DataBg />
            <div className={`boxed_wrapper ltr ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} translate={translate} />

                {/*<Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}*/}

                {children}

                {/*{(footerStyle === 1 || !footerStyle) && <Footer1 />}
                {footerStyle === 2 && <Footer2 />}*/}
                <Footer translate={translate} />
            </div>
            <BackToTop scroll={scroll} />
        </>
    );
}
