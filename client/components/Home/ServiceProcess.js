import React from 'react'
import Process from './Process'
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPenToSquare, faGavel, faHandshake, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faThinkPeaks
} from '@fortawesome/free-brands-svg-icons';

const ServiceProcess = () => {
  return (
    <div className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="quality-service-heading text-center">
                        <h5>HOW WE WORK</h5>
                        <h3>Our Service Process</h3>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <Process title="Requirements" content="First we understand the customer requirement." icon={faPenToSquare} />
                <Process title="Design" content="After that we design a plan and starting work on that." icon={faThinkPeaks}/>
                <Process title="Solution" content="After the design we work to find the solution." icon={faGavel}/>
                <Process title="Handover" content="Finally, We deliver the solution to the clients" icon={faHandshake}/>
                <Process title="After Sales Support" content="We are ready to support you with any issues." icon={faHandshakeAngle}/>
            </div>
        </div>
    </div>
  )
}

export default ServiceProcess