import React from 'react'
import Image from 'next/image'

const ClientBox = (props) => {
  return (
        <div className="col-md-2">
            <div className="clientbox">
            <Image src={props.image}  alt={props.image}/>
            </div>
        </div>
  )
}

export default ClientBox