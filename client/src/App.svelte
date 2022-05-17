<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./components/Home.svelte";
	import Login from "./components/Login.svelte";
	import DisplayParkings from "./components/DisplayParkings.svelte";
	import BookingDetails from "./components/BookingDetails.svelte";
  
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
	 <Route path="BookingDetails" component="{BookingDetails}" />
	</div>
  </Router>
