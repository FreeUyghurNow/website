import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import home from './modules/Home.module.css'

import funLogo from '../public/fun-logo.png'
import menuIcon from '../public/menu-icon.svg'
import closeIcon from '../public/close-icon.svg'

export default function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <div className={home["header-menu-mobile"]}>
            <div className={home["header-menu-mobile-top-buttons"]}>
                <Link href="/">
                    <img className={home["header-logo-mobile"]} src={funLogo.src} alt="Free Uyghur Now Logo"/>
                </Link>
                <img className={home["menu-icon"]} onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'block' }} src={menuIcon.src} alt="Menu Icon" />
                <img className={home["close-icon"]} onClick={toggleMenu} style={{ display: isMenuOpen ? 'block' : 'none' }} src={closeIcon.src} alt="Close Icon" />
            </div>
            <div className={`${home["header-menu-buttons"]} ${isMenuOpen ? home["active"] : home["hidden"]}`}>
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
