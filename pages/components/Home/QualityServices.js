import React from 'react'
import Service from './Service'
import {Images }from '../images'

const QualityServices = () => {
    // console.log(Images);
  return (
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
                    <Service serviceName="Fiber Networking Solution" redirectlink="#name" image={Images.item1}/>
                    <Service serviceName="FTTx Solution" redirectlink="#name" image={Images.item2}/>
                    <Service serviceName="Video Surveillance & Access Control" redirectlink="#name" image={Images.item3}/>
                    <Service serviceName="Wi-Fi Solution" redirectlink="#name" image={Images.item4}/>
                    <Service serviceName="Data Center Solution Details" redirectlink="#name" image={Images.item5}/>
                    <Service serviceName="Structure Cabling Solution" redirectlink="#name" image={Images.item6}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QualityServices