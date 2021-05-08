import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../btn/Button';
import './hero.css';

function Hero({ lightBg, lightText, lightTextDescription, headLine, description, btnLabel, topLine, img, alt, imgStart,signToAccount }) {
  
  
  const activeMode= (mode) =>{
    console.log("hero 1 :"+ mode);
    signToAccount(mode);
  }

 
  return (
    <>
      <div className={lightBg ? 'heroSection' : 'darkHeroSection'}>
        <div className='container'>
          <div className='hero_rowDirection row'
            style={{ display: "flex", flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
            <div className="colom">
              <div className="hero_contentWrapper">
                <div className="topLine">{topLine}</div>
                <h1 className={lightText? 'heading': 'hero_dark'}>{headLine}</h1>
                <p className={lightTextDescription? 'hero_subtitel':'hero_dark'}>{description}</p>
                <Link to='/signToAccount' value="signup" style={{marginLeft:"0"}} onClick={()=>{
                  console.log("execute link Sign into account in Hero1");
                  activeMode("signup")
                  }}>
                  <Button  buttonSize='btn--wide' buttonStyle='btn--secondry'>
                    {btnLabel}
                  </Button>
                </Link>
              </div>
            </div>
            {/* <div className='colom'>
              <div className='hero_imgWrapper'>
                <img className="hero_img"/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
