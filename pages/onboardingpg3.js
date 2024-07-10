import { router } from "../main";
const slider=[
    {
        id:1,
        img:"./picture/slide1.png",
        text:"We provide high quality products just for you",
        icon:["","text-slate-400","text-slate-400"],
        valBtn:"Next"
    },
    {
        id:2,
        img:"./picture/slide2.png",
        text:"Your satisfaction is our number one periority",
        icon:["text-slate-400","","text-slate-400"],
        valBtn:"Next"
    },
    {
        id:3,
        img:"./picture/slide3.png",
        text:"Let’s fulfill your fashion needs with shoearight now!",
        icon:["text-slate-400","text-slate-400","Get Started"],
        valBtn:"Get Started"
    }
]

export function  htmlOnboardingPg3() {
        return `<div class="w-full flex flex-col overflow-hidden" >
        <div class="w-full " >
          <img class="w-full h-full show-slider1 img-slider" src="${slider[0].img}" alt="" >
        </div>
        <div class="text-3xl font-bold text-center px-6 mt-7 show-slider1 text-slider">${slider[0].text}</div>
        <div class="flex justify-center items-center gap-2 text-3xl my-4 icon-slider grow ">
          <i class="fa fa-window-minimize ${slider[0].icon[0]}" aria-hidden="true"></i>
          <i class="fa fa-window-minimize ${slider[0].icon[1]}" aria-hidden="true"></i>
          <i class="fa fa-window-minimize ${slider[0].icon[2]}" aria-hidden="true"></i>
        </div>
        <div class="w-5/6 mb-10 mx-auto ">
          <input type="button" value="${slider[0].valBtn}" id="slide-btn" class="mx-auto border-black border-solid border-2 rounded-2xl w-full bg-black text-white text-sm py-2 hover:bg-slate-700">
        </div>
        
    </div>`;
   
}

let firstClick=false;
let secondClick=false;
export const funcOnboardingPg3=()=>{
  
  document.querySelector("#slide-btn").addEventListener("click" , ()=>{
    if(firstClick && secondClick){
      router.navigate("/login");
    }
  })

  document.querySelector("#slide-btn").addEventListener("click" , ()=>{
    if(firstClick && !secondClick){
      document.querySelector(".img-slider").classList.add("show-slider3")
      document.querySelector(".text-slider").classList.add("show-slider3")
      document.querySelector(".img-slider").src=slider[2].img;
      document.querySelector(".text-slider").innerHTML=slider[2].text;
      document.querySelector(".icon-slider").innerHTML=`<i class="fa fa-window-minimize ${slider[2].icon[0]}" aria-hidden="true"></i>
        <i class="fa fa-window-minimize ${slider[2].icon[1]}" aria-hidden="true"></i>
        <i class="fa fa-window-minimize ${slider[2].icon[2]}" aria-hidden="true"></i>`;
      document.querySelector("#slide-btn").value=slider[2].valBtn
      secondClick=true;
    }
  })






    document.querySelector("#slide-btn").addEventListener("click" , ()=>{
        if(!firstClick && !secondClick){
          document.querySelector(".img-slider").classList.add("show-slider2")
          document.querySelector(".text-slider").classList.add("show-slider2")
          document.querySelector(".img-slider").src=slider[1].img;
          document.querySelector(".text-slider").innerHTML=slider[1].text;
          document.querySelector(".icon-slider").innerHTML=`<i class="fa fa-window-minimize ${slider[1].icon[0]}" aria-hidden="true"></i>
            <i class="fa fa-window-minimize ${slider[1].icon[1]}" aria-hidden="true"></i>
            <i class="fa fa-window-minimize ${slider[1].icon[2]}" aria-hidden="true"></i>`;
          firstClick=true;
        }
      })
      
}