import React from "react";
import ContactInfo from "../../components/ContactInfo"; 
import ContactsService from "../../services/ContactsService"
import Contact from "../../types/Contact";
import { Grid } from "@material-ui/core";

interface ListState {
    contact: Contact[];
}

interface ContactProps {
    openContact(event: any): void;
}

/**
 * Contacts List Container
 * @extends {Component<Props,ListState>}
 */
class ContactsList extends React.Component<ContactProps, {}, ListState> {
    state = {
        contacts: [] as Contact[],
    };
    
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        var contactsList: any[] = [];
        this.state.contacts.forEach((contact) => {
            contactsList.push(<ContactInfo contact={contact} handleClickContact={this.seeContact}/>);
        });
        return (
            <Grid container>
                <Grid item container xs={12} md={4}>
                    {contactsList}
                </Grid>
            </Grid>
        );
    }

    componentDidMount() {

        var contacts: Contact[] = [];
        var contact1: Contact = {id: '1', email: 'mhwi@tec.mx', name: 'Elder dragon Velkhana', 
                                username: 'ArchVelkhana', userImage: 'https://picsum.photos/100?1', birthday: '2019-10-08', age: 256,
                                nationality: 'Asterian', preferredMusic: 'Classic', status: 'Alive'};
        var contact2: Contact = {id: '2', email: 'mhw@tec.mx', name: 'Elder dragon Safijiiva', 
                                username: 'Safijiiva381', userImage: 'https://picsum.photos/100?2', birthday: '2019-12-05', age: 419,
                                nationality: 'Asterian', preferredMusic: 'Classic', status: 'Alive'};
        var contact3: Contact = {id: '3', email: 'mhwi3@tec.mx', name: 'Elder dragon Fatalis', 
                                username: 'FatsDomino', userImage: 'https://picsum.photos/100?3', birthday: '2005-3-22', age: 1912, 
                                nationality: 'Oldworldean', preferredMusic: 'Metal', status: 'Alive'};
        var contact4: Contact = {id: '4', email: 'mhwi4@tec.mx', name: 'Elder dragon Alatreon', 
                                username: 'AlitasQuemadas', userImage: 'https://picsum.photos/100?4', birthday: '2009-06-07', age: 746, 
                                nationality: 'Hawaii', preferredMusic: 'Salsa', status: 'Muerto'};
        var contact5: Contact = {id: '5', email: 'mhwi5@tec.mx', name: 'Elder dragon Safijiiva', 
                                username: 'Safijiiva381', userImage: 'https://picsum.photos/100?5', birthday: '2019-12-05', age: 419, 
                                nationality: 'Asterian', preferredMusic: 'Classic', status: 'Alive'};
        var contact6: Contact = {id: '6', email: 'mhwi6@tec.mx', name: 'Elder dragon Shagaru', 
                                username: 'Shagamaga', userImage: 'https://picsum.photos/100?6', birthday: '2011-09-14', age: 518, 
                                nationality: 'Mexicano', preferredMusic: 'Bachata', status: 'Soltere'};
        var contact7: Contact = {id: '7', email: 'mhwi7@tec.mx', name: 'Elder dragon Teostra', 
                                username: 'Tostador', userImage: 'https://picsum.photos/100?7', birthday: '2007-08-08', age: 785, 
                                nationality: 'Chileno', preferredMusic: 'Cubana', status: 'Complicado'};
        contacts.push(contact1);
        contacts.push(contact2);
        contacts.push(contact3);
        contacts.push(contact4);
        contacts.push(contact5);
        contacts.push(contact6);
        contacts.push(contact7);
        this.setState({ contacts });

        /**
         * Gets all the contacts from the Contact service and sets it into the state.
         */
        /*
        ContactsService.getAll(userId: Number)
            .then((response) => {
                const contacts: any = response.data;
                console.log(contacts);
                this.setState({ contacts });
            })
            .catch((error) => {
                console.log(error);
            });
        */
    }

    /**
     * Sends the selected contact into openContact.
     * @param event 
     */
    seeContact = (event: any) => {
        let target = event.currentTarget as HTMLSelectElement;
        let value = target.textContent;
        console.log(value);
        var indContact = this.state.contacts.filter((separateContact) => separateContact.name === value)[0];
        console.log("Changed to: " + indContact.id);
        this.props.openContact(indContact);
    }
}

export default ContactsList;