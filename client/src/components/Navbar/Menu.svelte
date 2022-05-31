<script>
<<<<<<< HEAD
  import { Router, Link, Route } from 'svelte-routing';
  import {BaseUrl, authenticated, authenticatedUser} from "../../store/parkingdata.js";
  import { logout } from "../../store/utils.js";

  let auth = false;
authenticated.subscribe(a => auth = a);

=======
    import { Router, Link, Route } from 'svelte-routing';
    import {BaseUrl, authenticated, authenticatedUser} from "../../store/parkingdata.js";
    import { logout } from "../../store/utils.js";

    let auth = false;
	authenticated.subscribe(a => auth = a);
	
>>>>>>> 7c122259fe659356a5b4cbdc0beb812c77e4773e

</script>

<nav class="hidden text-gray-500 uppercase text-bold sm:block">
<<<<<<< HEAD
  
      <Link to = "/" class="p-2 font-parkingTitle hover:text-red-900">Home</Link>
      <Link to = "map" class="p-2 font-parkingTitle hover:text-red-900">Map</Link>
      <Link to = "about" class="p-2 font-parkingTitle hover:text-red-900">About</Link>
      <Link to = "contact" class="p-2 font-parkingTitle hover:text-red-900">Contact</Link>

      {#if auth}
          <Link to = "/" on:click={logout} class="p-5 font-parkingTitle hover:text-red-900">Log Out</Link>
      {:else}
          <Link to = "login" class="p-5 font-parkingTitle hover:text-red-900">Log in</Link>
      {/if}
=======
    
        <Link to = "/" class="p-2 font-parkingTitle hover:text-red-900">Home</Link>
        <Link to = "map" class="p-2 font-parkingTitle hover:text-red-900">Map</Link>
        <Link to = "about" class="p-2 font-parkingTitle hover:text-red-900">About</Link>
        <Link to = "contact" class="p-2 font-parkingTitle hover:text-red-900">Contact</Link>

        {#if auth}
            <Link to = "/" on:click={logout} class="p-5 font-parkingTitle hover:text-red-900">Log Out</Link>
        {:else}
            <Link to = "login" class="p-5 font-parkingTitle hover:text-red-900">Log in</Link>
        {/if}
>>>>>>> 7c122259fe659356a5b4cbdc0beb812c77e4773e

</nav>