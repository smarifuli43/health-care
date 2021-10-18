import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-uppercase pt-4 pb-3 text-center">Our <span className="services-header">Service</span> </h2>

      <p className="text-secondary text-center mb-3">We provide world class services in the medical sector. these survices are served by our qualified doctors and health specialists</p>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
