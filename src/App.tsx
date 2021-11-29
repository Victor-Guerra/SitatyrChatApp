import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import Routes from './components/Routes';
import Contact from './types/Contact';
import ContactView from './containers/ContactView';

interface AppState {
  contactOpen: boolean;
  contact: Contact;
}

/**
 * App Container
 * @extends {Component<{}, State>}
 */
class App extends React.Component<{}, AppState> {
  state = {
    contactOpen: false,
    contact: {} as any,
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <BrowserRouter>
          <Header/>
          <Routes openContact={this.handleOpenContact}/>
          <ContactView isContactVisible={this.state.contactOpen} closeContact={this.handleCloseContact} contact={this.state.contact}/>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    this.setState({ contact: {} as any});
  }

  /**
   * Sets the state contactOpen to false 
   * @param event
   */
  handleCloseContact = (event: any) => {
    this.setState({ contactOpen: false });
  }
  /**
   * Sets the state contact to the contact sent as event and contactOpen to true
   * @param event 
   */
  handleOpenContact = (event: any) => {
    this.setState({ contact: event, contactOpen: true });
  }
}

export default App;
