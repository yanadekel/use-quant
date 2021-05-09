import React, { useState, useContext } from 'react';
import axios from "axios";
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
  const base = "/api/useQuant/projects";
  const [projectName, setProjectName] = useState('');
  const [costumerName, setCostumerName] = useState('');
  const [tableFile, setTableFile] = useState('');


  const fetchPostData = async () => {
    console.log(projectName)
    console.log(costumerName)
    console.log(tableFile)

        try {
          const response = await axios.post(`${base}`, {
            projectName,
            costumerName,
            tableFile,
          });
          console.log(response.data)
          prompt("Project Created")

        } catch (error) {
          console.log(error);
        }
      }
  

  
  const formHandler = (e) => {
      e.preventDefault();

    }

    const reset = () => {
      setProjectName('');
      setCostumerName('');
      setTableFile('');
    }

    const clickHandler = () => {
      fetchPostData();
      reset();
    }

    return (
      <>

        <StyledContainer>
          <Margin margin="20px" direction="virtical" />
          <FormContainer onSubmit={formHandler}>
            <BoldLink href="#"> Project Name</BoldLink>
            <Input type="text" onChange={(e) => setProjectName(e.target.value)} placeholder="Add Project Name" />
            <Margin margin="20px" direction="virtical" />
            <BoldLink href="#"> Costumer Name</BoldLink>
            <Input type="text" onChange={(e) => setCostumerName(e.target.value)} placeholder="Costumer Name" />
            <Margin margin="20px" direction="virtical" />
            <BoldLink href="#"> Uploud File</BoldLink>
            <Input type="file" onChange={(e) => setTableFile(e.target.value)} id="myFile" name="filename" />
            <Margin margin="20px" direction="virtical" />
          </FormContainer>
          <OnSubmitButton id="costumeBtnStyle" type="submit" onClick={clickHandler}>CREATE</OnSubmitButton>
          <MutedLink href="#">GO  TO PROJECTS? <BoldLink href="/projects"> Projects</BoldLink></MutedLink>
        </StyledContainer>
      </>
    )
  }

  export default CreateForm;
