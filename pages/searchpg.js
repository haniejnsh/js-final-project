import {ax} from "../api";
import { router } from "../main";


export function  htmlSearchPg() {
  return`
  <div class="w-full flex flex-col" >

        <div class="w-full flex" >
          <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="" id="go-back">
          <span class="my-auto font-bold text-2xl ml-4" id="name-pg">Search</span>
        </div>

        <div id="search-part-home" class="w-full mt-4">
          <label for="srch" class="flex w-ful mx-6 border-solid border-gray-100 border-2 rounded-lg px-4 py-1 bg-gray-50 h-12">
            <i class="fa fa-search text-gray-400 my-auto" aria-hidden="true"></i>
          <input type="text" placeholder="Search" id="srch" class="grow ml-4 text-xl my-auto bg-gray-50 focus:outline-none text-black">
          </label>
        </div>

        <div class="flex justify-between items-center px-6 mt-6 ">
          <p class="text-lg font-bold">
            <span>Result for</span>
            "
            <span id="title-srch"></span>
            "
          </p>
          <p class="">
            <span id="found-number">0</span>
            <span>found</span>
          </p>
        </div>

        <div class="flex justify-center ">

          <div id="not-found" class="hidden flex flex-col items-center gap-6 h-full mt-24">
            <img src="/picture//notfound.png" alt="not found" class="w-3/5">
            <h3 class="text-2xl font-bold">Not Found</h3>
            <p class="px-8 text-center text-lg text-gray-600">Sorry, the keyword you entered cannot be found, please check again or search with anothor keyword.</p>
          </div>

          <div id="found" class=" grid grid-cols-2 gap-5 mt-4 mx-3">
            
            
          </div>

        </div>

      </div>`
        
        
}

export const funcSearchPg=()=>{
  const goBack=document.querySelector("#go-back")
  const foundSel=document.querySelector("#found")
  const notFound=document.querySelector("#not-found")
  const searchTxt=document.querySelector("#srch")
  const searchTitle=document.querySelector("#title-srch")
  const foundNumber=document.querySelector("#found-number")
  let searchLocal=localStorage.getItem("search")

  const getProducts=async(s="")=>{
    foundSel.innerHTML=""
    
    try{
      const activate=await ax.get(`/products${s}`);
      
      if(s!=`?q=`){
      let number=(activate.data).length
      foundNumber.textContent=number
      activate.data.forEach(item=> {
        
        foundSel.innerHTML+=`
          <a class="flex flex-col " href="/home/details/${item.id}" data-navigo >
            <div class="flex items-center rounded-xl h-44 w-full bg-slate-100"><img class="w-5/6 mx-auto object-cover" src="${item.imgSrc[0]}" alt="pic shoe"></div>
            <p class="w-full px-2 font-bold text-xl truncate mt-3">${item.name}</p>
            <div class="flex mt-1 gap-4 px-2">
              <img class="w-5 h-5" src="/picture/star.png" alt="star">
              <p class="text-gray-600">4.3</p>
              <span>|</span>
              <div class="bg-gray-200 justify-center items-center px-2 rounded-lg mr-2 flex">
                <span class="text-xs">5,371</span>
                <span class="text-xs">sold</span>
              </div>
            </div>
            <div class="pl-2 font-bold text-lg text-gray-700 mt-1">
              <span>$</span>
              <span>${item.price}</span>
            </div>
          </a>`
      });}
    
      if(foundSel.textContent==""){
        notFound.classList.remove("hidden")
        foundSel.classList.add("hidden")
      }
      else{
        notFound.classList.add("hidden")
        foundSel.classList.remove("hidden")
      }
    }
    catch(e){
      console.log(e);
    }
  }
  // if(searchLocal){
    getProducts(`?q=${searchLocal}`);
    searchTxt.value=searchLocal
    searchTitle.textContent=searchLocal
  // }
      
  searchTxt?.addEventListener("input", _.debounce((e)=>{
    getProducts(`?q=${e.target.value.trim()}`);
    searchTitle.textContent=searchTxt.value
  }, 500))
  goBack.addEventListener("click" , ()=>{
    localStorage.setItem("search","")
    router.navigate(`/home`)
  })
 
}