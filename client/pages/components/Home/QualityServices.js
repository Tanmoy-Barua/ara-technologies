import React from 'react'
import Service from './Service'
import Images from '../images'
import ScrollAnimation from 'react-animate-on-scroll';

const QualityServices = () => {
    // console.log(Images);
  return (
    <ScrollAnimation animateIn="fadeInUp"
    animateOut="fadeOut"
    duration={0.8}
    delay={3}>
    <div className="qualityservices">
        <div className="service-heading">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                    <h5>WHAT WE OFFER</h5>
                    <h3>We Provide Quality Service</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-body">
            <div className="container">
                <div className="row">
                    <Service serviceName="Fiber Networking Solution" redirectlink="/about" image={Images.item1}/>
                    <Service serviceName="FTTx Solution" redirectlink="/about" image={Images.item2}/>
                    <Service serviceName="Video Surveillance & Access Control" redirectlink="/about" image={Images.item3}/>
                    <Service serviceName="Wi-Fi Solution" redirectlink="/about" image={Images.item4}/>
                    <Service serviceName="Data Center Solution Details" redirectlink="/about" image={Images.item5}/>
                    <Service serviceName="Structure Cabling Solution" redirectlink="/about" image={Images.item6}/>
                </div>
            </div>
        </div>
    </div>
    </ScrollAnimation>
  )
}

export default QualityServices