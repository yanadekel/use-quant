import React, { useContext } from 'react';
import {
  StyledContainer,
  FormContainer,
  Input,
  OnSubmitButton,
  MutedLink,
  BoldLink,
} from "../../components/account/SignUtilis";
import "./newPro.css"

import { Margin } from "../../components/margin/Margin";

const CreateForm = (props) => {
  return (
    <>
    
      <StyledContainer>
        <Margin margin="20px" direction="virtical" />
        <FormContainer>
          <BoldLink href="#"> Project Name</BoldLink>
          <Input type="text" placeholder="Add Project Name" />
          <BoldLink href="#"> Costumer Name</BoldLink>
          <Input type="text" placeholder="Costumer Name" />
          <BoldLink href="#"> Uploud File</BoldLink>
          <Input type="file" id="myFile" name="filename" />
        </FormContainer>
        <Margin margin={10} direction="virtical" />
        <OnSubmitButton id= "costumeBtnStyle" type="submit">Confirm</OnSubmitButton>
        <Margin margin="5px" direction="virtical" />
        <MutedLink href="#">Changed your mind? Please SignOut<BoldLink href="/"> SignOut</BoldLink></MutedLink>

      </StyledContainer>
    </>
  )
}

export default CreateForm;
