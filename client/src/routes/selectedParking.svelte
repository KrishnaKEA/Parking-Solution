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
        
        {#each $selectedParkingArea.slot as oneParking}
        
            <div class=" w-full sm:w-1/3 md:w-1/6 xl:1/10 px-4">
                <div class=" bg-white rounded-lg overflow-hidden mb-8">
                    <div class="container rounded-lg p-8 sm:p-9 md:p-7 xl:p-9 text-center">

                        {#if oneParking.isFree === true}
                            <div id="slot"><button id="btn" on:click={changeColor} style="background-color: green;" >{oneParking.number}{$selectedParkingArea.name}</button></div>
                        {:else}
                            <div id="slot"><button id="btn" on:click={changeColor} style="background-color: red;" >{oneParking.number}{$selectedParkingArea.name}</button></div>
                        {/if}
                    
                    </div>
                </div>              
            </div>
           
                
        
        {/each}


        

        

    </div>    
</div>









<style>
    #slot{
        display:flex;
        margin-top: 10px;
        padding:5px;
        color:white;
        background-color: green;
        margin:5px;
    }
    #parking{
        display:flex;
    }
    .maindiv{
        position: relative;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: bisque;
  
    }
    .container{
        border: 1px solid;
    }
    
</style>