import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import {Images as ImageLink} from '../images'

const ProductSlider = (props) => {
    // console.log(typeof parseInt(props.slidesToScrollValue));
    const value = parseInt(props.slidesToScrollValue);
    // console.log(value);
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: value,
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