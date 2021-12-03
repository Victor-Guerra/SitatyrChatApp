import React from "react";
import ContactModal from "../../components/ContactModal";
import Contact from "../../types/Contact";

interface ContactProps {
    closeContact(event: any): void;
    isContactVisible: boolean;
    contact: Contact;
    addNewChat(chat: Contact): void;
}

/**
 * Contact View Container
 * @extends {Component<Props, {}>}
 */
 class ContactViewContainer extends React.Component<ContactProps, {}> {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <ContactModal handleClose={this.props.closeContact} open={this.props.isContactVisible} contact={this.props.contact} addNewChat={this.props.addNewChat} />
        )
    }
}

export default ContactViewContainer;