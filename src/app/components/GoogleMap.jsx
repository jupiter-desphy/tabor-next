import React from 'react'

export default function GoogleMap({ width, height }) {
    let wth = width;
    let hgt = height;
    return (
        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4003236395747!2d-122.60737919999995!3d45.522149100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a1b30c96bea1%3A0x6a02a243943ccfaa!2sTabor%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1674709948639!5m2!1sen!2sus"
            width={wth} height={hgt}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            tabIndex={'0'}>

        </iframe>
    )
}
