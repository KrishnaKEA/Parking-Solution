<script>
import axios from "axios";
import { onMount } from 'svelte';
import {parkingSlot, parkingHours} from "../store/parkingdata.js"

let hours;



onMount( async() => {
    
 
});


</script>

<h1> Parking details {$parkingHours} and {$parkingSlot} </h1>



