import {router} from "../main"
// import {ax} from "../api";
export function  htmlOnboardingPg2() {
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
    if(!localStorage.getItem("first")){
        setTimeout(()=>{
            router.navigate("/pg3");
        },4000);
    }
}


