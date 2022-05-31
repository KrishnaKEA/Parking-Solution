import { BaseUrl, selectedArea } from "../store/parkingdata.js";
import { searchKeyword } from "../store/parkingdata.js";


// Logout function
export const logout = async () => {
    await fetch(`${BaseUrl}/api/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    location.reload();

}

// Select area (buttons) 
export const selectArea = async (area) => {
    try {

        const response = await fetch(`${BaseUrl}/api/parkingarea/${area}`);

        const data = await response.json();
        
        selectedArea.set(data.ParkingAreas);
        searchKeyword.set(area);

        console.log(data.ParkingAreas);


    } catch (error) {
        console.log(error);
    }
    
}



