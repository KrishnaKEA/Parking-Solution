<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./components/Home.svelte";
	import Login from "./components/Login.svelte";
  
  </script>
  
  <Router>
	<nav>
	 <Link to="/">Home</Link>
	 <Link to="login">Login</Link>
	</nav>
	<div>
	 <Route path="/"><Home /></Route>
	 <Route path="login" component="{Login}" />
	</div>
  </Router>
