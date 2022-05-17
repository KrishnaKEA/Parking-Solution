<script>
	import { onMount } from 'svelte';
	import Login from "./components/Login.svelte"
	import Home from "./components/Home.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	import Nav from "./components/Nav.svelte";
	import Nav2 from "./components/Nav2.svelte";
	import Footer from './components/footer.svelte';


	const baseURL = "http://localhost:3000";

	onMount(async () => {
        try {

            const response = await fetch(`${baseURL}/api/parkingarea`, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            });

			const parkingarea = await response.json();

			console.log(parkingarea);
        
            
        } catch (error) {
            console.log(error);
        }

    });
	
</script>


<main>
<Router>

	<Nav/>
	
		<Route path="/" component={Home} />
		<Route path="login" component={Login} />

	<Footer/>
	
</Router>
</main>