import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const { signInUsingGoogle } = useAuth();


  const handleSubmit = () => {};
 
  return (
    <div className='container my-5'>
      <h2 className='text-center mb-5'>Create an Account</h2>
      <div className='row form p-4'>
        <div className='col-12 col-lg-6'>
          <Form onSubmit={handleSubmit} className='p-3'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <button className='btn-hospital'>Appointment</button>
            <Link to='/login' className='mt-3 d-block'>
              Already have an Account? Login
            </Link>
          </Form>
        </div>
        <div className='col-12 col-lg-6 mt-4 d-flex align-items-center  p-4'>
          <h1 className='me-3'>Or</h1>
          <Button className='btn-sm' onClick={signInUsingGoogle}>
            <i className='fab fa-google fs-3 me-3'></i>
            Sign in With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;