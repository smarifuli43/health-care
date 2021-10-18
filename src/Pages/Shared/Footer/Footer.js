import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-flui'>
      <section className='footer-navigation py-5'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-12 col-md-6 col-lg-4'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                About Us
              </h5>
              <h1 className='text-white-50'>----CarePoint----</h1>
              <p className='text-white-50 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
              </p>
              <div className='social-media d-flex '>
                <a href='/'>
                  {' '}
                  <i className='fab fa-facebook-f text-white-50 '></i>
                </a>
                <a href='/'>
                  <i className='fab fa-instagram text-white-50 ms-4'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-twitter text-white-50 ms-4'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-github text-white-50 ms-4'></i>
                </a>
              </div>
            </div>


            <div className='col-12 col-md-6 col-lg-4 px-lg-4'>
              <div className='footer-item'>
                <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                  Enquery Form
                </h5>
                <input type='text' id='name' className="w-100 bg-footer-form"  placeholder="Your Name"/>
                <br />
                <input type='email' id='email' className="w-100 mt-3 bg-footer-form" placeholder="Your Email" />
                <br />
              
                <textarea name='Message'className="w-100 mt-3 bg-footer-form"  id='msg' cols='20' rows='3' placeholder="Your Message"></textarea>
                <br />
                <input className='btn btn-secondary text-uppercase w-100 mt-3 ' type='submit' value='Submit' />
              </div>
            </div>


            <div className='col-12 col-md-6 col-lg-4 ps-lg-5'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                SERVICES
              </h5>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Work Injuries
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Cold Laser Therapy
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Physiotherapy
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Neurology
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;