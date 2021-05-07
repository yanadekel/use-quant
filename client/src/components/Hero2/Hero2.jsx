import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../btn/Button';
import './hero2.css';

function Hero2({ lightBg, lightText, lightTextDescription, headLine, description, btnLabel, topLine, img, alt, imgStart,signToAccount }) {
  const activeMode= (mode) =>{
    console.log("hero 2 :"+ mode);
    signToAccount(mode);
  }
  return (
    <>
      <div className={lightBg ? 'heroSection' : 'darkHeroSection'}>

        <div className='hero_rowDirection row'
          style={{ display: "flex", flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
          <div className="col">
            <div className="hero_contentWrapper">
              <div className="topLine">{topLine}</div>
              <h1 className={lightText ? 'heading' : 'hero_dark'}>{headLine}</h1>
              <p className={lightTextDescription ? 'hero_subtitel' : 'hero_dark'}>{description}</p>
            </div>
            <Link to='/signToAccount' style={{ margin: "0% 31%" }} onClick={()=>activeMode("signup")}>
              <Button buttonSize='btn--wide' buttonColor='red' >
                {btnLabel}
              </Button>
            </Link>
          </div>
          <div className='col'>
            <div className='hero_imgWrapper'>
              <img className="hero_img" src={img} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
