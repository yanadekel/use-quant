import {Container, Typography, Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./style.css";

import React from 'react'

const  Bunner = ()=> {
  return (
    <div className ="file-bunner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              No matrix, press on file for see matrix
            </Typography>
            <Button className="file-button" component={Link} to="/projects">
              Back To Projects
            </Button>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  )
}

export default Bunner;
