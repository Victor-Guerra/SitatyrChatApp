import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/Rutas';
import LoginModalContainer from './containers/LoginModal';

/*
interface AppState {
  contactOpen: boolean;
}*/

class App extends React.Component<{},{}> {
  state = {
    contactOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <LoginModalContainer />
      </React.Fragment>
    );
  }
/*
  handleOpenContact = (event: any) => {
    this.setState({ contactOpen: true })
  }*/
  /*
  */
}

export default App;
