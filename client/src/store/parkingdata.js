import {writable} from "svelte/store"
export let selectedArea = writable(null); // location  (like norrebro/center/etc.)
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";

// User
export let authenticated = writable(false);
export let authenticatedUser = writable(null); // user details



export let selectedParkingArea = writable(null); // one parking
export let allParkingAreas = writable(null); // many parkings



export let cphAreaNames = writable({
    "a": "Indre By",
    "b": "Osterbro",
    "c": "Norrebro",
    "d": "Bispebjerg",
    "e": "Bronshoj",
    "f": "Vanlose",
    "g": "Valby",
    "h": "Vesterbro",
    "i": "Amager Vest",
    "j": "Amager Est",
    "k": "Frederiksberg",
});