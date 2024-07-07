import {ax} from "../api";
import { router } from "../main";
let flag
export function  htmlProductDetailsPg(s) {
    // console.log("1:",s);
    flag=s
    return `
    <div class="w-full flex flex-col " >
    <div class="flex flex-col w-full">
    <div class="flex flex-col bg-gray-100 h-96 grow justify-between">
      <img class=" w-12 h-16 object-cover go-back cursor-pointer" src='/picture/prev.png' alt="back" id="go-back">
      <div class="grow w-full flex justify-between flex-col pt-8 change-pic  cursor-pointer">
      <div class="w-72  mx-auto"><img class="max-w-full min-w-64 h-52  mx-auto object-contain  " src='' alt="shoe" id="img-details"></div>
      <div class="flex justify-center  gap-2 text-2xl my-4 icon-slider   text-slate-300 items-end " id="icon-pic">
        
      </div></div>
    </div>
    <div class="mx-6 flex justify-between mt-6">
      <h1 class="font-black text-4xl" id="name-details"></h1>
      <i class="fa fa-heart text-2xl text-gray-300 mr-2 mt-2  cursor-pointer transition" aria-hidden="true"></i>
    </div>
    <div class="flex mt-4 mx-7 pb-4 gap-3 border-b border-gray-100">
      <div class="bg-gray-200 px-2 rounded-lg mr-2">
        <span class="text-xs">5,371</span>
        <span class="text-sm">sold</span>
      </div>
      <img class="w-5 h-5" src="/picture/star.png" alt="star">
      <p class="text-gray-600">
        <span class="">4.3</span>
        <span>(5,389 reviews)</span>
      </p>
    </div>
    <div class="mt-4 mx-6">
      <h2 class="text-xl font-bold">Description</h2>
      <span class="text-lg text-gray-600 mt-2 transition" id="description-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quisquam!</span>
      <span class="text-gray-700 font-bold text-xl hover:text-black cursor-pointer hidden transition" id="view-more">view more...</span>
    </div>

    <div class="ml-6 flex mt-5 gap-8">
      <div class="">
        <h2 class="text-xl font-bold mb-2">Size</h2>
        <div class="flex gap-4 text-gray-600" id="sizes-details">
          
        </div>
      </div>
      <div class="">
        <h2 class="text-xl font-bold mb-2">Color</h2>
        <div class="flex gap-4" id="colors-details">
          
        </div>
      </div>
    </div>
    <div class="flex mt-7 gap-6 ml-7 mb-4">
      <h2 class="text-xl font-bold">Quantity</h2>
      <div class="my-auto flex gap-5 text-xl bg-gray-200 px-4 py-1 rounded-xl">
        <span class="font-bold cursor-pointer hover:text-red-600" id="minus">-</span>
        <span id="order-number">0</span>
        <span class="font-bold cursor-pointer hover:text-red-600" id="plus">+</span>
      </div>
    </div>
  </div>


  <div class=" w-full h-32 flex"></div>
  <div class="flex pl-7 border-t bg-white justify-between pr-7 pt-8 pb-10 fixed bottom-0" id="cart">
    <div class="flex flex-col">
      <p class="text-gray-500 pl-1">Total price</p>
      <p class="text-2xl font-bold flex gap-1 pl-1">
        <span>$</span>
        <span id="price-details">24000</span>
      </p>
    </div>
    <div class="border-solid border-black border-2 shadow-slate-600 shadow-md rounded-full flex justify-center items-center px-au
     w-4/6 bg-black text-white gap-4 h-14 cursor-pointer hover:bg-gray-800 transition-colors" id="btn-details">
      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
      <div class="text-xl">Add to Cart</div>
    </div>
  </div>
</div>`
    


}


