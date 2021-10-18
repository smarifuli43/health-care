import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <section className=' container text-center px-4 my-5'>
        <div className='row  text-white py-5 my-5'>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className='project-box  d-flex align-items-center justify-content-center flex-column py-4 '>
              <i className='fas fa-cogs'></i>
              <div className='project'>25</div>
              <h3>Years of experienced</h3>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className='project-box  d-flex align-items-center justify-content-center flex-column py-4 '>
              <i className='fas fa-procedures'></i>
              <div className='project'>4000</div>
              <h3>Happy patients</h3>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className='project-box  d-flex align-items-center justify-content-center flex-column py-4 '>
              <i className='fas fa-user-md'></i>
              <div className='project'>65</div>
              <h3>Numbers of Doctors</h3>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className='project-box  d-flex align-items-center justify-content-center flex-column py-4 '>
              <i className='fas fa-user-nurse'></i>
              <div className='project'>220</div>
              <h3>Number of staffs</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;