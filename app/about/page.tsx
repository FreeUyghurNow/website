import React from 'react'
import type { Metadata } from "next";

import home from '../../components/modules/Home.module.css'

import Header from '@/components/header'
import About from '@/components/about/about'
import GetInvolved from '@/components/about/get-involved';
import WantToJoin from '@/components/about/want-to-join';

import Spacer from '@/components/spacer'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: "Free Uyghur Now",
    description: "The largest youth-led movement advocating for the freedom and rights of Uyghur and Turkic groups in East Turkestan.",
};

export default function Page() {
    return (
        <div className={home["page-main"]}>
            <Header />
            <About />
            <GetInvolved />
            <WantToJoin />
            <Spacer />
            <Footer />
        </div>
    );
}
