import React from 'react';

import './Banner.css'

const Banner = () => {
  return (
    <div className='banner mt-5'>
      <div className='container'>
        <div className='col-12 col-md-8 col-lg-6'>
          <h2 className='text-white text-uppercase fw-bolder lh-lg '>
            We have Best Medicine Plane options for you
          </h2>
          <p className="text-white">Carepoint is the leading hospital in the country as we provide services like neuro surgery, vascular surgery, dermatalogy, Cardiac Surgery, Diabetes & Endocrinology , nephrology etc.</p>
          <a href='/' className='btn text-uppercase btn-hospital text-white mt-2'>
            Book an Appoinment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;