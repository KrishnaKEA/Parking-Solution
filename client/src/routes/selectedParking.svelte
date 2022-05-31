<script>
import { allParkingAreas, selectedParkingArea } from "../store/parkingdata.js";
import { onMount } from 'svelte';
import axios from "axios";
import {parkingSlot, parkingHours, BaseUrl} from "../store/parkingdata.js"

let parkings = [];
    let freeslots = [];
    let reservedslots = [];

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
                        const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
    
                    }
                }
                
              
    
            })

       })
     
    });
     
        function changeColor() {
          const bgcolor = this.style.backgroundColor;
          console.log(bgcolor);
          this.style.backgroundColor = 'red';
            let name = this.innerText;
           
            const parkingName = name.split("P");
            const slotnumber = Number(parkingName[0]);
            const pname = "P"+parkingName[1];
           
            let input = Number(prompt("please enter the number of hours in numbers"));
        
            while (isNaN(input)){
            input = prompt("Enter number");
            }
            let hours = Number(input);
            hours = Math.floor(hours);
            console.log(hours);
          
            this.disabled = true;
           
    
    
    
        reserveSlot(hours,pname,slotnumber);
        resetSlot(hours,pname,slotnumber);
    
        }
        async function reserveSlot(hours,parkingName,slotnumber){
    
    const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}/${hours}`)
      //console.log(res);
   }
   
   
   async function resetSlot(hours,parkingName,slotnumber){
   setTimeout(async()=>{
       const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
     console.log(res);
   },hours*3600000)
   
   }

</script>

{$selectedParkingArea.name} <br> {$selectedParkingArea.location}
<div class="container my-20 max-w-5xl mx-auto">
    <div class="flex flex-wrap -mx-4">
        
        {#each $selectedParkingArea.slot as oneSlot}
        
            <div class=" w-full sm:w-1/3 md:w-1/6 xl:1/10 px-4">
                <div class=" bg-white rounded-lg overflow-hidden mb-8">
                    <div class="container rounded-lg p-8 sm:p-9 md:p-7 xl:p-9 text-center">

                        {#if oneSlot.isFree === true}
                            <button id="btn" on:click={changeColor} style="background-color: green;" >{oneSlot.number}{$selectedParkingArea.name}</button>
                        {:else}
                            <button id="btn" on:click={changeColor} style="background-color: red;" >{oneSlot.number}{$selectedParkingArea.name}</button>
                        {/if}
                    
                    </div>
                </div>              
            </div>
           
                
        
        {/each}


    </div>    
</div>



<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
       <div class="flex flex-wrap -mx-4">

        <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div class="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div class="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
      
          <div class="container flex flex-wrap -mx-4">
            
            {#each $selectedParkingArea.slot as oneSlot}
            
            <div class="seat"></div>
            
            {/each}
          </div>

            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </div>
            <div class="row">
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat occupied"></div>
              <div class="seat"></div>
            </div>
          

        </div>
    </div>
</section>





<style>
   
    .container{
        border: 1px solid;
    }
    
    .seat {
  background-color: #444451;
  height: 35px;
  width: 35px;
  margin: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.seat.selected {
  background-color: #6feaf6;
}

.seat.occupied {
  background-color: rgb(241, 136, 136);
}

.seat:nth-of-type(2) {
  margin-right: 18px;
}

.seat:nth-last-of-type(2) {
  margin-left: 18px;
}

.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
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
  justify-content: space-between;
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

.row {
  display: flex;
}



</style>