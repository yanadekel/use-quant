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
  const base = "/api/useQuant/projects";
  // const qActive = "/active";
  // const [activePro, setActivePro] = useState([]);
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("");
  const [file, setFile] = useState('');
  const [userToken, setUserToken] = useState(null);
  const [errMsg, setErrMsg] = useState(null);



  const history = useHistory();

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${base}`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      const data = ((response && response.data));
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

  const updateProjects = async () => {
    console.log("App.updateProjects function")
    try {
      const response = await axios.get(`${base}`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      const data = ((response && response.data));
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  }

  const updateFileFromApp = (data) => {
    console.log("App.updateFileApp function")
    if (data !== file) {
      console.log("App.updateFileApp fileObj")
      console.log(data)
      setFile(data);
      console.log("App.updateFileApp file(fileObj)")
      console.log(file)
    }

  }



  useEffect(() => {
    // fetchActiveProjects();
    try {
      const token = sessionStorage.getItem("token");
      let parsedToken;
      if (token) {
        parsedToken = JSON.parse(token);
        setUserToken(parsedToken);
        fetchProjects();
      } else {
        history.push("/");
      }

    } catch (error) {
      console.log("error:", error);

      setErrMsg("Error occured please try again.");
    }

  }, [active, file, projects]);




  return (<>
    <BrowserRouter>
      <Navbar signToAccount={signToAccount} />
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
    </BrowserRouter>
  </>

  );
}

export default App;
