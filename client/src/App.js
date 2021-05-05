import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (<>
    <BrowserRouter>
      <div className="AppHeader" style={{ height: "10vh" }}>
        <Navbar />
      </div>
      <div className="AppBody"style={{ height: "90vh" }}>
        <Switch>
          <Route exact path="/" exact component={HomePage}>
           
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
