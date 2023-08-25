import React from 'react'

export default function Marquee({ hrefURl, leftText, rightText }) {
    return (
        <a href={hrefURl} id='text-dec-none' role='button'>
            <div className='marquee-container'>
                <div className='marquee-left'>
                    {leftText}
                    <div className='hidden'>
                        {leftText}
                    </div>
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-right">
                    {rightText}
                </div>
            </div>
        </a>
    )
}
