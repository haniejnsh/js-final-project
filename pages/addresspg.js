import {ax} from "../api";
import { router } from "../main";


export function  htmlAddressPg() {

        return`
        <div class="w-full flex flex-col" >
    <div class="w-full flex flex-col overflow-auto grow" >
      <div class="flex">
        <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
        <span class="my-auto font-bold text-2xl ml-4" id="name-pg">Shipping Address</span>
      </div>

      <div class=" flex flex-col pt-4 gap-5 mt-2">
        <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-28 justify-between items-center">
          <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1"><img src="/picture/location.png" alt="selected pic" class="w-full">
          </div>
          <div class="pl-4 py-1 flex flex-col justify-between  w-4/6">
            <h3 class="text-lg font-bold">Home</h3>
            <p class="text-gray-500 text-base truncate">61480 Sunbrook park, Park, PC 5679</p>
          </div>
          <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
            <div class="bg-black w-full h-full rounded-full cursor-pointer border-solid border-2 border-white"></div>
          </div>
        </div>


      </div>

      <div class="flex px-6  justify-center pt-8 pb-10 mt-2">
        <div class=" rounded-full flex justify-center items-center
        w-full bg-gray-200 text-gray-700 h-14 cursor-pointer hover:bg-gray-300 transition" id="btn-details">
          
          <div class="text-xl font-bold">Add New Address</div>
        </div>
      </div>
      
    </div>

    <div class=" w-full h-32 flex "></div>
    <div class="flex pl-7 border-t bg-white justify-center pr-7 pt-8 pb-10 fixed bottom-0 rounded-t-3xl" id="cart">
      <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center px-au
      w-full bg-black text-white gap-6 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-details">
        
        <div class="text-xl">Apply</div>
      </div>
    </div>
    
      
    </div>`
        
        
}

export const funcAddressPg=()=>{
  const goBack=document.querySelector("#go-back")
  goBack.addEventListener("click" , ()=>{
    router.navigate(`/cart`)
  })
}