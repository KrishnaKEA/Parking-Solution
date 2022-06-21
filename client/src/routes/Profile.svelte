<script>

import { allParkingAreas, authenticatedUser, selectedParkingArea } from "../store/parkingdata.js";

let parkings = $allParkingAreas;

console.log(parkings[0].slot);

let firstName = $authenticatedUser.first_name
let lastName = $authenticatedUser.last_name
let email = $authenticatedUser.email
let plateNumber = $authenticatedUser.plateNumber
let balance = $authenticatedUser.balance




let mySlots = []


parkings.forEach((parking) => {
    let parkingName = parking.name;
    const slots = parking.slot
    
    slots.forEach((sl) => {
        if(plateNumber === sl.plateNumber){
             let userSlot = {parkingName: parkingName, slot: sl }
             mySlots.push(userSlot)
         }
     })
})
            


const refactorTime = (time) => {
    return time
}              
    



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
            <p>{refactorTime(oneSlot.slot.startTime)}</p>
            <p>{refactorTime(oneSlot.slot.endTime)}</p>
            <hr>
             
{/each} 

<h1>Hello</h1>
<hr>
