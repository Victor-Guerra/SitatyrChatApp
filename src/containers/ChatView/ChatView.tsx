import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ContactInfo from "../../components/ContactInfo";
import ContactsService from "../../services/ContactsService";
import SessionStorageHelper from "../../tools/SessionStorageHelper";
import Contact from "../../types/Contact";
import Message from "../../types/Message";
import Chat from "../Chat/Chat";

interface ListState {
  contacts: Contact[];
  messages: Message[];
  activeChatContact: Contact;
  isChatActive: boolean;
  userId: string;
}

interface ChatProps {
  activeChats: Contact[];
}

export default class ChatView extends Component<ChatProps, ListState> {
  state = {
    contacts: [] as Contact[],
    messages: [] as Message[],
    activeChatContact: {} as Contact,
    isChatActive: false,
    userId: "0",
  };

  render() {
    let contactsToRender: any[] = [];
    if (this.props.activeChats.length === 0) {
      contactsToRender = [
        <Typography variant="h4">No active chats</Typography>,
      ];
    } else {
      this.props.activeChats.forEach((contact) => {
        contactsToRender.push(
          <ContactInfo contact={contact} handleClickContact={this.openChat} />
        );
      });
    }

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
  };

  openChat = (event: any) => {
    console.log(event);
    let target = event.currentTarget as HTMLSelectElement;
    let value = target.textContent;
    console.log(value);
    var indContact = this.props.activeChats.filter(
      (separateContact) => separateContact.name === value
    )[0];
    console.log("Changed to: " + indContact.id);

    let activeChatContact: any[] = [];
    activeChatContact = this.props.activeChats.filter((con) => {
      return con.id === indContact.id;
    });

    this.setState({
      activeChatContact: activeChatContact[0],
      isChatActive: true,
    });
  };
}
