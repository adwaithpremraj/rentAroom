import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HostelDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faCouch, faDoorClosed, faLocationDot, faMotorcycle, faPhone, faShower, faSink, faWifi } from '@fortawesome/free-solid-svg-icons';

function HostelDetails() {
  return (
    
    <div>

        {/* <Carousel id='caur' >
          <Carousel.Item>
            <img style={{width:'100%', height:'500px'}} src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="ssss" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{width:'100%', height:'500px'}} src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{width:'100%', height:'500px'}} src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="" />
          </Carousel.Item>
        </Carousel> */}

        <div className="row " style={{height:'70vh'}}>
            <div className="col-6 ">    
                    <img style={{width:'100%', height:'70vh',backgroundSize: "contain"}}
                    src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="ssss" />
            </div>
            <div className="col-6 ">
                <div className="row" style={{height:'35vh'}}>
                <img style={{width:'100%', height:'35vh',backgroundSize: "contain"}}
                    src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="ssss" />
            
                </div>
                <div className="row " style={{height:'35vh'}}>
                <img style={{width:'100%', height:'35vh',backgroundSize: "contain"}}
                    src="https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg" alt="ssss" />
              
                </div>


            </div>
        </div>



        <div>
            <div class="hostel-container">
                <div class="hostel-card">
                    <div class="hostel-body">
                        <h1>SN Women's Hostel</h1>
                        <p>Tapasya Home, Penevazhi, Near Nice Chemicals C/O Edappally</p>
                        <p id='box'>WOMEN'S HOSTEL</p>
                        <h5>Teanut Preffered</h5>
                        <p>Students and Working Professionals</p>
                    </div>
                </div>

                <div class="hostel-card">
                    <div class="hostel-body">
                        <h1>RENT</h1>
                        <p><b>₹ 2500</b></p>
                        <hr />
                        <h3>Additional fee</h3>
                        <p style={{fontSize:'11px'}}>Security Deposit - ₹ 1000(500- Admission fee + caution Deposit) </p>
                        <p style={{fontSize:'11px'}}>Food - ₹ 2500 </p>
                    </div>
                </div>

                <div class="hostel-card">
                    <div class="hostel-body">
                        <h4>Facilities</h4>
                        <p>Provided common by this hostel</p>
                        <div className='d-flex'>
                        <p><FontAwesomeIcon icon={faMotorcycle}/>  Parking-2-wheeler</p>
                        <p className='ms-5'><FontAwesomeIcon icon={faShower} /> Attached bathroom</p>
                        <p className='ms-5'><FontAwesomeIcon icon={faDoorClosed} /> Locker facility</p>
                        <p className='ms-5'><FontAwesomeIcon icon={faWifi} /> Free Wifi</p>
                        <p className='ms-5'><FontAwesomeIcon icon={faCouch} /> Common Area</p>
                    </div>


                    <div className='d-flex'>
                        <p><FontAwesomeIcon icon={faBowlFood} /> Dining Area</p>
                        <p className='ms-5'><FontAwesomeIcon icon={faSink} /> Cleaning staff</p>
                    </div>
            </div>
        </div>
        


        <div class="hostel-card">
            <div class="hostel-body">
                <h4>Location/Contacts</h4>
                <iframe style={{height:'400px', width:'400px', borderRadius:'20px',marginTop:'20px', marginLeft:'10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.07544917078!2d76.29152172484262!3d10.02639472568965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714483323610!5m2!1sen!2sin"></iframe>

                <div className='mt-5 ms-4'>
                  <button style={{borderRadius:'20px', width:'180px', height:'50px'}}> <FontAwesomeIcon icon={faPhone} /> View Contact</button>
                  <button style={{borderRadius:'20px',width:'180px', marginLeft:'50px',height:'50px'}}> <FontAwesomeIcon icon={faLocationDot} /> Navigate to location</button>
                </div>
            </div>
        </div>

        <div class="hostel-card">
            <div class="hostel-body">
                <h5>Policies/Rules</h5>
                <p>Mandatory hostel rules to be followed</p>
                
                  <div>
                    <p>Gate Close Time <span style={{marginLeft:'800px'}}>N/A</span></p><hr />
                    <p>Visitors Allowed <span style={{marginLeft:'800px'}}>Yes</span></p><hr />
                    <p>Fulltime Warden <span style={{marginLeft:'798px'}}>Yes</span></p><hr />
                    <p>Notice Period <span style={{marginLeft:'820px'}}>No</span></p><hr />
                    <p>Restrictions <span style={{marginLeft:'835px'}}>N/A</span></p><hr />
                  </div>
            </div>
        </div>
        
    </div>
            
        </div>
        
    </div>
    
  )
}

export default HostelDetails