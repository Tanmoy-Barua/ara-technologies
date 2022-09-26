import React from 'react'
import Image from 'next/image'

const Service = (props) => {
  return (
    <div className="col-12 col-lg-4">
        <div className="services-content">
         <Image src={props.image} alt={props.image}/>
         <div className="service-overlay">
            <div className="conatiner">
              <div className="row">
                <h4>{props.serviceName}</h4>
                <div className="service-button text-center mt-4">
                <a href={props.redirectlink} className="details">Details</a>
                </div>
              </div>
            </div>
        </div> 
        </div>
    </div>
  )
}

export default Service