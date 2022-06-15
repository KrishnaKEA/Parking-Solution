<script>
import { allParkingAreas, selectedParkingArea } from "../store/parkingdata.js";
import { onMount } from 'svelte';
import axios from "axios";
import {parkingSlot, parkingHours, BaseUrl, authenticatedUser} from "../store/parkingdata.js"
  



let parkings = [];


onMount( async() => {
        const data = await axios.get(`${BaseUrl}/api/parkingArea`)
        parkings = data.data.ParkingAreas;
        console.log(parkings);
        
        
        parkings.map((parking)=>{
            const parkingName = parking.name;
            const slots = parking.slot;
            
            slots.map(async(sl)=>{
                const slotnumber = sl.number;
               // console.log(sl);
                const enddate = sl.endTime;
                if(enddate!==null){
                    const edate =new Date(enddate);
                    
                   const ndate =new Date();
    
                    if(edate < ndate){
                        console.log("******************");
                        console.log("FOUND!!!!");
                        console.log("******************");
                        await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
    
                    }
                }
                
              
    
            })

       })
     
    });
     
    function changeColor() {
          const bgcolor = this.style.backgroundColor;
          console.log(bgcolor);
          
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
              console.log(hours);   
            
              if(hours != 0){
                this.disabled = true
                this.style.backgroundColor = "#f18888"
              }
              
              reserveSlot(hours,pname,slotNumber,plateNumber);
              resetSlot(hours,pname,slotNumber);

            }else{
              alert("Please log in..")
              
            }

           
    }
    

    async function reserveSlot(hours,parkingName,slotNumber,plateNumber){
      
      await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotNumber}/${parkingName}/${hours}/${plateNumber}`)    
      
    }
   
   
    async function resetSlot(hours,parkingName,slotnumber){
        setTimeout(async()=>{
            const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
          console.log(res);
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