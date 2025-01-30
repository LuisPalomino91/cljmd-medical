'use client'
import Layout from "../../components/layout/Layout"
import Pricing from "../../sections/Pricing"

export default function Promotions({ translate }) {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details" translate={translate}>
                <Pricing translate={translate} />
            </Layout>
        </>
    )
}


