
<script>
   import { Link } from "svelte-routing";

   import { selectedParkingArea } from "../store/parkingdata.js";
   


   export let freeSlots;

   export let parkingAreaInfo;



   freeSlots = parkingAreaInfo.slot.filter(slot => slot.isFree === true)

   // View details button from Parking-Area-Card
   const viewDetails = () => {

      selectedParkingArea.set(parkingAreaInfo);
     
   }

</script>

<!-- tailwind stuff -->
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<!-- get direction icon -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- ====== Cards Section Start -->

         
         <div class="  w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 ">
            <div class=" bg-white rounded-lg overflow-hidden mb-8 shadow-lg shadow-cyan-500/50">
               <img src="/images/parkingAreas/{parkingAreaInfo.name}.jpg" alt="parkingImg" class="w-full h-32 "  />
               <div class="container rounded-b-lg p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <!-- svelte-ignore a11y-missing-attribute -->
                     <a
                        class="
                        font-parkingTitle
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     <p>{parkingAreaInfo.name}</p>  
                     <p>{parkingAreaInfo.location.split(" ")[0]}</p>
                     </a> 
                  </h3>
                  <p class="font-digits text-right text-lg text-body-color leading-relaxed mb-2 hover:bg-light">
                    Capacity: [ {parkingAreaInfo.slot.length} ]
                  </p>
                  
                  <p class="font-digits text-right text-lg text-body-color leading-relaxed mb-2 hover:bg-light hover:text-success">
                     Free: [ {freeSlots.length} ] <br>
                  </p>
                  <p class="font-digits text-right text-lg text-body-color leading-relaxed mb-2 hover:bg-light hover:text-danger">
                     Occupied: [ {parkingAreaInfo.slot.length-freeSlots.length} ]
                  </p>
                  
                  <Link to = "parkingslots" >
                  <button on:click={viewDetails}
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white hover:no-underline
                     transition
                     "
                     >
                  View Details
               </button>
               </Link>
               <a href="https://www.google.com/maps/search/?api=1&query={parkingAreaInfo.lat},{parkingAreaInfo.lon}" target="_blank"><i class="material-icons">directions</i></a>
            
               </div>
            </div>
         </div>
         
         

<!-- ====== Cards Section End -->

<style>
   a { color: inherit; } 

   .container{
     border: 1px ;
    
   }

   .material-icons{
      padding-top: 10px;
      font-size:48px;
      
   }

   .material-icons:hover{
      cursor: pointer;
      color: blue;
   }

</style>