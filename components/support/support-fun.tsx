import React from 'react'

import home from '../modules/Home.module.css'
import support from '../modules/Support.module.css'

import SectionHead from '../section-head'

export default function SupportFUN() {
    return (
        <div className={support["support-fun"]}>
            <SectionHead
                text="Support Free Uyghur Now"
            />
            <div className={support["support-fun-section-columns"]}>
                <div className={support["support-fun-subsection"]}>
                    <div className={support["support-fun-item-heading"]}>
                        Your contribution has an impact.
                    </div>
                    <div className={support["support-fun-item-paragraph"]}>
                        We rely on contributions like yours to support our ability to create engaging content and host campus events. Every little bit counts and is greatly appreciated!
                    </div>
                </div>
                <div className={support["support-contact"]}>
                    <div className={support["support-contact-heading"]}>
                        <div className={support["support-contact-item-heading"]}>
                            Have an inquiry?
                        </div>
                    </div>
                    <div className={support["support-contact-items"]}>
                        <div className={support["support-contact-item-subheading"]}>
                            Contact us below at:
                        </div>
                        <div className={support["support-contact-bullets"]}>
                            <div className={support["support-contact-bullet"]}>
                                <div className={support["bullet-hline-b"]}/>
                                <div className={support["bullet-item-heading"]}>
                                    info@freeuyghurnow.org
                                </div>
                            </div>
                            <div className={support["support-contact-bullet"]}>
                                <div className={support["bullet-hline-b"]}/>
                                <div className={support["bullet-item-heading"]}>
                                    +1 (123) 456-7890
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
