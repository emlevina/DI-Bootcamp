import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
    const array = ['Hong Kong', 'Macao', 'Japan', 'Las Vegas']

    return (
        <Carousel  width="400px">
            {array.map((place, i) => {
                return (
                    <div>
                        <img src={`assets/${i+1}.jpeg`} alt='' />
                        <p className="legend">{place}</p>
                    </div>
                )
            })}
        </Carousel>
    );

};

export default MyCarousel;
