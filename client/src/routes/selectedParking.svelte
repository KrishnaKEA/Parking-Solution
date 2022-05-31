<script>
import { allParkingAreas, selectedParkingArea } from "../store/parkingdata.js";

console.log($selectedParkingArea);

</script>

{$selectedParkingArea.name} <br> {$selectedParkingArea.location}
<div class="container my-20 max-w-5xl mx-auto">
    <div class="flex flex-wrap -mx-4">
        
        {#each $selectedParkingArea.slot as oneParking}
        
            <div class=" w-full sm:w-1/3 md:w-1/6 xl:1/10 px-4">
                <div class=" bg-white rounded-lg overflow-hidden mb-8">
                    <div class="container rounded-lg p-8 sm:p-9 md:p-7 xl:p-9 text-center">

                        {#if oneParking.isFree === true}
                            <div id="slot"><button id="btn" style="background-color: green;" >{oneParking.number}{$selectedParkingArea.name}</button></div>
                        {:else}
                            <div id="slot"><button id="btn" style="background-color: red;" >{oneParking.number}{$selectedParkingArea.name}</button></div>
                        {/if}
                    
                    </div>
                </div>              
            </div>
           
                
        
        {/each}


        

        

    </div>    
</div>









<style>
    #slot{
        display:flex;
        margin-top: 10px;
        padding:5px;
        color:white;
        background-color: green;
        margin:5px;
    }
    #parking{
        display:flex;
    }
    .maindiv{
        position: relative;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: bisque;
  
    }
    .container{
        border: 1px solid;
    }
    
</style>