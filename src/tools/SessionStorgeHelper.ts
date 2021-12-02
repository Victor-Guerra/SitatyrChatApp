/**
 * SessionStorageHelper Class to manage session storage
 */
class SessionStorageHelper {

    static getToken(): string {
        var token = sessionStorage.getItem("token");

        if (token === null) {
            token = "";
        }

        return token;
    }

    static getUserId(): string {
        var userId = sessionStorage.getItem("userId");

        if (userId === null) {
            userId = "0";
        }

        return userId;
    }

    static updateToken(token: string): void {
        sessionStorage.setItem("token", token);
    }

    static updateUserId(userId: string): void {
        sessionStorage.setItem("userId", userId);
    }
}
export default SessionStorageHelper;