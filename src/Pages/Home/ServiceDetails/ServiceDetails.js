import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    fetch('/serviceDetails.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    const service = services.find(
      (service) => service.id === parseInt(serviceId)
    );
    setSingleService(service);
  }, [services]);

  return (
    <div className='container my-5'>
      <div className='row details p-4'>
        <div className='col-12 col-lg-6'>
          <img src={singleService?.img} alt='' className='img-fluid rounded' />
        </div>
        <div className='col-12 col-lg-6 mt-4 mt-lg-4'>
          <h2>{singleService?.name}</h2>
          <p>{singleService?.description}</p>
          <button className='btn-hospital'>Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
