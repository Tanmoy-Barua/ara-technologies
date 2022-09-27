import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import ImageLink from '../components/images'
import {useRouter} from 'next/router'
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
    const {asPath} = useRouter();
    const date = new Date().getFullYear();
  return (
    <> 
      <footer className="mt-5">
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-company">
                    <Image src={ImageLink.logobig} alt="logo" />
                    <p>ARA Technologies Limited is the first and only professional Hi-tech optoelectronics manufacturer & distributor, related to the R&D manufacturing and distribution of telecommunication LAN, WAN, CATV & optical fiber communication products in Bangladesh</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-details">
                  <h3>Contact Us</h3>
                  <ul className="list-unstyled">
                    <li className="my-3"><a href="tel:01678004434-59">Cell: 01678004434-59</a></li>
                    <li className="my-3"><a href="mailto:info@aratechbd.com">E-mail: info@aratechbd.com</a></li>
                    <li className="my-3"><a href="#"><span className="text-decoration-underline">Corporate office:</span><br/>Park Plaza (Level-4 ), House# 31, Road# 17, Banani C/A, Dhaka 1213, Bangladesh</a></li>
                  </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="showroom-whatsapp">
                  <a href="https://api.whatsapp.com/send?phone=8801678004453&text=Hi%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website." className="whatsapp"> <span><FontAwesomeIcon icon={faWhatsapp} /></span> Chat on Whatsapp</a>
                  <ul className="list-unstyled">
                    <li className="my-3"><a href="#"><span className="text-decoration-underline">Dhaka Showroom:</span><br/>43 Bangabandhu Stadium Super Market (Ground Floor), Dhaka-1000</a></li>
                    <li className="my-3"><a href="#"><span className="text-decoration-underline">Chattogram Showroom:</span><br/>72 Shah Amanat City Corporation Market, Chattogram</a></li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <p className="text-white text-center text-lg-start">Copyright © {date} ARA Technologies Limited | Since 2005</p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="text-white text-center text-lg-end">Design & Developed by MakeupCoders</p>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer