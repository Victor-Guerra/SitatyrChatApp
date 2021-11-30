import { Switch, Route } from "react-router-dom";
import LoginModalContainer from "../../containers/LoginModal";
import ContactsList from "../../containers/ContactsList";
import ChatView from "../../containers/ChatView/ChatView";

interface RoutesProps {
  openContact(event: any): void;
}

/**
 * Routes
 * @returns Routes
 */
const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <Switch>
      <Route path="/contactos">
        <ContactsList openContact={props.openContact} />
      </Route>
      <Route path="/chat">
        <ChatView />
      </Route>
    </Switch>
  );
};

export default Routes;
