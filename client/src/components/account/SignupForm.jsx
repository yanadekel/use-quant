import React, { useContext }  from 'react';
import { StyledContainer, FormContainer, Input, OnSubmitButton, MutedLink, BoldLink } from "./SignUtilis";
import { Margin } from "../margin/Margin";
import {ContextProvider} from "./ContextProvider";

export function SignupForm(props) {
  const {toggleTologin} = useContext(ContextProvider);
  return (<StyledContainer>
    
    <Margin margin="20px" direction="virtical" />
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Margin margin={10} direction="virtical" />
    <OnSubmitButton type="submit">SignUp</OnSubmitButton>
    <Margin margin="16px" direction="virtical" />
    <MutedLink href="#">Already Have Account?<BoldLink href="#" onClick={toggleTologin}> LogIn</BoldLink></MutedLink>

  </StyledContainer>
  )
}


