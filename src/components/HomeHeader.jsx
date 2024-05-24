import { faArrowRight, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHostelAPI } from "../services/allApi";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


function HomeHeader() {
    const navigate=useNavigate()

  return (
    <div>
            <Navbar
        expand="lg"
        className=" px-5 py-2"
        style={{ backgroundColor: "rgb(234, 249, 255)" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="text-dark"
            style={{ fontWeight: "550", color: "#384f95" }}
          >
            <img
              className="mb-2"
              src="./src/assets/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418ca7aed3.3537227915242530686869.png"
              alt="img"
              height={"40px"}
            />{" "}
            Find My Hostel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto ">
            <Button onClick={()=>navigate('./Login')} className='btn-outline-light me-3' style={{border:'1px solid transparent', backgroundColor:'rgb(45, 141, 173)'}}>Sigin  <FontAwesomeIcon icon={faArrowRight} /></Button>
            <Button onClick={()=>navigate('./Signup')} className='btn-outline-light' style={{border:'1px solid transparent', backgroundColor:'rgb(45, 141, 173)'}}>Login <FontAwesomeIcon icon={faArrowRight} /></Button>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default HomeHeader