import ContactsAPI from "./ContactsAPI";
import SessionStorageHelper from "../tools/SessionStorgeHelper";

/**
 * Contacts Service class to handle post API requests
 */
class ContactsService {
  /**
   * Gets all contacts from the API base URL
   * @returns JSON of contacts
   */
  getAll(user_id: number) {
    return ContactsAPI.get(`contacts/${user_id}`, { headers: this.createHeaders() });
  }

  createHeaders() : any {
    var headers = {};

    if (SessionStorageHelper.getToken() !== "") {
      const authStr = 'Bearer '.concat(SessionStorageHelper.getToken());
      headers = {authorization: authStr};
    }

    return headers;
  }
}

export default new ContactsService();