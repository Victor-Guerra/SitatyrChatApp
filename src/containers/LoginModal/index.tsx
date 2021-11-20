import React from "react";
import LoginModal from "../../components/LoginModal";
import withRouter from 'react-router'

interface LoginState {
    isUserValid: boolean;
    userName: string;
    password: string;
    authenticationFailed: boolean;
    modalOpen: boolean;
}

/** 
 * Header Container
 * @extends {Component<{}, State>}
 */
class LoginModalContainer extends React.Component<{},LoginState> {
    state = {
        isUserValid: false,
        userName: "",
        password: "",
        authenticationFailed: false,
        modalOpen : true
    }

    /** 
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <LoginModal 
            handleClose={this.handleClose} 
            isUserValid={this.state.isUserValid} 
            userName={this.state.userName} 
            password={this.state.password} 
            authenticationFailed={this.state.authenticationFailed} />
        )
    }

    handleClose= (event: any) => {
        this.setState({modalOpen : false})
    }
}
export default LoginModalContainer;
