<script>
import { onMount } from 'svelte';
import { selectedArea, BaseUrl } from '../store/parkingdata.js';
import CardParkingArea from "../components./components/card-parkingArea.svelte";
import Spinner from '../components./components/Spinner.svelte';


console.log($selectedArea); // ?????

</script>


<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
       <div class="flex flex-wrap -mx-4">

            {#if !$selectedArea } 
                <Spinner />
            {:else}
            
                {#each $selectedArea as oneParkingArea} 
                    <CardParkingArea parkingAreaInfo = {oneParkingArea} />
                {/each} 
            
            {/if}

        </div>
    </div>
</section>