'use client'
import { Link } from "@mui/material";
import { useState } from "react";
import i18n from "../../language/i18n";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar, translate }) {

    const menus = translate("menu", { returnObjects: true });
    const contacto = translate("contactanos", { returnObjects: true });

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="/assets/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                {menus.map((menu, index) => {
                                    return (
                                        <li key={index} className={isActive.key == index ? "dropdown current" : "dropdown"}><Link href={menu.href != undefined ? menu.href : "/"}>{menu.titulo}</Link>
                                            {menu.subMenu.length > 0 ?
                                                <>
                                                    <ul style={{ display: `${isActive.key == index ? "block" : "none"}` }}>
                                                        {menu.subMenu.map((subMenu, i) => {
                                                            return (
                                                                <li key={i}><Link href={subMenu.href}>{subMenu.titulo}</Link></li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <div className={isActive.key == index ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(index)}><span className="fa fa-angle-right" /></div>
                                                </>
                                                : ""}
                                        </li>
                                    );
                                })}
                            </ul >
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4>{contacto.titulo}</h4>
                        <ul>
                            <li>{contacto.direccion.subTitulo} {contacto.direccion.valor}</li>
                            <li><Link href="tel:5524569564">{contacto.llamanos.valor}</Link></li>
                            <li><Link href="mailto:cljmdconsultorio@gmail.com">{contacto.correo.valor}</Link></li>
                        </ul>
                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="https://www.facebook.com/profile.php?id=61568502372047"><span className="fab fa-facebook-square"></span></Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><img src="assets/images/idioma/mexico.png" alt="" width={25} height={25} onClick={() => { i18n.changeLanguage("es") }} /> | <img src="assets/images/idioma/estadosunidos.png" alt="" width={25} height={25} onClick={() => { i18n.changeLanguage("en") }} /> </li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    );
};