import React from 'react'

import home from '../modules/Home.module.css'
import about from '../modules/About.module.css'

import bg from '../../public/mosque.png'

import SectionHead from '../section-head'

export default function About() {
    return (    
        <div className={about["about-fg"]}>
            <SectionHead
                text="About Free Uyghur Now"
            />
            <div className={about["about-section-contents"]}>
                <div className={about["about-text-content"]}>
                    <div className={about["about-section-par"]}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate
                    </div>
                    <div className={about["about-subsection"]}>
                        <div className={about["about-item-heading"]}>
                            Our Mission
                        </div>
                        <div className={about["about-item-paragraph"]}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. In iaculis nunc sed augue lacus viverra. Tempor id eu nisl nunc. Condimentum mattis pellentesque id nibh tortor id.
                        </div>
                    </div>
                    <div className={about["about-subsection"]}>
                        <div className={about["about-item-heading"]}>
                            The Free Uyghur Now Vision
                        </div>
                        <div className={about["about-item-paragraph"]}>
                            Tempor id eu nisl nunc. Condimentum mattis pellentesque id nibh tortor id. Netus et malesuada fames ac turpis egestas maecenas pharetra. Volutpat consequat mauris nunc congue nisi vitae suscipit.
                        </div>
                    </div>
                </div>
                <div className={about["about-spacer"]}/>
            </div>
        </div>
    )
}
