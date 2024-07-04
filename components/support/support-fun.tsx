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
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. In iaculis nunc sed augue lacus viverra. Tempor id eu nisl nunc. Condimentum mattis pellentesque id nibh tortor id.
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
