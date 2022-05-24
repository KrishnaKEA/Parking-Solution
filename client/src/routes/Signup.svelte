<!-- <script>
  import axios from 'axios';
  import {push} from 'svelte-spa-router'

  let firstName, lastName, email, plateNumber = '', password = '';

  $: submit = async () => {
     await axios.post('register', {
          firstName,
          lastName,
          plateNumber,
          email,
          password
      });

      //console.log(res);
      //await push('login');
  }
</script> -->

<!-- component -->
<section class="py-26 bg-white">
  <div class="container px-4 mx-auto">
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-8">
        <a class="inline-block mx-auto mb-6" href="signup">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt="">
        </a>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign up</h2>
          </div>
      <form action="">
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Email</label>
          <input 
          class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email">
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Password</label>
          <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********">
        </div>
        
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" 
        >Sign up</button>
        <p class="text-center font-extrabold">Do have an account? <a class="text-red-500 hover:underline" href="login">Sign in</a></p>
      </form>
    </div>
  </div>
</section><!-- component -->








<!-- <main class="form-signin">
  <form on:submit|preventDefault={submit}>
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <div class="form-floating">
          <input bind:value={firstName} class="form-control" placeholder="first name">
          <label>First name</label>
      </div>

      <div class="form-floating">
          <input bind:value={lastName} class="form-control" placeholder="last name">
          <label>Last name</label>
      </div>

      <div class="form-floating">
          <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
          <label>Email address</label>
      </div>

      <div class="form-floating">
          <input bind:value={plateNumber} class="form-control" placeholder="plate number">
          <label>Plate number</label>
      </div>

      <div class="form-floating">
          <input bind:value={password} type="password" class="form-control" placeholder="Password">
          <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</main> -->