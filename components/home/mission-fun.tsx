import React from 'react'

import home from '../modules/Home.module.css'

export default function MissionFUN() {
    return (
        <div className={home["mission-fun"]}>
            <div className={home["mission-fun-section-image"]}>

            </div>
            <div className={home["mission-fun-columns"]}>
                <div className={home["about-fun-column-l"]}>
                    <div className={home["about-fun-col-header"]}>
                        Our Mission
                    </div>
                    <div className={home["about-fun-col-paragraph"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </div>
                </div>
                <div className={home["mission-fun-column-r"]}/>
            </div>
        </div>
    )
}
