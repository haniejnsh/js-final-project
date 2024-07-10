import {ax} from "../api";
import { router } from "../main";


export function  htmlPaymentPg() {
  return`
  <div class="w-full flex flex-col" >
  <div class="w-full flex flex-col overflow-auto grow" >
    <div class="flex">
      <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
      <span class="my-auto font-bold text-2xl ml-4" id="name-pg">Payment Methods</span>
    </div>
    <p class="text-gray-400 text-lg mt-7 px-7">Select the payment method you want to use.</p>


    <div class=" flex flex-col pt-4 gap-6 mt-2">  

            
      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-20 justify-between items-center">
        <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1">
          <img src="/picture/wallet1.jpg" alt="truck" class="w-3/5">
        </div>
        <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
          <h3 class="text-lg font-bold">My Wallet</h3>
        </div>
        <div class=" flex justify-between items-center px-1 gap-4">
          <p class="opacity-0 text-xl font-bold text-gray-500"><span>$</span><span>30</span></p>
          <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
            <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn"></div>
          </div>
        </div>
             
      </div>



      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-20 justify-between items-center">
        <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1">
          <img src="/picture/paypal4.png" alt="truck" class="w-3/5">
        </div>
        <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
          <h3 class="text-lg font-bold">PayPal</h3>
        </div>
        <div class=" flex justify-between items-center px-1 gap-4">
          <p class="opacity-0 text-xl font-bold text-gray-500"><span>$</span><span>30</span></p>
          <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
            <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn"></div>
          </div>
        </div>
             
      </div>


      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-20 justify-between items-center">
        <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1">
          <img src="/picture/google.png" alt="truck" class="w-3/5">
        </div>
        <div class="pl-2 py-1 flex flex-col justify-between w-3/5 gap-1">
          <h3 class="text-lg font-bold">My Wallet</h3>
        </div>
        <div class=" flex justify-between items-center px-1 gap-4">
          <p class="opacity-0 text-xl font-bold text-gray-500"><span>$</span><span>30</span></p>
          <div class=" flex justify-center items-center w-5 h-5 rounded-full border-solid border-black border-4">
            <div class="w-full h-full rounded-full cursor-pointer border-solid border-2 border-white btn"></div>
          </div>
        </div>
             
      </div>



            
    </div>
          
  </div>
   
  <div class=" w-full h-32 flex "></div>
  <div class="flex pl-7 border-t bg-white justify-center pr-7 pt-8 pb-10 fixed bottom-0 rounded-t-3xl" id="cart">
    <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center w-full bg-black text-white gap-6 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-payment">
            
      <div class="text-xl">Confirm Payment</div>
    </div>
  </div>


  <div id="modal-cart" class="hidden fixed bottom-0 top-0">
    <div class="flex w-full h-full items-center justify-center" id="root-modal">
      <div class="modal-content w-4/5  flex flex-col justify-between items-center bg-white rounded-3xl px-8 py-8 gap-6" >
        <img src="/picture/ordersuccess.png" alt="order" class="w-3/4">
        <h2 class="text-3xl font-bold">Order Successfull !</h2>
        <p class="text-xl text-gray-600">You have successfully made order</p>
        <div class="bg-black text-white w-full text-lg justify-center flex mt-4 py-3 rounded-3xl hover:bg-gray-800 cursor-pointer" id="btn-confirm">View Order</div>
      </div>
    </div> 
  </div>
        
          
        </div>`
        
        
}

export const funcPaymentPg=()=>{
  const modal=document.querySelector("#modal-cart")
  let select=false

    document.querySelectorAll(".btn").forEach((bt,i,arr)=>{

      bt.addEventListener("click" , ()=>{
        arr.forEach(m=>m.classList.remove("bg-black"))
        bt.classList.add("bg-black")
        select=true
        
      })
    })

    document.querySelector("#go-back").addEventListener("click" , ()=>{
      router.navigate(`/cart/checkout`)
    })

    document.querySelector("#btn-payment").addEventListener("click",()=>{
      if(select==true){
        modal.classList.remove("hidden")
        window.onclick = function(event) {
          if((event.target.id)=="root-modal"){
            modal.classList.add("hidden")
          }
        }
        document.querySelector("#btn-confirm").addEventListener("click",()=>{
          let local=JSON.parse(localStorage.getItem("allSelected")).selected
          localStorage.removeItem("allSelected")
          let allOrder=[]
          local.forEach(item=>{
            let details=JSON.parse(localStorage.getItem(item))
            localStorage.setItem(`order${details.selId}`, JSON.stringify(details))
            allOrder.push(`order${details.selId}`)
            localStorage.removeItem(item)
          })
          let obj={
            selected:allOrder
          }
          localStorage.setItem("allOrders",JSON.stringify(obj))
          router.navigate(`/orders`)
        })
      }
      
    })
    
}