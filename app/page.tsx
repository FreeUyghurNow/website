import React from 'react'
import type { Metadata } from "next";

import home from '../components/modules/Home.module.css'

import Header from '@/components/header'
import HomeHero from '@/components/home/homehero'
import AboutFun from '@/components/home/about-fun'
import MissionFUN from '@/components/home/mission-fun'
import WhatWeDo from '@/components/home/what-we-do'
import FollowOurCause from '@/components/home/follow-our-cause'
import Spacer from '@/components/spacer'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: "Free Uyghur Now",
    description: "The largest youth-led movement advocating for the freedom and rights of Uyghur and Turkic groups in East Turkestan.",
};

export default function Home() {
    return (
        <div className={home["page-main"]}>
            <Header />
            <HomeHero />
            <AboutFun />
            <MissionFUN />
            <WhatWeDo />
            <FollowOurCause />
            <Spacer />
            <Footer />
        </div>
    );
}
