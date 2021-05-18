import "./style.css";
import {CircularProgress} from "@material-ui/core";

import React from 'react'

const Spinner = ()=> {
  return (
    <div className="spinner">
     <CircularProgress/> 
    </div>
  )
};

export default Spinner;
