import React from 'react'
import Link from 'next/link'

import home from '../modules/Home.module.css'

import arrowrt from '../../public/arrow-rt.svg'

export default function AboutFun() {
    return (
        <div className={home["about-fun"]}>
            <div className={home["h-ab-main-content"]}>
                <div className={home["about-fun-columns"]}>
                    <div className={home["about-fun-column-l"]}>
                        <div className={home["about-fun-col-header"]}>
                            About Free Uyghur Now
                        </div>
                        <div className={home["about-fun-col-paragraph"]}>
                            We dream of a future where Uyghurs can live free and happy lives. Almost every Uyghur can recount how the government of China has hurt them or their loved ones but unfortunately the world has been slow to take action. We aim to raise awareness about the crimes committed against Uyghurs and advocate for a better tomorrow.
                        </div>
                    </div>
                    <div className={home["about-fun-column-r"]}/>
                </div>
                <Link className={home["about-fun-section-button"]} href="/about">
                    <div className={home["about-fun-button-content"]}>
                        <div className={home["sec-but-text"]}>
                            Learn More
                        </div>
                        <div className={home["arrow-rt"]}>
                            <img src={arrowrt.src} alt="Arrow Right" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
