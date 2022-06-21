<script>
<<<<<<< HEAD

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
=======

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
        let arrayTime = time.split("T");
        let date = arrayTime[0];
        let back = arrayTime[1];
        let lastArray = back.split(".");
        let timeFinal = lastArray[0];
        let formated_date_time =  date + " Time: "+ timeFinal;
        return formated_date_time;
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
    
                <h1>Parking-Name: {oneSlot.parkingName}</h1>
                <p>Slot: {oneSlot.slot.number}</p>
                <p>From {refactorTime(oneSlot.slot.startTime)}</p>
                <p>To {refactorTime(oneSlot.slot.endTime)}</p>
                 
    {/each} 
    
    <h1>Hello</h1>
    <hr>
>>>>>>> e24e32d36a8ba0e3ea97cc3866a3b2b2f9c25a92
