import {writable} from "svelte/store"
export let selectedArea = writable(null); // location  (like norrebro/center/etc.)
export let searchKeyword = writable(null); // searchKeyword from Search Bar
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";

// User
export let authenticated = writable(false);
export let authenticatedUser = writable(null); // user details

//Chat
export let chatMessagesArray = writable(null);


export let selectedParkingArea = writable(null); // one parking
export let allParkingAreas = writable(null); // many parkings



export let cphAreaNames = writable({
    "a": "Centrum",
    "b": "Osterbro",
    "c": "Norrebro",
    "d": "Bispebjerg",
    "e": "Bronshoj",
    "f": "Vanlose",
    "g": "Valby",
    "h": "Vesterbro",
    "i": "Amager-Vest",
    "j": "Amager-Est",
    "k": "Frederiksberg",
});