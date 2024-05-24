import React, { useState } from "react";
import email from "../assets/email.webp";
import lock from "../assets/lock1.webp";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../context/AuthContexts'




function Login() {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');  
  // const [islogin, setIslogin] = useState(false);  
  const { login } = useAuth();


  const usenavigate = useNavigate();

  const ProceedLogin = (e) =>{
    e.preventDefault();
    if (validate()){
      //implementation
      //console.log('proceed');
      fetch("http://localhost:4001/Users/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        //console.log(resp);
        if(Object.keys(resp).length===0){
          toast.info('Please enter valid username');
        }else{
          if(resp.confirmPassword === password){
            login();
            usenavigate('/home')
            toast.success('Succesfull');
          }else{
            toast.info('please enter valid credentials');
          }
        }
      }).catch((err)=>{
        alert('login failed');
      });
    }
  }
  const validate=()=>{
    let result = true;
    if(username ==='' || username ===null){
      result=false;
      toast.info('please enter username')
    }
    if(password ==='' || password ===null){
      result=false;
      toast.info('please enter password')
    }
    return result;
  }
  

  return (
  <>
      <div className="container my-5 " style={{borderRadius: "1rem", backgroundColor:"rgb(234, 249, 255)" }}>
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"
              alt=""
              className="img-fluid"
            />
          </div>
  
  
          <div className="col-lg-6">
            <div className="header">
              <div style={{ fontWeight: "bold", fontSize: "130%" ,color: "rgb(45, 141, 173)"}} className="fs-3">
                Login
              </div>
              <div className="underline"></div>
            </div>
  
  
            <form onSubmit={ProceedLogin}>
              <div className="inputs m-2 justify-content-center d-flex flex-column align-items-center">
                <div className="input d-flex align-items-center">
                  <img
                    style={{
                      borderRadius: "20rem",
                      height: "25px",
                      width: "25px",
                      marginRight: "1rem",
                    }}
                    src={email}
                    alt=""
                  />
                  <input value={username} onChange={e=>usernameupdate(e.target.value)}
                    className="form-control border-info"
                    type="text"
                    placeholder="Enter your email"
                    style={{ fontWeight: 'inherit', width: '290px' }}
                  />
                </div>
    
    
                <div className="input d-flex align-items-center">
                  <img
                    style={{
                      borderRadius: "20rem",
                      height: "25px",
                      width: "25px",
                      marginRight: "1rem",
                    }}
                    src={lock}
                    alt=""
                  />
                  <input value={password} onChange={e=>passwordupdate(e.target.value)}
                    className="form-control border-info"
                    type="password"
                    placeholder="Password"
                    style={{ fontWeight: 'inherit', width: '290px' }}
                  />
                </div>
              </div>
    
    
    
              <div className="d-flex justfy-content-center align-items-center flex-column mt-1">
                <h6 style={{ color: "blue" }}>Forgot password?</h6>
              </div>
    
              <div className="justify-content-center d-flex mt-2">
                  <Button type="submit" 
                    style={{ width: '284px', marginLeft: "3rem", backgroundColor: 'rgb(45, 141, 173)' }}
                    variant="primary"
                  >
                    Login
                  </Button>
                
              </div>
            </form>
  
  
            <div className="d-flex justfy-content-center align-items-center flex-column mt-2">
              <p>
                Don't have an account?{" "}
                <Link to="/Signup" style={{ color: "blue" }}>
                  Signup
                </Link>
              </p>
            </div>
  
  
            <div className="justify-content-center d-flex flex-column align-items-center">
              <h6 style={{ marginTop: "2px" }}>or</h6>
              <div className="justify-content-center d-flex mt-2">
                <Button
                  style={{ width: "100%", backgroundColor: 'rgb(45, 141, 173)' }}
                  variant="primary"
                >
                  <FontAwesomeIcon icon={faFacebook} className="me-3" />
                  Login with Facebook
                </Button>
              </div>
  
  
              <div className="justify-content-center d-flex mt-4 mb-5">
                <Button
                  style={{ width: "100%" }}
                  variant="outline-secondary"
  
                >
                  <FontAwesomeIcon icon={faGoogle} className="me-4" />
                  Login with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
  </>
  );
}

export default Login;
