import {ax} from "../api";
import { router } from "../main";


export function  htmlPostTypePg() {

        return`<div class="w-full flex flex-col" >
        <div class="w-full flex flex-col overflow-auto grow" >
          <div class="flex">
            <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
            <span class="my-auto font-bold text-2xl ml-4" id="name-pg">Choose Shipping</span>
          </div>
  
  
          <div class=" flex flex-col pt-4 gap-6 mt-7" id="root">
            
            <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 py-3 px-4 h-24 justify-between items-center">
              <div class="w-14 h-14 rounded-full flex justify-center items-center px-1 py-1 bg-black ">
                <img src="/picture/bax1.jpg" alt="selected pic" class="w-3/5 rounded-full ob">
              </div>
              <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
                <h3 class="text-lg font-bold">Economy</h3>
                <p class="text-gray-500 text-base truncate details">Estimated Arrival, Dec 20-23</p>
              </div>
              <div class=" flex justify-between items-center px-1 gap-4">
                <p class="text-xl font-bold"><span>$</span><span class="price">10</span></p>
                <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
                  <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn" id="post10"></div>
                </div>
              </div>
            </div>
  
  
            <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 py-3 px-4 h-24 justify-between items-center">
              <div class="w-14 h-14 rounded-full flex justify-center items-center px-1 py-1 bg-black ">
                <img src="/picture/box2.png" alt="selected pic" class="w-3/5 rounded-full ob">
              </div>
              <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
                <h3 class="text-lg font-bold">Regular</h3>
                <p class="text-gray-500 text-base truncate details">Estimated Arrival, Dec 20-22</p>
              </div>
              <div class=" flex justify-between items-center px-1 gap-4">
                <p class="text-xl font-bold"><span>$</span><span class="price">15</span></p>
                <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
                  <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn" id="post15"></div>
                </div>
              </div>
            </div>
  
  
            <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 py-3 px-4 h-24 justify-between items-center">
              <div class="w-14 h-14 rounded-full flex justify-center items-center px-1 py-1 bg-black ">
                <img src="/picture/truckship1.png" alt="selected pic" class="w-3/5 rounded-full ob">
              </div>
              <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
                <h3 class="text-lg font-bold">Cargo</h3>
                <p class="text-gray-500 text-base truncate details">Estimated Arrival, Dec 19-20</p>
              </div>
              <div class=" flex justify-between items-center px-1 gap-4">
                <p class="text-xl font-bold"><span>$</span><span class="price">20</span></p>
                <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
                  <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn" id="post20"></div>
                </div>
              </div>
            </div>
  
  
            <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 py-3 px-4 h-24 justify-between items-center">
              <div class="w-14 h-14 rounded-full flex justify-center items-center px-1 py-1 bg-black ">
                <img src="/picture/truckship2.png" alt="selected pic" class="w-3/5 rounded-full ob">
              </div>
              <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
                <h3 class="text-lg font-bold">Express</h3>
                <p class="text-gray-500 text-base truncate details">Estimated Arrival, Dec 18-19</p>
              </div>
              <div class=" flex justify-between items-center px-1 gap-4">
                <p class="text-xl font-bold"><span>$</span><span class="price">30</span></p>
                <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
                  <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn" id="post30"></div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
  
        <div class=" w-full h-32 flex "></div>
        <div class="flex pl-7 border-t bg-white justify-center pr-7 pt-8 pb-10 fixed bottom-0 rounded-t-3xl" id="cart">
          <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center px-au
          w-full bg-black text-white gap-6 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-apply">
            
            <div class="text-xl">Apply</div>
          </div>
        </div>
            
        </div>`
        
        
}

export const funcPostTypePg=()=>{
  const root=document.querySelector("#root")
  const img=document.querySelectorAll("#root img")
  const name=document.querySelectorAll("#root h3")
  const price=document.querySelectorAll(".price")
  const details=document.querySelectorAll(".details")
  let objPost={}

  let selectedPost
    document.querySelectorAll(".btn").forEach((bt,i,arr)=>{

      if(!(localStorage.getItem("postType"))){
        localStorage.setItem("postType", JSON.stringify({}))
      }
      if(Number(JSON.parse(localStorage.getItem("postType")).number)==i){
        bt.classList.add("bg-black")
      }
      bt.addEventListener("click" , ()=>{
        arr.forEach(m=>m.classList.remove("bg-black"))
        bt.classList.add("bg-black")
        selectedPost=(bt.id).slice(4)
        objPost={
          number:i,
          imagePost:img[i].src,
          namePost:name[i].textContent,
          infoPost:details[i].textContent,
          pricePost:price[i].textContent
        }
      })
    })

    document.querySelector("#go-back").addEventListener("click" , ()=>{
      router.navigate(`/cart/checkout`)
    })

    document.querySelector("#btn-apply").addEventListener("click" , ()=>{
      localStorage.setItem("postType", JSON.stringify(objPost))
      router.navigate(`/cart/checkout`)
    })
}