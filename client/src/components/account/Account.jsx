import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./LoginForm";
import { SignupForm } from './SignupForm';
import { ContextProvider } from "./ContextProvider";


const StyledView = styled.body`
background-image : url("https://miro.medium.com/max/10940/0*Z_ijV1Wc2SvCi-OS");
height: 90vh;
width:100%;
background-repeat : no-repeat;
background-size : cover; 
display: flex;
flex-direction: column;
align-items:center;
`
const StyledContainer = styled.div`
  width: 350px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background:#fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin:auto;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const DownDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(185deg);
  top: -290px;
  left: -70px;
  background-color:(18, 45, 62, 1);
  background: linear-gradient(
    58deg,
    rgba(40, 78, 103, 1) 20%,
    rgba(18, 45, 62, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin:auto;
`;

const SmallText = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: auto;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

const DownDropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(185deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(185deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


function Account(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("");



  const expandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  
  const appUpdate = async () => {
   
    if (props.appActive === "signup") {
      await setActive("signup");
    }
    if (props.appActive === "login") {
      await setActive("login");
    }
  }

  const toggleToSignup = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);

  };
  
  const toggleTologin = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };


  useEffect(() => {
    appUpdate();
  }, [active]);


  
  const contextValue = { toggleToSignup, toggleTologin};
  // console.log (contextValue);



  return (
    
    <StyledView>
      <ContextProvider.Provider value={contextValue}>
        <StyledContainer>
          <TopContainer>
            <DownDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={DownDropVariants}
              transition={expandingTransition}
            />
            {active === "login"?  (
              <HeaderContainer>
                <HeaderText>Hello</HeaderText>
                <HeaderText>Wellcome-Back</HeaderText>
                <SmallText>Please Log-In to continue</SmallText>
              </HeaderContainer>
            ):
             (
              <HeaderContainer>
                <HeaderText>Wellcome </HeaderText>
                <HeaderText>Join-Here</HeaderText>
                <SmallText>Please Sign-Up to continue</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "login"?(<LoginForm />): (<SignupForm />) }
          </InnerContainer>
        </StyledContainer>

      </ContextProvider.Provider>
    </StyledView>
  )
}

export default Account;
