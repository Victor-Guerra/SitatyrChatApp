import {Switch, Route} from 'react-router-dom'
import LoginModalContainer from '../../containers/LoginModal';
import { withRouter} from 'react-router';
import MainPage from '../../containers/LoginModal/MainPage';

/*
interface RoutesProps{
    openContact(event: any) : void;
} */

const Rutas = () => {
    return (
        <Switch> 
            <Route path = "/"><LoginModalContainer/></Route>
            <Route path = "/main"><MainPage/></Route>
        </Switch>
    );
};

export default Rutas;