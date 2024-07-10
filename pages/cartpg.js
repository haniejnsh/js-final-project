import {ax} from "../api";
import { router } from "../main";


export function  htmlCartPg() {

        return`
        <div class="w-full flex flex-col" >
        <div class="w-full flex flex-col overflow-auto grow" >
          <div class="flex">
            <img class=" w-5 ml-7 mt-5 object-contain" src='/picture/logo.png' alt="logo" >
            <span class="my-auto font-bold text-2xl ml-6 mt-5" id="name-pg">My Cart</span>
          </div>
          <div class="flex flex-col mt-8 gap-5 " id="show-all-selected">

          </div>
          
        </div>
        <div class=" w-full h-48 flex"></div>
        <div class="flex pl-7 border-t bg-white justify-between pr-7 pt-8 pb-10 fixed bottom-14 rounded-t-3xl" id="cart">
          <div class="flex flex-col">
            <p class="text-gray-500 pl-1">Total price</p>
            <p class="text-2xl font-bold flex gap-1 pl-1">
              <span>$</span>
              <span id="show-total-price">0</span>
            </p>
          </div>
          <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center px-au
          w-4/6 bg-black text-white gap-6 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-checkout">
            
            <div class="text-xl">Checkout</div>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>


        <div class="fixed flex bottom-0  px-4 gap-6 pt-2 pb-2 bg-white" id="footer-menu">
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/home-2.png" alt=""></div>
            <p class="text-sm font-bold text-center">Home</p>
          </div>
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/cart-2.png" alt=""></div>
            <p class="text-sm font-bold text-center">Cart</p>
          </div>
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-10 mb-1" src="./picture/shoppi.png" alt=""></div>
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

export const funcCartPg=()=>{
    let selectedProductNames=JSON.parse(localStorage.getItem("allSelected"))?.selected
    const showAll=document.querySelector("#show-all-selected")
    const showTotalPrice=document.querySelector("#show-total-price")
    const modalCart=document.querySelector("#modal-cart")
    const cancelDelete=document.querySelector(".cancel-delete")
    const confirmDelete=document.querySelector(".confirm-delete")
    const goCheckout=document.querySelector("#btn-checkout")
    let selectedDetails
    let totalPrice=0
    let localDel
    let numberLocal

  selectedProductNames?.map(pro=>{
    selectedDetails=JSON.parse(localStorage.getItem(pro))
    totalPrice+=(selectedDetails.selTotalPrice)
    showAll.innerHTML+=`
    <div class="show-sel flex bg-white shadow-gray-100 shadow-md drop-shadow-2xl  rounded-xl  mx-4 p-6 h-44" id="sel${selectedDetails.selId}">
      <div class="w-2/5 bg-gray-100 rounded-xl flex justify-center items-center px-1" ><img src="${selectedDetails.selPic}" alt="selected pic" class="w-full"></div>
      <div class="pl-4 py-1 grow flex flex-col justify-between">
        <div class="flex justify-between bg">
          <h2 class="text-lg font-bold" onclick="hi()">${selectedDetails.selShoe}</h2>
          <i class="fa fa-trash mt-1 cursor-pointer hover:text-red-600 transition" id="delete${selectedDetails.selId}" aria-hidden="true"></i>
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
          <div class="my-auto flex gap-3 text-xl bg-gray-100 px-3 py-1 rounded-lg">
            <span class="font-bold cursor-pointer hover:text-red-600 minus" id="minus${selectedDetails.selId}">-</span>
            <span class="text-lg order-number" id="order-number${selectedDetails.selId}">${selectedDetails.selNumber}</span>
            <span class="font-bold cursor-pointer hover:text-red-600 plus" id="plus${selectedDetails.selId}">+</span>
          </div>
        </div>
      </div>

    </div>`
  })
  showTotalPrice.innerHTML=totalPrice
  document.querySelectorAll(".plus").forEach((p)=>{
    p.addEventListener("click" , ()=>{
        let num=Number(document.querySelector(`#order-number${(p.id).slice(4)}`).textContent)
        let pri=Number(document.querySelector(`#total-price${(p.id).slice(4)}`).textContent)
        let local=JSON.parse(localStorage.getItem(`product${(p.id).slice(4)}`))
        if(num<(local.selQuantity)){
            
            document.querySelector(`#order-number${(p.id).slice(4)}`).innerHTML=num+1
            document.querySelector(`#total-price${(p.id).slice(4)}`).innerHTML=pri+(local.selPrice)
            showTotalPrice.innerHTML=(Number(showTotalPrice.textContent))+(local.selPrice)
            local.selNumber+=1
            local.selTotalPrice+=local.selPrice
            localStorage.setItem(`product${(p.id).slice(4)}`,JSON.stringify(local)) 
        }
  })
})
    document.querySelectorAll(".minus").forEach((m)=>{
        m.addEventListener("click" , ()=>{
            let num=Number(document.querySelector(`#order-number${(m.id).slice(5)}`).textContent)
            let pri=Number(document.querySelector(`#total-price${(m.id).slice(5)}`).textContent)
            if(num>1){
                let local=JSON.parse(localStorage.getItem(`product${(m.id).slice(5)}`))
                document.querySelector(`#order-number${(m.id).slice(5)}`).innerHTML=num-1
                document.querySelector(`#total-price${(m.id).slice(5)}`).innerHTML=pri-(local.selPrice)
                showTotalPrice.innerHTML=(Number(showTotalPrice.textContent))-(local.selPrice)
                local.selNumber-=1
                local.selTotalPrice-=local.selPrice
                localStorage.setItem(`product${(m.id).slice(5)}`,JSON.stringify(local))
            }
    })
    })
    
    document.querySelectorAll(".fa-trash").forEach(t=>{
        t.addEventListener("click" , ()=>{
            modalCart.classList.remove("hidden")
            let localModal=JSON.parse(localStorage.getItem(`product${(t.id).slice(6)}`))
            document.querySelector("#modal-details").innerHTML=`
            <div class="w-2/5 bg-gray-100 rounded-xl flex justify-center items-center px-1 ">
                <img src="${localModal.selPic}" alt="selected pic" class="w-full">
                </div>
                <div class="pl-4 py-1 grow flex flex-col justify-between">
                  <div class="flex justify-between bg">
                    <h2 class="text-lg font-bold" >${localModal.selShoe}</h2>
                  </div>
                  <div class="flex gap-2 text-gray-600">
                    <div class="flex gap-2">
                      <div class=" w-4 h-4 rounded-full mt-1"   style="background-color:${localModal.selColor};"></div>
                      <span class="">${localModal.selNameColor}</span>
                    </div>
                    <div>|</div>
                    <div class="flex">
                      <span>Size</span>
                      <span class="mx-1">=</span>
                      <span>${localModal.selSize}</span>
                    </div>
                    
                  </div>
                  <div class="flex justify-between items-center pr-2 pl-2 mb-2">
                    <div class="font-bold text-xl">
                      <span>$</span>
                      <span>${localModal.selTotalPrice}</span>
                    </div>
                    <div class="my-auto flex gap-3 text-xl bg-gray-100 px-3 py-1 rounded-lg">
                      <span class="font-bold cursor-pointer hover:text-red-600" >-</span>
                      <span class="text-lg">${localModal.selNumber}</span>
                      <span class="font-bold cursor-pointer hover:text-red-600" >+</span>
                    </div>
                  </div>
                </div>`
            numberLocal=(t.id).slice(6)
            cancelDelete.addEventListener("click" , ()=>{
                modalCart.classList.add("hidden")
            })

        })
    })
    confirmDelete.addEventListener("click" , ()=>{
      document.querySelector(`#sel${numberLocal}`)?.remove()
      localDel=JSON.parse(localStorage.getItem(`product${numberLocal}`))
      showTotalPrice.textContent=(Number(showTotalPrice.textContent))-(localDel.selTotalPrice)
      localStorage.removeItem(`product${numberLocal}`)
      let local=(JSON.parse(localStorage.getItem("allSelected"))).selected
      let newLocal=local.filter(loc=>loc!=`product${numberLocal}`)
      localStorage.setItem("allSelected",JSON.stringify({selected:newLocal}))
      modalCart.classList.add("hidden")
      
  })
    document.querySelectorAll(".go-selected-page").forEach((pg,n)=>{
      pg.addEventListener("click" , ()=>{
        if(n==0){router.navigate(`/home`)}
        else if(n==1){router.navigate(`/cart`)}
        else if(n==2){router.navigate(`/orders`)}
      })
    })
    goCheckout.addEventListener("click" , ()=>{
      router.navigate(`/cart/checkout`)
    })
}
  

