<script>

import axios from 'axios';
import { onMount } from 'svelte';

import CardParkingArea from "./card-parkingArea.svelte";
import SearchBar from "./SearchBar.svelte";
import { BaseUrl, allParkingAreas } from "../store/parkingdata.js"
import Spinner from './Spinner.svelte';


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

        //console.log(parkingsArray);
    
        
    } catch (error) {
        console.log(error);
    }

});

</script>


<style>
    .container{
        border: 2px solid;
    }
</style>


<SearchBar/>


<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
    <div class="container">
       <div class="flex flex-wrap -mx-4">

{#if parkingsArray.length === 0}
   <Spinner />
{:else}
 
    {#each parkingsArray as oneParkingArea} 
        <CardParkingArea parkingAreaInfo = {oneParkingArea} />
       
   
{/each} 
        
   

 
{/if}

</div>
</div>
</section>