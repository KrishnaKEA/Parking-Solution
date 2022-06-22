<script>

    import { allParkingAreas, authenticatedUser, BaseUrl } from "../store/parkingdata.js";
    import axios from "axios";

    let parkings = $allParkingAreas;
    
    
    
    let firstName = $authenticatedUser.first_name
    let lastName = $authenticatedUser.last_name
    let email = $authenticatedUser.email
    let plateNumber = $authenticatedUser.plateNumber
    let balance = $authenticatedUser.balance
    
    
    
    let inputCredit;
    let mySlots = [];
    
    
    parkings.forEach((parking) => {
        let parkingName = parking.name;
        let latitude = parking.lat;
        let longitude = parking.lon;
        const slots = parking.slot
        
        slots.forEach((sl) => {
            if(plateNumber === sl.plateNumber){
                 let userReservation = {parkingName: parkingName, lat: latitude, lon: longitude, slot: sl }
                 mySlots.push(userReservation)
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
    
    
    const updateUserBalance = async (userEmail,currentBalance,inputCredit) => {
        await fetch(`${BaseUrl}/api/user/${userEmail}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            balance: currentBalance+inputCredit
        })
        });
    }
    
    
    
    console.log(mySlots);
    
    
</script>


<!-- get direction icon -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<div class="my-20 max-w-6xl mx-auto ">
    
    <div class="flex-container">


        <div class="flex-item-left">
            <p class="font-parkingTitle font-semibold text-dark text-xl pb-8">{firstName}`s Profile </p>
            

            <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mr-10 hover:border-gray-500 ">
                <div class="desc text-gray-600">

                    <div class="mb-3">
                        <div  class="mb-1 block text-base font-medium text-[#07074D]">First name</div>
                        <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-[#6B7280] outline-none hover:border-[#6A64F1] hover:shadow-md"> {firstName} </div>
                    </div>
                    <div class="mb-3">
                        <div  class="mb-1 block text-base font-medium text-[#07074D]">Last name</div>
                        <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-[#6B7280] outline-none hover:border-[#6A64F1] hover:shadow-md"> {lastName} </div>
                    </div>
                    <div class="mb-3">
                        <div  class="mb-1 block text-base font-medium text-[#07074D]">Email</div>
                        <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-[#6B7280] outline-none hover:border-[#6A64F1] hover:shadow-md"> {email} </div>
                    </div>
                    <div class="mb-3">
                        <div  class="mb-1 block text-base font-medium text-[#07074D]">Plate number</div>
                        <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-[#6B7280] outline-none hover:border-[#6A64F1] hover:shadow-md"> {plateNumber} </div>
                    </div>
                    <div class="mb-3">
                        <div  class="mb-1 block text-base font-medium text-[#07074D]">Balance</div>
                        {#if balance > 0 }
                            <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-green-600 outline-none hover:border-[#6A64F1] hover:shadow-md"> {balance} </div>
                        {:else}
                            <div class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-bold text-red-600 outline-none hover:border-[#6A64F1] hover:shadow-md"> {balance} </div>
                        {/if}
                    </div>


                    <div class="mt-12">
                        <form on:submit={updateUserBalance(email,balance,inputCredit)} class="flex">
                            <input bind:value={inputCredit} type="number" min="0" class="w-full rounded-md border border-[#e0e0e0] bg-white  px-3 text-base font-bold text-[#6B7280] outline-none hover:border-[#6A64F1] hover:shadow-md" required/>
                            <button class="px-8 rounded-md bg-yellow-400  text-gray-800 font-bold p-2  text-base border-yellow-500 border-t border-b border-r">Add credit</button>
                        </form>
                    </div>

                </div> 


               


            </div>
        </div>
           
        <div class="flex-item-right">
            <p class="font-parkingTitle font-semibold text-dark text-xl pb-8 ">Active parkings </p>
           

           

            {#each mySlots as oneSlot} 
    
                <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 ">
                    <div class="left">
                        <div class="header text-blue-600 font-semibold text-2xl">{oneSlot.parkingName} | Slot: {oneSlot.slot.number}</div>
                        <div class="desc text-gray-600">
                            <p>From {refactorTime(oneSlot.slot.startTime)}</p>
                            <p>To {refactorTime(oneSlot.slot.endTime)}</p>
                        </div>
                    </div>
                    <div class="right m-auto mr-0">
                        <a href="https://www.google.com/maps/search/?api=1&query={oneSlot.lat},{oneSlot.lon}" target="_blank"><i class="material-icons">directions</i></a>
                    </div>
                </div>
            
            {/each} 
        </div>
        

        
       
        
    </div>
</div>

    
    
    

    
    
    
    
    
<style>
a { color: inherit; }

.material-icons:hover{
      cursor: pointer;
      color: blue;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    text-align: left;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 25px;
}

.flex-item-left {
    flex: 50%;
}

.flex-item-right {
    flex: 50%;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}
</style>   
