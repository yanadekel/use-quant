import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcHeatMap } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../btn/Button';
import './navbar.css';

const Navbar= ({signToAccount}) =>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

  const closeMobileMenue = () => setClick(false);

  const handleClick = () => setClick(!click);

 
const activeMode= (mode) =>{
  signToAccount(mode);
}
    
   

  const showButton = () => {
    if (window.innerWidth <= 960) {

      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();

  }, [])

  window.addEventListener('resize', showButton);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbarContainer container">
            <div className="leftSide">
              <Link to='/' className="logo" onClick={closeMobileMenue}>
                <FcHeatMap className="navbarIcone" />
              UseQuant
          </Link>
              <div className="menuIcon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
            </div>
            <div className="rightSide">
            <ul className={click ? 'navMenu-active' : 'navMenu'}>
              <li className="navItem">
                <Link to='/' className="navLinks" onClick={closeMobileMenue}>
                  Home
              </Link>
              </li>
              <li className="navItem">
                <Link to='/addProject' className="navLinks" onClick={closeMobileMenue}>
                  New Project
              </Link>
              </li>
              <li className="navItem">
                <Link to='/Projects' className="navLinks" onClick={closeMobileMenue}>
                  Projects
              </Link>
              </li>
              <li className="navItem">
                <Link to='/heatmap' className="navLinks" onClick={closeMobileMenue}>
                  Heatmap Table
              </Link>
              </li>
              <li className="navBtn">
                {button ? (
                  <Link to='/signToAccount' value="login" onClick={()=>activeMode("login")} className="btnLink">
                    <Button buttonSize='btn--wide' buttonStyle='btn--secondry'>LogIn</Button>
                  </Link>
                ) : (
                  <Link to='/signToAccount' value={"login"} className="btnLink" onClick={closeMobileMenue}>
                    <Button  buttonStyle='btn--secondry' buttonSize='btn--mobile'>LogIn</Button>
                  </Link>
                )}
              </li>
              <li className="navBtn">
                {button ? (
                  <Link to='/' value="logout" className="btnLink">
                    <Button buttonSize='btn--wide' buttonStyle='btn--outline'>LogOut</Button>
                  </Link>
                ) : (
                  <Link to='/' value={"logout"} className="btnLink" onClick={closeMobileMenue}>
                    <Button  buttonStyle='btn--outline' buttonSize='btn--mobile'>LogOut</Button>
                  </Link>
                )}
              </li>
            </ul>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
