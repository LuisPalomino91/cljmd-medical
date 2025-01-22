'use client'
import Layout from "../../components/layout/Layout"
import Contact from "../../sections/Contact";

export default function ContactUs({ translate, cambioIdioma }) {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate} handleIdioma={cambioIdioma}>
                <div className="auto-container">
                   <Contact translate={translate}/>
                </div>
            </Layout>
        </>
    )
}


