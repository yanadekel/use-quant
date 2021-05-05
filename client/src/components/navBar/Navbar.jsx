import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcHeatMap } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../btn/Button';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenue = () => setClick(false);
  const handleClick = () => setClick(!click);

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
                  <Link to='/signUp' className="btnLink">
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/signUp' className="btnLink" onClick={closeMobileMenue}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
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
