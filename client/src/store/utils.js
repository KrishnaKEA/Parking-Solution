import { BaseUrl, allParkingAreas } from "../store/parkingdata.js";

// Login function
export const login = async () => {
    await fetch(`${BaseUrl}/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email: email.toLowerCase(),
            password: password
        })
    });
    
    location.replace("/");
}

// Logout function
export const logout = async () => {
    await fetch(`${BaseUrl}/api/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    location.reload();

}


// Select area (buttons) from main page
export const selectedArea = async (area) => {
    try {

        const response = await fetch(`${BaseUrl}/api/parkingarea/${area}`, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        });

        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log(error);
    }
}

