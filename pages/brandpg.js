import {ax} from "../api";
import { router } from "../main";
let flag

export function  htmlBrandPg(f) {
        // console.log(f);
        flag=f
        return`
          <div class="w-full flex flex-col" >
            <div class="flex">
              <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
              <span class="my-auto font-bold text-2xl ml-4" id="name-pg"></span>
            </div>
            <div id="main-part-brand" class="grid grid-cols-2 gap-5 mt-4 mx-3">
                  
            </div>
          </div>`
        
        
    }

export const funcBrandPg=()=>{

  const goBack=document.querySelector("#go-back")
  const root=document.querySelector("#main-part-brand")
  const title=document.querySelector("#name-pg")

  const getBrand=async()=>{
    root.innerHTML=""
    try{
        const activate=await ax.get(`/products?brand=${flag.data.brand}`);
        const brandName=(activate.data[0].name).split(" ")[0]
        title.innerHTML=`${brandName}`
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
  getBrand()
  goBack.addEventListener("click" , ()=>{
    router.navigate(`/home`)
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

