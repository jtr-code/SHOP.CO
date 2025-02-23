import React from 'react';
import Banner from './components/Banner/banner';
import { NewArrival } from './components/NewArrival/NewArrival';
import TopSelling from './components/TopSelling/TopSelling';

const Home = () => {
  return (
    <div>
      <Banner />
      <NewArrival />
      <TopSelling />
    </div>
  );
};

export default Home;
