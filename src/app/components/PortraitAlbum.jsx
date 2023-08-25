'use client';
import React from 'react';
import Carousel from '../components/Carousel';
import image1 from '../images/mr-tony-tony.jpeg';
import image2 from '../images/stuffed-horse-haircut-4-3.jpeg';

export default function Reviews() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className='portrait-album'>
      <Carousel>
        <img src={image1} alt="Third generation barber cutting his son's hair as a kid who's now himself the barber / owner of Tabor Barbershop." width='100%' />
        <img src={image2} alt="Tony (4th gen barber) as a child cutting his stuffed horse's hair with an audience of all his other stuffed animals." width='100%' />
      </Carousel>
    </div>
  );
}