import React, { Component } from "react";
import ContactInfo from "../../components/ContactInfo";
import Contact from "../../types/Contact";

interface ListState {
  contacts: Contact[];
}

export default class ChatView extends Component<{}, ListState> {
  state = {
    contacts: [] as Contact[],
  };

  render() {
    let contactsToRender: any[] = [];
    this.state.contacts.forEach((contact) => {
      contactsToRender.push(
        <ContactInfo contact={contact} handleClickContact={this.openChat} />
      );
    });
    return contactsToRender;
  }

  componentDidMount = () => {
    var contacts: Contact[] = [];
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
    contacts.push(contact1);
    contacts.push(contact2);
    this.setState({ contacts });
  };

  openChat = (event: any) => {
    console.log("me abri owo");
  };
}