export const funcProductDetailsPg=()=>{
  const goBack=document.querySelector("#go-back")
  const btnDetails=document.querySelector("#btn-details")
  const imageDetails=document.querySelector("#img-details")
  const nameDetails=document.querySelector("#name-details")
  const descriptionDetails=document.querySelector("#description-details")
  const priceDetails=document.querySelector("#price-details")
  const sizesDetails=document.querySelector("#sizes-details")
  const colorsDetails=document.querySelector("#colors-details")
  const viewMore=document.querySelector("#view-more")
  const orderNumber=document.querySelector("#order-number")
  const plus=document.querySelector("#plus")
  const minus=document.querySelector("#minus")
  const changePic=document.querySelector(".change-pic")
  const iconsParent=document.querySelector("#icon-pic")
  const like=document.querySelector(".fa-heart")
  let descriptionAll
  let quantityAll
  let selectedNumber
  let selectedSize
  let selectedColor
  let imagesAll
  let totalPrice=0
  let pricePerProduct
  let selectedId
  let allSelectedProducts

  const getBrand=async()=>{
    try{
        const activate=await ax.get(`/products/${flag.data.id}`);
        // console.log((activate.data.description).slice(0,70));
        // console.log(activate);
        imageDetails.src=activate.data.imgSrc[0]
        nameDetails.innerHTML=activate.data.name
        descriptionDetails.innerHTML=(activate.data.description).slice(0,75)
        pricePerProduct=activate.data.price
        priceDetails.innerHTML=totalPrice
        descriptionAll=activate.data.description
        quantityAll=activate.data.quantity
        imagesAll=activate.data.imgSrc
        selectedId=activate.data.id
        // console.log(imagesAll);
        imagesAll.forEach((icon,index)=>{
          if(index==0){
            iconsParent.innerHTML+=`<i class="fa fa-window-minimize text-black" aria-hidden="true"></i>`
          }
          else{
            iconsParent.innerHTML+=`<i class="fa fa-window-minimize" aria-hidden="true"></i>`
          }
        })
        let sizes=activate.data.sizes
        let colors=Object.values(activate.data.colors)
        // console.log(colors);
        sizesDetails.innerHTML=""
        colorsDetails.innerHTML=""
        sizes.map(size=>{
          sizesDetails.innerHTML +=`<div class="border-2 border-gray-600 border-solid rounded-full px-2 py-1 hover:text-black hover:border-black cursor-pointer">${size}</div>`
        })
        colors.map(color=>{
          colorsDetails.innerHTML +=`<div class="flex justify-center items-center text-2xl w-9 h-9 rounded-full border-solid border-2 border-white cursor-pointer hover:border-gray-400" style="background-color:${color};"></div>`
        })
        if(activate.data.description.length>75){
          viewMore.classList.remove("hidden")
        }
        // console.log(iconsPic,"---andddd----",document.querySelectorAll("#icon-pic>i"));
        
        
    }
    catch(e){
        console.log(e);
    }
    viewMore.addEventListener("click" ,()=>{
      // console.log(viewMore.textContent,"in");
      if(viewMore.textContent=="view more..."){
        descriptionDetails.innerHTML=descriptionAll
        viewMore.innerHTML="view less"
      }
      else if(viewMore.textContent=="view less"){
        descriptionDetails.innerHTML=descriptionAll.slice(0,75)
        viewMore.innerHTML="view more..."
      }
      
    })
    document.querySelectorAll("#sizes-details>div").forEach((item,index,allArray)=>{
      item.addEventListener("click" , ()=>{
        selectedSize=item.textContent
        // console.log(selectedSize);
        allArray.forEach(sel =>{
          sel.classList.remove("text-white" ,"bg-gray-600")
        })
        item.classList.add("text-white" ,"bg-gray-600")
      })
    })
    document.querySelectorAll("#colors-details>div").forEach((item,index,allArray)=>{
      item.addEventListener("click" , ()=>{
        selectedColor=item.style.backgroundColor
        console.log(selectedColor);
        // console.log(selectedS);
        allArray.forEach(sel =>{
          sel.textContent=""
        })
        
        item.textContent="✔"
        if(item.style.backgroundColor=="rgb(0, 0, 0)"){
          item.classList.add("text-white")
          console.log("black",item.classList);
        }
      })
    })
    let numPic=1
    const iconsPic=document.querySelectorAll("#icon-pic>i")
    imageDetails.classList.toggle("show-slider6")
    changePic.addEventListener("click" , ()=>{
      imageDetails.src=imagesAll[numPic]
      imageDetails.classList.toggle("show-slider5")
      imageDetails.classList.toggle("show-slider6")
      iconsPic.forEach(icon=>{
        icon.classList.remove("text-black")
      })
      iconsPic[numPic].classList.add("text-black")
      numPic+=1
      if(numPic==imagesAll.length){
        numPic=0
      }
    })
    // console.log(localStorage.getItem("allSelected"));
    btnDetails.addEventListener("click",()=>{
      const selectedProduct={
        selId:selectedId,
        selColor:selectedColor,
        selSize:selectedSize,
        selNumber:selectedNumber,
        selPrice:pricePerProduct,
        selTotalPrice:totalPrice
      }

      if(selectedColor&&selectedSize&&(selectedNumber>0)){
        console.log("you can");
        localStorage.setItem(`product${selectedId}`,JSON.stringify(selectedProduct))
        // localStorage.setItem("allSelected",)
        let recentSelProduct=(JSON.parse(localStorage.getItem("allSelected"))).selected
        console.log(JSON.parse(localStorage.getItem("allSelected")));
        console.log("first",recentSelProduct);
        recentSelProduct.push(`product${selectedId}`)
        console.log("second",recentSelProduct);
        let newPro={selected:recentSelProduct}
        localStorage.setItem("allSelected",JSON.stringify(newPro))
        console.log("new",newPro);
        // console.log(typeof(recentSelProduct));
        router.navigate(`/home`)
      }
    })


    
    
  }
  getBrand()
  goBack.addEventListener("click" , ()=>{
    router.navigate(`/home`)
  })
  like.addEventListener("click" , ()=>{
    like.classList.toggle("text-red-500")
  })
  minus.addEventListener("click" , ()=>{
    if(Number(orderNumber.textContent)>0){
      selectedNumber=(Number(orderNumber.textContent))-1
      totalPrice-=pricePerProduct
      priceDetails.innerHTML=totalPrice
      orderNumber.innerHTML=selectedNumber
    }
    // console.log(selectedNumber);
  })
  plus.addEventListener("click" , ()=>{
    // console.log(quantityAll);
    if(Number(orderNumber.textContent)<quantityAll){
      selectedNumber=(Number(orderNumber.textContent))+1
      totalPrice+=pricePerProduct
      priceDetails.innerHTML=totalPrice
      orderNumber.innerHTML=selectedNumber
    }
    // console.log(selectedNumber);
  })
  // localStorage.removeItem("")

}
  