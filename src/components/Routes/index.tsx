import {Switch, Route} from 'react-router-dom'
import LoginModalContainer from '../../containers/LoginModal';
import ContactsList from '../../containers/ContactsList';

interface RoutesProps{
    openContact(event: any) : void;
}

/**
 * Routes
 * @returns Routes 
 */
const Routes : React.FC<RoutesProps>= (props) => {
    return (
        <Switch>
            <Route path="/contactos"><ContactsList openContact={props.openContact}/></Route>
        </Switch>
    );
};

export default Routes;