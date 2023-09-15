// 'use client';
// import React, { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Hours from './components/Hours';
import Address from './components/Address';
// import WhoWeAre from './components/WhoWeAre';
// import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Marquee from './components/Marquee';
// import Navbar from './components/Navbar';

import desktopImage from './images/barbershop1920-1080.webp';
import mobileImage from './images/barbershop1530-1913.webp';
import dynamic from 'next/dynamic';

const DynamicWhoWeAre = dynamic(() => import('./components/WhoWeAre'), {
  ssr: false,
});

const Landing = () => {
  // const [landscape, setLandscape] = useState(null);
  // const bg = landscape ? desktopImage : mobileImage;

  // useEffect(() => {
  //   setLandscape(window.innerWidth > window.innerHeight);
  // }, []);


  return (
    <>
      <div className="hero-container"
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundImage: `url(${desktopImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: '100% 100%'}}
      >
        {/* {
          landscape ?
            <Image
            src={desktopImage}
            alt=''
            className='hero-image'
            placeholder='blur'
            style={{
              zIndex: "-9999",
              objectFit: 'cover',
              objectPosition: 'bottom-right'
            }}
            fill
            />
          :
            <Image
              src={mobileImage}
              alt=''
              className='hero-image'
              placeholder='blur'
              style={{
                zIndex: "-9999",
                objectFit: 'cover',
                objectPosition: 'bottom-right',
                width: '100vw',
                height: 'auto'
              }}
            />
          } */}

        </div>
          <div className='columns'>
            <div className="west-side" >
              <a href='tel:9718884133' id='call'>
                Call 971-888-4133
              </a>
            </div>
            <Address />
            <div className='east-side'>
              <div>
              {/* <h3 className="shown">HOURS</h3> */}
              <Hours />
            </div>
          </div>
      </div>

      <Marquee hrefURl={'https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland'}
        leftText={'Kids, senior & military discounts!'}
        rightText={'Walk-ins welcome!'} />
      <br />
      <DynamicWhoWeAre />
      {/* <WhoWeAre /> */}
      {/* <Testimonials /> */}
      <Services />
    </>
  )
}

/* <div className='columns'>

  <div className='hours' >
    <h2>
      HOURS
    </h2><Hours />
  </div>

  <div className='call'>
    <h2>
      CALL
    </h2>
    <PhoneNumber />
  </div>
  <div className='directions'>
    <h2>
      DIRECTIONS
    </h2>
    <Address />
    <br></br>
  </div>
</div> */
/* <GoogleMap width={"100%"} height={'300px'} /> */

export default Landing;