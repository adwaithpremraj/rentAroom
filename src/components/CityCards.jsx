import React from 'react'
import './CityCards.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
  

function City_Cards() {

  return (
    <>
        <h1 className='text-center m-5 fs-1'>Cites</h1>

        <Container className='d-flex align-items-center justify-content-center mx-auto '>

          <div className='row'>
            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
                <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                        <p className='text-center fw-bold fs-4 '>Kakkanad</p>            
                  </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
            <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                  <p className='text-center fw-bold fs-4 '>Kaloor</p>            
                  </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
            <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                  <p className='text-center fw-bold fs-4 '>Edapally</p>            
                  </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
            <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                  <p className='text-center fw-bold fs-4 '>Aluva</p>            
                  </Card.Body>
              </Card>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
            <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                  <p className='text-center fw-bold fs-4 '>kalamassery</p>            
                  </Card.Body>
              </Card>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 my-3">
            <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg" />
                  <Card.Body>           
                  <p className='text-center fw-bold fs-4 '>Palarivattom</p>            
                  </Card.Body>
              </Card>
            </div>
          </div>
          
      
        </Container>
    </>

  )
}

export default City_Cards