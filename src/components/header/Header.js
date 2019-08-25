import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Menu, AccountCircle} from '@material-ui/icons'
import {Dialog} from '../dialog/Dialog'

export default function Header() {
    const [open, setOpen]= React.useState(false);
    const handleOnclickDialog = ()=>{
        setOpen(open===false?true:false);
    }

    return(
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleOnclickDialog}>
                        <Menu/>
                    </IconButton>
                    <div style={{width:'300px'}}>
                        <Typography variant="h6" noWrap>
                            Login & Material UI
                        </Typography>
                    </div>
                    <div style={{display:'flex', width:'100%', justifyContent:'flex-end'}}>
                        <IconButton edge="start" color="inherit" onClick={handleOnclickDialog}>
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Dialog openState={open} handleClose={()=>{setOpen(false)}}/>
        </React.Fragment>
        )

}