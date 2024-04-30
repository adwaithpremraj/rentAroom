import React from "react";
import email from "../assets/email.webp";
import lock from "../assets/lock1.webp";
import Button from "react-bootstrap/Button";

import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ height: "70vh", width: "60vh", borderRadius: "1rem" }}
        className="container bg-light    "
      >
        <div className="header">
          <div
            style={{ fontWeight: "bold", fontSize: "130%" }}
            className="text-dark"
          >
            Login
          </div>
          <div className="underline"></div>
        </div>

        <div className="inputs m-2 justify-content-center d-flex flex-column align-items-center">
          <div className="input d-flex align-items-center   ">
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
              placeholder="enter your emailid"
              style={{ fontWeight: "revert-layer", width: "290px" }}
            />
          </div>

          <div className="input d-flex align-items-center ">
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
              className="form-control border-info  "
              type="email"
              placeholder=" password"
              style={{ fontWeight: "inherit", width: "290px" }}
            />
          </div>
        </div>

        <div className="d-flex justfy-content-center align-items-center flex-column mt-1">
          <h6 style={{ color: "blue" }}>Forgot password?</h6>
        </div>

        <div className="justify-content-center d-flex  mt-2">
          <Button
            onClick={() => navigate('/home')}
            style={{ width: "280px", marginLeft: "3rem" }}
            variant="primary"
          >
            Login
          </Button>{" "}
        </div>

        <div
          style={{ fontWeight: "", fontSize: "90%", marginTop: "2rem" }}
          className="d-flex justfy-content-center align-items-center flex-column"
        >
          <p>
            dont have an account? <Link to="/Signup"><span style={{ color: "blue" }}>signup</span></Link>
          </p>
        </div>

        <div className="justify-content-center d-flex flex-column align-items-center">
          <h6 style={{ marginTop: "2px" }}>or</h6>
          <div className="justify-content-center d-flex  mt-2">
            <Button
              style={{ width: "280px", marginLeft: "3rem" }}
              variant="primary"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="me-3" />
              login with facebook
            </Button>{" "}
          </div>

          <div className="justify-content-center d-flex  mt-4">
            <Button
              style={{ width: "280px", marginLeft: "3rem" }}
              variant="outline-secondary"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="me-4"
                style={{ color: "" }}
              />
              login with google
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
