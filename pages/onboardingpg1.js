// import {ax} from "../api";
import { router } from "../main";
export function  htmlOnboardingPg1() {
    
        document.querySelector("#app").innerHTML= `<div class="w-full flex flex-col justify-between">
        <div class="flex justify-center my-auto">
            <img src="../picture/Group 2.png" alt="" class="w-16  h-16 my-auto mr-2">
            <h1 class="font text-7xl font-bold">shoea</h1>
        </div>
        <div class="flex justify-center  mb-36 content-end items-end text-5xl">
           
            <i class="fa fa-spinner animate-spin" aria-hidden="true"></i>
        </div>
    </div>`;
   
}
export const funcOnboardingPg1=()=>{
    if(!localStorage.getItem("first")){
        setTimeout(()=>{
            router.navigate("/pg2");
        },2000);
    }
    
}
