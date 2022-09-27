import React from 'react'
import ImageLink from '../components/images'
import CommonBanner from '../components/CommonBanner'
import Image from 'next/image'

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.aboutBanner} alt="AboutUs" title="Our Team"/>
      <div className="our-team-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                    <div className="team-heading">
                        <h3 className="text-center text-lg-start">Meet Our Management</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="team-member text-center">
                        <div className="member-image">
                            <Image src={ImageLink.member1} alt="member" className="rounded-3"/>
                        </div>
                        <h4 className="fw-bold">Md Golam Robbani</h4>
                        <h5>Managing Director & CEO</h5>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="team-member text-center">
                        <div className="member-image">
                            <Image src={ImageLink.member2} alt="member" className="rounded-3"/>
                        </div>
                        <h4 className="fw-bold">Md Golam Soroare</h4>
                        <h5>Vice Chairman & COO</h5>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="team-member text-center">
                        <div className="member-image">
                            <Image src={ImageLink.member3} alt="member" className="rounded-3"/>
                        </div>
                        <h4 className="fw-bold">Md Golam Mostafa</h4>
                        <h5>Director</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="team-ara-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="text-uppercase fw-bold">TEAM ARA</h3>
                </div>
                <div className="col-md-12">
                    <div className="team-colabs">
                    <Image src={ImageLink.aboutBanner} alt="group" className="rounded-3"/>
                    <div className="shape-1 d-none d-lg-block">
                    <Image src={ImageLink.shape1} alt="group" className="rounded-3"/>
                    </div>
                    <div className="shape-2 d-none d-lg-block">
                    <Image src={ImageLink.shape2} alt="group" className="rounded-3"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default index