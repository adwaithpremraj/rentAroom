import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



function Footer() {

  
  return (
   
    <>
     <div className="row p-5 " style={{color:'black',backgroundColor:'rgb(234, 249, 255)'}}>
                <div className="col-md-4 ">
                    <h3 style={{color:'#384f95',fontWeight:'550'}}><img className='mb-2 me-2' src="./src/assets/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418ca7aed3.3537227915242530686869.png" alt="img" height={'40px'} />Find My Hostel</h3>
                    <p className='mt-3'>      FindMyIndia is india's fastest growing affortablev "Hostels and PGs lsisting platform  that make it easier for you to find the best suited place for your budget and needs.
                    <br />
                    <br />
                     Ernakulam | Trivandrum | kozhikode | Thrissur | Malappuram |  Coimabatore | Madurai | Salem |</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                   
                
                    <Link className='text-dark' to={'/'}> <p className='mt-4'>Home</p></Link>
                    <Link className='text-dark' to={'/'}> <p> Contact Us</p></Link>
                    <Link className='text-dark' to={'/'}><p>About Us</p></Link>
                    
                    
                </div>
                <div className="col-md-2">
                    
                   
                        <p className='mt-4'>Privacy Policy</p>
                        <p>Refund Policy</p>
                        <p>Terms & condition</p>
                
                </div>
                <div className="col-md-3">
            
                    <div className=' mt-4'>
                    <div className='mb-4 p-2 text-light' style={{border:'1px solid transparent', backgroundColor:'rgb(45, 141, 173)', borderRadius:'50px', height:'40px'}}>
                    <FontAwesomeIcon icon={faEnvelope} className='ms-3' /> <span >Mail : contact@findmyhostel.in</span>
                     </div>

            <div className=' p-2 text-light' style={{border:'1px solid transparent', backgroundColor:'rgb(45, 141, 173)', borderRadius:'50px',  height:'40px'}}>
            <FontAwesomeIcon icon={faPhone} className='ms-3' /> <span className='p-2'>Phone : +91 999 000 8888</span>
            </div>
                    </div>
                    <div className='d-flex mt-4 fs-3 justify-content-evenly ' style={{color:'#384f95'}}>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faFacebook}  />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>

                </div>
            </div>
    </>
  )
}   

export default Footer;