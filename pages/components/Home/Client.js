import React from 'react'
import ClientBox from './ClientBox'
import {Images as ImageLink} from '../images'

const Client = () => {
  return (
    <div className="client">
    <div className="client-section">
        <div className="client-section-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>See our Clients</h3>
                        <p>ARATECH served the most IT enabling segments</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <ClientBox image={ImageLink.bdPolice}/>
                    <ClientBox image={ImageLink.bdnarmy}/>
                    <ClientBox image={ImageLink.bdnavy}/>
                    <ClientBox image={ImageLink.bdaif}/>
                    <ClientBox image={ImageLink.chittagongport}/>
                    <ClientBox image={ImageLink.tssl}/>

                    <ClientBox image={ImageLink.btcl}/>
                    <ClientBox image={ImageLink.ibbl}/>
                    <ClientBox image={ImageLink.bdbl}/>
                    <ClientBox image={ImageLink.brackb}/>
                    <ClientBox image={ImageLink.bdbank}/>
                    <ClientBox image={ImageLink.summit}/>

                    <ClientBox image={ImageLink.aamra}/>
                    <ClientBox image={ImageLink.amber}/>
                    <ClientBox image={ImageLink.bracnet}/>
                    <ClientBox image={ImageLink.brackngo}/>
                    <ClientBox image={ImageLink.gp}/>
                    <ClientBox image={ImageLink.link3}/>
                </div>
            </div>
        </div>
    </div>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    style={{fill: "#690202b0;"}}
                >
                    <path
                    className="elementor-shape-fill"
                    opacity="0.33"
                    d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
                    />
                    <path
                    className="elementor-shape-fill"
                    opacity="0.66"
                    d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
                    />
                    <path
                    className="elementor-shape-fill"
                    d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
                    />
                </svg>
                </div>
  )
}

export default Client