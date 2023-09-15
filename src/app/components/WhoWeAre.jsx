"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Staff from '../components/Staff';
// import PortraitAlbum from '../components/PortraitAlbum';
import landscapeImage from '../images/grandpas-barbershop-1920-803.webp';
import portraitImage from '../images/grandpas-barbershop.jpeg';


export default function WhoWeAre() {

    const [portrait, setPortrait] = useState(null);

    useEffect(() => {
        setPortrait(window.innerWidth < window.innerHeight)
    }, []);

    return (
        <div className='about'>
            {/* <picture className="hero">
                <source srcSet={landscapeImage}
                    media="(orientation: landscape)" />
                <source srcSet={portraitImage}
                    media="(orientation: portrait)" /> */}
                <Image
                    src={landscapeImage}
                    alt="grandpa's barbershop with barbers and community lined up behind child getting hair cut."
                    width={1920}
                    height={803}
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            {/* </picture> */}
            <h1>WHO WE ARE</h1>
            <div className=''>
                <p>
                    As third and fourth generation barbers, we're a father and son team with over 100 years of experience in the family name.
                </p>
                <p>
                    We offer precision haircuts, beard trims, and hot towel shaves as well as a wide variety of classic scissor and clipper haircuts that will have you feeling brand new.
                </p>
            </div>
            <Staff />
            {/* {portrait && <PortraitAlbum />} */}
        </div>
    )
}
