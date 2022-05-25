import {writable} from "svelte/store"
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";

// User
export let authenticated = writable(false);
export let authenticatedUser = writable(null);


// all parkingAreas
export let allParkingAreas = writable(null);
export let selectedParkingArea = writable(null);


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