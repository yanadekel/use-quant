import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import axios from "axios";
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Account from './components/account/Account';
import AddProject from './pages/newProject/AddProject';
import ProjectsTable from './pages/Projects/ProjectsTable';
import File from './components/Matrix/File';
// import Bunner from './components/Bunner/Bunner';




const App = () => {
  console.log("App Component")
  const base = "/api/useQuant/projects";
  // const qActive = "/active";
  const [active, setActive] = useState("");
  const [projects, setProjects] = useState([]);
  // const [activePro, setActivePro] = useState([]);
  const [file, setFile] = useState('');




  const fetchProjects = async () => {
    console.log("App.fetchProjects function")
    try {
      const response = await axios.get(`${base}`);
      const data = ((response && response.data));
      // console.log(data)
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  
  // const fetchActiveProjects = async () => {
    //   try {
      //     const response = await axios.get(`${base}${qActive}`);
      //     const data = ((response && response.data) || []);
      //     console.log(data)
      //     setActivePro(data)
      //   } catch (error) {
        //     console.log(error);
        //   }
        // }
        
        
        
        const signToAccount = async (activeMode) => {
          console.log("App.signToAccount function")
          if (activeMode === "login") {
            console.log("App.ActiveMode => login")
            setActive("login");
          }
          if (activeMode === "signup") {
            console.log("App.ActiveMode => sign up")
            setActive("signUp");
          }
          
        }
        
        const updateProjects = async (newProject) => {
          console.log("App.updateProjects function")
          try {
            const response = await axios.get(`${base}`);
            const data = ((response && response.data));
            // console.log(data)
            setProjects(data)
          } catch (error) {
            console.log(error);
          }
        }
        
        const updateFileFromApp = (data) => {
          console.log("App.updateFileApp function")
          if (data!== file) {
            console.log("App.updateFileApp fileObj")
            console.log(data)
            setFile(data);
            console.log("App.updateFileApp file(fileObj)")
            console.log(file)
          }
          
        }
        
        
        
        useEffect(() => {
          fetchProjects();
          // fetchActiveProjects();
      
        }, [active, file]);
        
        
        
        
        
        
        
        return (<>
    <BrowserRouter>
      {/* <div className="AppHeader" style={{ height: "" }}> */}
      <Navbar signToAccount={signToAccount} />
      {/* </div> */}
      {/* <div className="AppBody" style={{ height: "" }}> */}
      <Switch>
        <Route exact path="/" >
          <HomePage signToAccount={signToAccount} />
        </Route>
        <Route path="/signToAccount" >
          <Account appActive={active} />
        </Route>
        <Route path="/addProject" >
          <AddProject updateProjects={updateProjects} />
        </Route>
        <Route path="/projects" >
          <ProjectsTable projects={projects} updateFileFromApp={updateFileFromApp} />
        </Route>
        <Route path="/matrix" >
          <File appFile={file} />
        </Route>
      </Switch>
      {/* </div> */}
    </BrowserRouter>
  </>

  );
}

export default App;
