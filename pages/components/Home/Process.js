import React from 'react'
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Process = (props) => {
  return (
    <div className="col-15-percent">
        <div className="process-item shadow text-center ps-2 pe-2 py-4">
            <div className="icon mb-1">
            <FontAwesomeIcon icon={props.icon} />
            </div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Process