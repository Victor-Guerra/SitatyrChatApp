import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import Routes from "./components/Routes";
import Contact from "./types/Contact";
import ContactView from "./containers/ContactView";

interface AppState {
  contactOpen: boolean;
  contact: Contact;
  userId: number;
  activeChats: Contact[];
}

/**
 * App Container
 * @extends {Component<{}, State>}
 */
class App extends React.Component<{}, AppState> {
  state = {
    contactOpen: false,
    contact: {} as any,
    userId: 0,
    activeChats: [] as Contact[],
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes
            openContact={this.handleOpenContact}
            userId={this.state.userId}
            activeChats={this.state.activeChats}
          />
          <ContactView
            isContactVisible={this.state.contactOpen}
            closeContact={this.handleCloseContact}
            contact={this.state.contact}
            addNewChat={this.addNewChat}
          />
        </BrowserRouter>
      </React.Fragment>
    );
  }

  /**
   * Runs when the component is mounted
   */
  componentDidMount = () => {
    this.setState({ contact: {} as any });
  };

  /**
   * Sets the state contactOpen to false
   * @param event
   */
  handleCloseContact = (event: any) => {
    this.setState({ contactOpen: false });
  };
  /**
   * Sets the state contact to the contact sent as event and contactOpen to true
   * @param event
   */
  handleOpenContact = (event: any) => {
    this.setState({ contact: event, contactOpen: true });
  };

  /**
   * Add a new chat/contact to the active chats
   * @param chat the new contact to add to the active chats
   */
  addNewChat = (chat: Contact) => {
    let activeChats = this.state.activeChats;
    activeChats.push(chat);

    this.setState({ activeChats });
  };
}

export default App;
