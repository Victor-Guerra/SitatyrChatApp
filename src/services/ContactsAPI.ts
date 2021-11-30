import axios from 'axios';

/**
 * Contacts API values for baseURL and responseType
 */
const ContactAPI = axios.create({
    //baseURL: 'https://jsonplaceholder.typicode.com/',
    //responseType: 'json'
});

export default ContactAPI;