import React from 'react'
import {Images as ImageLink} from '../components/images'
import CommonBanner from '../components/CommonBanner'

const index = () => {
  return (
    <>
      <CommonBanner image={ImageLink.galleryBanner} alt="OurMemories" title="Our Memories"/>
    </>
  )
}

export default index