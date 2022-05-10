<script>
  
/* export async function preload(page, session) {
      let { user } = session;
      if (!user) {
          return this.redirect(302, '/api/login');
      }
  } */
  
  async function logout() {
    
  }
</script>


<h1>This is our protected dashboard! Only visible when you are logged in with MongoDB</h1> 
<button on:click={logout}>Logout</button>