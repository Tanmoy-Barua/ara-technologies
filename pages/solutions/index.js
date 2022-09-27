import React from 'react'
import {Images as ImageLink} from '../components/images'
import CommonBanner from '../components/CommonBanner'

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.solutionBanner} alt="SeeWhatweoffer" title="See What we offer"/>
    </>
  )
}

export default index