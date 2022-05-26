<script>

import axios from 'axios';
import { onMount } from 'svelte';

import CardParkingArea from "../components/card-parkingArea.svelte";
import SearchBar from "../components/SearchBar.svelte";
import { BaseUrl, allParkingAreas } from "../store/parkingdata.js"
import Spinner from '../components/Spinner.svelte';


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
    
        
    } catch (error) {
        console.log(error);
    }

});


</script>


<style>
   
    .container{
        border: 1px solid;
    }
   
</style>


<SearchBar/>

<section class=" pt-0 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
       <div class="flex flex-wrap -mx-4">
            <div class="grid grid-cols-2 gap-20">
                <div > <CopenhagenMap/></div>
                <div class="grid grid-rows"> 
                    <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                    A - {$cphAreaNames.a}</button></div>
                    <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                        B - {$cphAreaNames.b}</button></div>
                        <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                            C - {$cphAreaNames.c}</button></div>
                            <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                D - {$cphAreaNames.d}</button></div> 
                                <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                    E - {$cphAreaNames.e}</button></div> 
                                    <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                        F - {$cphAreaNames.f}</button></div> 
                                        <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                            G - {$cphAreaNames.g}</button></div> 
                                            <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                H - {$cphAreaNames.h}</button></div>
                                                <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                    I - {$cphAreaNames.i}</button></div> 
                                                    <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                        J - {$cphAreaNames.j}</button></div> 
                                                        <div><button class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                            K - {$cphAreaNames.k}</button></div>          
                 
                </div>
            </div>
        </div>
    </div>
</section>




<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
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


