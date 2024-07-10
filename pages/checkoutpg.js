import {ax} from "../api";
import { router } from "../main";


export function  htmlCheckoutPg() {

        return`
        <div class="w-full flex flex-col" >
  
  <div class="w-full flex flex-col overflow-auto grow" >
    <div class="flex">
      <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
      <span class="my-auto font-bold text-3xl ml-4" id="name-pg">Checkout</span>
    </div>

    <div class=" flex flex-col pt-4 gap-5">
      <h2 class="text-2xl font-bold pl-5">Shipping Address</h2>
      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-28 justify-between">
        <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1"><img src="/picture/location.png" alt="selected pic" class="w-full">
        </div>
        <div class="pl-4 py-1 flex flex-col justify-between  w-4/6">
          <h3 class="text-lg font-bold">Home</h3>
          <p class="text-gray-500 text-base truncate">61480 Sunbrook park, Park, PC 5679</p>
        </div>
        <div class=" flex justify-center items-center px-2">
          <i class="fa fa-pencil text-xl cursor-pointer hover:text-gray-400 transition" aria-hidden="true" id="go-address"></i>
        </div>
      </div>
    </div>


    <div class=" flex flex-col pt-4 gap-5 border-t border-gray-100 mt-7">
      <h2 class="text-2xl font-bold pl-5">Order List</h2>
    <div class="flex flex-col gap-4 " id="show-all-selected">

      
    </div>
    </div>

    <div class=" flex flex-col pt-4 gap-5 border-t border-gray-100 mt-7">
      <h2 class="text-2xl font-bold pl-5">Choose Shipping</h2>
      
      <div class="hidden flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 pl-6 py-3 pr-4 h-24 justify-between items-center" id="sel-post">
        <div class="w-14 h-14 rounded-full flex justify-center items-center px-1 py-1 bg-black ">
          <img src="" alt="selected pic" class="w-3/5 rounded-full ob" id="img-post">
        </div>
        <div class="pl-2 py-1 flex flex-col justify-between  w-3/6">
          <h3 class="text-lg font-bold" id="name-post">Home</h3>
          <p class="text-gray-500 text-base truncate" id="info-post">61480 Sunbrook park, Park, PC 5679</p>
        </div>
        <div class=" flex justify-between items-center px-1 gap-4">
          <p class="text-xl font-bold"><span>$</span><span id="price-post">15</span></p>
          <i class="fa fa-pencil text-xl cursor-pointer hover:text-gray-400 transition" aria-hidden="true" id="btn-post"></i>
        </div>
      </div>
      
      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6 h-20 justify-between items-center" id="no-sel-post">
        <div class="w-1/5 rounded-xl flex justify-center items-center px-1 py-1"><img src="/picture/truck.png" alt="truck" class="w-3/5">
        </div>
        <div class="flex justify-between items-center grow ml-6 mr-2 hover:text-slate-500 cursor-pointer transition" id="go-post-type">
          <h2 class="text-lg font-bold">Choose Shipping Type</h2>
          <i class="fa fa-angle-right text-xl  cursor-pointer hover:text-red-600 transition" aria-hidden="true"></i>
        </div>
        
      </div>
    </div>
    
    <div class=" flex flex-col pt-4 gap-5 border-t border-gray-100 mt-7">
      <h2 class="text-2xl font-bold pl-5">Promo Code <span class="hidden text-base text-red-500 ml-6" id="alarm">Code is wrong</span></h2>
      <div class="flex mx-4 p-1 h-16 justify-between items-center gap-4 ">
        <p class="hidden flex bg-black text-white h-full px-4 grow rounded-xl justify-center items-center text-xl" id="off">Discount 10% off</p>
        <input class="h-full px-4 focus:outline-none grow rounded-xl bg-gray-100 text-lg border-solid border-white border-2 focus:border-gray-300" type="text" placeholder="Enter Promo Code" id="text-off">
        <div class="bg-black text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold cursor-pointer hover:bg-gray-700 transition" id="btn-off">+</div>
      </div>
    </div>

   
      <div class="flex bg-white shadow-gray-50 shadow-md drop-shadow-xl  rounded-xl  mx-4 p-6justify-between items-center flex-col mt-8 py-4 px-8 gap-3 mb-8">
        <div class="flex justify-between w-full">
          <div class="text-gray-500">Amount</div>
          <div class="flex gap-1 text-lg text-gray-700">
            <span>$</span><span id="amount">0</span>
          </div>
        </div>
        <div class="flex justify-between w-full">
          <div class="text-gray-500">Shipping</div>
          <div class="flex gap-1 text-lg text-gray-700">
            <span>$</span><span id="shipping">0</span>
          </div>
        </div>
        <div class="flex justify-between w-full hidden" id="show-promo">
          <div class="text-gray-500">Promo</div>
          <div class="flex gap-1 text-lg text-gray-700">
            <span>-$</span><span id="promo">0</span>
          </div>
        </div>
        <div class="flex justify-between w-full border-t border-gray-100 pt-4">
          <div class="text-gray-500">Total</div>
          <div class="flex gap-1 text-lg text-gray-700">
            <span>$</span><span id="total">0</span>
          </div>
        </div>
      </div>


    
  </div>
 
  <div class=" w-full h-32 flex "></div>
  <div class="flex pl-7 border-t bg-white justify-center pr-7 pt-8 pb-10 fixed bottom-0 rounded-t-3xl" id="cart">
    <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center px-au
    w-full bg-black text-white gap-6 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-payment">
      
      <div class="text-xl">Continue to Payment</div>
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
  
    
  </div>`
        
        
}

