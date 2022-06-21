<script>
  import { BaseUrl } from "../store/parkingdata.js";
  import toastr from "toastr";

  let firstName,
    lastName,
    email,
    plateNumber,
    password = "";

  const signUp = async () => {

    const response = await fetch(`${BaseUrl}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase(),
        plateNumber: plateNumber,
        password: password,
      }),
    });
    toastr.info(`You are successfully registered`)

    if(response.status === 201){
      toastr.info("Success!");
      
      setTimeout(() => {
        location.replace("/login");
      }, 1000)

    }else{
      
      toastr.error("Email already in use");
    }
      

  };
</script>

<!-- component -->
<section class="py-26 bg-white">
  <div class="container px-4 mx-auto">
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-8">
        
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign up</h2>
      </div>
      <form on:submit|preventDefault={signUp}>
        <div class="mb-2">
          <label class="block mb-2 font-extrabold" for="">First name</label>
          <input
            bind:value={firstName}
            class="inline-block w-full p-4 leading-6 text-base font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="text"
            placeholder="First name"
            required
          />
        </div>

        <div class="mb-2">
          <label class="block mb-2 font-extrabold" for="">Last name</label>
          <input
            bind:value={lastName}
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="text"
            placeholder="Last name"
            required
          />
        </div>

        <div class="mb-2">
          <label class="block mb-2 font-extrabold" for="">Email</label>
          <input
            bind:value={email}
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div class="mb-2">
          <label class="block mb-2 font-extrabold" for="">Plate number</label>
          <input
            bind:value={plateNumber}
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="text"
            placeholder="Plate number"
            required
          />
        </div>

        <div class="mb-5">
          <label class="block mb-2 font-extrabold" for="">Password</label>
          <input
            bind:value={password}
            class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="password"
            required
          />
        </div>

        <button
          class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          >Sign up</button
        >
        <p class="text-center font-extrabold">
          Do have an account? <a
            class="text-red-500 hover:underline"
            href="login">Sign in</a
          >
        </p>
      </form>
    </div>
  </div>
</section>
<!-- component -->
