<script>
	import { onMount } from 'svelte';
	import Login from "./components/Login.svelte"
	import Signup from './components/signup.svelte';
	import Home from "./components/Home.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	import Nav from "./components/Nav.svelte";
	import Footer from './components/footer.svelte';
	import DisplayParkings from './components/DisplayParkings.svelte';
	import BookingDetails from './components/BookingDetails.svelte';
import Error from './components/Error.svelte';
	
</script>


<main>
<Router>

	<Nav/>
	
		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
		<Route path="signup" component={Signup} />
		<Route path="DisplayParkings" component={DisplayParkings} />
	 	<Route path="BookingDetails" component={BookingDetails} /> 

	<Footer/>
	
</Router>
</main>

