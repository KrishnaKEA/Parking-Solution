<script>
import { BaseUrl } from "../store/parkingdata.js"

let email = '';
let password = '';

const login = async () => {
    const response = await fetch(`${BaseUrl}/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email: email.toLowerCase(),
            password: password
        })
    });
    
    if(response.status === 200){
      toastr.info("Success!");
      
      setTimeout(() => {
        location.replace("/");
      }, 1000)

  
    }else{
      toastr.error("Invalid Credentials");
    }
}


</script>


<!-- component -->
<section class="py-26 bg-white">
  <div class="container px-4 mx-auto">
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-8">
        
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
          </div>
      <form on:submit|preventDefault={login}>
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Email</label>
          <input bind:value={email} class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" required>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Password</label>
          <input bind:value={password} class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" required>
        </div>
        
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
        <p class="text-center font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="signup">Sign up</a></p>
      </form>
    </div>
  </div>
</section>