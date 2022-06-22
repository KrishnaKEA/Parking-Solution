<script>
    import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
    import { BaseUrl, allParkingAreas } from '../../store/parkingdata.js';


    import Spinner from '../Spinner.svelte';
    import CardParkingArea from "../card-parkingArea.svelte";

    let parkingsArray = $allParkingAreas;


    

</script>

<style>
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 25px;
}



</style>

<div class="my-20 max-w-6xl mx-auto ">
    <p class="font-parkingTitle font-semibold text-dark text-xl ml-12 ">Overview of all Parking Ares </p>
    <div class="flex-container">


        
            <Map  lat={55.68} lon={12.58} zoom={10.6}>

                {#each parkingsArray as oneParkingArea} 
                {#if oneParkingArea.lat > 0 }
                   <MapMarker lat={oneParkingArea.lat} lon={oneParkingArea.lon} label="{oneParkingArea.name} | Capacity: {oneParkingArea.slot.length} "/>  
                {/if}   
                {/each} 

            </Map>

        

        
       
        
    </div>
</div>

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
  
    