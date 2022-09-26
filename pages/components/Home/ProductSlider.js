import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import {Images as ImageLink} from '../images'

const ProductSlider = (props) => {
    // console.log(typeof parseInt(props.slidesToScrollValue));
    const value = parseInt(props.slidesToScrollValue);
    // console.log(value);
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: value,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              slidesToScroll: value,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              slidesToScroll: value,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesToScroll: value,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      };
  return (
    <div className={`animate__animated ${props.AnimationClass}`} data-aos={props.dataaos}>
    <Slider {...settings}>
      <div className="productslider-1">
        <Image src={ImageLink.ProductSlider1} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.ProductSlider1} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.ProductSlider1} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.ProductSlider1} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.ProductSlider1} alt="Productslider1" />
      </div>
    </Slider>
  </div>
  )
}

export default ProductSlider