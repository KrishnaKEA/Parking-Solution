<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./components/Home.svelte";
	import Login from "./components/Login2.svelte";
	import DisplayParkings from "./components/DisplayParkings.svelte";
  
  </script>
  
  <Router>
	<nav>
	 <Link to="/">Home</Link>
	 <Link to="login">Login</Link>
	 <Link to="DisplayParkings">Parkings </Link>
	</nav>
	<div>
	 <Route path="/"><Home /></Route>
	 <Route path="login" component="{Login}" />
	 <Route path="DisplayParkings" component="{DisplayParkings}" />
	</div>
  </Router>
