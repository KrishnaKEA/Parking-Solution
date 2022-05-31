<script>
    import { onMount } from 'svelte';
    import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
    import { BaseUrl, allParkingAreas } from '../../store/parkingdata.js';

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

.flex-item-left {
  background-color: #77beed;
  padding: 10px;
  flex: 50%;
}

.flex-item-right {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  flex: 50%;
}

/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}
</style>

<div class="my-20 max-w-6xl mx-auto">
    <p class="font-parkingTitle font-semibold text-dark text-xl ml-12">Overview of all Parking Ares </p>
    <div class="flex-container">


        <div class="flex-item-left">
            <Map  lat={55.68} lon={12.58} zoom={10.6}>

                {#each parkingsArray as oneParkingArea} 
                   <MapMarker lat={randomLat()} lon={randomLon()} label="{oneParkingArea.name} | Capacity: {oneParkingArea.slot.length}"/>  
                {/each} 

            </Map>

        </div>

        
        <div class="flex-item-right">
            
            Any content here (maybe filters)
            

        </div>
        
    </div>
</div>
  
    