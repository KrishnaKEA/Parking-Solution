<script>
import axios from "axios";
import { onMount } from 'svelte';



  let parkings = [];

onMount( async() => {
    const data = await axios.get("http://localhost:3000/api/parkingArea")
    parkings = data.data.ParkingAreas;
    console.log(data.data.ParkingAreas)
    //const {ParkingAreas,total_parkingAreas} = data
   // console.log(data.ParkingAreas)
   // console.log(parkings)
  // parkings= ParkingAreas
  // console.log(parkings)
});

</script>
<ul>
	{#each parkings as p}
		<div id="parking">{p.name}
        {#each p.slot as s}
		<div id="slot">{s.number}</div>
   
	{/each}
</div>
	{/each}
</ul>

<style>
    #slot{
        display:flex;
        margin-top: 10px;
        padding:5px;
        width: 20px;
        background-color: green;
        margin:5px;
    }
    #parking{
        display:flex;
    }
    
</style>
