<script>
	import Login from "./components/Login2.svelte"
	import Home from "./components/Home2.svelte"
	import { Router, Link, Route } from 'svelte-routing';
	import Nav from "./components/Nav.svelte";
	
</script>


<main>
<Router>

	<Nav/>

	<div class="container">
		<Route path="/" component={Home} />
		<Route path="login" component={Login} />
	</div>

	
</Router>
</main>