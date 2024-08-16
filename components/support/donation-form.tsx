"use client"

import support from '../../components/modules/Support.module.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DonationForm() {

    const [selectedAmt, setSelectedAmt] = useState<string>();
    const [selectedFreq, setSelectedFreq] = useState<string>();
    const [showError, setShowError] = useState(false);
    const router = useRouter();

    const getLink = (amt:any, freq:any) => {
        switch (`${amt}-${freq}`) {
            case '10-One-Time':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '50-One-Time':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '100-One-Time':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '500-One-Time':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '10-Monthly':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '50-Monthly':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '100-Monthly':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '500-Monthly':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '10-Annual':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '50-Annual':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '100-Annual':
                return 'https://www.instagram.com/freeuyghurnow/';
            case '500-Annual':
                return 'https://www.instagram.com/freeuyghurnow/';
            default:
                return 'https://www.instagram.com/freeuyghurnow/';
        }
    }

    const handleDonate = () => {
        if (selectedAmt && selectedFreq) {
            const path = getLink(selectedAmt, selectedFreq);
            setShowError(false);
            router.push(path);
        } else {
            setShowError(true);
        }
    }

    return (
        <div className={support["donation-form"]}>
            <div className={support["donation-section"]}>
                <div className={support["donation-header"]}>
                    <div className={support["donation-header-text"]}>
                        Donation Amount:
                    </div>
                </div>
                <div className={support["donation-buttons"]}>
                    {['10', '50', '100', '500', 'Custom'].map((amount, index, arr) => (
                        <button
                            key={amount}
                            className={`
                                            ${support['donation-button']}
                                            ${selectedAmt === amount ? support['selected-button'] : ''}
                                            ${support[`donation-button-${index}`]}
                                        `}
                            onClick={() => setSelectedAmt(amount)}
                        >
                            {amount === 'Custom' ? 'Custom' : `$${amount}`}
                        </button>
                    ))}
                </div>
            </div>
            <div className={support["donation-section"]}>
                <div className={support["donation-header"]}>
                    <div className={support["donation-header-text"]}>
                        Donation Frequency:
                    </div>
                </div>
                <div className={support["donation-buttons"]}>
                    {['One-Time', 'Monthly', 'Annual'].map((frequency, index, arr) => (
                        <button
                            key={frequency}
                            className={`
                                            ${support['donation-button']}
                                            ${selectedFreq === frequency ? support['selected-button'] : ''}
                                            ${support[`donation-button-${index}`]}
                                        `}
                            onClick={() => setSelectedFreq(frequency)}
                        >
                            {frequency}
                        </button>
                    ))}
                </div>
            </div>
            {showError && (
                <div className={support["donate-paragraph-i"]}>
                    Please select both a donation amount and frequency.
                </div>
            )}
            <button onClick={handleDonate} className={support["donate-button"]}>
                <div className={support["donate-button-text"]}>
                    Donate
                </div>
            </button>
        </div>
    )
}
