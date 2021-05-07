import React, { useContext } from 'react';
import { StyledContainer, FormContainer, Input, OnSubmitButton, MutedLink, BoldLink } from "./SignUtilis";
import { Margin } from "../margin/Margin";
import {ContextProvider} from "./ContextProvider";


export function LoginForm(props) {
  const {toggleToSignup} = useContext(ContextProvider);

  return (<StyledContainer>
    
    <Margin margin="20px" direction="virtical" />
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Margin margin={10} direction="virtical" />
    <OnSubmitButton type="submit">LogIn</OnSubmitButton>
    <Margin margin="16px" direction="virtical" />
    <MutedLink href="#">Don't Have An Account?<BoldLink href="#" onClick={toggleToSignup}> SignUp</BoldLink></MutedLink>

  </StyledContainer>
  )
}


