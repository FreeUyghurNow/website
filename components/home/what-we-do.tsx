import React from 'react'
import Link from 'next/link'

import home from '../modules/Home.module.css'

import SectionHead from '../section-head'

import politicaladvoacy from '../../public/political-advocacy.svg'
import globaloutreach from '../../public/global-outreach.svg'
import eventsseminars from '../../public/events-seminars.svg'
import communityengagement from '../../public/community-engagement.svg'
import learnmore from '../../public/learn-more-arrow-rt.svg'

export default function WhatWeDo() {

    const WhatWeDoItem = ({ heading, paragraph, icon }:{ heading:string, paragraph:any, icon:any }) => {
        return (
            <div className={home["wwd-item"]}>
                <div className={home["wwd-item-bg"]}>
                    {icon}
                </div>
                <div className={home["wwd-item-fg"]}>
                    <div className={home["wwd-item-heading"]}>
                        {heading}
                    </div>
                    <div className={home["wwd-item-paragraph"]}>
                        {paragraph}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={home["what-we-do"]}>
            <SectionHead
                text="What We Do"
            />
            <div className={home["wwd-items"]}>
                <div className={home["wwd-item-row"]}>
                    <WhatWeDoItem
                        heading="Political Advocacy"
                        paragraph="We develop and implement Uyghur advocacy campaigns with academic, business, or political leaders to create policy change and increase awareness."
                        icon={
                            <img className={home["wwd-item-icon"]} src={politicaladvoacy.src} alt="Political Advocacy" />
                        }
                    />
                    <WhatWeDoItem
                        heading="Social Media"
                        paragraph={
                            <div>
                                <div>
                                    We aim to raise awareness about human rights abuses committed against Uyghurs and how supporters can best advocate for Uyghurs.
                                </div>
                                <Link href="https://www.instagram.com/freeuyghurnow/">
                                    Follow our cause here.
                                </Link>
                            </div>
                        }
                        icon={
                            <img className={home["wwd-item-icon"]} src={globaloutreach.src} alt="Global Outreach" />
                        }
                    />
                </div>
                <div className={home["wwd-item-row"]}>
                    <WhatWeDoItem
                        heading="Research"
                        paragraph="Our research team looks into which popular brands profit off of Uyghur forced labor, and keeps up with the latest news surrounding Uyghurs."
                        icon={
                            <img className={home["wwd-item-icon"]} src={eventsseminars.src} alt="Events + Seminars" />
                        }
                    />
                    <WhatWeDoItem
                        heading="Campus Organizers"
                        paragraph={
                            <div>
                                <div>
                                    We conduct campus tours on Uyghur culture and history, human rights violations committed against Uyghurs, and actions items.
                                </div>
                                <Link href="https://www.instagram.com/freeuyghurnow/">
                                    Click here to request a tour at your university.
                                </Link>
                            </div>
                        }
                        icon={
                            <img className={home["wwd-item-icon"]} src={communityengagement.src} alt="Community Engagement" />
                        }
                    />
                </div>
            </div>
            <div className={home["learn-more"]}>
                <div className={home["learn-more-text-content"]}>
                    <div className={home["learn-more-text"]}>
                        Join us in making a difference for Uyghur rights and awareness.
                    </div>
                </div>
                <Link className={home["learn-more-button"]} href="/about">
                    <div className={home["learn-more-sec-but-text"]}>
                        Read more
                    </div>
                    <div className={home["learn-more-arrow-rt"]}>
                        <img className={home["learn-more-arrow-icon"]} src={learnmore.src} alt="Learn More" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
