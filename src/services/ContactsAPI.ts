import axios from 'axios';

/**
 * Contacts API values for baseURL and responseType
 */
const ContactAPI = axios.create({
    //baseURL: 'https://sitatyr-chat-app-be.herokuapp.com/',
    //responseType: 'json'
});

export default ContactAPI;