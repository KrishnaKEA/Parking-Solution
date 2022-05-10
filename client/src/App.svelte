<script>
	import Login from "./components/Login.svelte"
	import Home from "./components/Home.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	


	
</script>


<Router>

	<div class="container">
		
		<Route path="/" component={ Home } />
		<Route path="/login" component={ Login } />
	</div>
</Router>


<style>
	
</style>