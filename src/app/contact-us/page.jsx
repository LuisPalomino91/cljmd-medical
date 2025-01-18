'use client'
import Layout from "../../components/layout/Layout"
import Contact from "../../sections/Contact";

export default function ContactUs({ translate }) {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate}>
                <div className="auto-container">
                   <Contact />
                </div>
            </Layout>
        </>
    )
}


