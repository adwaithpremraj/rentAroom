import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



function Footer() {

  
  return (
    <div className="row p-5 bg-light">
        <div className="col-md-4">
        <span className="fs-3 text-dark "><img className='mb-2 me-2' src="./src/assets/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418ca7aed3.3537227915242530686869.png" alt="img" height={'40px'} />Find My Hostel</span>
          <p className='text-black mt-2'>
            FindMyIndia is india's fastest growing affortablev "Hostels and PGs lsisting platform"
            that make it easier for you to find the best suited place for your budget and needs.
            <br />
            <br />
            Ernakulam | Trivandrum | kozhikode | Thrissur | Malappuram |  Coimabatore | Madurai | Salem |
          </p>
        </div>

        <div className="col-md-4 text-center">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "black"}}>
            Contact Us
          </Link>
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            About Us
          </Link>
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Privacy Policy
          </Link>
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Refund Policy
          </Link>
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Terms & condition
          </Link>
        </div>

        <div className="col-md-3">
            <div className='mb-2' style={{border:'2px solid black', backgroundColor:'grey', borderRadius:'50px', height:'40px'}}>
            <FontAwesomeIcon icon={faEnvelope} className='ms-3' /> <span className='p-2'>Mail : contact@findmyhostel.in</span>
            </div>

            <div style={{border:'2px solid black', backgroundColor:'grey', borderRadius:'50px',  height:'40px'}}>
            <FontAwesomeIcon icon={faPhone} className='ms-3' /> <span className='p-2'>Phone : +91 999 000 8888</span>
            </div>


          <div className="d-flex justify-content-around mt-3 pt-2 text-dark">

            <h5>Find Us On:</h5>

          <FontAwesomeIcon icon={faFacebook}   size='xl' />  
          <FontAwesomeIcon icon={faInstagram}  size='xl'/>      
          <FontAwesomeIcon icon={faLinkedin}   size='xl' /> 
          <FontAwesomeIcon icon={faWhatsapp} size='xl' />
          
          </div>

        </div>
    </div>
  )
}   

export default Footer;