<script>
import { onMount } from "svelte";
import { blank_object } from "svelte/internal";
import { allParkingAreas, authenticatedUser, selectedParkingArea } from "../store/parkingdata.js";

let parkings = $allParkingAreas;

let firstName = $authenticatedUser.first_name
let lastName = $authenticatedUser.last_name
let email = $authenticatedUser.email
let plateNumber = $authenticatedUser.plateNumber
let balance = $authenticatedUser.balance



let mySlots = new Array();

onMount( async() => {
      
   
  			parkings.map((parking)=>{
    			const slots = parking.slot;
    			let parkingName = parking.name;
     
      			slots.map((sl)=>{
                    if(plateNumber === sl.plateNumber){
                        //const userSlot = {parkingName: parkingName, slot: sl }
                        const userSlot =  sl
                        console.log(sl.number);
                        
                        mySlots.push(userSlot);
                    }
                    
      			})
  			})

              
});


console.log(mySlots);

</script>


<h1>Profile</h1>
<h3>{firstName}</h3>
<h3>{lastName}</h3>
<h3>{email}</h3>
<h3>{plateNumber}</h3>
<h3>{balance}</h3>

<hr>


{#each mySlots as oneSlot} 

            <h1>{oneSlot.parkingName}</h1>
            <p>{oneSlot.slot.number}</p>
            <p>{oneSlot.slot.startTime}</p>
            <p>{oneSlot.slot.endTime}</p>
             
{/each} 

<h1>Hello</h1>
<hr>
