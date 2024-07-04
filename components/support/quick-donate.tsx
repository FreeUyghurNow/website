import React from 'react'
import Link from 'next/link'

import support from '../modules/Support.module.css'

import SectionHead from '../section-head'
import DonationForm from './donation-form'

export default function QuickDonate() {
    return (
        <div className={support["quick-donate"]}>
            <SectionHead
                text="Quick Donate"
            />
            <div className={support["donate-paragraph"]}>
                Easily support our initiatives online via credit card or Apple Pay below:
            </div>
            <DonationForm />
            <div className={support["donate-paragraph-i"]}>
                Free Uyghur Now is a 501(c)(3) not-for-profit organization. As no goods or services are provided to you in return for your charitable contribution, the entire amount of your contribution is tax deductible to the full extent allowed by law. Our tax ID is: 12-3456789
            </div>
        </div>
    )
}