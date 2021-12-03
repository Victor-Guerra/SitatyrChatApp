import React from "react";
import "./index.css";
import { AppBar, Box, Button, Toolbar, } from "@material-ui/core";
import Chat from "@material-ui/icons/Chat";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { useHistory } from "react-router-dom";

/**
 * Navigation Bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {

    const history = useHistory();

    const handleContactosOnClick = (event: any) => {
        history.push("/contactos");
    }

    const handleChatsOnClick = (event: any) => {
        history.push("/chat");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="navbar">
                <Toolbar variant="dense">   
                    <Box display='flex' flexGrow={1}> 
                        <Button id="botonChat" className="login-link" color="inherit" onClick={handleChatsOnClick} endIcon={<Chat/>}>
                            Chats activos
                        </Button>
                    </Box>  
                    <Button id="botonContactos" className="contact-list-link" color="inherit" onClick={handleContactosOnClick} endIcon={<ContactsOutlinedIcon/>}>
                        Contactos
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;