<script>
	import { onMount } from 'svelte';
	import Error from "./components/Error.svelte";
	import Login from "./routes/Login.svelte";
	import Signup from './routes/Signup.svelte';
	import Home from "./routes/Home.svelte";
	import { Router, Link, Route } from 'svelte-routing';
	import Footer from './components/footer.svelte';
	import DisplayParkings from './routes/DisplayParkings.svelte';
	import BookingDetails from './routes/BookingDetails.svelte';
	import SelectedParking from './components/selectedParking.svelte';
	import SelectedArea from './components/selectedArea.svelte';

	import {BaseUrl, authenticated, authenticatedUser} from "./store/parkingdata.js";

	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import MapComponent from './components/Map/MapComponent.svelte';

	


	//Sidebar
	let open = false;
	
	// checking token
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
<Router >

	<Sidebar bind:open/>
	<Navbar bind:sidebar={open}/>


	
		<Route component="{Error}" />

		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
		<Route path="logout" component={Signup} />
		<Route path="signup" component={Signup} />

		<Route path="parkings/:area" component={SelectedArea} />
		<Route path="parkingslots" component={SelectedParking} />

		<Route path="DisplayParkings" component={DisplayParkings} />
	 	<Route path="BookingDetails" component={BookingDetails} />
		<Route path="map" component={MapComponent} />
		





	<Footer/>
	
</Router>
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>