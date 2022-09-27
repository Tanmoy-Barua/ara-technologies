import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import "animate.css/animate.min.css";
import Head from 'next/head'
import { useEffect } from "react";
import Layout from './components/Layout'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/animate.css';



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();
  }, []);
  return (
    <>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
