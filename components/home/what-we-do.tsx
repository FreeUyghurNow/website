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

    const WhatWeDoItem = ({ heading, paragraph, icon }:{ heading:string, paragraph:string, icon:any }) => {
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
                        paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        icon={
                            <img className={home["wwd-item-icon"]} src={politicaladvoacy.src} alt="Political Advocacy" />
                        }
                    />
                    <WhatWeDoItem
                        heading="Global Outreach"
                        paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        icon={
                            <img className={home["wwd-item-icon"]} src={globaloutreach.src} alt="Global Outreach" />
                        }
                    />
                </div>
                <div className={home["wwd-item-row"]}>
                    <WhatWeDoItem
                        heading="Events + Seminars"
                        paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        icon={
                            <img className={home["wwd-item-icon"]} src={eventsseminars.src} alt="Events + Seminars" />
                        }
                    />
                    <WhatWeDoItem
                        heading="Community Engagement"
                        paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        icon={
                            <img className={home["wwd-item-icon"]} src={communityengagement.src} alt="Community Engagement" />
                        }
                    />
                </div>
            </div>
            <div className={home["learn-more"]}>
                <div className={home["learn-more-text-content"]}>
                    <div className={home["learn-more-text"]}>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </div>
                </div>
                <Link className={home["learn-more-button"]} href="/about">
                    <div className={home["learn-more-sec-but-text"]}>
                        Read more about us
                    </div>
                    <div className={home["learn-more-arrow-rt"]}>
                        <img className={home["learn-more-arrow-icon"]} src={learnmore.src} alt="Learn More" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
