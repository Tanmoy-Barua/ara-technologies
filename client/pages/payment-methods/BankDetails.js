import React from 'react'
import Image from 'next/image'


const BankDetails = (props) => {
  return (
    <div className="col-md-3 text-center">
        <div className="shadow my-2 p-2 rounded">
        <div className="back-image">
            <Image src={props.image} alt={props.alt} />
        </div>
        <h3 className="text-uppercase fs-4">{props.accountName}</h3>
        <h4 className="text-uppercase fs-5">{props.bankName}</h4>
        <h5 className="text-uppercase">{props.accountNumber}</h5>
        <h6 className="text-uppercase">{props.BranchName}</h6>
        </div>
    </div>
  )
}

export default BankDetails