import Head from 'next/head'
import Image from 'next/image'
import {Images as ImageLink} from './components/images'

// import components
import Slider from './components/Home/Slider'
import OurProduct from './components/Home/OurProduct'
import QualityServices from './components/Home/QualityServices'



export default function Home() {
  return (
    <>
     <Head>
            <title>ARA Technologies Limited - Fiber optic Cable provider</title>
        </Head>
      
      {/* slider */}
      <Slider/>
     

  {/* Our Products */}
    <OurProduct/>
    {/* Quality Services */}
    <QualityServices />
    
    </>
  )
}
