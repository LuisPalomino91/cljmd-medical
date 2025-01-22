'use client'
import Layout from "../../components/layout/Layout"
import Pricing from "../../sections/Pricing"

export default function Promotions({ translate, cambioIdioma }) {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate} handleIdioma={cambioIdioma}>
                <Pricing translate={translate} />
            </Layout>
        </>
    )
}


