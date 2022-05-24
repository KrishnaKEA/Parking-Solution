<script>
  export let email;
  export let errMessage;
  export let password;
  export let forgetpassword;
  export let currentUser;

async function signin(email,password){
  try{
    const users = await fetch("http://localhost:3000/api/users");
    users.Map((user)=>{
      if(user.email === email && user.password === password){
        currentUser  === user;
      }
console.log("User login successfully.")
    })

  }catch(error){
    console.log(error)
  }
  
}


</script>




<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login</h3>

            <form class="mx-1 mx-md-4"  on:submit|preventDefault={signin(email,password)}>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input type="text" bind:value={email} id="email" class="form-control" required />
                  {#if errMessage }
                  <p class="text-danger">{errMessage}</p>
                  {/if}
                  <label class="form-label" for="username">User name</label>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input type="password" bind:value={password} id="password" class="form-control" required />
                  <label class="form-label" for="password">Password</label>
                </div>
              </div>

              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" class="btn btn-primary btn-sm m-2">Submit</button>
                <button on:click="{forgetpassword}" class="btn btn-primary btn-sm m-2">Forgot password</button>

              </div>

            </form>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>