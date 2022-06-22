<script>
    import io from 'socket.io-client'
    import { onMount } from 'svelte'; 
    import { chatMessagesArray, authenticatedUser } from "../store/parkingdata.js";
    const socket = io("http://localhost:5000")



    let messages = [$chatMessagesArray];
    let message = ''



    socket.on('chat message', (data) => {

        
        
        if( Array.isArray(messages[0]) ){
            messages = [...messages[0]]
        }
      

      messages = [...messages, data]
      chatMessagesArray.set(messages);
      

    })
    function sendMessage() {
      socket.emit('chat message', message, $authenticatedUser.first_name )
      message = '';
      
    }






  </script>
  
  <main>

  

    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col w-5/12 bg-slate-900 px-8 py-8 rounded-lg">
        <h1 class="font-parkingTitle mb-4 font-bold text-black-500 text-4xl text-center mb-3">Chat</h1>
        <div class="w-full mb-4 bg-gray-300 rounded-md px-4 py-4">
            

            {#if messages }
          



                {#each messages as oneMessage}

                    {#if Array.isArray(oneMessage) === true }
                    
                        {#each oneMessage as anotherOneMessage}
                    
                            {#if anotherOneMessage != null}
                                <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit">  {anotherOneMessage}</div>
                            {/if}
                        
                        {/each}
                    {:else}
                        {#if oneMessage != null}
                            <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit"> {oneMessage}</div>
                        {/if}  
                    {/if}   
                        
                {/each}

            {/if}

            
        </div>
        <div class="w-full flex">
          <input bind:value={message} class="rounded-md px-2 py-2 w-full border-0" placeholder="Message..." type="text">
          <button on:click={sendMessage} class="rounded-md px-3 py-2 bg-pink-700 text-gray-50 border-0 ml-2">Send</button>
        </div>
      </div>
    </div>





  </main>