<script>
  import { Link } from 'svelte-routing';
  import { BaseUrl, authenticated, authenticatedUser } from "../../store/parkingdata.js";
  import { logout } from "../../store/utils.js";

export let open = false;

  let auth = false;
authenticated.subscribe(a => auth = a);

</script>

<aside class="z-10 fixed max-w-5xl mx-auto h-full bg-gray-200 border-r-2 shadow-lg" class:open>
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
          <Link to = "chat" class="block hover:text-red-900 font-parkingTitle">Chat</Link>

      

  

      

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
</style>