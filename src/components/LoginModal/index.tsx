import React from "react";
import "./index.css";
import { Button, Box, Typography, Modal, Grid, IconButton, TextField } from "@material-ui/core";


interface LoginProps {
    isUserValid: boolean;
    userName: string;
    password: string;
    authenticationFailed: boolean;
    handleClose (event: any ) : void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LoginModal: React.FC<LoginProps> = (props) => {
    var errorMessage: any;
    /*
    if (props.authenticationFailed === true) {
        errorMessage = <Alert severity="error">Wrong credentials!</Alert>;*/

    return (
        <Modal
            open={true}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <Typography>Aqui va el pene</Typography>
                </Grid>
                <Grid item lg={8}>
                    <Typography>Aqui va la quesadilla </Typography>
                </Grid>    
            </Grid>
            </Box>
        </Modal>
    );

};
export default LoginModal;