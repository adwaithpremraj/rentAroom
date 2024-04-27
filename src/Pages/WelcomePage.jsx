import React from 'react'
import './Landing.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


function WelcomePage() {



    return (
        <>
            <div className='landing '>


                <h2 className='heading' style={{ color: "white" }}>Find Hotels and PGs Which Suits Your Needs</h2>

                <h4 className='heading' style={{ color: "white" }}>Browse Our Website For Your Needs</h4>
                <br />
                <form >
                    <input id='forms' style={{ width: '450px' }} className='form-control align-items-center' type="text" placeholder='Search: Cities,State...' /><br />
                    <select id='forms1' className="form-select " >
                        <option selected>Select Gender</option>
                        <option value="">Men</option>
                        <option value="">Women</option>
                        <option value="">Others</option>
                    </select>
                    <button id='explore' className='btn'>Explore More <FontAwesomeIcon icon={faArrowRight} /></button>
                </form>

            </div>
        </>
    )
}

export default WelcomePage