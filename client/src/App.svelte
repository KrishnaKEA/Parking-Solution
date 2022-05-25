<script>
  import { onMount } from "svelte";
  import Login from "./routes/Login.svelte";
  import Signup from "./routes/signup.svelte";
  import Home from "./routes/Home.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/footer.svelte";
  import SelectedParking from "./components/selectedParking.svelte";
  import DisplayParkings from "./routes/DisplayParkings.svelte";
  import BookingDetails from "./routes/BookingDetails.svelte";
  import Error from "./components/Error.svelte";
</script>

<main>
  <Router>
    <Nav />

    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="parkingslots" component={SelectedParking} />
    <Route path="DisplayParkings" component={DisplayParkings} />
    <Route path="BookingDetails" component={BookingDetails} />

    <Footer />
  </Router>
</main>
