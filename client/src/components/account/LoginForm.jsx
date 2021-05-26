import React, {useState, useContext } from 'react';
import axios from "axios";
import validator from "validator";
import { useHistory } from "react-router-dom";
import { StyledContainer, FormContainer, Input, OnSubmitButton, MutedLink, BoldLink } from "./SignUtilis";
import { Margin } from "../margin/Margin";
import { ContextProvider } from "./ContextProvider";


export function LoginForm(props) {
  const { toggleToSignup } = useContext(ContextProvider);
  const base = "/api/useQuant";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const history = useHistory();

  const fetchPostData = async (req, res) => {
    
    try {
      const response = await axios.post(`${base}/users/login`, {
        email,
        password,

      });
      console.log(response.data);
      let token;
      token = response.data?.token;
      console.log("token:", token);
      sessionStorage.setItem("token", JSON.stringify(token));
      history.push({ pathname: `/projects/` });

    } catch (error) {
      if (error.response.status === 406) {
        setErrMsg(error.response.data.error);
      } else setErrMsg("Error occurred, please try again.");
    }
  }

  const reset = () => {
    setEmail('');
    setPassword('');

  }

  const formHandler = (e) => {
    e.preventDefault();
  }

  const loginClickHandler = async () => {

    if (!validator.isEmail(email)) {
      return setErrMsg("Invalid email");
    }
    if (!validator.isStrongPassword(password)) {
      return setErrMsg(`Invalid Password.
       Min length:8. Must include min: 1 lowercase,1 uppercase, 1 minNumbers,1 minSymbols.`);
    }

    await fetchPostData();

    reset();
  }

  return (<StyledContainer>

    <Margin margin="20px" direction="virtical" />
    <FormContainer onSubmit={formHandler}>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    </FormContainer>
    <Margin margin={10} direction="virtical" />
    <OnSubmitButton type="submit" onClick={loginClickHandler}>LogIn</OnSubmitButton>
    <Margin margin="16px" direction="virtical" />
    <MutedLink href="#">Don't Have An Account?<BoldLink href="#" onClick={toggleToSignup}> SignUp</BoldLink></MutedLink>

  </StyledContainer>
  )
}


