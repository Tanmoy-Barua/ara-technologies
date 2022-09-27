import React from 'react'
import Link from 'next/link'
import SupportItem from './CorporateCustomerItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPenToSquare, faUserTie, faMoneyCheckDollar, faTruckFast, faHeadset, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { faBattleNet } from '@fortawesome/free-brands-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const CorporateCustomer = () => {
  return (
    <div className="corporate-customer-section">
        <div className="corporate-customer-heading">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12 text-center heading">
                        <FontAwesomeIcon icon={faUserTie}/>
                        <h4>Become Our Corporate Customer</h4>
                    </div>
                </div>
                <div className="row">
                    <SupportItem icon={faMoneyCheckDollar} title="Best Corporate Prices"/>
                    <SupportItem icon={faTruckFast} title="Fast Delivery"/>
                    <SupportItem icon={faHeadset} title="Instant Support"/>
                    <SupportItem icon={faHandPointer} title="One Stop Solution"/>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="text-center">
                            <a href="mailto:sales7@aratechbd.com" className="text-dark fs-4 fw-bold">sales7@aratechbd.com</a>
                            <div className="my-4">
                    <Link href="/contact-us">
                        <a className="text-uppercase btn-find-more">Find Out More</a>
                    </Link>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CorporateCustomer