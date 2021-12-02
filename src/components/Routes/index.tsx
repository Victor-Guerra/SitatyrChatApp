import { Switch, Route } from "react-router-dom";
import LoginModalContainer from "../../containers/LoginModal";
import ContactsList from "../../containers/ContactsList";
import MainPage from "../../containers/LoginModal/MainPage";
import ChatView from "../../containers/ChatView/ChatView";
import Contact from "../../types/Contact";

interface RoutesProps {
  openContact(event: any): void;
  userId: number;
  activeChats: Contact[]
}

/**
 * Routes
 * @returns Routes
 */
const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <Switch>
      <Route path="/login">
        <LoginModalContainer/>
      </Route>
      <Route path="/chat">
        <ChatView activeChats={props.activeChats} />
      </Route>
      <Route path="/contactos">
        <ContactsList openContact={props.openContact} />
      </Route>
    </Switch>
  );
};

export default Routes;