export const funcCheckoutPg=()=>{
    console.log("checkout");
    const goBack=document.querySelector("#go-back")
    let selectedProductNames=JSON.parse(localStorage.getItem("allSelected")).selected//ok
    const showAll=document.querySelector("#show-all-selected")
    const goPostType=document.querySelector("#go-post-type")
    const goPayment=document.querySelector("#btn-payment")
    const goAddress=document.querySelector("#go-address")
    const selectedPost=document.querySelector("#sel-post")
    const noSelectedPost=document.querySelector("#no-sel-post")
    const doOff=document.querySelector("#off")
    const btnOff=document.querySelector("#btn-off")
    const textOff=document.querySelector("#text-off")
    const alarm=document.querySelector("#alarm")
    const amount=document.querySelector("#amount")
    const shipping=document.querySelector("#shipping")
    const promo=document.querySelector("#promo")
    const total=document.querySelector("#total")
    let selectedDetails //ok
    let amountVal=0 //ok
    let shippingVal=0
    let promoVal=0
    let totalVal=0

  selectedProductNames.map(pro=>{
    selectedDetails=JSON.parse(localStorage.getItem(pro))
    amountVal+=(selectedDetails.selTotalPrice)
    showAll.innerHTML+=`<div class="show-sel flex bg-white shadow-gray-100 shadow-hadow-gray-50 shadow-md drop-shadow-xl rounded-xl  mx-4 p-6 h-44">
    <div class="w-2/5 bg-gray-100 rounded-xl flex justify-center items-center px-1"><img src="${selectedDetails.selPic}" alt="selected pic" class="w-full"></div>
    <div class="pl-4 py-1 grow flex flex-col justify-between">
      <div class="flex justify-between bg">
        <h2 class="text-lg font-bold">${selectedDetails.selShoe}</h2>
      </div>
      <div class="flex gap-2 text-gray-600">
        <div class="flex gap-2">
          <div class=" w-4 h-4 rounded-full mt-1"   style="background-color:${selectedDetails.selColor};"></div>
          <span class="">${selectedDetails.selNameColor}</span>
        </div>
        <div>|</div>
        <div class="flex">
          <span>Size</span>
          <span class="mx-1">=</span>
          <span>${selectedDetails.selSize}</span>
        </div>
        
      </div>
      <div class="flex justify-between items-center pr-2 pl-2 mb-2">
        <div class="font-bold text-xl">
          <span>$</span>
          <span id="total-price${selectedDetails.selId}">${selectedDetails.selTotalPrice}</span>
        </div>
        <div class="my-auto flex gap-3 bg-gray-100 px-3 py-1 rounded-3xl">
          <span class="text-base" id="order-number${selectedDetails.selId}">${selectedDetails.selNumber}</span>
        </div>
      </div>
    </div>
  </div>`
  if((localStorage.getItem("postType")) && (JSON.parse(localStorage.getItem("postType"))!={})){
    noSelectedPost.classList.add("hidden")
    selectedPost.classList.remove("hidden")
    let objPost=JSON.parse(localStorage.getItem("postType"))
    document.querySelector("#img-post").src=objPost.imagePost
    document.querySelector("#name-post").textContent=objPost.namePost
    document.querySelector("#info-post").textContent=objPost.infoPost
    document.querySelector("#price-post").textContent=objPost.pricePost
    shippingVal=Number(objPost.pricePost)
    shipping.textContent=shippingVal
  }

  
  })
 
  document.querySelector("#btn-post").addEventListener("click" , ()=>{
    router.navigate(`/cart/checkout/post`)
  })
  goPostType.addEventListener("click" , ()=>{
    router.navigate(`/cart/checkout/post`)
  })
  goAddress.addEventListener("click" , ()=>{
    router.navigate(`/cart/checkout/address`)
  })
  goBack.addEventListener("click" , ()=>{
    router.navigate(`/cart`)
  })
  goPayment.addEventListener("click" , ()=>{
    if((Number(amount.textContent))!=0 && (Number(shipping.textContent))!=0 ){
        router.navigate(`/cart/checkout/payment`)
    } 
  })
  btnOff.addEventListener("click", ()=>{
    if((textOff.value)=="shoe"){
        textOff.classList.add("hidden")
        doOff.classList.remove("hidden")
        alarm.classList.add("hidden");
        promoVal=(amountVal+shippingVal)/10
        document.querySelector("#show-promo").classList.remove("hidden")
        promo.textContent=promoVal
        calculator()
    }
    else{
        alarm.classList.remove("hidden")
    }
  })
  amount.textContent=amountVal
  calculator()
  function calculator(){
    totalVal=(amountVal+shippingVal)-promoVal
    total.textContent=totalVal
  }



}
  

