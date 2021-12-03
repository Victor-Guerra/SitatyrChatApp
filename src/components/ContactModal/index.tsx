import { Box, Button, Grid, Modal, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Contact from "../../types/Contact";
import "./index.css";

interface ContactProps {
    handleClose(event: any): void;
    open: boolean;
    contact: Contact;
    addNewChat(chat: Contact): void;
}

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    borderRadius: 40,
    boxShadow: 24,
    outline: "none",
    p: 4,
};

const imageStyle = {
    width: 90,
    height: 90,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
};

/**
 * Contact Modal elements
 * @param props 
 * @returns ContactModal UI elements
 */
 const ContactModal: React.FC<ContactProps> = (props) => {

    const history = useHistory();

    var contact_name = "";
    var contact_username = "";
    var contact_userImage = "";
    var contact_birthday = "";
    var contact_age = 0;
    var contact_nationality = "";
    var contact_prefMusic = "";

    if (props.contact !== undefined && props.contact.id !== undefined) {
        contact_name = props.contact.name;
        contact_username = props.contact.username;
        contact_userImage = props.contact.userImage;
        contact_birthday = props.contact.birthday;
        contact_age = props.contact.age;
        contact_nationality = props.contact.nationality;
        contact_prefMusic = props.contact.preferredMusic;
    }

    const handleStartChat = (e: any) => {
        props.addNewChat(props.contact);
        props.handleClose(e)
        history.push("/chat");
    }

    return (
        <Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div className="contactView">
                    <Grid container className="contactGrid" spacing={2}>
                        <Grid item lg={12} sm={12}/>
                        <Grid item lg={1} sm={1}/>
                        <Grid item lg={3} sm={3} container>
                            <Grid item lg={12} sm={12}>
                                <Box sx={imageStyle}>
                                    <img src={contact_userImage} alt={contact_name}/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} sm={3} container>
                            <Grid item lg={12} sm={12}>
                                <Typography className="contactData">
                                    {contact_name}
                                </Typography>
                            </Grid>
                            <Grid item lg={12} sm={12}>
                                <Typography className="contactData">
                                    {contact_username}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={5} sm={5}/>
                        <Grid item lg={12} sm={12}/>
                        <Grid item lg={8} sm={8} container>
                            <Grid item lg={12} sm={12} container>
                                <Grid item lg={6} sm={6} container>
                                    <Grid item lg={12} sm={12}>
                                        <Typography className="dataLabel">
                                            Cumpleaños:
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item lg={6} sm={6} container>
                                    <Grid item lg={12} sm={12}>
                                        <Typography className="contactData">
                                            {contact_birthday}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} sm={12} container>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="dataLabel">
                                        Edad:
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="userData">
                                        {contact_age}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} sm={12} container>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="dataLabel">
                                        Nacionalidad:
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="userData">
                                        {contact_nationality}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} sm={12} container>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="dataLabel">
                                        Música preferida:
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} sm={6}>
                                    <Typography className="userData">
                                        {contact_prefMusic}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} sm={12}/>
                            <Grid item lg={12} sm={12}/>
                        </Grid>
                        <Grid item lg={4} sm={4}>
                            <Button className="chatButton" variant="contained" onClick={handleStartChat}>
                                Iniciar chat
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Modal>
    );
};

export default ContactModal;