<script>

import axios from 'axios';
import { onMount } from 'svelte';

import CardParkingArea from "./card-parkingArea.svelte";
import SearchBar from "./SearchBar.svelte";
import { BaseUrl, allParkingAreas } from "../store/parkingdata.js"


export let parkingsArray = [];


onMount(async () => {
    try {

        const response = await fetch(`${BaseUrl}/api/parkingarea`, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        });

        const data = await response.json();
        parkingsArray = data.ParkingAreas;
        allParkingAreas.set(parkingsArray)

        console.log(parkingsArray[0].slot);
    
        
    } catch (error) {
        console.log(error);
    }

});

</script>


<style>
    .section-color{
        
        background-color: rgb(209, 209, 209);
    }
    .container{
        border: 1px solid;
    }
</style>


<SearchBar/>


<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
       <div class="flex flex-wrap -mx-4">

{#if parkingsArray.length === 0}
   <h1>Loading...</h1>
{:else}
 
    {#each parkingsArray as oneParkingArea} 
        <CardParkingArea parkingAreaInfo = {oneParkingArea}/>
   
    {/each} 
        
   

 
{/if}

</div>
</div>
</section>
