import React from 'react'
import './Landing.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


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
    </>
    )
}

export default WelcomePage