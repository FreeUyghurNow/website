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
                        We work to highlight human rights abuses happening to Uyghurs and advocate for policy and behavior changes to stop the mistreatment of Uyghurs. Almost every Uyghur can recount how the government of China has hurt them or their loved ones but unfortunately the world has been slow to take action. We aim to raise awareness about the crimes committed against Uyghurs and advocate for a better tomorrow.
                    </div>
                    <div className={about["about-subsection"]}>
                        <div className={about["about-item-heading"]}>
                            Our Mission
                        </div>
                        <div className={about["about-item-paragraph"]}>
                            Through research-based advocacy and social media campaigning we aim to raise awareness about human rights abuses towards Uyghurs among the population and with key decision makers.
                        </div>
                    </div>
                    <div className={about["about-subsection"]}>
                        <div className={about["about-item-heading"]}>
                            The Free Uyghur Now Vision
                        </div>
                        <div className={about["about-item-paragraph"]}>
                            We envision a world where Uyghurs can live free and happy lives.
                        </div>
                    </div>
                </div>
                <div className={about["about-spacer"]}/>
            </div>
        </div>
    )
}
