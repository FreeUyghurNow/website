import React from 'react'

import home from './modules/Home.module.css'

export default function SectionHead({ text }:{ text:string }) {
    return (
        <div className={home["section-head-line"]}>
            <div className={home["hline-b-l"]}/>
            <div className={home["section-head-big"]}>
                {text}
            </div>
            <div className={home["hline-b"]}/>
        </div>
    )
}
