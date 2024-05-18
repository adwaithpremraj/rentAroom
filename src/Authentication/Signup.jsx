
import React, { useState } from 'react'
import './sigin.css'
import email from '../assets/email.webp'
import lock from '../assets/lock1.webp'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { uploadUserApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Sigin() {

    const navigate= useNavigate()

    const  [user,setuser] = useState({
        id:"",
        createPassword:"",
        confirmPassword:""
    })

    console.log(user);

    const handleupload = async()=>{
        const {id, createPassword, confirmPassword} = user
        console.log(id, createPassword, confirmPassword);
        if(!id || !createPassword || !confirmPassword){
            toast.info('please fill the form completely')
        }else{
            const response = await uploadUserApi(user)
            console.log(response);
            if (response.status>=200 && response.status<300){
                navigate('/login')
            }else{
                alert('something went wrong')
            }
        }
    
    }

    return (
        <>
            <div className="container my-5 " style={{ borderRadius: "1rem", backgroundColor: "rgb(234, 249, 255)" }}>

                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"
                            alt=""
                            className="img-fluid"
                        />

                    </div>
                    <div className="col-lg-6">
                        <div className='header'>
                            <div style={{ fontWeight: 'bold', fontSize: '130%' }} className='text-dark'>Sign Up</div>
                            <div className='underline'></div>
                        </div>


                        <div className="inputs m-2 justify-content-center d-flex flex-column align-items-center" >

                           

                                <form >
                                    <div className="input d-flex align-items-center   ">
                                        <img style={{ borderRadius: '20rem', height: '25px', width: '25px', marginRight: '1rem' }} src={email} alt="" />
                                        <input onChange={(e)=>setuser({...user,id:e.target.value})} className='form-control border-info' type="text" placeholder='enter your emailid' style={{ fontWeight: 'revert-layer', width: '290px' }} />
    
                                    </div>
    
    
                                    <div className="input d-flex align-items-center ">
                                        <img style={{ borderRadius: '20rem', height: '25px', width: '25px', marginRight: '1rem' }} src={lock} alt="" />
                                        <input onChange={(e)=>setuser({...user,createPassword:e.target.value})} className='form-control border-info  ' type="password" placeholder='create password' style={{ fontWeight: 'inherit', width: '290px' }} />
                                    </div>
    
    
                                    <div className="input d-flex align-items-center ">
                                        <img style={{ borderRadius: '20rem', height: '25px', width: '25px', marginRight: '1rem' }} src={lock} alt="" />
                                        <input onChange={(e)=>setuser({...user,confirmPassword:e.target.value})} className='form-control border-info' type="password" placeholder='confirm password' style={{ fontWeight: 'inherit', width: '290px' }} />
                                    </div>
    
    
                                    <div className='justify-content-center d-flex  mt-3'>
                                        <Button onClick={handleupload} style={{ width: '284px', marginLeft: "2rem", backgroundColor: 'rgb(45, 141, 173)' }} variant="primary">Sign Up</Button>{' '}
    
                                    </div>
                                </form>
                            


                        </div>




                        <div style={{ fontWeight: '', fontSize: '90%', marginTop: '2rem' }} className="d-flex justfy-content-center align-items-center flex-column"><p>Alredy have a account? <span style={{ color: 'blue' }} >
                            <Link to="/Login">login</Link>
                        </span></p></div>


                        <div className='justify-content-center d-flex flex-column align-items-center'>
                            <h6 style={{ marginTop: '2px' }}>or</h6>

                            <div className='justify-content-center d-flex  mt-2'>
                                <Button style={{ width: '284px', marginLeft: "3rem", backgroundColor: 'rgb(45, 141, 173)' }} variant="primary"><FontAwesomeIcon icon={faFacebook} className='me-3' /> Login with facebook</Button>{' '}
                            </div>

                            <div className='justify-content-center d-flex  mt-4 mb-5'>
                                <Button style={{ width: '284px', marginLeft: "3rem" }} variant="outline-secondary"><FontAwesomeIcon icon={faGoogle} className='me-4' />Login with google</Button>{' '}
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <ToastContainer position='top-center' theme='colored' autoClose={2000} />

        </>
    )
}

export default Sigin