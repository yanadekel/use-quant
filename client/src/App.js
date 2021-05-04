import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/Navbar';

function App() {

  return (<>
    <BrowserRouter>
      <div className="AppHeader" style={{width:"100%", height: "10vh" }}>
        <Navbar />
      </div>
      <div className="AppBody"style={{width:"100%", height: "90vh" }}>
        <Switch>
          <Route exact path="/" >
           
          </Route>
          <Route path="/bankUsers" >
           
          </Route>
          <Route path="/bankUser" >
           
          </Route>
          <Route path="/adduser" >
         
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </>
    
  );
}

export default App;
