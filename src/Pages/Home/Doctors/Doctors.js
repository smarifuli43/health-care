import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('/doctors.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className='container my-5'>
      <h2 className='text-uppercase pt-4 pb-3 text-center'>
        Our <span className='header'>Doctors</span>{' '}
      </h2>

      <p className='text-secondary text-center mb-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repellendus atque. Quo, asperiores minima deleniti corporis earum veritatis enim maxime eos labore nesciunt nulla magnam odio modi obcaecati velit quae?
      </p>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {doctors.map((doctor) => (
          <Doctor
            key={doctor.id}
            doctor={doctor}
          ></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
