import React from 'react'
import ImageLink from '../components/images'
import CommonBanner from '../components/CommonBanner'

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.aboutBanner} alt="AboutUs" title="About Us"/>
      <div className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="who-we-are">
                        
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default index