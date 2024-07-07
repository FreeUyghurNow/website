import React from 'react'
import Link from 'next/link'

import home from '../modules/Home.module.css'

import portraits from '../../public/portraits.png'
import howcanhelp from '../../public/howyoucanhelp.png'
import whatshappening from '../../public/whats-happening.png'

import SectionHead from '../section-head'

import arrowlt from '../../public/carousel-arrow-l.svg'
import arrowrt from '../../public/carousel-arrow-r.svg'

export default function FollowOurCause() {
    return (
        <div className={home["follow-our-cause"]}>
            <SectionHead
                text='Follow Our Cause'
            />
            <div className={home["section-par"]}>
                View our posts below to learn about the numerous crimes committed against the Uyghur population, including detailed accounts of human rights abuses, and discover actionable steps you can take to support our cause and advocate for justice.
            </div>
            <div className={home["follow-us-carousel"]}>
                <Link className={home["carousel-arrow-button"]} href="https://www.instagram.com/freeuyghurnow/">
                    <div className={home["carousel-arrow"]}>
                        <img src={arrowlt.src} alt="Arrow Left" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </Link>
                <Link className={home["carousel-post"]} href="https://www.instagram.com/p/CzZjU6SP7zL/?hl=en&img_index=1">
                    <img src={whatshappening.src} alt="What's Happening to the Uyghurs" width="100%"/>
                </Link>
                <Link className={home["carousel-post"]} href="https://www.instagram.com/p/C5OVANYr-RP/?hl=en&img_index=1">
                    <img src={portraits.src} alt="Portraits of Freedom" width="100%"/>
                </Link>
                <Link className={home["carousel-post"]} href="https://www.instagram.com/p/C20Dwh_xW7S/?hl=en&img_index=1">
                    <img src={howcanhelp.src} alt="How You Can Help the Uyghurs" width="100%"/>
                </Link>
                <Link className={home["carousel-arrow-button"]} href="https://www.instagram.com/freeuyghurnow/">
                    <div className={home["carousel-arrow"]}>
                        <img src={arrowrt.src} alt="Arrow Right" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
