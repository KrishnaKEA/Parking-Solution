<script>
    import { onMount } from 'svelte';
    import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
    import { BaseUrl, allParkingAreas, chatMessagesArray } from '../../store/parkingdata.js';

    console.log($chatMessagesArray);

    import Spinner from '../Spinner.svelte';
    import CardParkingArea from "../card-parkingArea.svelte";

    let parkingsArray = [];

    //Fetch all parkings
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

    
    const randomLat = () => {
        return Math.random() * (55.6858 - 55.6258) + 55.6258;
    }
    const randomLon = () => {
        return Math.random() * (12.6143 - 12.5358) + 12.5358;
    }
    
    const clicked = () => {
        alert("hello")
    }



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
                   <MapMarker lat={oneParkingArea.lat} lon={oneParkingArea.lon} label="{oneParkingArea.name} | Capacity: {oneParkingArea.slot.length}"/>  
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
  
    