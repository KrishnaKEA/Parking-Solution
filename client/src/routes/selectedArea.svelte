<script>
import { selectedArea, searchKeyword } from '../store/parkingdata.js';
import CardParkingArea from "../components/card-parkingArea.svelte";
import Spinner from '../components/Spinner.svelte';

   

</script>


<section class=" pt-5 lg:pt-[100px] pb-5 lg:pb-5">
    <div class=" my-0 max-w-5xl mx-auto">
        <div class="pb-3"><b>{$searchKeyword}</b></div>
        <div class="flex flex-wrap -mx-4">
            
            
            {#if !$selectedArea || $selectedArea.length == 0} 
                <div class="py-1 ml-5 "><h1><i>  No data found... </i> </h1></div>
                
                <Spinner />
            {:else}
            
                {#each $selectedArea as oneParkingArea} 
                    <CardParkingArea parkingAreaInfo = {oneParkingArea} />
                {/each} 
            
            {/if}

        </div>
    </div>
</section>