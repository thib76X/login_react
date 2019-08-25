import React from 'react';
import {Grid, CssBaseline, makeStyles} from '@material-ui/core';
import Header from './components/header/Header';
import Content from './components/content/Content';
import {AppStyle} from "./assets/jss/AppStyles";

const myStyle = makeStyles(AppStyle);

function App() {
  const classes = myStyle()
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={ classes.gridContainer}>
        <Grid item className={ classes.gridHeader} xs={12}>
          <Header/>
        </Grid>
        <Grid item className={ classes.gridContent} xs={12}>
          <Content/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
