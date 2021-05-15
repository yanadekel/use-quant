import React, { useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import CreateForm from './CreateForm';

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
  width: 35%;
  min-height:70% ;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background-color:(18, 45, 62, 1);
  background: linear-gradient(
    58deg,
    rgba(40, 78, 103, 1) 20%,
    rgba(18, 45, 62, 1) 100%
  );
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin:2% 0;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height:300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const DownDrop = styled(motion.div)`
  width: 100%;
  height: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(30deg);
  top: -341px;
  left: -109px;
  background: rgb(77,128,160);
  background: linear-gradient(
    281deg,
    rgba(77, 128, 160, 1) 20%,
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
  font-weight: 300;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin:auto;
`;

const SmallText = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: auto;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  height:100%;
`;

const DownDropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(30deg)",
  },
  collapsed: {
    width: "130%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(30deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const AddProject = () => {
  const [isExpanded, setExpanded] = useState(false);

  // const expandingAnimation = () => {
  //   setExpanded(true);
  //   setTimeout(() => {
  //     setExpanded(false);
  //   }, expandingTransition.duration * 1000 - 1500);
  // };

  return (<>
    <StyledView>
      <StyledContainer>
        <TopContainer>
          <DownDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={DownDropVariants}
            transition={expandingTransition}
          />

          <HeaderContainer>
            <HeaderText>Add New Project</HeaderText>
            <SmallText>Must Add File</SmallText>
          </HeaderContainer>

        </TopContainer>
        <InnerContainer>
          <CreateForm />
        </InnerContainer>
      </StyledContainer>
    </StyledView>
  </>
  )
}

export default AddProject
