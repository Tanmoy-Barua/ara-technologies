import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPenToSquare, faUserTie, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faBattleNet } from '@fortawesome/free-brands-svg-icons';
import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const CorporateCustomerItem = (props) => {
  return (
        <div className="col-md-3">
            <div className="support-item">
                <FontAwesomeIcon icon={props.icon}/>
            <h5>{props.title}</h5>
        </div>
    </div>
  )
}

export default CorporateCustomerItem