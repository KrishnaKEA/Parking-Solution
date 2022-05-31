<script>
    import axios from "axios";
    import { onMount } from 'svelte';
    import BookingDetails from "../routes/BookingDetails.svelte"
    import {parkingSlot, parkingHours, BaseUrl} from "../store/parkingdata.js"
    import io from "socket.io-client";
    const socket = io();

    
    
      let parkings = [];
      let freeslots = [];
      let reservedslots = [];


    socket.on('freeslServer',(data)=>{
        freeslots = data;
        socket.emit("freeslClient", freeslots)
    })









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
       //console.log(res);
    }
    
    
    async function resetSlot(hours,parkingName,slotnumber){
    setTimeout(async()=>{
        const res =  await axios.patch(`${BaseUrl}/api/parkingarea/reservation/${slotnumber}/${parkingName}`)
      console.log(res);
    },hours*3600000)
    
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
                    <button on:click={()=> toastr.info(`You have choosen parking${p.name} of slot number  ${s.slot}.`) }>info</button>
                    {:else}
                    <div id="slot"><button id="btn" style="background-color: red;" on:click={changeColor}>{s.number}{p.name}</button></div>
                    <button on:click={()=> toastr.info(`You have choosen parking${p.name} of slot number  ${s.slot}.`) }>info</button>
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