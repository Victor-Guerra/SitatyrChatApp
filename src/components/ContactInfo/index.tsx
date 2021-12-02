import "./index.css";
import Contact from "../../types/Contact";
import { Box, Divider, Grid, Typography } from "@material-ui/core";

interface ContactProps {
  handleClickContact(event: any): void;
  contact: Contact;
}

const style = {
  width: 70,
  height: 70,
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
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
  let contactId = "";
  if (props.contact !== undefined && props.contact.id !== undefined) {
    contactName = props.contact.name;
    contactImage = props.contact.userImage;
    contactId = props.contact.id;
  }

  return (
    <div className="contactInfo" onClick={props.handleClickContact}>
      <Grid container alignItems="center" spacing={2}>
        <Grid
          item
          lg={3}
          sm={3}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Box sx={style}>
              <img
                src={contactImage}
                alt={contactName}
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          lg={9}
          sm={9}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            lg={12}
            sm={12}
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="contactName" variant="h4">
              {contactName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "10px" }} />
    </div>
  );
};

export default ContactInfo;
