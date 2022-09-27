import React from 'react'
import Link from 'next/link'
import {Images as ImageLink} from '../components/images'
import CommonBanner from '../components/CommonBanner'
import BankDetails from './BankDetails'

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.paymentMethodBanner} alt="OurPaymentMethods" title="Our Payment Methods"/>
      <div className="container">
        <div className="row my-4">
            <div className="col-md-12 text-center">
            <Link href="#">
                <a className="btn-shop-now">Pay Online</a>
            </Link>
            </div>
        </div>
        <div className="row">
            <BankDetails image={ImageLink.megnaBank} alt="megnabank" accountName="ARA TECHNOLOGIES LTD." bankName="MEGHNA BANK LTD." accountNumber="A/C : 111111100000189" BranchName="DHANMONDI BRANCH"/>
            <BankDetails image={ImageLink.ibblBank} alt="ibbl" accountName="ARA TECHNOLOGIES LTD." bankName="ISLAMI BANK" accountNumber="A/C : 20503910100030508" BranchName="BANANI BRANCH"/>
            <BankDetails image={ImageLink.ebl} alt="ebl" accountName="ARA TECHNOLOGIES LTD." bankName="EASTERN BANK LTD." accountNumber="A/C : 1161070209203" BranchName="BANANI BRANCH"/>
            <BankDetails image={ImageLink.jamuna} alt="jamunabank" accountName="ARA TECHNOLOGIES LTD." bankName="JAMUNA BANK LTD." accountNumber="A/C : 00420210004074" BranchName="MIRPUR BRANCH"/>
            <BankDetails image={ImageLink.brackBank} alt="jamunabank" accountName="ARA TECHNOLOGIES LTD." bankName="BRAC BANK LTD." accountNumber="A/C : 1507203117413001" BranchName="BANANI BRANCH"/>
            <BankDetails image={ImageLink.dbdl} alt="jamunabank" accountName="ARA TECHNOLOGIES LTD." bankName="DBBL" accountNumber="A/C :1031100046401." BranchName="Banani Branch"/>
            <BankDetails image={ImageLink.ncc} alt="jamunabank" accountName="ARA TECHNOLOGIES LTD." bankName="NCC BANK LTD." accountNumber="A/C : 0330210019612" BranchName="UTTARA BRANCH"/>
            <BankDetails image={ImageLink.bkash} alt="bkash" bankName="Agent: 01678004442" accountNumber="Personal: 01678004434"/>
        </div>
      </div>
    </>
  )
}

export default index