
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const {
    setUser,
    setEmail,
    setPassword,
    signInUsingGoogle,
    signInWithEmailAndPass,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home'
  
  
 const handleEmailChange = (e) => {
   setEmail(e.target.value);
 };
 const handlePasswordChange = (e) => {
   setPassword(e.target.value);
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPass().then((result) => {
      history.push(redirect_url);
       setUser(result.user);
      console.log(result?.user);
    });
  }
  const handleSignInUsingGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
       setUser(result.user);
        console.log(result?.user);
      })
      .finally(() => setIsLoading(false));;
}
  return (
    <div className='container mb-5' style={{ marginTop: '80px' }}>
      <h2 className='text-center mb-5'>Please Login</h2>
      <div className='row form p-4'>
        <div className='col-12 col-lg-6'>
          <Form onSubmit={handleSubmit} className='p-3'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onBlur={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onBlur={handlePasswordChange}
                required
              />
            </Form.Group>
            <button className='btn-hospital'>Submit</button>
            <Link to='/register' className='mt-3 d-block'>
              Or create an Account
            </Link>
          </Form>
        </div>
        <div className='col-12 col-lg-6 mt-4 d-flex align-items-center  p-4'>
          <h1 className='me-3'>Or</h1>
          <Button className='btn-sm' onClick={handleSignInUsingGoogle}>
            <i className='fab fa-google fs-3 me-3'></i>
            Sign in With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;