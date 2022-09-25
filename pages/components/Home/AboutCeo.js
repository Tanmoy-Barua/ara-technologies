import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Images as ImageLink} from '../images'
import CountUp from 'react-countup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faBattleNet } from '@fortawesome/free-brands-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const AboutCeo = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="image-ceo">
                        <Image src={ImageLink.ImageCeo} alt="ceoImage" className="img-fluid"/>
                    </div>
                    <div className="ceo-details">
                        <div className="row text-center">
                            <div className="col-md-6 border-end">
                                <h4>Md Golam Robbani</h4>
                                <h6>Managing Director & CEO</h6>
                            </div>
                            <div className="col-md-6">
                                <h4>+880 1678004434</h4>
                                <h6>Call to ask any question</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>About Us</h5>
                    <h3 className="my-5">We Believe That Quality Of Services Matters</h3>
                    <p>The Elaboration of ARATECH is Advance Resources And Technologies Limited. The journey of ARATECH started in January 2006 and providing end to end professional data communications, Networking products supply and network solution.</p>
                    <div className="about-icon-content">
                        <div className="row">
                            <div className="col-md-1">
                                <div className="about-icon">
                                <FontAwesomeIcon icon={faBattleNet} />
                                </div>
                            </div>
                            <div className="col-md-11 ps-5">
                                <h5>All kinds of Networking Equipment & Solutions Provider</h5>
                                <p>ARA Technologies Limited is one of the best networking equipment importers, manufacturers, suppliers & solution providers in Bangladesh</p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-4">
                  <Link href="/about">
                    <a className="view-more">Read More</a>
                  </Link>
                </div>
                <div className="about-box">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="counter-rating">
                                <h3><CountUp end={8784} separator="," /></h3>
                                <h4>8,784+ Ratings</h4>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                        <div className="counter-client">
                            <h3><CountUp end={3200} separator="," /></h3>
                            <h4>Happy Clients</h4>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                        <div className="counter-team">
                            <h3><CountUp end={50}/></h3>
                            <h4>Expert Team</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCeo