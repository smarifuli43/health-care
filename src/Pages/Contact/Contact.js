import React from 'react';

const Contact = () => {
  return (
    <div className='container my-5 details p-3 p-lg-4' >
      <section >
        <h2 className=' fs-1 text-center p-5'>
          Contact<span className='header'> Us</span>
        </h2>
        <div className='row g-4'>
          <div className='col-12 col-md-6'>
            <div className=''>
              <div className=' d-flex flex-row flex-md-column mt-4 justify-content-between'>
                <h4>Our Email:</h4>
                <div>
                  <p className='my-0 text-muted'>abcdefg@gmail.com</p>
                </div>
              </div>
              <div className=' d-flex flex-row flex-md-column mt-4 justify-content-between'>
                <h4>Our Mobile:</h4>
                <div>
                  <p className='my-0 text-muted'>0123456789*</p>
                </div>
              </div>
              <div className=' d-flex flex-row flex-md-column mt-4 justify-content-between'>
                <h4>Address:</h4>
                <div>
                  <p className='my-0 text-muted'>Boalia , Rajshahi</p>
                  <p className='my-0 text-muted'>Rajshahi - 1541</p>
                </div>
              </div>
              <div className='d-flex flex-row flex-md-column mt-4 justify-content-between'>
                <h4>Follow Us:</h4>
                <div className='social-media'>
                  <a href='/'>
                    <i className='fab fa-facebook fs-5 me-3'></i>
                  </a>
                  <a href='/'>
                    <i className='fab fa-instagram fs-5 me-3'></i>
                  </a>
                  <a href='/'>
                    <i className='fab fa-twitter fs-5 me-3'></i>
                  </a>
                  <a href='/'>
                    <i className='fab fa-linkedin fs-5'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <form>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='Your Email'
                />
                <label htmlFor='floatingInput'>Email address</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  id='floatingInput'
                  placeholder='Your Name'
                />
                <label htmlFor='floatingInput'>Your Name</label>
              </div>
              <textarea
                name=''
                className='form-control mb-3'
                id=''
                cols='30'
                rows='10'
                placeholder='Your Message'
              ></textarea>
              <input type='submit' value='Submite' className='btn-hospital ' />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;