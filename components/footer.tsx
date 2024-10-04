import React from 'react'
import Link from 'next/link'

import home from './modules/Home.module.css'

import funLogo from '../public/fun-logo.png'

export default function Footer() {
    return (
        <div className={home["footer"]}>
            <div className={home["footer-top-content"]}>
                <div className={home["footer-logo"]}>
                    <img style={{ width: '100%', height: 'auto' }} src={funLogo.src} alt="Free Uyghur Now Logo"/>
                </div>
                <div className={home["footer-text-contents"]}>
                    <div className={home["footer-header-contents"]}>
                        <div className={home["footer-section-header"]}>
                            We are Free Uyghur Now
                        </div>
                        <div className={home["footer-header-paragraph"]}>
                            Free Uyghur Now a youth-led non-profit organization devoted to raising awareness about human rights abuses against Uyghurs. Support our cause by sharing our content and donating. 
                        </div>
                    </div>
                    <div className={home["footer-columns-text"]}>
                        <div className={home["footer-contact-us"]}>
                            <div className={home["footer-columns-header"]}>
                                Contact Us
                            </div>
                            <div className={home["footer-contact-us-content"]}>
                                <div className={home["footer-paragraph"]}>
                                    Free Uyghur Now
                                </div>
                                <div style={{ color: '#A7D1FF' }} className={home["footer-paragraph"]}>
                                    info@freeuyghurnow.org
                                    <br/>
                                    +1 (123)-456-7890
                                </div>
                            </div>
                        </div>
                        <div className={home["footer-quick-links"]}>
                            <div className={home["footer-columns-header"]}>
                                Quick Links
                            </div>
                            <div className={home["footer-links-columns"]}>
                                <div className={home["footer-links-column"]}>
                                    <Link className={home["footer-link"]} href="/about">
                                        About Us
                                    </Link>
                                    <Link className={home["footer-link"]} href="/about">
                                        Mission
                                    </Link>
                                    <Link className={home["footer-link"]} href="/about">
                                        Team
                                    </Link>
                                    <Link className={home["footer-link"]} href="https://www.instagram.com/freeuyghurnow/">
                                        Instagram
                                    </Link>
                                </div>
                                <div className={home["footer-links-column"]}>
                                    <Link className={home["footer-link"]} href="/support">
                                        Support
                                    </Link>
                                    <Link className={home["footer-link"]} href="mailto:info@freeuyghurnow.org">
                                        Contact Us
                                    </Link>
                                    <Link className={home["footer-link"]} href="/">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={home["footer-bottom-content"]}>
                <div className={home["footer-hline-b"]}/>
                <div className={home["footer-bottom-text"]}>
                    <div className={home["legal"]}>
                        Free Uyghur Now is a State 501(c)(3) tax-exempt non-profit corporation.
                    </div>
                    <div className={home["legal"]}>
                        Made with ❤️ in Boston | Copyright © 2024 Free Uyghur Now
                    </div>
                </div>
            </div>
        </div>
    )
}
