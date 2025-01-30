import { Link } from "@mui/material";


export default function Footer({ translate, handleIdioma }) {
    const footer = translate("footer", { returnObjects: true });
    return (
        <>

            <footer className="main-footer">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <ul className="footer-nav clearfix">
                                <li><Link href="/">{footer.avisos}</Link></li>
                                <li><Link href="/">{footer.terminos}</Link></li>
                                <li><Link href="/contacto">{footer.contactanos}</Link></li>
                            </ul>
                            <div className="copyright">
                                <p>{footer.copyrigth} &copy; {footer.anio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
