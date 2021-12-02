import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import ContactInfo from "../../components/ContactInfo";
import ContactsService from "../../services/ContactsService";
import SessionStorageHelper from "../../tools/SessionStorgeHelper";
import Contact from "../../types/Contact";
import Message from "../../types/Message";
import Chat from "../Chat/Chat";

interface ListState {
  contacts: Contact[];
  messages: Message[];
  activeChatContact: Contact;
  isChatActive: Boolean;
  userId: string;
}

export default class ChatView extends Component<{}, ListState> {
  state = {
    contacts: [] as Contact[],
    messages: [] as Message[],
    activeChatContact: {} as Contact,
    isChatActive: false,
    userId: "0",
  };

  render() {
    let contactsToRender: any[] = [];
    this.state.contacts.forEach((contact) => {
      contactsToRender.push(
        <ContactInfo contact={contact} handleClickContact={this.openChat} />
      );
    });

    return (
      <Grid container style={{ marginTop: 5 }}>
        <Grid item container alignContent="flex-start" xs={12} md={4}>
          {contactsToRender}
        </Grid>
        <Grid item container xs={12} md={8}>
          {this.state.isChatActive ? (
            <Chat
              contact={this.state.activeChatContact}
              userId={this.state.userId}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }

  componentDidMount = () => {

    const userId = SessionStorageHelper.getUserId();

    /**
     * Gets all the contacts from the Contact service and sets it into the state.
     */
     ContactsService.getAll(parseInt(SessionStorageHelper.getUserId()))
     .then((response) => {
       const contacts: any = response.data;
       console.log(contacts);
       this.setState({ contacts, userId });
     })
     .catch((error) => {
       console.log(error);
     });

    // var contact1: Contact = {
    //   id: "1",
    //   email: "mhwi@tec.mx",
    //   name: "Elder dragon Velkhana CHAT",
    //   username: "ArchVelkhana",
    //   userImage: "https://picsum.photos/100?1",
    //   birthday: "2019-10-08",
    //   age: 256,
    //   nationality: "Asterian",
    //   preferredMusic: "Classic",
    //   status: "Alive",
    // };
    // var contact2: Contact = {
    //   id: "2",
    //   email: "mhw@tec.mx",
    //   name: "Elder dragon Safijiiva CHAT",
    //   username: "Safijiiva381",
    //   userImage: "https://picsum.photos/100?2",
    //   birthday: "2019-12-05",
    //   age: 419,
    //   nationality: "Asterian",
    //   preferredMusic: "Classic",
    //   status: "Alive",
    // };

    // let user: Contact = {
    //   id: "3",
    //   email: "polopolo@tec.mx",
    //   name: "Marco y ya",
    //   username: "Polo",
    //   userImage: "https://picsum.photos/100?3",
    //   birthday: "2019-12-05",
    //   age: 1,
    //   nationality: "Mexicano de corazon",
    //   preferredMusic: "Emo",
    //   status: "Alive",
    // };


    // activeChatContact = this.state.contacts.filter((con) => {
    //   return con.id == this.state.activeChatContact.toString();
    // });
    // this.setState({
    //   contacts,
    //   messages,
    //   // activeChatContact: activeChatContact[0],
    //   user,
    // });
  };

  openChat = (event: any) => {
    console.log(event);
    let target = event.currentTarget as HTMLSelectElement;
    let value = target.textContent;
    console.log(value);
    var indContact = this.state.contacts.filter(
      (separateContact) => separateContact.name === value
    )[0];
    console.log("Changed to: " + indContact.id);

    let activeChatContact: any[] = [];
    activeChatContact = this.state.contacts.filter((con) => {
      return con.id == indContact.id;
    });

    this.setState({
      activeChatContact: activeChatContact[0],
      isChatActive: true,
    });
  };
}
