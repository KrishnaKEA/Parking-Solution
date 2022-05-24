<script>
	import { onMount } from 'svelte';
	import Login from "./components/Login.svelte"
	import Home from "./components/Home.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	import Nav from "./components/Nav.svelte";
	import Footer from './components/footer.svelte';
	import DisplayParkings from './components/DisplayParkings.svelte';
	import BookingDetails from './components/BookingDetails.svelte';
	import SelectedParking from './components/selectedParking.svelte';
	import CopenhagenMap from './components/CopenhagenMap.svelte';

	
</script>	


<main>
<Router>

	<Nav/>
	
		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
		<Route path="parkingslots" component={SelectedParking} />
		<Route path="DisplayParkings" component={DisplayParkings} />
	 	<Route path="BookingDetails" component={BookingDetails} />
		<Route path="cph" component={CopenhagenMap} />

	<Footer/>
	
</Router>
</main>

