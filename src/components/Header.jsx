import { faArrowRight, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-light px-5 py-2">
      <Container fluid>
        <Navbar.Brand href="#" className='text=dark' style={{fontWeight:'550',color: "#384f95"}} ><img className='mb-2' src="./src/assets/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418ca7aed3.3537227915242530686869.png" alt="img" height={'40px'} /> Find My Hostel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='ms-auto '>
                <Button className='btn btn-outline-light' style={{backgroundColor:'#384f95'}}>SignIn <FontAwesomeIcon icon={faArrowRight} /></Button>
                <Button className='btn btn-outline-light ms-3 me-3' style={{backgroundColor:'#384f95'}}>Add Your Hostel <FontAwesomeIcon icon={faMapLocation} /></Button>

            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header