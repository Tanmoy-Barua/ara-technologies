import React from 'react'
import Slider from "react-slick";
import Image from "next/image"
import {Images as ImageLink} from '../images'

const Brand = () => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
  return (
    <div>
    <div>
    <Slider {...settings}>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage1} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage2} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage3} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage4} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage5} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage6} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage7} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage8} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage9} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage10} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage11} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage12} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage13} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage14} alt="Productslider1" />
      </div>
      <div className="productslider-1">
        <Image src={ImageLink.brandImage15} alt="Productslider1" />
      </div>
    </Slider>
  </div>
    </div>
  )
}

export default Brand