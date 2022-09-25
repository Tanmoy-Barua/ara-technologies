import React, {useEffect} from "react";
import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link';
import {Images as ImageLink} from '../images'
import ProductSlider from './ProductSlider'

import AOS from 'aos';
import 'aos/dist/aos.css';

const OurProduct = () => {
  useEffect(()=>{
    AOS.init();
  })
  
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h3>Our Products</h3>
                    <p>ARA Technologies Limited is All kinds of Networking Equipment importer, manufacturer, supplier & IT solution Provider</p>
                  </div>
                </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <ProductSlider dataaos="fade-left" slidesToScrollValue = "-1" AnimationClass="animate__fadeInLeft"/>
                <br />
                <ProductSlider dataaos="fade-right" slidesToScrollValue = "1" AnimationClass="animate__fadeInRight"/>
                <br />
                <div className="text-center">
                  <Link href="/products">
                    <a className="view-more">View More</a>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default OurProduct