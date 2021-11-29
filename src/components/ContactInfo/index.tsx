import "./index.css";
import Contact from "../../types/Contact";
import { Box, Divider, Grid, Typography } from "@material-ui/core";

interface ContactProps {
    handleClickContact(event: any): void;
    contact: Contact;
}

const style = {
    width: 75,
    height: 75,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
};

/**
 * Contact info elements
 * @param props
 * @returns ContactInfo UI elements
 */
const ContactInfo: React.FC<ContactProps> = (props) => {
    var contactName = "";
    var contactImage = "";
    if (props.contact !== undefined && props.contact.id !== undefined) {
        contactName = props.contact.name;
        contactImage = props.contact.userImage;
    }

    return (
        <div className="contactInfo" onClick={props.handleClickContact}>
            
            <Grid container className="contactGrid">
                <Grid lg={2} sm={2} container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <Box sx={style}>
                            <img src={contactImage} alt={contactName} width="75" height="75" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid lg={10} sm={10} spacing={2} className="contactInfo" alignItems="center" justifyContent="center">
                    <Grid item lg={12} sm={12} alignItems="center" justifyContent="center">
                        <Typography className="contactName" variant="h4" >
                            {contactName}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} sm={12}/>
            <Grid item lg={12} sm={12}/>
            <Grid item lg={12} sm={12}/>
            <Grid item lg={12} sm={12}/>
            <Divider/>
        </div>
    );
}

export default ContactInfo;