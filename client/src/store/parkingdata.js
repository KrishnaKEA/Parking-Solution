import {writable} from "svelte/store"
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";

// all parkingAreas
export let allParkingAreas = writable(null);