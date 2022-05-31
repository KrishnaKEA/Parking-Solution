import { BaseUrl } from "../store/parkingdata.js";


// Logout function
export const logout = async () => {
    await fetch(`${BaseUrl}/api/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    location.reload();

}