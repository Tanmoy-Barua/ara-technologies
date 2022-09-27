import React from 'react'
import Image from 'next/image'

const ads = (props) => {
  return (
    <div className="container mt-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-10">
            <div className="text-center">
                <Image src={props.image} alt={props.image} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ads