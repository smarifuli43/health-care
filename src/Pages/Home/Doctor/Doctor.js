import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = (props) => {
  const { name, img, description,role } = props.doctor;
  return (
    <div>
      <Card style={{ boxShadow: '0px 0px 12px -6px #000000' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body className='text-center'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className="header fs-5">{ role}</p>
          </Card.Text>
          <Card.Text>
            {description}

            <div className=' d-flex justify-content-around mt-4 px-4'>
              <a href='/'> <i className='fab fa-facebook fs-4'></i></a>
              <a href='/'><i className='fab fa-instagram fs-4'></i></a>
              <a href='/'><i className='fab fa-linkedin fs-4'></i></a>
              <a href='/'><i className='fab fa-twitter fs-4'></i></a>
              
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;