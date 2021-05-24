import React from "react";
import styled from "styled-components";
import Matrix from './Matrix';
import { Margin } from "../../components/margin/Margin";




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
  width: 78%;
  min-height: 60%;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  border-radius: 18px;
  background-color:#fff;
  opacity: 1;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin: 3% auto;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width:85%;
  display: flex;
  aligh-items: center;
  flex-direction: row;
  justify-content: center;
  text-aligh:center;
  padding: 0 0px;
  min-height:fit-content;
  margin: 6px 0px 12px 0px;
  
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligh-items: center;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: rgb(40, 78, 103);
  z-index: 10;
  margin: 20px 35%;
`;



const File = ({ appFile }) => {
  return (<>
    <StyledView >
      <StyledContainer>
        <HeaderContainer>
          <Margin margin="50px" direction="virtical" />
          <HeaderText>Project Chart</HeaderText>
        </HeaderContainer>
        <InnerContainer>
          <Matrix
            appFile={appFile}
          />
        </InnerContainer>
        <Margin margin={10} direction="virtical" />
      </StyledContainer>
    </StyledView>
  </>

  )
}

export default File;

