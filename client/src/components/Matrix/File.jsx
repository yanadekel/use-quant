import React from 'react';
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
  width: 50%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background-color:rgb(77,128,160);
  // background: linear-gradient(
  //   30deg,
  //   rgba(24, 57, 76, 1) 0%,
  //   rgba(77, 128,160, 1) 35%
  // );
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin: auto;
  // overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  min-height:fit-content;
  
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
  font-size: 15px;
  z-index: 10;
  margin: auto;
  margin-top: 7px;
`;

const OnSubmitButton = styled.button`
  align-items:center;
  width: 100%;
  padding: 11px;
  margin:auto;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius:none;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(40, 78, 103);
  background: linear-gradient(
    58deg,
    rgba(40, 78, 103, 1) 35%,
    rgba(18, 45, 62, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

function File({file}) {
  // console.log(file.observations.length)
  // console.log(file.solutions.length)
  // console.log(file.observations)
  // console.log(file.solutions)
  // console.log(file.frequency)
  return (<>
    <StyledView >
      <StyledContainer>
        <HeaderContainer>
          <Margin margin="50px" direction="virtical" />
          <HeaderText>Project Chart</HeaderText>
          <SmallText></SmallText>
        </HeaderContainer>
        <InnerContainer>
          <Matrix 
          // xLabelsLength={file.observations.length} 
          // yLabelsLength={file.solutions.length}
          filexLabels={file.observations}
          fileyLabels={file.solutions}
          fileData={file.frequency}
          
          />
        </InnerContainer>
        <Margin margin={10} direction="virtical" />
      </StyledContainer>
    </StyledView>
  </>
  )
}

export default File

