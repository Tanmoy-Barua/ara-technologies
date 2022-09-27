import React from 'react'
import Image from 'next/image'
import ImageLink from '../components/images'

const CommonBanner = (props) => {
    
  return (
    <>
        <div className="common-banner">
            <div className="common-banner-img">
            <Image src={props.image} alt={props.alt}/>
            </div>
            <div className="common-banner-overlay">
                <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">
                                {props.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommonBanner