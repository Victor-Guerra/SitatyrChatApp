import React from "react";
import LoginModal from "../../components/LoginModal";
import LogInService from "../../services/LogInService";
import SessionStorageHelper from "../../tools/SessionStorageHelper";

interface LoginState {
    isUserValid: boolean;
    userName: string;
    password: string;
    authenticationFailed: boolean;
    modalOpen: boolean;
    enableSubmit: boolean;
    LoginOpen: boolean;
    userNameInvalid: boolean;
    passwordInvalid: boolean;
    userNameInvalidText: string;
    passwordInvalidText: string;
    userNameModified: boolean;
    passwordModified: boolean;
    passwordShow: boolean;
    isLoggedIn: boolean;
}

/** 
 * LoginModal Container 
 * @extends {Component<Props, State>}
 */
class LoginModalContainer extends React.Component<{}, LoginState> {
    state = {
        isUserValid: false,
        userName: '',
        password: '',
        authenticationFailed: false,
        modalOpen : true,
        enableSubmit: false,
        LoginOpen: false,
        userNameInvalid: false,
        passwordInvalid: false,
        userNameInvalidText: '',
        passwordInvalidText: '',
        userNameModified: false,
        passwordModified: false,
        passwordShow: false,
        isLoggedIn: false

    }

    /** 
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <LoginModal 
            isUserValid={this.state.isUserValid} 
            userName={this.state.userName} 
            password={this.state.password} 
            authenticationFailed={this.state.authenticationFailed} 
            enableSubmit={this.state.enableSubmit}
            userNameInvalid={this.state.userNameInvalid}
            passwordInvalid={this.state.passwordInvalid}
            userNameInvalidText={this.state.userNameInvalidText}
            passwordInvalidText={this.state.passwordInvalidText}
            onUsernameChange={this.handleUsernameChange}
            onPasswordChange={this.handlePasswordChange}
            onPasswordVisible={this.handlePasswordVisible}
            passwordShow={this.state.passwordShow}
            onSubmit={this.handleSubmit}
            />
        )
    }

    /**
     * Handle submit
     * @param event event that triggered the function
     */
    handleSubmit = (event: any) => {

        this.setState({ enableSubmit : false, authenticationFailed : false });

        LogInService.login(this.state.userName, this.state.password)
            .then(response => {
                const jsonWebToken = response.data.token;
                const userId = response.data.id;
                console.log(jsonWebToken);
                SessionStorageHelper.updateToken(jsonWebToken.token);
                SessionStorageHelper.updateUserId(userId);
                window.location.href = "/chat";
            }).catch(error => {
                console.log(error);

                if (error.response) {
                    console.log(error.response);
                    console.log("Authentication Failed");
                    this.setState({ authenticationFailed : true, enableSubmit : true });

                }else {
                    console.log(error.request);
                }
            });
    }

    /**
     * Handles if password is visible or not
     * @param event event that triggered the fuction
     */
    handlePasswordVisible = (event: any) => {
        this.setState({ passwordShow: !this.state.passwordShow });
    }

    /**
     * Handles the username change
     * @param event event that triggered the fuction
     */
    handleUsernameChange = (event: any) => {
        let target = event.currentTarget as HTMLInputElement;
        let value = target.value;
        this.setState({ userName: value, userNameInvalid: false, userNameInvalidText: '', userNameModified: true }, () => {
            this.validateForm();
        });
    }

    /**
     * Handles password changes
     * @param event event that triggered the fuction
     */
    handlePasswordChange = (event: any) => {
        let target = event.currentTarget as HTMLInputElement;
        let value = target.value;
        this.setState({ password: value, passwordInvalid: false, passwordInvalidText: '', passwordModified: true }, () => {
            this.validateForm();
        });
    }


    /**
     * Handles closing the login
     * @param event event that triggered the fuction
     */
    handleCloseLogin = (event: any) => {
        this.setState({LoginOpen: false })
      }

    
    /**
     * Handles closing the modal
     * @param event event that triggered the fuction
     */
    handleClose= (event: any) => {
        this.setState({modalOpen : false})
    }

    /**
     * Validates the values of the form
     */
    validateForm = () => {
        if (this.state.userName === '' && this.state.userNameModified) {
            this.setState({ userNameInvalid: true, userNameInvalidText: 'Username is required' });
        }

        if (this.state.password === '' && this.state.passwordModified) {
            this.setState({ passwordInvalid: true, passwordInvalidText: 'Password is required' });
        }

        if (this.state.userName === '' || this.state.password === '') {
            this.setState({ enableSubmit : false });
        } else {
            this.setState({ enableSubmit : true });
        }
    }
}
export default LoginModalContainer;
