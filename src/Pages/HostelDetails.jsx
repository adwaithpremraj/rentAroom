import React from 'react'
import './HostelDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faCouch, faDoorClosed, faLocationDot, faMotorcycle, faPhone, faShower, faSink, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useState , useEffect } from 'react'
import { payamount } from '../services/allApi';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';


function HostelDetails() {



  const location = useLocation();
  const { selectedhostel } = location.state || {};


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const pay_amount = 200;
  const show_amount  = pay_amount *100;
  const payHandle = async () => {
    try {
      const response = await payamount(show_amount);
      const order_id = response.id;

      const options = {
        key: import.meta.env.VITE_KEY_ID, 
        amount: show_amount ,
        currency: "INR",
        name: "SN Women's Hostel",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order_id, 
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          alert("Payment Successfull")
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (err) {
      console.error("Error creating Razorpay order:", err);
    }
  }
  


  return (

        
        <div>
          <Header/>

    
            <div className="row m-5 " style={{height:'70vh'}}>
              <div className="col-1"></div>
                <div className="col-5 ">    
                        <img style={{width:'100%', height:'70vh'}}
                        src={selectedhostel.imageUrl} alt="ssss" />
                </div>
                <div className="col-5 ">
                    <div className="row " style={{height:'35vh'}}>
                    <img style={{width:'100%', height:'33vh'}}
                        src={selectedhostel.imageUrl2} alt="ssss" />
                
                    </div>
                    <div className="row " style={{height:'35vh'}}>
                    <img style={{width:'100%', height:'35vh'}}
                        src={selectedhostel.imageUrl3} alt="ssss" />
                  
                    </div>
                    <div className="col-1"></div>
    
    
                </div>
            </div>
    
    
            { selectedhostel &&     <div className='details d-flex algn-items-center justify-content-center m-4'>

        
                <div className='col-6 hosteldetails ps-4'>
                <div className="hostel-body  px-3" style={{backgroundColor:'rgb(234, 249, 255)',border:'1px soild transparent',borderRadius:'15px'}}>
                            <h2 style={{color:'rgb(45, 141, 173)'}} className='mt-2'>{selectedhostel.hostelName}</h2>
                            <p>{selectedhostel.location}</p>
                            <p id='box'>{selectedhostel.category}</p>
                            <h5 style={{color:'rgb(45, 141, 173)'}}>Teanut Preffered</h5>
                            <p>Students and Working Professionals</p>
                </div>
    
                <div class="hostel-body mt-3 px-3" style={{backgroundColor:'rgb(234, 249, 255)',border:'1px soild transparent',borderRadius:'15px'}}>
                            <h4 style={{color:'rgb(45, 141, 173)'}} className='mt-2'>Facilities</h4>
                            <p>Provided common by this hostel</p>
                            <div className='d-flex row'>
                            <p className='col-3'><FontAwesomeIcon icon={faMotorcycle} style={{color:'rgb(45, 141, 173)'}}/>  Parking-2 wheeler</p>
                            <p className='col-3' ><FontAwesomeIcon icon={faShower} style={{color:'rgb(45, 141, 173)'}} />Attached washroom</p>
                            <p className='col-3' ><FontAwesomeIcon icon={faDoorClosed} style={{color:'rgb(45, 141, 173)'}} /> Locker facility</p>
                            <p className='col-3' ><FontAwesomeIcon icon={faWifi} style={{color:'rgb(45, 141, 173)'}} /> Free Wifi</p>
                            
                            </div>

                            <div className='d-flex row'>
                            <p className='col-3' ><FontAwesomeIcon icon={faCouch} style={{color:'rgb(45, 141, 173)'}} /> Common Area</p> 
                            <p className='col-3'><FontAwesomeIcon icon={faBowlFood} style={{color:'rgb(45, 141, 173)'}} /> Dining Area</p>
                            <p className='col-3' ><FontAwesomeIcon icon={faSink} style={{color:'rgb(45, 141, 173)'}} /> Cleaning staff</p>
                           
                            </div>
                </div>

                <div class="hostel-body mt-3 px-3"  style={{backgroundColor:'rgb(234, 249, 255)',border:'1px soild transparent',borderRadius:'15px'}}>
                    <h5 style={{color:'rgb(45, 141, 173)'}} className='mt-2'>Policies/Rules</h5>
                    <p>Mandatory hostel rules to be followed</p>
                    
                      <div >
                        <p className='d-flex justify-content-between'>Gate Close Time <span >N/A</span></p><hr />
                        <p className='d-flex justify-content-between'>Visitors Allowed <span >Yes</span></p><hr />
                        <p className='d-flex justify-content-between'>Fulltime Warden <span >Yes</span></p><hr />
                        <p className='d-flex justify-content-between'>Notice Period <span >No</span></p><hr />
                        <p className='d-flex justify-content-between'>Restrictions <span >N/A</span></p><hr />
                      </div>
                </div>
            
       </div>

       <div className="col-1"></div>
    
                <div className='col-5 hosteldetails'>

                <div class="hostel-body px-3" style={{backgroundColor:'rgb(234, 249, 255)',border:'1px soild transparent',borderRadius:'15px'}}>
                            <h1 style={{color:'rgb(45, 141, 173)'}}>RENT</h1>
                            <button className="btn btn-primary" onClick={payHandle}>PAY</button>
                            <p><b>₹ {selectedhostel.rent}</b></p>
                            <hr className='m-2'/>
                            <h3 style={{color:'rgb(45, 141, 173)'}}>Additional fee</h3>
                            <p style={{fontSize:'11px'}}>Security Deposit - ₹ 1000(500- Admission fee + caution Deposit) </p>
                            <p style={{fontSize:'11px'}}>Food - ₹ 2500 </p>
                </div>

                <div class="hostel-body mt-3 px-3" style={{backgroundColor:'rgb(234, 249, 255)',border:'1px soild transparent',borderRadius:'15px'}}>
                    <h4 style={{color:'rgb(45, 141, 173)'}}>Location/Contacts</h4>
                    <iframe style={{height:'400px', width:'100%', borderRadius:'20px',marginTop:'20px', marginLeft:'10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.07544917078!2d76.29152172484262!3d10.02639472568965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714483323610!5m2!1sen!2sin"></iframe>
    
                    <div className='mt-3 mb-4 '>
                    <Button style={{borderRadius:'20px', marginLeft:'50px',backgroundColor:"rgb(45, 141, 173)",border:'1px soild transparent'}} className='mb-3'><FontAwesomeIcon icon={faPhone} /> View Contact</Button>                     
                    <Button style={{borderRadius:'20px', marginLeft:'50px',backgroundColor:"rgb(45, 141, 173)",border:'1px soild transparent'}}><FontAwesomeIcon icon={faLocationDot} /> Navigate to location</Button>

                    </div>
                </div>

    
                </div>
           </div>
}
        </div>

    
  )
}

export default HostelDetails


