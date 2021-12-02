import {Switch, Route} from 'react-router-dom'
import LoginModalContainer from '../../containers/LoginModal';
import ContactsList from '../../containers/ContactsList';
import MainPage from '../../containers/LoginModal/MainPage';

interface RoutesProps{
    openContact(event: any) : void;
    userId: number;
}

/**
 * Routes
 * @returns Routes 
 */
const Routes : React.FC<RoutesProps>= (props) => {
    return (
        <Switch>
            <Route exact path = "/"><LoginModalContainer /></Route>
            <Route path="/chats"><MainPage/></Route>
            <Route path="/contactos"><ContactsList openContact={props.openContact}/></Route>
        </Switch>
    );
};

export default Routes;