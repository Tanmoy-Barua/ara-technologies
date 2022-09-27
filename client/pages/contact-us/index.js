import React from 'react'
import ImageLink from '../components/images'
import CommonBanner from '../components/CommonBanner'
import Image from 'next/image'
import BrandSlider from '../components/Home/Brand'

// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.contactusBanner} alt="contact-us" title="Contact Us"/>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="address-details">
                <h3>Questions, Comments? You tell us. We listen.</h3>
                <h5 className="fw-bold">Corporate office</h5>
                <ul className="list-unstyled">
                  <li><a href="tel:01678004434-59"><FontAwesomeIcon icon={faPhone} /> {" "} 01678004434-59</a></li>
                  <li><a href="mailto:nfo@aratechbd.com"><FontAwesomeIcon icon={faEnvelope} /> {" "} info@aratechbd.com</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLocationDot} /> {" "} Park Plaza (Level-4 ), House# 31, Road# 17, Banani C/A, Dhaka 1213, Bangladesh</a></li>
                </ul>
                <div className="mt-4">
                  <h4 className="fw-bold">Need Us? Call Us.</h4>
                  <h3 className="fw-bold">01678004434</h3>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <form action="">
                <div className="row">
                  <div className="col-10 my-1">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  </div>
                  <div className="col-10 my-1">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                  </div>
                  <div className="col-10 my-1">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  </div>
                  <div className="col-10 my-1">
                  <div className="form-floating">
                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      style={{height: "100px"}}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  </div>
                  <div className="col-12 my-1">
                    <button className='btn contact-btn'>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>



          <div className="row">
            <div className="col-md-12">
              <div className="store-address-heading">
                <h3>Store Address</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="branch text-center">
                <div className="branch-image">
                  <Image src={ImageLink.dhakaBranch} alt="dhakabranch" className="rounded"/>
                </div>
                <div className="branch-content mx-auto">
                  <h4>Dhaka Showroom</h4>
                  <p>43, Bangabondhu Stadium Super Market,(Ground Floor)
                    Dhaka-1000, Bangladesh.</p>
                </div>
                <div className="my-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7109460653396!2d90.40272521480065!3d23.793305384568235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711c001a6cd%3A0x5ca8bb8f8234838a!2sARA%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1664211023725!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="branch text-center">
                <div className="branch-image">
                  <Image src={ImageLink.chittagongBranch} alt="ChittagongBranch" className="rounded"/>
                </div>
                <div className="branch-content mx-auto">
                  <h4>Chittagong Showroom</h4>
                  <p>72 Shah Amanat City Corporation Market, Chattogram</p>
                </div>
                <div className="my-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.455490953557!2d91.83025321477183!3d22.336423785304824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275816f04c1f%3A0x7ce7d20b82f432c8!2sShah%20Amanat%20City%20Corporation%20Super%20Market!5e0!3m2!1sen!2sbd!4v1664211268599!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="container">
            <div className="row">
                <div className="brand-slider">
                <BrandSlider />
                </div>
            </div>
        </div>
          </div>
          <div className="text-center">
          <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7109460653396!2d90.40272521480065!3d23.793305384568235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711c001a6cd%3A0x5ca8bb8f8234838a!2sARA%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1664211023725!5m2!1sen!2sbd"
                    width={1300}
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
          </div>


        </div>
      </div>
    </>
  )
}

export default index