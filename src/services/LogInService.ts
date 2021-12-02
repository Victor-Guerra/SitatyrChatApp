import LogInAPI from "./LogInAPI";
import Credentials from "../types/Credentials";
/**
 * LogInService Class to handle LogIn API requests
 */
class LogInService{

    login(username: string, password: string) {
        let credentials = {} as Credentials;
        credentials.username = username;
        credentials.password = password;
        return LogInAPI.post("user/login", credentials);
      }

}
export default new LogInService();