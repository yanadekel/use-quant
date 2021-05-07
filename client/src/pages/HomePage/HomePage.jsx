import React from 'react';
import Hero from '../../components/Hero/Hero';
import Hero2 from '../../components/Hero2/Hero2';
import {HomeData,HomeData2} from './HomeData';



function HomePage() {
  return (
    <>
    <Hero {...HomeData}/>
    <Hero2 {...HomeData2}/>  
    </>
  )
}

export default HomePage;

