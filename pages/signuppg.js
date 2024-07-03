import {ax} from "../api";
import { router } from "../main";
import {Button} from "./componentbutton";

export function  htmlSignUpPg() {
    
    return `<div class="w-full flex flex-col" >
    <div ><img class=" w-12 h-16 object-cover go-back cursor-pointer " src="./picture/prev icon.png" alt=""></div>

    <div class="h-1/4 flex"><img class="m-auto" src="./picture/logo.png" alt=""></div>

    <div class="text-center text-4xl font-bold mt-7">Create Your Account</div>

    <div class="flex grow">
      <form action="" class="w-full mt-14 flex flex-col gap-5">
          <label for="form-email" id="label-email" class="bg-gray-100 w-5/6 mx-auto rounded-lg px-3 py-2 border-2 border-solid border-white">
            <i class="fa fa-envelope text-sm text-gray-400 mr-0 change-color" aria-hidden="true"></i>
            <input type="email" id="form-email" placeholder="Email" class="bg-gray-100 text-sm w-5/6 focus:outline-none text-gray-400 change-color">
          </label>
          <label for="form-pass" id="label-pass" class="bg-gray-100 w-5/6 mx-auto rounded-lg px-3 py-2 border-2 border-solid border-white">
            <i class="fa fa-lock text-sm text-gray-400 mr-0 change-color" aria-hidden="true"></i>
            <input type="password" id="form-pass" placeholder="Password" class="bg-gray-100 text-sm  w-5/6 focus:outline-none text-gray-400 change-color">
            <i class="fa fa-eye text-sm text-gray-400 pr-0 ml-1 hidden change-color change-hidden" aria-hidden="true"></i>
            <i class="fa fa-eye-slash text-sm text-gray-400 pr-0 ml-1 cursor-pointer change-color change-hidden" aria-hidden="true"></i>
          </label>
          <span class="error text-red-600 text-lg mx-auto mt-7"></span>
        <div class="flex flex-col justify-end grow ">
            ${Button({
                content : "Create Account",
                variant : "login",
                idName : "form-btn-signup"
            })}
        </div>
      
      </form>
    </div>
    
</div>`;
///////////////////////////////////////
// {/* <div class="w-5/6 mb-10 mx-auto ">
//                 <input type="button" id="form-btn-signup" value="Create Account" class="bg-gray-500 w-full rounded-2xl text-sm py-2 mx-auto  text-white">
//             </div> */}
////////////////////////////////////////////



}
export const funcSignUpPg=()=>{
    // console.log("rfr");
const passIn=document.querySelector("#form-pass");
const emailIn=document.querySelector("#form-email");
const btnSignup=document.querySelector("#form-btn-signup")
const btnGoBack=document.querySelector(".go-back")
const colorChange=document.querySelectorAll(".change-color")
const hiddenChange=document.querySelectorAll(".change-hidden")
const labelPass=document.querySelector("#label-pass")
const labelEmail=document.querySelector("#label-email")
btnSignup.addEventListener("click" , async(e)=>{
    e.preventDefault();
    const infoUser={
        email:emailIn.value,
        password:passIn.value
    };
    if(infoUser.email!="" && infoUser.password!=""){
        try{
            const response=await ax.post("/signup" , infoUser);
            if(response.status===201){
                router.navigate("/login")
            }
        }
        catch(e){
            console.log(e);
            document.querySelector(".error").innerHTML=e.response.data;
        }
    }

})
btnGoBack.addEventListener("click" , ()=>{
    router.navigate("/login")
})

emailIn.addEventListener("focus" , ()=>{
    labelEmail.classList.add("border-gray-600")
    labelEmail.classList.remove("border-white")
})
passIn.addEventListener("focus" , ()=>{
    labelPass.classList.add("border-gray-600")
    labelPass.classList.remove("border-white")
})
emailIn.addEventListener("blur" , ()=>{
    labelEmail.classList.remove("border-gray-600")
    labelEmail.classList.add("border-white")
})
passIn.addEventListener("blur" , ()=>{
    labelPass.classList.remove("border-gray-600")
    labelPass.classList.add("border-white")
})


passIn.addEventListener("input" , ()=>{
    if(emailIn.value!="" || passIn.value!=""){
        btnSignup.classList.remove("bg-gray-500")
        btnSignup.classList.add("bg-black")
        btnSignup.classList.add("cursor-pointer")
        colorChange.forEach((item)=>{
            item.classList.remove("text-gray-400")
            item.classList.add("text-black")
        })
    }
    if(emailIn.value=="" || passIn.value==""){
        btnSignup.classList.remove("bg-black")
        btnSignup.classList.add("bg-gray-500")
        btnSignup.classList.remove("cursor-pointer")
        colorChange.forEach((item)=>{
            item.classList.add("text-gray-400")
            item.classList.remove("text-black")
        })
    }
})
emailIn.addEventListener("input" , ()=>{
    if(emailIn.value!="" || passIn.value!=""){
        btnSignup.classList.remove("bg-gray-500")
        btnSignup.classList.add("bg-black")
        btnSignup.classList.add("cursor-pointer")
        colorChange.forEach((item)=>{
            item.classList.remove("text-gray-400")
            item.classList.add("text-black")
        })
    }
    if(emailIn.value=="" || passIn.value==""){
        btnSignup.classList.remove("bg-black")
        btnSignup.classList.add("bg-gray-500")
        btnSignup.classList.remove("cursor-pointer")
        colorChange.forEach((item)=>{
            item.classList.add("text-gray-400")
            item.classList.remove("text-black")
        })
    }
})

hiddenChange.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        hiddenChange.forEach((item)=>{
            item.classList.toggle("hidden")
        })
        if(passIn.type=="password"){passIn.type="text"}
        else if(passIn.type=="text"){passIn.type="password"}
    })
})
}