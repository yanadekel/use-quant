import React from 'react';
import Hero from '../../components/Hero/Hero';
import {HomeData} from './HomeData';



function HomePage() {
  return (
    <>
    <Hero {...HomeData}/>  
    </>
  )
}

export default HomePage;

