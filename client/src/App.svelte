<script>
	import { onMount } from 'svelte';
	import Login from "./components/Login.svelte"
	import Home from "./components/Home.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	import Nav from "./components/Nav.svelte";


	const baseURL = "http://localhost:3000";
	let parkings = [];


	onMount(async () => {
        try {

            const response = await fetch(`${baseURL}/api/parkingarea`, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            });

			const parkingarea = await response.json();
		  parkings = parkingarea.ParkingAreas;
			console.log(parkings);
  
            
        } catch (error) {
            console.log(error);
        }

    });
	
</script>


<main>
<Router>

	<Nav/>
	<br>
	<br>
	
		<Route path="/" component={Home} />
		<Route path="login" component={Login} />

		<ul>
			{#each parkings as p}
			<div id="parking">{p.name}
					{#each p.slot as s}
			<div id="slot">{s.number}</div>
		 
		{/each}
	</div>
		{/each}
		</ul>

	
</Router>
</main>
