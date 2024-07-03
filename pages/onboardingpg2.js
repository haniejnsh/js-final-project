import {router} from "../main"
// import {ax} from "../api";
export function  htmlOnboardingPg2() {
    // console.log("jkdhfkjehfrrrrrrrrrr");
        document.querySelector("#app").innerHTML= `
        <div class="w-full flex flex-col justify-end text-white gap-7 pl-7 pr-7 pb-24 " style="background-image:linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0, 0, 0, 0.5) ), url('../picture/WallpaperDog-20534610\ 1.png');">
        <div class="text-4xl font-bold show-slider4">
          <span>Welcome to</span>
          <span class="text-5xl text-yellow-200">👋</span>
        </div>
        <div class="text-7xl font-bold show-slider4">Shoea</div>
        <div class="text-lg font-bold show-slider4">The best sneakers & shoes e-commerse app of the century for your fashion needs!</div>
    </div>`;
    
}

export const funcOnboardingPg2=()=>{
    // setTimeout(()=>{
    //     router.navigate("/pg3");
    // },4000);
}

// export const productFunc=async(s="")=>{
//         document.querySelector(".all-product").innerHTML=""
//         try{
//             // const response=await fetch(`https://fakestoreapi.com/products${s}`);
//             // const activate=await response.json();
//             const activate=await ax.get(`/products${s}`);
//             console.log("activate");
//             console.log(activate.data);
//             console.log("activate");
//             activate.data.forEach(item=> {
//                 console.log(item);
//                 document.querySelector(".all-product").innerHTML+=`<div class="sec">
//                 <div><img src="${item.image}" alt=""></div>
//                 <div><a class="link" href="/product/${item.id}" data-navigo>${item.title}</a></div>
//                 <div>
//                     <span class="price">${item.price} <span class="dollar">$</span> </span>
//                 </div>
//             </div>`;
//             });
//         }
//         catch(e){
//             console.log(e);
//         }
// }
// export const productFunc2=()=>{
//     console.log("");
//     document.querySelector("#search-txt")?.addEventListener("input", _.debounce((e)=>{
//     productFunc(`?q=${e.target.value.trim()}`);
//     }, 500))
    
//     document.querySelector("#reverse-sort")?.addEventListener("click", (e)=>{
//             productFunc(`?_sort=price&_order=asc`);
//             })
    
//     document.querySelector("#sort1")?.addEventListener("click", (e)=>{
//         productFunc(`?_sort=title&_order=asc`);
//                 })

// }

