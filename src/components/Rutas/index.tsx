import {Switch, Route} from 'react-router-dom'
import LoginModalContainer from '../../containers/LoginModal';

/*
interface RoutesProps{
    openContact(event: any) : void;
} */

const Rutas : React.FC<{}>= (props) => {
    return (
        <Switch>
            <Route path="/" component={LoginModalContainer} />
        </Switch>
    );
};

export default Rutas;