import React from 'react'
import './Landing.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faBriefcase, faLocationDot, faSquareParking, faWifi} from '@fortawesome/free-solid-svg-icons';



function WelcomePage() {



    return (
        <>
        <div className='landing'>
 

            
                    <h3 className='heading' style={{ color: "#384f95",fontWeight:'550',fontSize:'40px' }}>Find Hotels and PGs Which Suits Your Needs</h3>
        
                    <h4 className='heading' style={{ color: "#384f95" }}>Browse Our Website For Your Needs</h4>
                    <br />
                 
        
                    <form action="" className='w-50  d-flex align-items-center justify-content-center mx-auto' >
                        <input type="text" className='form-control me-3 p-2'  placeholder='Search: Cities,State...' />
                        <select name="" id=""  className="form-select p-2 ">
                        <option selected>Select Gender</option>
                            <option value="">Men</option>
                            <option value="">Women</option>
                            <option value="">Others</option>
                        </select>
                        <button className='btn btn-light  ms-3 d-flex' style={{ color: "#384f95"}}>Explore<FontAwesomeIcon icon={faArrowRight} className='mt-1 ms-2' /> </button>
                    </form>

        </div>

        <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 ">
                     <h1>About Us</h1>
                     <p style={{fontSize:'20px'}}>Welcome to RentARoom! Located in the heart of Kochi, we offer a cozy and affordable stay for travelers. Enjoy comfortable rooms, modern amenities, and a friendly atmosphere. Our dedicated staff is here to make your visit memorable. Join us for a unique travel experience and connect with fellow adventurers from around the world.</p>
            </div>
            <div className="col-md-6">
                <img src="https://i.pinimg.com/564x/20/31/d7/2031d744b9759a661a0eafb9ca77ce83.jpg" alt=""  className='border rounded' style={{border:'1px solid transparent',borderRadius:'20px'}}/>
            </div>
        </div>

        <div className="row mt-5 mb-5 p-5" style={{backgroundColor:'rgb(234, 249, 255)'}}>
        <div className="col-md-1"></div>
            <div className="col-md-5">
                <img src="https://html.merku.love/hosteller/img/index/about.webp" alt="" height={'400px'} width={'600px'}/>
            </div>
            <div className="col-md-5">
                 <h2>We have everything you need</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque laboriosam amet accusamus, ex enim esse deleniti nisi repellendus voluptas blanditiis quidem? In nihil eaque aspernatur enim omnis obcaecati molestias.</p>
                  <div className="row mt-5">
                  
                    <div className="col-md-6">
                   <p className='fs-5'> <FontAwesomeIcon icon={faWifi} className='me-3'/>Free available high speed WiFi</p>
                   <p className='fs-5'> <FontAwesomeIcon icon={faLocationDot} className='me-3' />Сonvenient location in the center</p>
                    </div>
                    <div className="col-md-6">
                   <p className='fs-5'> <FontAwesomeIcon icon={faBriefcase} className='me-3' />Free storage of luggage of any size</p>
                    <p className='fs-5'><FontAwesomeIcon icon={faSquareParking} className='me-3'/>Parking place allocated to you</p>
                    </div>

                    <button className='btn btn-primary mx-auto w-25'>Explore More</button>
                  </div>
            
            </div>
            <div className="col-md-1"></div>
        </div>

       

       <div className="row mb-5">
        <div className="col-md-1"></div>
        <div className="col-md-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.07544917078!2d76.29152172484262!3d10.02639472568965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716009688202!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-5">
           <input type="text" placeholder='  Your Name' className='w-75 mb-4'/><br /> 
           <input type="text" placeholder='  Your Email' className='w-75 mb-4'/><br />
           <input type="text" placeholder='  Subject' className='w-75 mb-4' /><br />
           <textarea name="" id="" cols={'20'} rows={'8'} placeholder='  Message' className='w-75 mb-4'></textarea><br />
           <button className='btn btn-primary'>Send Message</button>
        </div>
        <div className="col-md-1"></div>
       </div>
    </>
    )
}

export default WelcomePage