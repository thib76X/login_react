import React from 'react';
import {Paper, makeStyles, Card, CardContent, InputAdornment,  Button, Grid, Typography, TextField, Slide} from '@material-ui/core';
import {ContentStyles} from "../../assets/jss/components/content/ContentStyles";
import {AccountCircle, Mail, Lock} from "@material-ui/icons"
const myStyle = makeStyles(ContentStyles)

export default function Content() {
    const classes = myStyle();
    const [side, setSide] = React.useState(false);
    const [transition, setTransition] = React.useState(true)

    const handleChangeSide = (value)=>{
        setSide(value);
        if(side!==value) {
            setTransition(false);
            setTimeout(() => {
                    setTransition(true)
                }, 500
            );
        }
    }
    const renderForm = (title)=>{
        return(
            <form className={classes.centerColumn}>
                <Typography>{title===true?'SIGN UP':'LOGIN'}</Typography>
                {title===true? <TextField
                    label="Email"
                    margin="normal"
                    placeholder="Email..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Mail />
                            </InputAdornment>
                        ),
                    }}
                />:null}

                <TextField
                    label="Username"
                    margin="normal"
                    placeholder="Username..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Password"
                    margin="normal"
                    placeholder="Password..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" color='primary'>Submit</Button>
            </form>
        )
    };

    const renderButton = ()=>{
        return(
           <React.Fragment>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{marginBottom:"10px", width: '100px'}}
                        onClick={()=>handleChangeSide(true)}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{width: '100px'}}
                        onClick={()=>handleChangeSide(false)}
                    >
                        Login
                    </Button>
           </React.Fragment>
            );
    };

    return(
        <Paper className={classes.paperHeight}>
            <Typography variant="overline" gutterBottom>
                CLICK ON <strong>SIGN UP</strong> OR <strong>LOGIN</strong>
            </Typography>
            <Card style={{width:'600px', height:'400px'}}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Slide direction={side===true?"left":"right"} in={transition} timeout={500}>
                            <CardContent className={classes.centerColumn}>
                                    {side===true?renderForm(true):renderButton()}
                            </CardContent>
                        </Slide>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                            <Slide direction={side===true?"right":"left"} in={transition} timeout={500}>
                                <CardContent className={classes.centerColumn}>
                                    {side===true?renderButton():renderForm(false)}
                                </CardContent>
                            </Slide>
                    </Grid>
                </Grid>
            </Card>
        </Paper>
    )

}