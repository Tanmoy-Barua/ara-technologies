import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import ImageLink from './images'
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




const Header = () => {
  const asPath = useRouter();
  return (
    <> 
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
                <Image src={ImageLink.logo} alt="logo" className="img-fluid" />
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
    </>
  )
}

export default Header