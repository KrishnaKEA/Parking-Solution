import {writable} from "svelte/store"
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";

// all parkingAreas
export let allParkingAreas = writable(null);
export let selectedParkingArea = writable(null);

export let cphAreaNames = writable({
    "a": "Indre By",
    "b": "Osterbro",
    "c": "Norrebro",
    "d": "Bispebjerg",
    "e": "Bronshoj / Husum",
    "f": "Vanlose",
    "g": "Valby",
    "h": "Vesterbro",
    "i": "Amager Vest",
    "j": "Amager Est",
    "k": "Frederiksberg Kommune",
});