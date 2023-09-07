'use client';
import Slider from 'react-slick';

const Carousel = ({
    children
}) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // vertical: true,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
};

export default Carousel;