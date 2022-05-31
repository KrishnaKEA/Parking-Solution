<script>
<<<<<<< HEAD
  import { Link } from 'svelte-routing';
  import { BaseUrl, authenticated, authenticatedUser } from "../../store/parkingdata.js";
  import { logout } from "../../store/utils.js";

export let open = false;

  let auth = false;
authenticated.subscribe(a => auth = a);
=======
    import { Link } from 'svelte-routing';
    import { BaseUrl, authenticated, authenticatedUser } from "../../store/parkingdata.js";
    import { logout } from "../../store/utils.js";

	export let open = false;

    let auth = false;
	authenticated.subscribe(a => auth = a);
>>>>>>> 7c122259fe659356a5b4cbdc0beb812c77e4773e

</script>

<aside class="fixed max-w-5xl mx-auto h-full bg-gray-200 border-r-2 shadow-lg" class:open>
<<<<<<< HEAD
<nav class="p-12 text-xl">


      {#if auth}
          <p class="block font-parkingTitle">Hi, {$authenticatedUser.first_name}</p>
          <hr>
          <br>
          <Link to = "profile" class="hover:text-red-900 font-parkingTitle" >Profile</Link>
          
          
          <Link to = "/" on:click={logout} class="block hover:text-red-900 font-parkingTitle">Log Out</Link>
      {:else}

          <br>
          <hr>
          <br>

          <Link to = "login" class="block hover:text-red-900 font-parkingTitle">Log in</Link>
          <Link to = "signup" class="block hover:text-red-900 font-parkingTitle">Sign up</Link>
      {/if}

          <br>
          <hr>
          <br>

          <Link to = "map" class="block hover:text-red-900 font-parkingTitle">Map</Link>
          <Link to = "about" class="block hover:text-red-900 font-parkingTitle">About</Link>
          <Link to = "contact" class="block hover:text-red-900 font-parkingTitle">Contact</Link>

      

  

      

</nav>
</aside>

<style>
aside {
  left: -100%;
  transition: left 0.3s ease-in-out
}

.open {
  left: 0
}
=======
	<nav class="p-12 text-xl">


        {#if auth}
            <p class="block font-parkingTitle">Hi, {$authenticatedUser.first_name}</p>
            <hr>
            <br>
            <Link to = "profile" class="hover:text-red-900 font-parkingTitle" >Profile</Link>
            
            
            <Link to = "/" on:click={logout} class="block hover:text-red-900 font-parkingTitle">Log Out</Link>
        {:else}

            <br>
            <hr>
            <br>

            <Link to = "login" class="block hover:text-red-900 font-parkingTitle">Log in</Link>
            <Link to = "signup" class="block hover:text-red-900 font-parkingTitle">Sign up</Link>
        {/if}

            <br>
            <hr>
            <br>

            <Link to = "map" class="block hover:text-red-900 font-parkingTitle">Map</Link>
            <Link to = "about" class="block hover:text-red-900 font-parkingTitle">About</Link>
            <Link to = "contact" class="block hover:text-red-900 font-parkingTitle">Contact</Link>

        

    

        

	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
>>>>>>> 7c122259fe659356a5b4cbdc0beb812c77e4773e
</style>