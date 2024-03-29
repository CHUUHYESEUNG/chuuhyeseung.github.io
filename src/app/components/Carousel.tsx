"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container w-screen">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/1600/800" />
        </div>
        <div>
          <img src="http://placekitten.com/g/1600/800" />
        </div>
        <div>
          <img src="http://placekitten.com/g/1600/800" />
        </div>
        <div>
          <img src="http://placekitten.com/g/1600/800" />
        </div>
      </Slider>
    </div>
  );
};
