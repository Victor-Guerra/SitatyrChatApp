import React from "react";
import "./index.css";
import { Button, Box, Typography, Grid, TextField } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

interface LoginProps {
    isUserValid: boolean;
    userName: string;
    userNameInvalid: boolean;
    password: string;
    passwordInvalid: boolean;
    authenticationFailed: boolean;
    enableSubmit: boolean;
    userNameInvalidText: string;
    passwordInvalidText: string;
    onUsernameChange(event: any): void;
    onPasswordChange(event: any): void;
    onPasswordVisible(event: any): void;
    passwordShow: boolean;
    onSubmit(event: any): void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 30,
    p: 15,
};

const LoginModal: React.FC<LoginProps> = (props) => {
    var errorMessage: any;

    if (props.authenticationFailed === true) {
        errorMessage = <Alert severity="error">Invalid Credentials</Alert>;
    }

    return (

        <div>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid className="titleGrid" lg={12} container >
                        <Grid item lg={6} />
                        <Grid item lg={6} xs={6}>
                            <Typography variant="h2" className="loginText">Login</Typography>
                        </Grid>
                    </Grid>

                    <Grid container lg={5} spacing={2}>
                        <Grid item lg={4}>
                            <img className="imgPos" src="https://lh3.googleusercontent.com/fife/AAWUweVdKWiTnVrCk8V6w-l45hXxNknWfao19Cp0-Q0VgIIYZcnv83Hfwz5VAAl90xthZ0M2_kraQbNFAojRTDhutWt3n26p4vKLjOaahr-WOPWF7WENnuU_Q6BngieF663UdA12rc2zKE-9509og-IP-sbj-Jk91BL87rC9HaT-F2ZZ__b_HmjvtpHaVHLIbwuOBmIAcnFQ9MkyT3ljUA9nZxJBcPsxmGs6G96zfYntoHw-baIEnr_NJmpCV2kNR-60m4j7I9TLd_yDOVviBk6BA-TbmG0mXp2ShfPsimqgVPDSqdzwcf5mC8Urx3BR9HFrEm0ULdB_U0jVWVQ1p8NsKCVVIsX7-LYzwEJTHkmmkxm6utgwKQSmlEzB1pnoG2YD7YvRnh-eMG5KSCNeBx7rWl533dlwU6flEDSIwQG9pLs4uJ9PKQqyM9QZUk0m_TjLBONPXAhgiedJboY_pANivm5Lb95sLUs0kb0BWCR9Tqc7dAwot9OeK1W3DBggGxcxi8KyNa-Cyv3CEeBn7JuImuuZviWjbDkrYlTS8fGnWRNfqEMPgRUiHDt_rjHVyjcVAyNkhp-ao_s6vAfzfCnx0mh6DonCjYqxQJQHMbqDWF0qLnwNtEURJfZe7AsYDmmR1fZ5B3juy2I9OMwpPID6Vqr1zF8SRsTsTxJQm_6zwp6EUOY-o3qAAHHlhYAzQuGXuxT-iNzTN4d5GGrgfm2pxABn7YbHa4yLxPk=w1920-h902-ft" />
                        </Grid>
                    </Grid>

                    <Grid lg={7} container spacing={1}>


                        <Grid className="nameGrid" container >
                            <Grid item lg={3} />
                            <Grid item lg={5} sm={6}>
                                <TextField
                                    required
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                    value={props.userName}
                                    onChange={props.onUsernameChange}
                                    autoComplete="off"
                                    error={props.userNameInvalid}
                                    helperText={props.userNameInvalidText}
                                />
                            </Grid>

                            <Grid item lg={4} sm={6}>
                                <Typography className="nameLabel">Name</Typography>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={2} sm={6}>
                                <Typography className="passwordLabel" >Password</Typography>
                            </Grid>

                            <Grid item lg={10} sm={6}>
                                <TextField
                                    required
                                    placeholder="Password"
                                    id="outlined-basic"
                                    type={props.passwordShow ? 'text' : 'password'}
                                    label="Password"
                                    variant="outlined"
                                    value={props.password}
                                    onChange={props.onPasswordChange}
                                    error={props.passwordInvalid}
                                    helperText={props.passwordInvalidText}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={6} sm={6}>
                                <Button className="button" variant="contained" onClick={props.onSubmit} disabled={!props.enableSubmit}> Login </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );


};
export default LoginModal;