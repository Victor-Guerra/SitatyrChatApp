import { Grid } from "@material-ui/core";
import React from "react";
import ContactInfo from "../../components/ContactInfo";
import ContactsService from "../../services/ContactsService";
import Contact from "../../types/Contact";
import SessionStorageHelper from "../../tools/SessionStorageHelper";

interface ListState {
  contact: Contact[];
}

interface ContactProps {
  openContact(event: any): void;
}

/**
 * Contacts List Container
 * @extends {Component<Props,ListState>}
 */
class ContactsList extends React.Component<ContactProps, {}, ListState> {
  state = {
    contacts: [] as Contact[],
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    var contactsList: any[] = [];
    this.state.contacts.forEach((contact) => {
      contactsList.push(
        <ContactInfo contact={contact} handleClickContact={this.seeContact} />
      );
    });
    return (
      <Grid container style={{ marginTop: 5 }}>
        <Grid item container xs={12} md={4}>
          {contactsList}
        </Grid>
      </Grid>
    );
  }

  /**
   * Runs when the component is mounted
   */
  componentDidMount() {
    /**
     * Gets all the contacts from the Contact service and sets it into the state.
     */
    ContactsService.getAll(parseInt(SessionStorageHelper.getUserId()))
      .then((response) => {
        const contacts: any = response.data;
        console.log(contacts);
        this.setState({ contacts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Sends the selected contact into openContact.
   * @param event
   */
  seeContact = (event: any) => {
    console.log(event);
    let target = event.currentTarget as HTMLSelectElement;
    let value = target.textContent;
    console.log(value);
    var indContact = this.state.contacts.filter(
      (separateContact) => separateContact.name === value
    )[0];
    console.log("Changed to: " + indContact.id);
    this.props.openContact(indContact);
  };
}

export default ContactsList;
