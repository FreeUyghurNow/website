import React from 'react'
import Link from 'next/link'

import home from './modules/Home.module.css'

import funLogo from '../public/fun-logo.png'

export default function Header() {
    return (
        <div className={home["header-menu"]}>
            <Link href="/">
                <img className={home["header-logo"]} src={funLogo.src} alt="Free Uyghur Now Logo"/>
            </Link>
            <div className={home["header-menu-buttons"]}>
                <Link className={home["header-menu-item"]} href="/">
                    Home
                </Link>
                <Link className={home["header-menu-item"]} href="/about">
                    About
                </Link>
                <Link className={home["header-menu-item"]} href="/join">
                    Join Us
                </Link>
                <Link style={{ textDecoration: 'none' }} className={home["header-menu-button"]} href="/support">
                    <div style={{ color: '#FFF' }} className={home["header-menu-item"]}>
                        Donate
                    </div>
                </Link>
            </div>
        </div>
    )
}
