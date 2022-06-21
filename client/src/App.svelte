<script>
	import { onMount } from 'svelte';
	import Error from "./components/Error.svelte";
	import Login from "./routes/Login.svelte";
	import Signup from './routes/Signup.svelte';
	import Profile from './routes/Profile.svelte';
	import Home from "./routes/Home.svelte";
	import { Router, Link, Route } from 'svelte-routing';
	import Footer from './components/footer.svelte';
	import SelectedParking from './routes/selectedParking.svelte';
	import SelectedArea from './routes/selectedArea.svelte';

	import {BaseUrl, authenticated, authenticatedUser, allParkingAreas} from "./store/parkingdata.js";

	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import MapComponent from './components/Map/MapComponent.svelte';
	import Chat from './routes/chat.svelte';

	
	

	//Sidebar
	let open = false;
	
	
    onMount(async () => {

		try {

			const response = await fetch(`${BaseUrl}/api/parkingarea`);
			const data = await response.json();

			let parkingsArray = data.ParkingAreas;
			allParkingAreas.set(parkingsArray)

		} catch (error) {
			console.log(error);
		}



        try {

			// checking token
    		//Get user data and save in store
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


	
		<Route component="{Error}" />

		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
		<Route path="logout" component={Signup} />
		<Route path="signup" component={Signup} />

		<Route path="parkings/:area" component={SelectedArea} />
		<Route path="parkingslots" component={SelectedParking} />
		<Route path="map" component={MapComponent} />
		
		{#if $authenticated}
			<Route path="chat" component={Chat} />
			<Route path="profile" component={Profile} />
		{:else}
			<Route path="chat" component={Login} />
		{/if}

		





	<Footer/>
	
</Router>
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>