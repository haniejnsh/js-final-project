import {ax} from "../api";
import { router } from "../main";


export function  htmlOrdersPg() {
    return`
    <div class="w-full flex flex-col" >
        <div class="w-full flex flex-col overflow-auto grow" >
          <div class="flex">
            <img class=" w-5 ml-7 mt-5 object-contain" src='/picture/logo.png' alt="logo" >
            <span class="my-auto font-bold text-2xl ml-6 mt-5" id="name-pg">My Orders</span>
          </div>
          <div class="flex justify-center  mt-6 text-2xl font-bold mx-4 ">
            <div class="flex justify-center border-b-4 border-black w-2/4 pb-3 pt-2 cursor-pointer" id="active">
              Active
            </div>
            <div class="flex justify-center border-b-4 border-gray-200 w-2/4 pb-3 pt-2 text-gray-300 cursor-pointer" id="completed">
              Completed
            </div>
          </div>
          <div class="flex flex-col mt-8 gap-5 " id="show-all-selected">

          </div>
          
          
        </div>
        <div class=" w-full h-24 flex"></div>
        


        <div class="fixed flex bottom-0  px-4 gap-6 pt-2 pb-2 bg-white" id="footer-menu">
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/home-2.png" alt=""></div>
            <p class="text-sm font-bold text-center">Home</p>
          </div>
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/cart.png" alt=""></div>
            <p class="text-sm font-bold text-center">Cart</p>
          </div>
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-10 mb-1" src="./picture/shoppi1.png" alt=""></div>
            <p class="text-sm font-bold text-center">Orders</p>
          </div>
          <div class="my-auto mx-auto">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/wallet.png" alt=""></div>
            <p class="text-sm font-bold text-center">Wallet</p>
          </div>
          <div class="my-auto mx-auto">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/profile.png" alt=""></div>
            <p class="text-sm font-bold text-center">Profile</p>
          </div>
        </div>
          
        </div>


        <div id="modal-cart" class="hidden fixed bottom-0 top-0">
          <div class="flex w-full h-full items-end">
          
          <div class="modal-content w-full h-1/2 bg-white flex flex-col justify-between pb-4" style="border-top-left-radius:50px; border-top-right-radius:50px;">
            <div class="h-1/4 flex justify-center pt-10 font-bold text-3xl border-b border-gray-100">Remove From Cart?</div>
            <div class="bg-gray-50 grow flex items-center w-full">
              <div class="show-sel flex bg-white  rounded-xl  mx-4 p-6 h-44 w-full" id="modal-details">
                
  
              </div>
            </div>

            <div class="flex gap-4 border-t border-gray-100 w-ful py-6 w-full justify-center text-lg">
              <div class="rounded-3xl bg-gray-300 w-2/5 flex justify-center py-3 cursor-pointer hover:bg-slate-400 transition border-solid border-2 border-gray-200 cancel-delete">Cancel</div>
              <div class="rounded-3xl bg-gray-950 text-white w-2/5 flex justify-center py-3 cursor-pointer hover:bg-slate-700 transition border-solid border-2 border-gray-300 confirm-delete">Yes, Remove</div>
            </div>
          </div>
        
        </div>
      </div>`
}

