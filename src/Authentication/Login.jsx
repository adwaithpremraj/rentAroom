
import React from "react";
import email from "../assets/email.webp";
import lock from "../assets/lock1.webp";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
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
              <input
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
              <input
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
            <Button
              onClick={() => navigate("/home")}
              style={{ width: '284px', marginLeft: "3rem", backgroundColor: 'rgb(45, 141, 173)' }}
              variant="primary"
            >
              Login
            </Button>
          </div>

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
  );
}

export default Login;
