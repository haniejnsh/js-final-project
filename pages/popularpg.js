import {ax} from "../api";
import { router } from "../main";
let flag

export function  htmlPopularPg() {
        // console.log(f);
        // flag=f
        return`
          <div class="w-full flex flex-col" >
            <div class="flex">
              <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
              <span class="my-auto font-bold text-2xl ml-4" id="name-pg">Most Popular</span>
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
            <div id="main-part-brand" class="grid grid-cols-2 gap-5 mt-4 mx-3">
                  
            </div>
          </div>`
        
        
    }

export const funcPopularPg=()=>{

  const goBack=document.querySelector("#go-back")
  const root=document.querySelector("#main-part-brand")
//   const title=document.querySelector("#name-pg")

  const getProducts=async(s="")=>{
    root.innerHTML=""
    try{
        const activate=await ax.get(`/products${s}`);
        // const brandName=(activate.data[0].name).split(" ")[0]
        // title.innerHTML=`${brandName}`
        activate.data.forEach(item=> {
          
            // console.log(item.imgSrc[0]);
            // console.log(document.querySelector("#main-part-brand"));
            root.innerHTML+=`
              <a class="flex flex-col " href="/home/details/${item.id}" data-navigo>
                <div class="flex items-center rounded-xl h-44 w-full bg-slate-100"><img class="w-5/6 mx-auto object-cover" src="${item.imgSrc[0]}" alt="pic shoe"></div>
                <p class="w-full px-2 font-bold text-xl truncate mt-3">${item.name}</p>
                <div class="pl-2 font-bold text-gray-700">
                  <span>$</span>
                  <span>${item.price}</span>
                </div>
              </a>`
              // document.querySelector("#main-part-brand").innerHTML+=``
        });
    }
    catch(e){
        console.log(e);
    }
  }
  getProducts()
  goBack.addEventListener("click" , ()=>{
    router.navigate(`/home`)
  })

  const seeBrand=document.querySelectorAll("#seeBrand-part-home>div")
//   const heart=document.querySelector(".fa-heart")
//   const bell=document.querySelector(".fa-bell")

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






}





// export function  htmlBrandPg(f) {
//     console.log(f);
//     flag=f
//     return `
//     <div class="w-full flex flex-col" >
//         <div class="flex">
//           <img class=" w-12 h-16 object-cover go-back" src='./picture/prev.png' alt="">
//           <span class="my-auto font-bold text-2xl ml-4">${flag.data.brand}</span>
//         </div>
//         <div id="main-part-brand" class="grid grid-cols-2 gap-5 mt-4 mx-3">
          
//         </div>
//       </div>`
// }


// export const funcBrandPg=async()=>{
//         document.querySelector("#main-part-brand").innerHTML=""
//         try{
//             const activate=await ax.get(`/products?brand=${flag.data.brand}`);
//             console.log(activate);
//             activate.data.forEach(item=> {
//                 console.log(item.imgSrc[0]);
//                 console.log(document.querySelector("#main-part-brand"));
//                 document.querySelector("#main-part-brand").innerHTML+=`
//                     <div class="flex flex-col ">
//                         <div class="flex items-center rounded-xl h-44 w-full bg-slate-100"><img class="w-5/6 mx-auto object-cover" src="${item.imgSrc[0]}" alt="pic shoe"></div>
//                         <p class="w-full px-2 font-bold text-xl truncate mt-3">${item.name}</p>
//                         <div class="pl-2 font-bold text-gray-700">
//                             <span>$</span>
//                             <span>${item.price}</span>
//                         </div>
//                     </div>`;
//             });
//         }
//         catch(e){
//             console.log(e);
//         }
//       }

