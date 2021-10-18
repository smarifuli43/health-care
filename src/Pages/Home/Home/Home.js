import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
    <Services></Services>
    </div>
  );
};

export default Home;