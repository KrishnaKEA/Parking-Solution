<script>

import axios from 'axios';
import { onMount } from 'svelte';

import CardParkingArea from "./card-parkingArea.svelte";
import SearchBar from "./SearchBar.svelte";
import { BaseUrl, allParkingAreas, cphAreaNames } from "../store/parkingdata.js"
import Spinner from './Spinner.svelte';
import CopenhagenMap from './CopenhagenMap.svelte';
import { selectedArea } from '../store/utils.js';

export let location;

let parkingsArray = [];

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
   
   
</style>


<SearchBar/>

<section class=" pt-0 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-4xl mx-auto">
       <div class="flex flex-wrap -mx-4">
            <div class="grid grid-cols-2 gap-2">
                <div> <CopenhagenMap/></div>
                <div class="grid grid-rows gap-5"> 
                    <div class="grid grid-cols-2">
                        <div><button on:click={selectedArea($cphAreaNames.a)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                        A - {$cphAreaNames.a}</button></div>
                        <div><button on:click={selectedArea($cphAreaNames.b)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                            B - {$cphAreaNames.b}</button></div>
                            <div><button on:click={selectedArea($cphAreaNames.c)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                C - {$cphAreaNames.c}</button></div>
                                <div><button on:click={selectedArea($cphAreaNames.d)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                    D - {$cphAreaNames.d}</button></div> 
                                    <div><button on:click={selectedArea($cphAreaNames.e)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                        E - {$cphAreaNames.e}</button></div> 
                                        <div><button on:click={selectedArea($cphAreaNames.f)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                            F - {$cphAreaNames.f}</button></div> 
                                            <div><button on:click={selectedArea($cphAreaNames.g)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                G - {$cphAreaNames.g}</button></div> 
                                                <div><button on:click={selectedArea($cphAreaNames.h)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                    H - {$cphAreaNames.h}</button></div>
                                                    <div><button on:click={selectedArea($cphAreaNames.i)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                        I - {$cphAreaNames.i}</button></div> 
                                                        <div><button on:click={selectedArea($cphAreaNames.j)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                            J - {$cphAreaNames.j}</button></div> 
                                                            <div><button on:click={selectedArea($cphAreaNames.k)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                                K - {$cphAreaNames.k}</button></div>        
                    </div>
                                                            
                    
                                                            <div class="grid grid-cols-2 gap-0">
                                                                    
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    L - </button></div>
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    M - </button></div>
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    N - </button></div>
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    O - </button></div>
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    P - </button></div>
                                                                    <div><button class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary " disabled> 
                                                                    Q - Kastrup </button></div>       

                                                            </div>        

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


