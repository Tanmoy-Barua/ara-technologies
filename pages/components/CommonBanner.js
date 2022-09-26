import React from 'react'
import Image from 'next/image'
import {Images as ImageLink} from '../components/images'

const CommonBanner = () => {
    console.log(ImageLink.contactusBanner);
  return (
    <>
        <div className="common-banner">
            <Image src={ImageLink.contactusBanner} alt="contact" className="w-100"/>
            <div className="common-banner-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            Contact US
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommonBanner