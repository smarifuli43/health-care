import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      <Doctors></Doctors>
      
    </div>
  );
};

export default Home;