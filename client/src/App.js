import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Account from './components/account/Account';
import AddProject from './pages/newProject/AddProject';
import ProjectsTable from './pages/Projects/ProjectsTable';



const App= () =>{
  const [active, setActive] = useState("");

  const signToAccount =async (activeMode) => {

    if (activeMode === "login") {
      console.log("App.ActiveMode => login")
      await setActive("login");
    }
    if (activeMode=== "signup") {
      console.log("App.ActiveMode => sign up")
      await setActive("signUp");
    }
    
  }
  
  useEffect(() => {
    signToAccount();
    console.log("App.useEffect " + active)
  }, [active]);

  return (<>
    <BrowserRouter>
      <div className="AppHeader" style={{ height: "" }}>
        <Navbar signToAccount={signToAccount} />
      </div>
      <div className="AppBody" style={{ height: "" }}>
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
            <ProjectsTable/>
          </Route>
          <Route path="/heatTable" >

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </>

  );
}

export default App;
