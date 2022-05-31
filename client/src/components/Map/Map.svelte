<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';
	


	setContext(key, {
		getMap: () => map,
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	function load() {
		map = new mapbox.Map({
			container,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [lon, lat],
			zoom,
		});


		// Add geolocate control to the map.
        map.addControl(
            new mapbox.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
            })
        );

    
	}

	onDestroy(() => {
		if (map) map.remove();
	});


     
    
        

</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
		on:load={load}
	/>
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
       
		width: 100%;
		height: 600px;
       
        
	}
</style>
