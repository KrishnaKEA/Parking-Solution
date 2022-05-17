<script>
import axios from "axios";
import { onMount } from 'svelte';
import BookingDetails from "./BookingDetails.svelte"
import {parkingSlot, parkingHours, BaseUrl} from "../store/parkingdata.js"



  let parkings = [];
 

onMount( async() => {
    const data = await axios.get(`${BaseUrl}/api/parkingArea`)
    parkings = data.data.ParkingAreas;
    console.log(parkings)
 
});





    
    function changeColor() {
       // socket.emit("colorChanged", { data: event.target.value });
       
       const bgcolor = this.style.backgroundColor;
      console.log(bgcolor);
      this.style.backgroundColor = 'red';
        let name = this.innerText;
       
        const parkingName = name.split("P");
        const slotnumber = Number(parkingName[0]);
        const pname = "P"+parkingName[1];
       
        let input = Number(prompt("please enter the number of hours in numbers"));
        
        while (isNaN(input)){
    //alert("You did not enter a whole number");
    input = prompt("Enter number");
}




        let hours = Number(input);
        hours = Math.floor(hours);
        console.log(hours);
      
        this.disabled = true;
        const detaildiv = document.querySelector(".details");
        detaildiv.innerHTML = input + "" + name;
        console.log(pname)
        console.log(slotnumber)
        console.log(hours);



        reserveSlot(hours,pname,slotnumber);
       resetSlot(hours,pname,slotnumber);

    }
    
async function reserveSlot(hours,parkingName,slotnumber){

 const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}/${hours}`)
   console.log(res);
}


async function resetSlot(hours,parkingName,slotnumber){
setTimeout(async()=>{
    const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
  console.log(res);
},5000)

}

</script>

<div class="maindiv">
    <div class="details"></div>
	{#each parkings as p}
		<div id="parking">
            {p.name}
          
        {#each p.slot as s}


        {#if s.isFree === true}
        <div id="slot"><button id="btn" style="background-color: green;" on:click={changeColor}>{s.number}{p.name}</button></div>
        {:else}
        <div id="slot"><button id="btn" style="background-color: red;" on:click={changeColor}>{s.number}{p.name}</button></div>
        {/if}

		
   
	{/each}
</div>
	{/each}
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
        position:absolute;;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: bisque;
  
    }
    
</style>
