import React from 'react'
import Link from 'next/link'

import home from '../modules/Home.module.css'
import about from '../modules/About.module.css'

import SectionHead from '../section-head'

import arrowrt from '../../public/learn-more-arrow-rt.svg'

export default function WantToJoin() {
    return (
        <div className={about["want-to-join"]}>
            <div className={home["section-head-line"]}>
                <div className={home["hline-b-l"]}  style={{ background: "#FFFF" }}/>
                    <div className={home["section-head-big"]}  style={{ color: "#FFFF" }}>
                        Want to Join our Cause?
                    </div>
                <div className={home["hline-b"]} style={{ background: "#FFFF" }}/>
            </div>
            <div className={home["section-par"]} style={{ color: "#FFFF" }}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate
            </div>
            <div className={home["learn-more"]} style={{ paddingTop: "0px" }}>
                <div className={home["learn-more-text-content"]} style={{ background: "#5F3739" }}>
                    <div className={home["learn-more-text"]} style={{ color: "#FFFF" }}>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </div>
                </div>
                <Link className={home["learn-more-button"]} href="">
                    <div className={home["learn-more-sec-but-text"]}>
                        Application Form
                    </div>
                    <div className={home["learn-more-arrow-rt"]}>
                        <img src={arrowrt.src} alt="Arrow Right" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
