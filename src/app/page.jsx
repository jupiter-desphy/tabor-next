'use client';
import React, { useState, useEffect } from 'react';
import Hours from './components/Hours';
import Address from './components/Address';
import WhoWeAre from './components/WhoWeAre';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Marquee from './components/Marquee';
// import Navbar from './components/Navbar';

import desktopImage from './images/barbershop1920-1080.jpeg';
import mobileImage from './images/barbershop5-4.jpeg';

const Landing = () => {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    setBgImage(window.innerWidth > window.innerHeight ? desktopImage.src : mobileImage.src);
  }, []);
  

  return (
    <>
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>

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
      <WhoWeAre />
      <Reviews />
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