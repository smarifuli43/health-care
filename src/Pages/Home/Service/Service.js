import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
  const { id, name, img, description } = props.service;
  return (
    <div className='service'>
      <Card className='h-100 card'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 110)} ...</Card.Text>
          <Link to={`/service/${id}`}>
            <Button className='btn-hospital'>Service Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;