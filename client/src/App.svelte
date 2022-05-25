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
	import SelectedParking from './components/selectedParking.svelte';
	import CopenhagenMap from './components/CopenhagenMap.svelte';

	import {BaseUrl, authenticated, authenticatedUser} from "./store/parkingdata.js";

	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	
	//Sidebar
	let open = false;
	
	// get token
    //Get user data and save in store
    onMount(async () => {
        try {

            const response = await fetch(`${BaseUrl}/api/user`, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            });

            const user = await response.json();

			if(response.status === 200){
                authenticated.set(true);
                authenticatedUser.set(user);
            }else{
                authenticated.set(false);
                authenticatedUser.set(null);
            }
        
            
        } catch (error) {
            authenticated.set(false);
            authenticatedUser.set(null);
        }

    });


	
	
</script>	


<main>
<Router>

	<Sidebar bind:open/>
	<Navbar bind:sidebar={open}/>

	
	


		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
		<Route path="logout" component={Signup} />
		<Route path="signup" component={Signup} />
		<Route path="parkingslots" component={SelectedParking} />
		<Route path="DisplayParkings" component={DisplayParkings} />
	 	<Route path="BookingDetails" component={BookingDetails} />
		<Route path="cph" component={CopenhagenMap} />

	<Footer/>
	
</Router>
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>