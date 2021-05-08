import React from 'react';
import styled from "styled-components";
import Table from "./TableQuant";


const StyledView = styled.body`
background-image : url("https://miro.medium.com/max/10940/0*Z_ijV1Wc2SvCi-OS");
height: 91vh;
width:100%;
background-repeat : no-repeat;
background-size : cover; 
display: flex;
flex-direction: column;
align-items:center;
`
const StyledContainer = styled.div`
  width: 800px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background-color:rgb(24,57,76);
  background: linear-gradient(
    30deg,
    rgba(24, 57, 76, 1) 0%,
    rgba(77, 128,160, 1) 35%
  );
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin:auto;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;



const ProjectsTable = () => {
  return (
    <StyledView >
      <StyledContainer>
        <InnerContainer>
          <Table />
        </InnerContainer>
      </StyledContainer>
    </StyledView>
  )
}

export default ProjectsTable;

