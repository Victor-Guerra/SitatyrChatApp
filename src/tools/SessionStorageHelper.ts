/**
 * SessionStorageHelper Class to manage session storage
 */
class SessionStorageHelper {

    /**
     * gets the current user token
     * @returns Current user token
     */
    static getToken(): string {
        var token = sessionStorage.getItem("token");

        if (token === null) {
            token = "";
        }

        return token;
    }

    /**
     * gets the current user id
     * @returns current user id
     */
    static getUserId(): string {
        var userId = sessionStorage.getItem("userId");

        if (userId === null) {
            userId = "0";
        }

        return userId;
    }

    /**
     * Updates the current user token
     * @param token token to update the current user token
     */
    static updateToken(token: string): void {
        sessionStorage.setItem("token", token);
    }

    /**
     * Updates the current user id
     * @param userId id to update the current user id
     */
    static updateUserId(userId: string): void {
        sessionStorage.setItem("userId", userId);
    }
}
export default SessionStorageHelper;