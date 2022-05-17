import {writable} from "svelte/store"
export let parkingHours = writable(null);
export let parkingSlot = writable(null);
export const BaseUrl = "http://localhost:3000";