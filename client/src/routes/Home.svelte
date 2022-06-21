<script>

    import { Link } from "svelte-routing";
    
    import SearchBar from "../components/SearchBar.svelte";
    import { cphAreaNames } from "../store/parkingdata.js"
    import CopenhagenMap from '../components/Map/CopenhagenMap.svelte';
    import { selectArea } from "../store/utils.js"
    
    
    
    
    
</script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />    
    
   
    
    
    <SearchBar/>
    
    <section class=" pt-0 lg:pt-[100px] pb-5 lg:pb-5">
        <div class=" my-0 max-w-4xl mx-auto">
           <div class="flex flex-wrap -mx-4">
                <div class="grid grid-cols-2 gap-5">
                    <div> <CopenhagenMap/></div>
                   
                    <div class="grid grid-rows py-3 ml-20 "> 
                        
                            <Link to = "parkings/:{$cphAreaNames.a}"><button on:click={selectArea($cphAreaNames.a)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                            A - {$cphAreaNames.a}</button></Link>
                            <div><Link to = "parkings/:{$cphAreaNames.b}"><button on:click={selectArea($cphAreaNames.b)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                B - {$cphAreaNames.b}</button></Link></div>
                                <div><Link to = "parkings/:{$cphAreaNames.c}"><button on:click={selectArea($cphAreaNames.c)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                    C - {$cphAreaNames.c}</button></Link></div>
                                    <div><Link to = "parkings/:{$cphAreaNames.d}"><button on:click={selectArea($cphAreaNames.d)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                        D - {$cphAreaNames.d}</button></Link></div>
                                        <div><Link to = "parkings/:{$cphAreaNames.e}"><button on:click={selectArea($cphAreaNames.e)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                            E - {$cphAreaNames.e}</button></Link></div> 
                                            <div><Link to = "parkings/:{$cphAreaNames.f}"><button on:click={selectArea($cphAreaNames.f)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                F - {$cphAreaNames.f}</button></Link></div> 
                                                <div><Link to = "parkings/:{$cphAreaNames.g}"><button on:click={selectArea($cphAreaNames.g)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                    G - {$cphAreaNames.g}</button></Link></div> 
                                                    <div><Link to = "parkings/:{$cphAreaNames.h}"><button on:click={selectArea($cphAreaNames.h)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                        H - {$cphAreaNames.h}</button></Link></div>
                                                        <div><Link to = "parkings/:{$cphAreaNames.i}"><button on:click={selectArea($cphAreaNames.i)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                            I - {$cphAreaNames.i}</button></Link></div>
                                                            <div><Link to = "parkings/:{$cphAreaNames.j}"><button on:click={selectArea($cphAreaNames.j)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                                J - {$cphAreaNames.j}</button></Link></div>
                                                                <div><Link to = "parkings/:{$cphAreaNames.k}"><button on:click={selectArea($cphAreaNames.k)} class="inline-block py-1 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white hover:no-underline transition "> 
                                                                    K - {$cphAreaNames.k}</button></Link></div>     
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    
    
    
    
    <style>
       
       
    </style>