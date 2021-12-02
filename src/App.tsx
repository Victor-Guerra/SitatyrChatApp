import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/Rutas';
import LoginModalContainer from './containers/LoginModal';


/**
 * Header Container
 * @extends {Component<Props>}
 */
class App extends React.Component<{},{}> {
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <BrowserRouter>
        <Rutas/>
        </BrowserRouter> 
      </React.Fragment>
    );
  }
}

export default App;
