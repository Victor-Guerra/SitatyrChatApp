import React from "react";
import "./index.css";
import { AppBar, Box, IconButton, Toolbar, Typography, } from "@material-ui/core";
import Chat from "@material-ui/icons/Chat";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { Link } from "react-router-dom";

/**
 * Navigation Bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="navbar">
                <Toolbar variant="dense">
                    <Box display='flex' flexGrow={1}>
                        <Link className="login-link" to="/chat">
                            <Typography variant="h6" color="inherit" component="div">
                                Chats activos
                            </Typography>
                        </Link>
                        <Link className="login-link" to="/chat">
                            <IconButton>
                                <Chat/>
                            </IconButton>
                        </Link>
                        <Link className="contact-list-link" to="/contactos">
                            <Typography variant="h6" color="inherit" component="div">
                                Contactos
                            </Typography>
                        </Link>
                        <Link className="contact-list-link" to="/contactos">
                            <IconButton>
                                <ContactsOutlinedIcon/>
                            </IconButton>
                        </Link>
                    </Box>
                    <Typography variant="h6" color="inherit" component="div">
                        Logout
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;