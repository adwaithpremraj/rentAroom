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
import { useAuth } from '../context/AuthContexts'



function Header() {

  const navigate=useNavigate()

  const [show, setShow] = useState(false);
  const { isLoggedIn, logout } = useAuth();


  const [hostel,setHostel]=useState({
    id:"",
    category:"",
    hostelName:"",
    rent:"",
    location:"",
    imageUrl:""

  })

  console.log(hostel);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    const {id,category,hostelName,rent,location,imageUrl}=hostel
    console.log(id,category,hostelName,rent,location,imageUrl);

    if(!id  || !category || !hostelName || !rent || !location ){
        alert('please fill the form completely')
    }else{
      const response =await addHostelAPI(hostel)
      console.log(response);
        if(response.status>=200 && response.status<300){
          alert('hostel added successfull')
          setHostel({
            id:'',
            category:"",
            hostelName:"",
            rent:"",
            location:"",
            imageUrl:""
          })
          handleClose()
        }else{
          console.log(response);
          alert('something went wrong')
        }
    }

  
  }

  return (
    <>
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

            {isLoggedIn ?
            (
              <Button  onClick={logout}  className='btn-outline-light'
              style={{border:'1px solid transparent',
               backgroundColor:'rgb(45, 141, 173)'}}>LOG OUT</Button>
            ):(

              <Button onClick={()=>navigate('./Login')} className='btn-outline-light'
               style={{border:'1px solid transparent',
                backgroundColor:'rgb(45, 141, 173)'}}>LOGIN <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              )
          }


              <Button
                className=" ms-3 me-3"
                style={{
                  border: "1px solid transparent",
                  backgroundColor: "rgb(45, 141, 173)",
                }} onClick={handleShow}
              >
                Add Your Hostel <FontAwesomeIcon icon={faMapLocation} />
              </Button>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Hostel Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
                <div className=" p-3">
                <div className='mt-3 mb-3'>
                        <input type="text" placeholder='id'  className='form-control' onChange={(e)=>setHostel({...hostel,id:e.target.value})}/>
                      </div>
                      <div className='mt-3 mb-3'>
                        <input type="text" placeholder='Category'  className='form-control' onChange={(e)=>setHostel({...hostel,category:e.target.value})}/>
                      </div>
                     
                      <div className='mt-3 mb-3'>
                        <input type="text" placeholder='image'  className='form-control' onChange={(e)=>setHostel({...hostel,imageUrl:e.target.value})}/>
                      </div>
                      <div className='mt-3 mb-3'>
                        <input type="text" placeholder='Hostel Name'  className='form-control' onChange={(e)=>setHostel({...hostel,hostelName:e.target.value})} />
                      </div>
                      <div className='mt-3 mb-3'>
                        <input type="text" placeholder='Rent/month'  className='form-control' onChange={(e)=>setHostel({...hostel,rent:e.target.value})} />
                      </div>
                  
                      <div className='mt-3 mb-3'>
                        <textarea type="text"  placeholder='Location'className='form-control' cols='30' rows='4' onChange={(e)=>setHostel({...hostel,location:e.target.value})}></textarea>
                      </div>
                </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
