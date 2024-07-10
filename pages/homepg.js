import {ax} from "../api";
import { router } from "../main";
let flag
export function  htmlHomePg(s) {
    flag=s
    return `
    <div class="w-full flex flex-col" >
        <div id="parts-home" class="w-full  flex flex-col overflow-auto" >

          <div id="first-part-home" class="flex  px-5 py-3 gap-3 w-full">
            <img src="./picture/ahmadpic.jpg" alt="" class="w-12 h-12 rounded-full mt-1">
            <div class="ml-3">
              <p class="font-bold text-gray-400 text-lg">Good Morning 👋</p>
              <p class="font-bold text-black text-xl" id="name-user">Saeed Abdilar</p>
            </div>
            <div class="grow  flex justify-end items-center gap-3 pr-2">
              <i class="fa fa-bell text-2xl text-gray-400 " aria-hidden="true"></i>
              <i class="fa fa-heart text-2xl text-gray-400" aria-hidden="true"></i>
            </div>
          </div>

          <div id="search-part-home" class="w-full mt-2">
            <label for="srch" class="flex w-ful mx-6 border-solid border-gray-100 border-2 rounded-lg px-2 py-2 bg-gray-50">
              <input type="text" placeholder="Search" id="srch" class="grow ml-2 text-gray-600 text-xl my-auto bg-gray-50 focus:outline-none">
              <i class="fa fa-search text-gray-600 my-auto mx-2 text-xl cursor-pointer" aria-hidden="true" id="go-search"></i>
            </label>
          </div>


          <div id="brandPage-part-home" class="grid grid-cols-4 mx-auto mt-2  w-full px-4">
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/categories.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full ">
              </div>
              <p class="text-center mt-1 text-lg">Nike</p>
            </div>
            <div class="m-3 cursor-pointer" >
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/adidas.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">Adidas</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/puma.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">Puma</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/asics.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">Asics</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/reebok.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">Reebok</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/newba.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">New Ba...</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex items-center">
              <img src="./picture/convers.png" alt="" class="w-12 h-12  object-contain mx-auto rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">Converse</p>
            </div>
            <div class="m-3 cursor-pointer">
              <div class="bg-slate-100 w-16 mx-auto h-16 rounded-full flex ">
              <img src="./picture/more.png" alt="" class="w-12 h-12  object-contain mt-1 ml-1 rounded-full">
              </div>
              <p class="text-center mt-1 text-lg">More...</p>
            </div>
          </div>

          <div id="seeAll-part-home" class="flex justify-between ml-6 mr-8 my-2">
            <p class="font-bold text-2xl">Most Popular</p>
            <a href="/popular" data-navigo class="font-bold text-lg ">See All</a>
          </div>

          <div id="seeBrand-part-home" class="flex gap-3 mx-3 overflow-hidden my-2 hover:overflow-auto">
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-white text-lg bg-gray-500 ">All</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Nike</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Adidas</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Puma</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Asics</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Reebok</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg"><span class="mr-1">New</span><span>Ba...</span></div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">Converse</div>
            <div class="cursor-pointer border-solid border-2 border-gray-500 px-3 py-1 rounded-3xl text-gray-800 text-lg">More...</div>
            
          </div>
          <div id="main-part-home" class="grid grid-cols-2 gap-3 mt-4 mx-3">
            
          </div>
        </div>
        <div class="h-20"></div>


        <div class="fixed flex bottom-0 bg-white px-4 gap-6 pt-2 pb-2" id="footer-menu">
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/home.png" alt=""></div>
            <p class="text-sm font-bold text-center">Home</p>
          </div>
          <div class="my-auto mx-auto cursor-pointer go-selected-page">
            <div class="w-10 h-10 flex justify-center items-center"><img class="w-8 mb-1" src="./picture/cart.png" alt=""></div>
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
    `;


}


export const funcHomePg=()=>{
  const brandPgeItems=document.querySelectorAll("#brandPage-part-home>div")
  const searchBox=document.querySelector("#srch")
  const goSearch=document.querySelector("#go-search")
  const nameUser=document.querySelector("#name-user")
  const getProducts=async(s="")=>{
  document.querySelector("#main-part-home").innerHTML=""
  try{
      const activate=await ax.get(`/products${s}`);
      activate.data.forEach(item=> {
          document.querySelector("#main-part-home").innerHTML+=`
            <a class="flex flex-col cursor-pointer" href="/home/details/${item.id}" data-navigo>
              <div class="flex items-center rounded-xl h-36 w-full bg-slate-100"><img class="w-5/6 mx-auto object-cover" src="${item.imgSrc[0]}" alt=""></div>
              <p class="w-full px-2 font-bold text-xl truncate" >${item.name}</p>
              <div class="pl-2 font-bold text-gray-700">
                <span>$</span>
                <span>${item.price}</span>
              </div>
            </a>`;
      });
  }
  catch(e){
      console.log(e);
  }
}

getProducts()

  const seeBrand=document.querySelectorAll("#seeBrand-part-home>div")
  const heart=document.querySelector(".fa-heart")
  const bell=document.querySelector(".fa-bell")

  seeBrand.forEach(item =>{
  
    item.addEventListener("click",()=>{
      if(item.textContent!="All"){
        getProducts(`?brand=${(item.textContent).toLowerCase()}`);
      }
      else if(item.textContent=="All"){
        getProducts(``);
      }
      
      seeBrand.forEach(i => i.classList.remove("bg-gray-500","text-white"))
      item.classList.add("bg-gray-500","text-white")
    })
  })
  bell.addEventListener("click" ,()=>{
    bell.classList.toggle("text-gray-400")
    bell.classList.toggle("text-yellow-400")
  })
  heart.addEventListener("click" ,()=>{
    heart.classList.toggle("text-red-400")
    heart.classList.toggle("text-gray-400")
  })
  brandPgeItems.forEach(item=>{
    item.addEventListener("click" , ()=>{
      let param=((item.textContent).trim()).toLocaleLowerCase()
      router.navigate(`/home/${param}`)
      
    })
  })
  document.querySelectorAll(".go-selected-page").forEach((pg,n)=>{
    pg.addEventListener("click" , ()=>{
      if(n==0){router.navigate(`/home`)}
      else if(n==1){router.navigate(`/cart`)}
      else if(n==2){router.navigate(`/orders`)}
    })
  }) 
  goSearch.addEventListener("click" , ()=>{
    if(searchBox.value!=""){
      localStorage.setItem("search" , searchBox.value)
      router.navigate(`/search`)
    }
  })
  let emailName=localStorage.getItem("email").split("@")[0]
  nameUser.innerHTML=emailName
}