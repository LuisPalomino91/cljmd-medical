'use client'

import { Link } from "@mui/material";
import Menu from '../Menu';
import MobileMenu from "../MobileMenu";
import { useTranslation } from "react-i18next";
{/*import Menu from "../Menu"
import MobileMenu from "../MobileMenu"*/}

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar, translate, handleIdioma }) {
    return (
        <>
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">

                    <div className="top-inner">
                        <ul className="info-list clearfix">
                            <li><i className="icon-1"></i> {translate("header.horario")}</li>
                            <li><i className="icon-2"></i>{translate("header.telefono")} <Link href="tel:55-2456-9564">{translate("header.noTelefono")}</Link></li>
                            <li><img src="assets/images/icons/icon-1.png" alt="" /> {translate("header.direccion")}</li>
                        </ul>
                        <ul className="social-links clearfix">
                            <li><Link href="https://www.facebook.com/profile.php?id=61568502372047"><i className="icon-7" width={25} height={25}></i></Link></li>
                            <li><img src="assets/images/idioma/mexico.png" alt="" width={25} height={25} onClick={()=>{handleIdioma(1)}} /> | <img src="assets/images/idioma/estadosunidos.png" alt="" width={25} height={25} onClick={()=>{handleIdioma(2)}} /></li>
                        </ul>
                    </div>

                </div>

                {/* Header Upper */}
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" style={{ width: "15em" }} /></Link></figure>
                            </div>
                            <div className="menu-area">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu translate={translate} />
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" style={{ width: "15em" }} /></Link></figure>
                            </div>

                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu translate={translate} />
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} translate={translate} />
            </header>
        </>
    )
}
