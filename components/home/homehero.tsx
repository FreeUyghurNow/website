import React from 'react'

import home from '../modules/Home.module.css'

import highlight from '../../public/highlight.svg'

export default function HomeHero() {
    return (
        <div className={home["home-hero"]}>
            <div className={home["hero-text"]}>
                <div className={home["hero-subheading"]}>
                    <div className={home["h-sh-text-content"]}>
                        <div className={home["hero-subheading"]}>
                            We are
                        </div>
                        <div className={home["fun-highlight"]}>
                            <div className={home["fun-rhombus"]}>
                                <img src={highlight.src} alt="Highlight" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className={home["fun-text"]}>
                                Free Uyghur Now
                            </div>
                        </div>
                    </div>
                    <div className={home["hline-b"]}/>
                </div>
                <div className={home["hero-heading"]}>
                    The largest youth-led movement advocating for the freedom and rights of Uyghur and Turkic groups in East Turkestan.
                </div>
            </div>
        </div>
    )
}
