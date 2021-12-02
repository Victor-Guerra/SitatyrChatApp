import axios from "axios";

const baseURL = process.env.REACT_APP_PRODUCT_API_BASE_URL;

/**
 * Contacts API values for baseURL and responseType
 */
const LogInAPI = axios.create({
    baseURL: baseURL,
    responseType: 'json'
});

export default LogInAPI;