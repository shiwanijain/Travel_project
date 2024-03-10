import React from 'react';
import Slider from 'react-slick';

const CardCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // 30 seconds
    };

    return (

        <Slider {...settings}>
            <div>
                <img src="../../../waterfall.webp" alt="Image 1" />
                <h1>hi</h1>
            </div>
            <div>
                <img src="../../../waterfall.webp" alt="Image 2" />
                <h1>hello</h1>
            </div>
            <div>
                <h1>hwllo</h1>
            </div>
        </Slider>
    );
};

export default CardCarousel;