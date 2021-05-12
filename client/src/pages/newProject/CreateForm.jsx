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
import { Button } from '../../components/btn/Button';


const CreateForm = (props) => {
  const base = "/api/useQuant";
  const [projectName, setProjectName] = useState('');
  const [costumerName, setCostumerName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);



  const fetchPostData = async () => {
   

        try {
          const response = await axios.post(`${base}/projects`, {
            projectName,
            costumerName,
           
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

    const onChangeHandler = (event) => {
      setSelectedFile(event.target.files[0])
  
    }
    const reset = () => {
     setCostumerName('');
      setProjectName('');
    }

    const clickHandler = () => {
      console.log(selectedFile);
      if(projectName!==selectedFile ){
        setProjectName(selectedFile.name)
      }
      
      fetchPostData();
      reset();
    }

    const onClickHandler = () => {
      const data = new FormData()
      data.append('file', selectedFile);
      axios.post(`${base}/fils`, data, {
  
      }).then(res => {
        console.log()
      })
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
            <Input type="file" name="file" onChange={onChangeHandler} />
            <Button buttonStyle='btn--outline2' onClick={onClickHandler}>Upload File</Button>
          </FormContainer>
          <OnSubmitButton id="costumeBtnStyle" type="submit" onClick={clickHandler}>CREATE PROJECT</OnSubmitButton>
          <MutedLink href="#">GO  TO PROJECTS? <BoldLink href="/projects"> Projects</BoldLink></MutedLink>
        </StyledContainer>
      </>
    )
  }

  export default CreateForm;
