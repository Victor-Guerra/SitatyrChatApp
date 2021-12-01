import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import ContactInfo from "../../components/ContactInfo";
import Contact from "../../types/Contact";
import Message from "../../types/Message";
import Chat from "../Chat/Chat";

interface ListState {
  contacts: Contact[];
  messages: Message[];
  activeChatContact: Contact;
  isChatActive: Boolean;
  user: Contact;
}

export default class ChatView extends Component<{}, ListState> {
  state = {
    contacts: [] as Contact[],
    messages: [] as Message[],
    activeChatContact: {} as Contact,
    isChatActive: false,
    user: {} as Contact,
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
        <Grid item container xs={12} md={7}>
          {this.state.isChatActive ? (
            <Chat
              contact={this.state.activeChatContact}
              user={this.state.user}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }

  componentDidMount = () => {
    var contacts: Contact[] = [];
    let messages: Message[] = [];
    let activeChatContact: any[] = [];

    var contact1: Contact = {
      id: "1",
      email: "mhwi@tec.mx",
      name: "Elder dragon Velkhana CHAT",
      username: "ArchVelkhana",
      userImage: "https://picsum.photos/100?1",
      birthday: "2019-10-08",
      age: 256,
      nationality: "Asterian",
      preferredMusic: "Classic",
      status: "Alive",
    };
    var contact2: Contact = {
      id: "2",
      email: "mhw@tec.mx",
      name: "Elder dragon Safijiiva CHAT",
      username: "Safijiiva381",
      userImage: "https://picsum.photos/100?2",
      birthday: "2019-12-05",
      age: 419,
      nationality: "Asterian",
      preferredMusic: "Classic",
      status: "Alive",
    };

    let user: Contact = {
      id: "3",
      email: "polopolo@tec.mx",
      name: "Marco y ya",
      username: "Polo",
      userImage: "https://picsum.photos/100?3",
      birthday: "2019-12-05",
      age: 1,
      nationality: "Mexicano de corazon",
      preferredMusic: "Emo",
      status: "Alive",
    };

    let message1: Message = {
      id: "1",
      idSender: "1",
      idReceiver: "3",
      messageBody: "TE ODIO CON TODO MI CORAZON",
    };
    let message2: Message = {
      id: "2",
      idSender: "3",
      idReceiver: "1",
      messageBody: "YO TE AMO CON TODO MI CORAZON",
    };
    let message3: Message = {
      id: "3",
      idSender: "1",
      idReceiver: "3",
      messageBody: "ok + dont care + didnt ask + ratio",
    };

    contacts.push(contact1);
    contacts.push(contact2);

    messages.push(message1);
    messages.push(message2);
    messages.push(message3);

    // activeChatContact = this.state.contacts.filter((con) => {
    //   return con.id == this.state.activeChatContact.toString();
    // });
    this.setState({
      contacts,
      messages,
      // activeChatContact: activeChatContact[0],
      user,
    });
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
