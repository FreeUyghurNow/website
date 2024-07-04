import React from 'react'
import Link from 'next/link'

import home from '../modules/Home.module.css'
import about from '../modules/About.module.css'

import follow from '../../public/follow.svg'
import subscribe from '../../public/subscribe.svg'
import donate from '../../public/donate.svg'

export default function GetInvolved() {
    return (
        <div className={about["get-involved"]}>
            <div className={about["get-involved-text"]}>
                <div className={about["section-head-big"]}>
                    How to Get Involved:
                </div>
            </div>
            <div className={about["get-involved-items"]}>
                <Link className={about["get-involved-item"]} style={{ background: "#5EAAE8" }} href="">
                    <div className={about["get-involved-bg"]}>
                        <div className={about["get-involved-icon"]}>
                            <img className={about["follow-icon"]} src={follow.src} alt="Follow" />
                        </div>
                    </div>
                    <div className={about["get-involved-item-fg"]}>
                        <div className={about["get-involved-text-contents"]}>
                            <div className={about["get-involved-action-text"]}>
                                Follow
                            </div>
                            <div className={about["get-involved-action-subtext"]}>
                                our Instagram
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className={about["get-involved-item"]} style={{ background: "#4B92CC" }} href="">
                    <div className={about["get-involved-item-bg"]}>
                        <div className={about["get-involved-icon"]}>
                            <img src={subscribe.src} alt="Subscribe" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                    <div className={about["get-involved-item-fg"]}>
                        <div className={about["get-involved-text-contents"]}>
                            <div className={about["get-involved-action-text"]}>
                                Subscribe
                            </div>
                            <div className={about["get-involved-action-subtext"]}>
                                to our mailing list
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className={about["get-involved-item"]} style={{ background: "#5489B3" }} href="">
                    <div className={about["get-involved-item-bg"]}>
                        <div className={about["get-involved-icon"]}>
                            <img src={donate.src} alt="Donate" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                    <div className={about["get-involved-item-fg"]}>
                        <div className={about["get-involved-text-contents"]}>
                            <div className={about["get-involved-action-text"]}>
                                Donate
                            </div>
                            <div className={about["get-involved-action-subtext"]}>
                                to our cause
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
