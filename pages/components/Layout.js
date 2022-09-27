import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import {Images as ImageLink} from '../components/images'
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




const Layout = ({children}) => {
    const {asPath} = useRouter();
    const date = new Date().getFullYear();
  return (
    <> 
    <Head>
      <link rel="shortcut icon" href={ImageLink.TitleIcon.src} />
    </Head>
    <div>
    {/* top header */}
    <div className="top-head bg-color-primary d-none d-md-block">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <p className="text-uppercase text-white text-center text-lg-start">ISO 9001:2015 CERTIFIED COMPANY</p>
                </div>
                <div className="col-12 col-md-6 ms-auto">
                    <div className="d-flex justify-content-end">    
                    <p className="telephone text-white">Hotline: 01678004434-59</p>
                    <ul className="list-unstyled d-flex">
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* navbar section */}
    <div>
       <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
        <Link href="/">  
            <a className="navbar-brand">
                <Image src={ImageLink.logo} alt="logo" />
            </a>
        </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link aria-current="page" href="/">
            <a className={asPath === '/' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}><FontAwesomeIcon icon={faHouse} /> Home</a> 
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/company">
              <a className={asPath === '/company' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}>Company</a> 
            </Link>
          </li> */}
          <li className="nav-item dropdown">
                <a
                className={asPath === '/company' ? "nav-link active text-uppercase dropdown-toggle" : "nav-link text-uppercase dropdown-toggle"}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Company
                </a>
                <ul className="dropdown-menu">
                <li>
                <Link aria-current="page" href="/about">
                    <a className="dropdown-item">
                    About Us
                    </a>
                  </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                    Message to CEO
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                <Link aria-current="page" href="/our-team">
                    <a className="dropdown-item">
                    Our Team
                    </a>
                  </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                <Link aria-current="page" href="/payment-methods">
                    <a className="dropdown-item">
                    Pay Now
                    </a>
                  </Link>
                </li>
                </ul>
            </li>
          <li className="nav-item">
            <Link className="nav-link" href="/solutions">
                <a className={asPath === '/solutions' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}>Solutions</a> 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/products">
                <a className={asPath === '/products' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}>Products</a> 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/gallery">
                <a className={asPath === '/gallery' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}>Gallery</a> 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact-us">
                <a className={asPath === '/contactus' ? "nav-link active text-uppercase" : "nav-link text-uppercase"}>Contact Us</a> 
            </Link>
          </li>
        </ul>
        <Link href="/products">
            <a className="btn-shop-now">Shop Now</a>
        </Link>
        {/* <Link href="/my-account">
            <a className="account"><FontAwesomeIcon icon={faUser} /> My Account</a>
        </Link> */}
      </div>
    </div>
  </nav>

       </div>
    </div>
        {children}
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

export default Layout