import React from 'react';
import {Dialog as DialogBis, Button, DialogTitle, DialogContent, DialogActions, DialogContentText} from "@material-ui/core";

export function Dialog({openState, handleClose}) {
 return(
     <DialogBis
         open={openState}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
     >
         <DialogTitle id="alert-dialog-title">{"INTERNSHIP ABROAD IN REACT NATIVE"}</DialogTitle>
         <DialogContent>
             <DialogContentText id="alert-dialog-description">
                 Phasellus magna augue, tempus id justo id, dignissim egestas urna. Mauris malesuada commodo felis. Cras mollis a urna placerat congue.
             </DialogContentText>
         </DialogContent>
         <DialogActions>
             <Button onClick={handleClose} color="primary">
                 OK
             </Button>
             <Button onClick={handleClose} color="primary" autoFocus>
                CANCEL
             </Button>
         </DialogActions>
     </DialogBis>
 )
}
