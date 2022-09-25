import Head from 'next/head'
import Image from 'next/image'
import {Images as ImageLink} from './components/images'
// toast add
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Offline, Online } from "react-detect-offline";

// import components
import Slider from './components/Home/Slider'
import OurProduct from './components/Home/OurProduct'
import QualityServices from './components/Home/QualityServices'
import Ads from './components/Home/ads'
import ServiceProcess from './components/Home/ServiceProcess'
import BrandSlider from './components/Home/BrandSlider'
import AboutCeo from './components/Home/AboutCeo'
import CorporateCustomer from './components/Home/CorporateCustomer'
import Client from './components/Home/Client'



export default function Home() {
  
  // const notify = () => toast.error(<Online>Only shown when you're online</Online>
  // <Offline>Only shown offline (surprise!)</Offline>, {
  //   position: "bottom-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   });
  // console.log(Offline===true?"true":"false", Online==true?"true":"false");
  
  return (
    <div>
     <Head>
            <title>ARA Technologies Limited - Fiber optic Cable provider</title>
        </Head>
      
      {/* slider */}
      <Slider/>
     

  {/* Our Products */}
    <OurProduct/>
    {/* Quality Services */}
    <QualityServices />
    {/* ads */}
    <Ads image={ImageLink.ads}/>
    {/* Quality services processes */}
    <ServiceProcess />
    {/* Brand Slider */}
    <BrandSlider />
    {/* About CEO */}
    <AboutCeo />
    {/* corporatecustomer */}
    <CorporateCustomer />
    {/* Clients */}
    <Client />

    {/* offlina online message */}
    {/* <div>
        <button onLoad={notify}>Notify!</button>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div> */}
    <div>

  </div>

    </div>
  )
}
