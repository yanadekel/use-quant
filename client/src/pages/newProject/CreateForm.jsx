import React, { useState} from 'react';
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
import { Button } from '../../components/btn/Button';


const CreateForm = ({updateProjects}) => {
  const base = "/api/useQuant";
  const [projectName, setProjectName] = useState('');
  const [costumerName, setCostumerName] = useState('');
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  


  const fetchPostData = async (req, res) => {


    try {
      const response = await axios.post(`${base}/projects`, {
        projectName,
        costumerName,
        fileName,

      });
      console.log(response);
      prompt("Project Created");
      updateProjects(response);

    } catch (error) {
      console.log(error);
    }


  }



  const formHandler = (e) => {
    e.preventDefault();
  }

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile)
  }


  const formClickHandler = async () => {
    await fetchPostData();

    reset();
  }

  const fileClickHandler = () => {
    const data = new FormData()
    data.append('file', selectedFile);
    axios.post(`${base}/fils`, data, {

    }).then(res => {
      setFileName(selectedFile.name);
      console.log(res.data.id, fileName);
      
    })

  }

  const reset = () => {
    setProjectName('');
    setCostumerName('');
    setFileName('');
    setSelectedFile('');

  }


  return (
    <>

      <StyledContainer>
        <Margin margin="20px" direction="virtical" />
        <FormContainer onSubmit={formHandler}>
          <BoldLink href="#"> Project Name</BoldLink>
          <Input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Add Project Name" />
          <Margin margin="20px" direction="virtical" />
          <BoldLink href="#"> Costumer Name</BoldLink>
          <Input type="text" value={costumerName} onChange={(e) => setCostumerName(e.target.value)} placeholder="Costumer Name" />
          <Margin margin="20px" direction="virtical" />
          <BoldLink href="#"> Uploud File</BoldLink>
          <Input type="file" name="file" onChange={onChangeHandler} />
          <Button buttonStyle='btn--outline2' accept="*.csv" onClick={fileClickHandler}>Upload File</Button>
        </FormContainer>
        <OnSubmitButton id="costumeBtnStyle" type="submit" onClick={formClickHandler}>CREATE PROJECT</OnSubmitButton>
        <MutedLink href="#">GO  TO PROJECTS? <BoldLink href="/projects"> Projects</BoldLink></MutedLink>
      </StyledContainer>
    </>
  )
}

export default CreateForm;
