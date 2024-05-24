import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBrush, faMotorcycle, faPeopleRoof, faWifi } from '@fortawesome/free-solid-svg-icons';
import { getUploadedHostelAPI } from '../services/allApi';
import { Link } from 'react-router-dom';

function Hostels() {
  const [hostels, setHostels] = useState([]);
  const [filter, setFilter] = useState('all');
  const [hostelStatus, setHostelStatus] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState(null);

  const getHostels = async () => {
    const response = await getUploadedHostelAPI();
    console.log(response);
    const { data } = response;
    setHostels(data);
    setHostelStatus(true);
  };

  const filteredItems = () => {
    if (filter === "Men's Hostel") {
      return hostels.filter((item) => item.category === "Men's Hostel");
    } else if (filter === "Women's Hostel") {
      return hostels.filter((item) => item.category === "Women's Hostel");
    } else {
      return hostels;
    }
  };

  useEffect(() => {
    getHostels();
  }, [hostelStatus]);

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);
  };

  return (
    <>
      <h2 className='text-center mb-3'>Recently Added Properties</h2>
      <div className='d-flex align-items-center justify-content-center'>
        <Button
          style={{ backgroundColor: 'rgb(45, 141, 173)', border: '1px solid transparent' }}
          onClick={() => setFilter('all')}
          className='btn btn-outline-dark'
          variant=" mx-1"
        >
          All Categories
        </Button>
        <Button
          style={{ backgroundColor: 'rgb(234, 249, 255)' }}
          onClick={() => setFilter("Men's Hostel")}
          variant=""
        >
          Men's Hostel
        </Button>{' '}
        <Button
          style={{ backgroundColor: 'rgb(234, 249, 255)' }}
          onClick={() => setFilter("Women's Hostel")}
          variant=" mx-1"
        >
          Women's Hostel
        </Button>{' '}
      </div>

      <Container className='d-flex align-items-center justify-content-center mx-auto'>
        <Row className='d-flex align-items-center justify-content-center mt-5 mx-auto'>
          {filteredItems()?.length > 0 ? (
            filteredItems()?.map((item) => (
              <Col key={item.id} className='mb-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    onClick={() => handleHostelClick(item)}
                    style={{ cursor: 'pointer' }}
                  />
                  <Card.Body>
                    <p>{item.category}</p>
                    <Card.Text>
                      <div className='d-flex align-items-center justify-content-between'>
                        <h6>$ {item.rent}</h6>
                        <Link to={'/details'}>
                          <button
                            className='p-2'
                            style={{ border: '1px solid transparent', borderRadius: '5px', backgroundColor: 'grey', color: 'white' }}
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </Link>
                      </div>
                      <h6>{item.hostelName}</h6>
                      <p>{item.location}</p>
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
            ))
          ) : (
            <p>no uploaded hostel</p>
          )}
        </Row>
      </Container>

      {selectedHostel && (
        <div className='selected-hostel'>
          <h3>{selectedHostel.hostelName}</h3>
          <img src={selectedHostel.imageUrl} alt={selectedHostel.hostelName} style={{ width: '100%', height: 'auto' }} />
          <p>{selectedHostel.description}</p>
          <p>Location: {selectedHostel.location}</p>
          <p>Rent: ${selectedHostel.rent}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </>
  );
}

export default Hostels;