export const funcOrdersPg=()=>{
    let selectedProductNames=JSON.parse(localStorage.getItem("allOrders")).selected
    const showAll=document.querySelector("#show-all-selected")
    const active=document.querySelector("#active")
    const completed=document.querySelector("#completed")
    let selectedDetails

    function activeFunc(){
        showAll.innerHTML=""
        selectedProductNames.map(pro=>{
        selectedDetails=JSON.parse(localStorage.getItem(pro))
        showAll.innerHTML+=`<div class="show-sel flex bg-white shadow-gray-100 shadow-sm drop-shadow-xl  rounded-xl  mx-4 p-6 h-48" >
    <div class="w-2/5 bg-gray-100 rounded-xl flex justify-center items-center px-1" >
        <img src="${selectedDetails.selPic}" alt="selected pic" class="w-full">
    </div>
    <div class="pl-4 grow flex flex-col justify-between  gap-1">
      
      <h2 class="flex text-2xl font-bold">${selectedDetails.selShoe}</h2>
      
      <div class="flex gap-1 text-gray-600">
        <div class="flex gap-1">
          <div class=" w-3 h-3 rounded-full mt-1"   style="background-color:${selectedDetails.selColor};"></div>
          <span class="">${selectedDetails.selNameColor}</span>
        </div>
        <div>|</div>
        <div class="flex">
          <span>Size</span>
          <span class="mx-1">=</span>
          <span>${selectedDetails.selSize}</span>
        </div>
        <div>|</div>
        <div>
          <span>Qty</span>
          <span class="mx-1">=</span>
          <span>${selectedDetails.selNumber}</span>
        </div>
      </div>
      <div class="bg-gray-100 text-sm py-1 rounded-lg w-20 flex justify-center">In Delivery</div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-2xl">
          <span>$</span>
          <span >${selectedDetails.selTotalPrice}</span>
        </div>
        <div class="flex text-lg bg-gray-900 text-white px-3 py-1 rounded-3xl cursor-pointer">
          Track Order
        </div>
      </div>
    </div>

  </div>`
        })
    }
    function completedFunc(){
        showAll.innerHTML=""
        selectedProductNames.map(pro=>{
        selectedDetails=JSON.parse(localStorage.getItem(pro))
        showAll.innerHTML+=`<div class="show-sel flex bg-white shadow-gray-100 shadow-sm drop-shadow-xl  rounded-xl  mx-4 p-6 h-48" >
    <div class="w-2/5 bg-gray-100 rounded-xl flex justify-center items-center px-1" >
        <img src="${selectedDetails.selPic}" alt="selected pic" class="w-full">
    </div>
    <div class="pl-4 grow flex flex-col justify-between  gap-1">
      
      <h2 class="flex text-2xl font-bold">${selectedDetails.selShoe}</h2>
      
      <div class="flex gap-1 text-gray-600">
        <div class="flex gap-1">
          <div class=" w-3 h-3 rounded-full mt-1"   style="background-color:${selectedDetails.selColor};"></div>
          <span class="">${selectedDetails.selNameColor}</span>
        </div>
        <div>|</div>
        <div class="flex">
          <span>Size</span>
          <span class="mx-1">=</span>
          <span>${selectedDetails.selSize}</span>
        </div>
        <div>|</div>
        <div>
          <span>Qty</span>
          <span class="mx-1">=</span>
          <span>${selectedDetails.selNumber}</span>
        </div>
      </div>
      <div class="bg-gray-100 text-sm py-1 rounded-lg w-20 flex justify-center">Completed</div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-2xl">
          <span>$</span>
          <span >${selectedDetails.selTotalPrice}</span>
        </div>
        <div class="flex text-lg bg-gray-900 text-white px-3 py-1 rounded-3xl cursor-pointer">
          Leave Review
        </div>
      </div>
    </div>

  </div>`
})
    }
    activeFunc()
    active.addEventListener("click" , ()=>{
        active.classList.add("text-black" , "border-black")
        active.classList.remove("text-gray-300" , "border-gray-200")
        completed.classList.add("text-gray-300" , "border-gray-200")
        completed.classList.remove("text-black" , "border-black")
        activeFunc()
    })
    completed.addEventListener("click" , ()=>{
        completed.classList.add("text-black" , "border-black")
        completed.classList.remove("text-gray-300" , "border-gray-200")
        active.classList.add("text-gray-300" , "border-gray-200")
        active.classList.remove("text-black" , "border-black")
        completedFunc()
    })
    document.querySelectorAll(".go-selected-page").forEach((pg,n)=>{
        pg.addEventListener("click" , ()=>{
          if(n==0){router.navigate(`/home`)}
          else if(n==1){router.navigate(`/cart`)}
          else if(n==2){router.navigate(`/orders`)}
        })
      })

 
}
  

