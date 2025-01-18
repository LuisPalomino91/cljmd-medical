'use client'
import Layout from "../components/layout/Layout"

export default function Notification({ translate }) {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate}>
                <div className="auto-container">
                    <section className="contact-style-two sec-pad">
                        <div className="auto-container">
                            <div className="sec-title centred mb_50">
                                <h2>UN ASESOR SE PONDRA EN CONTACTO CONTIGO LO ANTES POSIBLE.</h2><br/>
                                <h2>GRACIAS!!!</h2>
                            </div>
                            <div className="sec-title centred mb_50">
                                <img src="assets/images/accept.jpeg" alt="" style={{width:"25em", height:"25em"}}/>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}


