import React, { useState, useEffect } from 'react'
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Account from './components/account/Account';
import AddProject from './pages/newProject/AddProject';
import ProjectsTable from './pages/Projects/ProjectsTable';
import File from './components/Matrix/File';




const App = () => {
  const [active, setActive] = useState("");
  const base = "/api/useQuant/projects";
  const qActive = "/active";
  const [projects, setProjects] = useState([]);
  const [activePro, setActivePro] = useState([]);
  const [file, setFile] = useState("");
  const[fileToggle, setFileToggle]=useState(false);




  const fetchProjects = async () => {

    try {
      const response = await axios.get(`${base}`);
      const data = ((response && response.data) || []);
      console.log(data)
      setProjects(data)
    } catch (error) {
      console.log(error);
    }
  };


  const fetchActiveProjects = async () => {
    try {
      const response = await axios.get(`${base}${qActive}`);
      const data = ((response && response.data) || []);
      console.log(data)
      setActivePro(data)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchFile = async (fileName) => {
    console.log(fileName)
    try {
      const response = await axios.get(`/api/useQuant/fils/file/${fileName}`);
      const data = ((response && response.data));
      console.log(data[0]);
      setFile(data[0]);
      setFileToggle(true);
    } catch (error) {
      console.log(error);
    }
  }

  const signToAccount = async (activeMode) => {

    if (activeMode === "login") {
      console.log("App.ActiveMode => login")
      await setActive("login");
    }
    if (activeMode === "signup") {
      console.log("App.ActiveMode => sign up")
      await setActive("signUp");
    }

  }


  useEffect(() => {
    signToAccount();
    fetchProjects();
    // fetchActiveProjects();
  }, [active]);

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
            <AddProject />
          </Route>
          <Route path="/projects" >
            <ProjectsTable projects={projects} activeProjects={activePro} fetchFile={fetchFile}/>
          </Route>
          <Route path="/matrix" >
            {fileToggle?(<File file={file}/>):("")}
            
          </Route>
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  </>

  );
}

export default App;
