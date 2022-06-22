<script>
import {selectedParkingArea } from "../store/parkingdata.js";
import { onMount } from 'svelte';
import axios from "axios";
import {BaseUrl, authenticatedUser, allParkingAreas} from "../store/parkingdata.js";
import toastr from "toastr";  


let parkings = [];



onMount( async() => {
      //Reste parking slots if outdated
  
  			parkings = $allParkingAreas;
			
         
  			parkings.map((parking)=>{
    			const slots = parking.slot;
    			const parkingName = parking.name;
     
      			slots.map(async(sl)=>{
      			  const slotnumber = sl.number;
      			  const enddate = sl.endTime;



      			  if(enddate!==null){
      			    const edate =new Date(enddate).getHours();
      			    const ndate =new Date().getHours();


                // Check if parking endTime is from yesterday and reset it
      			    if(edate < ndate){
						await fetch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`, {
							method: 'PATCH',
							headers: {'Content-Type': 'application/json'},
							credentials: 'include'
						});
      			    }else{
                    //If today , checking by hours and reset it
                    if((edate-2) - ndate < 0 ){
                      
					  	await fetch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`, {
							method: 'PATCH',
							headers: {'Content-Type': 'application/json'},
							credentials: 'include'
						});
                    }
                }
      			  }
      			})
  			})

     
});
     
    function changeColor() {
         
          
            let name = this.innerText;
           
            const parkingName = name.split("P");
            const pname = "P"+parkingName[1];
            const slotNumber = Number(parkingName[0]);

           

            if($authenticatedUser){
              const plateNumber = $authenticatedUser.plateNumber;

              let input = Number(prompt("please enter the number of hours in numbers"));
              
              while (isNaN(input)){
              input = prompt("Enter number");
              }
              let hours = Number(input);
              hours = Math.floor(hours);
      
            
              if(hours != 0){
                this.disabled = true
                this.style.backgroundColor = "#f18888"
              }
              
				updateUserBalance(hours, $authenticatedUser.email, $authenticatedUser.balance);
              	reserveSlot(hours,pname,slotNumber,plateNumber);
              	resetSlot(hours,pname,slotNumber);

            }else{
              toastr.warning("Please log in..")
              
            }
      
           
           
    }

    const updateUserBalance = async (hours,userEmail,currentBalance) => {
        await fetch(`${BaseUrl}/api/user/${userEmail}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            balance: currentBalance-hours*10
        })
        });
    }

	const reserveSlot = async (hours,parkingName,slotNumber,plateNumber) => {
        const response = await fetch(`${BaseUrl}/api/parkingarea/reservation/${slotNumber}/${parkingName}/${hours}/${plateNumber}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
        });

		if(response.status === 200 && hours > 0){
			toastr.success(`-${hours*10} deducted from your balance`)
          	toastr.success(`Successfully reserved slot number ${slotNumber} for ${hours} hours from now!`)
		  
        }else{
          toastr.error(`Something went wrong...`)
        }
    }


	const resetSlot = async (hours,parkingName,slotnumber) => {
		setTimeout(async()=>{
			await fetch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include'
			});
		},hours*3600000)	
    }
   


</script>



<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">

      
      
      <div class="flex flex-wrap -mx-4">
        
        <ul class="showcase">

            <div class="header1">{$selectedParkingArea.name} <br> {$selectedParkingArea.location}</div>
            <div class="header2">
              <li>
                <div class="seat"></div>
                <small>N/A</small>
              </li>
              
              <li>
                <div class="seat occupied"></div>
                <small>Occupied</small>
              </li>
            </div>
          </ul>
      
          <div class="container flex flex-wrap -mx-4">
            
            {#each $selectedParkingArea.slot as oneSlot}
            
              {#if oneSlot.isFree === true}
                  <button class="seat" on:click={changeColor}>{oneSlot.number}{$selectedParkingArea.name}</button>
              {:else}
                  <button class="seat occupied" >{oneSlot.number}{$selectedParkingArea.name}</button>
              {/if}

            {/each}
          
    </div>
</section>






<style>
   
.container{
  margin-top: 30px;
  
}

.header1{
  text-align: center;
}

.header2{
  display: flex;
  flex-direction: row;
}
    
.seat {
  color: azure;
  background-color: #444451;
  height: 50px;
  width: 50px;
  margin: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

}



.seat.occupied {
  background-color: rgb(241, 136, 136);
}


.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.6);
}

.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}

.showcase {
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  color: #777;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin:auto;

  
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.showcase li small {
  margin-left: 2px;
}





</style>