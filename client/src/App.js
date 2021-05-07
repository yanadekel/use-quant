import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Account from './components/account/Account';
import AddProject from './pages/newProject/AddProject';



function App() {
  const [active, setActive] = useState("");

const signToAccount = (activeMode) =>{

  if (activeMode=== "login"){
    setActive("login");
  }
  else {
    setActive("signUp");
  }
  
}
  return (<>
    <BrowserRouter>
      <div className="AppHeader" style={{ height: "" }}>
        <Navbar signToAccount={signToAccount} />
      </div>
      <div className="AppBody"style={{ height: "" }}>
        <Switch>
          <Route exact path="/" exact component={HomePage}>
           
          </Route>
          <Route path="/signToAccount" >
           <Account appActive={active}/>
          </Route>
          <Route path="/addProject" >
            <AddProject/>
          </Route>
          <Route path="/projects" >
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
