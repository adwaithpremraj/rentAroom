import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBrush, faMotorcycle, faPeopleRoof, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowRight, faBrush, faLocationDot, faMotorcycle, faPeopleRoof, faWifi } from '@fortawesome/free-solid-svg-icons';


function Hostels() {



  return (
    <>
      <h2 className='text-center mb-3'>Recently Added Properties</h2>
      <div className='d-flex align-items-center justify-content-center'>
      <Button style={{backgroundColor:'rgb(45, 141, 173)',border:'1px soild transparent'}} className='btn  btn-outline-dark' variant=" mx-1">All Categories</Button>{' '}
      <Button style={{backgroundColor:'rgb(234, 249, 255)'}} variant=" ">Mens Hostel</Button>{' '}
      <Button style={{backgroundColor:'rgb(234, 249, 255)'}} variant=" mx-1">Womens Hostel</Button>{' '}
      </div>

      <Container className='d-flex align-items-center justify-content-center mx-auto '>
      <Row className='d-flex align-items-center justify-content-center mt-5  mx-auto'>
      
      <Col className='mb-4'>
          <Link to='/details'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
              <Card.Body>
                
                    <p>Mens Hostel</p>
                    
              
                <Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <h6>₹4600/month</h6>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <h6>Olive Ladies Hostel</h6>
                <p>Chittethukara, Kochi, Kakk...</p>
                </Card.Text>
                <hr />
                <div className='d-flex align-items-center justify-content-evenly'>
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faMotorcycle} />
                <FontAwesomeIcon icon={faBrush} />
                <FontAwesomeIcon icon={faPeopleRoof} />
                
                </div>
              </Card.Body>
            </Card>
          </Link>
    </Col>

    <Col className='mb-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg"/>
      <Card.Body>
        
        <p>Womens Hostel</p>
        
  
    <Card.Text>
    <div className='d-flex align-items-center justify-content-between'>
       <h6>₹3600/month</h6>
       <FontAwesomeIcon icon={faArrowRight} />
     </div>
     <h6>Kummanchery Building</h6>
     <p>Jabra Anza Airport Rd, Vidya Nag...</p>
    </Card.Text>
    <hr />
    <div className='d-flex align-items-center justify-content-evenly'>
    <FontAwesomeIcon icon={faWifi} />
    <FontAwesomeIcon icon={faMotorcycle} />
    <FontAwesomeIcon icon={faBrush} />
    <FontAwesomeIcon icon={faPeopleRoof} />
    
    </div>
  </Card.Body>
    </Card>
    </Col>

    <Col className='mb-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
      <Card.Body>
        
        <p>Mens & Womens Hostel</p>
        
  
    <Card.Text>
    <div className='d-flex align-items-center justify-content-between'>
       <h6>₹5200/month</h6>
       <FontAwesomeIcon icon={faArrowRight} />
     </div>
     <h6>Calicut Gents & Womens Hostel</h6>
     <p>Edachira, Kakkanad</p>
    </Card.Text>
    <hr />
    <div className='d-flex align-items-center justify-content-evenly'>
    <FontAwesomeIcon icon={faWifi} />
    <FontAwesomeIcon icon={faMotorcycle} />
    <FontAwesomeIcon icon={faBrush} />
    <FontAwesomeIcon icon={faPeopleRoof} />
    
    </div>
  </Card.Body>
    </Card>
    </Col>

  
   
   <Col className='mb-4'>
        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/1/11398/q3hq1lh9tepnvlxy05vg" />
      <Card.Body>
        
            <p>Mens Hostel</p>
            
      
        <Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
           <h6>₹6600/month</h6>
           <FontAwesomeIcon icon={faArrowRight} />
         </div>
         <h6>Igloo Stays</h6>
         <p>Thengod, Kakka...</p>
        </Card.Text>
        <hr />
        <div className='d-flex align-items-center justify-content-evenly '>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faMotorcycle} />
        <FontAwesomeIcon icon={faBrush} />
        <FontAwesomeIcon icon={faPeopleRoof} />
        
        </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
     

  
        
          <Container className='d-flex align-items-center justify-content-center mx-auto '>
          <Row className='d-flex align-items-center justify-content-center mt-5  mx-auto'>
          
          <Col className='mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                <Card.Body>
                  
                      <p>Mens Hostel</p>
                      
                
                  <Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h6>₹4600/month</h6>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <h6>Olive Ladies Hostel</h6>
                  <p>Chittethukara, Kochi, Kakk...</p>
                  </Card.Text>
                  <hr />
                  <div className='d-flex align-items-center justify-content-evenly'>
                  <FontAwesomeIcon icon={faWifi} />
                  <FontAwesomeIcon icon={faMotorcycle} />
                  <FontAwesomeIcon icon={faBrush} />
                  <FontAwesomeIcon icon={faPeopleRoof} />
                  
                  </div>
                </Card.Body>
              </Card>
        </Col>
    
        <Col className='mb-4'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg"/>
          <Card.Body>
            
            <p>Womens Hostel</p>
            
      
        <Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
           <h6>₹3600/month</h6>
           <FontAwesomeIcon icon={faArrowRight} />
         </div>
         <h6>Kummanchery Building</h6>
         <p>Jabra Anza Airport Rd, Vidya Nag...</p>
        </Card.Text>
        <hr />
        <div className='d-flex align-items-center justify-content-evenly'>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faMotorcycle} />
        <FontAwesomeIcon icon={faBrush} />
        <FontAwesomeIcon icon={faPeopleRoof} />
        
        </div>
      </Card.Body>
        </Card>
        </Col>
    
        <Col className='mb-4'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
          <Card.Body>
            
            <p>Mens & Womens Hostel</p>
            
      
        <Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
           <h6>₹5200/month</h6>
           <FontAwesomeIcon icon={faArrowRight} />
         </div>
         <h6>Calicut Gents & Womens Hostel</h6>
         <p>Edachira, Kakkanad</p>
        </Card.Text>
        <hr />
        <div className='d-flex align-items-center justify-content-evenly'>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faMotorcycle} />
        <FontAwesomeIcon icon={faBrush} />
        <FontAwesomeIcon icon={faPeopleRoof} />
        
        </div>
      </Card.Body>
        </Card>
        </Col>
    
      
       
       <Col className='mb-4'>
            <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src="https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/1/11398/q3hq1lh9tepnvlxy05vg" />
          <Card.Body>
            
                <p>Mens Hostel</p>
                
          
            <Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
               <h6>₹6600/month</h6>
               <FontAwesomeIcon icon={faArrowRight} />
             </div>
             <h6>Igloo Stays</h6>
             <p>Thengod, Kakka...</p>
            </Card.Text>
            <hr />
            <div className='d-flex align-items-center justify-content-evenly '>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faMotorcycle} />
            <FontAwesomeIcon icon={faBrush} />
            <FontAwesomeIcon icon={faPeopleRoof} />
            
            </div>
          </Card.Body>
        </Card>
            </Col>
          </Row>
        </Container>
    
    </>
  )
}

export default Hostels