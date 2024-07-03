import {ax} from "../api";
import { router } from "../main";
import {Button} from "./componentbutton";

export function  htmlLoginPg() {
    
        return `<div class="w-full flex flex-col" >
        <div ><img class=" w-12 h-16 object-cover go-back" src="./picture/prev icon.png" alt=""></div>

        <div class="h-1/4 flex"><img class="m-auto" src="./picture/logo.png" alt=""></div>

        <div class="text-center text-4xl font-bold mt-7">Login to Your Account</div>

        <div class="flex grow">
          <form action="" class="w-full mt-12 flex flex-col gap-5">
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
              <label for="form-checkbox" class="mx-auto text-lg mt-4">
                <input type="checkbox" id="form-checkbox" class="accent-black">
                Remember me
              </label>
              <span class="error text-red-600 text-lg mx-auto mt-7"></span>
            <div class="flex flex-col justify-end grow ">
              <div class="mx-auto mb-6 text-lg flex gap-3">
                <p class="text-gray-600">No account?</p>
                <a href="/signup" class="font-bold text-gray-600 hover:text-black" data-navigo>Create one</a>
              </div>
              ${Button({
                content : "Sign in",
                variant : "login",
                idName : "form-btn-login"
            })}
            </div>
          
          </form>
        </div>
        
    </div>`;
   
}
export const funcLoginPg=()=>{
  const passIn=document.querySelector("#form-pass");
  const emailIn=document.querySelector("#form-email");
  const btnLogin=document.querySelector("#form-btn-login")
  const btnGoBack=document.querySelector(".go-back")
  const colorChange=document.querySelectorAll(".change-color")
  const hiddenChange=document.querySelectorAll(".change-hidden")
  const labelPass=document.querySelector("#label-pass")
  const labelEmail=document.querySelector("#label-email")

  btnLogin.addEventListener("click" , async(e)=>{
    e.preventDefault();
    
    const infoUser={
        email:emailIn.value,
        password:passIn.value
    };
    if(infoUser.email!="" && infoUser.password!=""){
      try{
          const response=await ax.post("/login" , infoUser);
          if(response.status===200){
              const {data}=response;
              // console.log(data);
              localStorage.setItem("token" , data.accessToken);
              localStorage.setItem("email" , data.user.email);
              router.navigate("/home");
          }
      }
      catch(e){
          console.log(e);
          document.querySelector(".error").innerHTML=e.response.data;
      }
    }
})
// btnGoBack.addEventListener("click" , ()=>{
//   router.navigate("/login")
// })

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
      btnLogin.classList.remove("bg-gray-500")
      btnLogin.classList.add("bg-black")
      btnLogin.classList.add("cursor-pointer")
      colorChange.forEach((item)=>{
          item.classList.remove("text-gray-400")
          item.classList.add("text-black")
      })
  }
  if(emailIn.value=="" || passIn.value==""){
      btnLogin.classList.remove("bg-black")
      btnLogin.classList.add("bg-gray-500")
      btnLogin.classList.remove("cursor-pointer")
      colorChange.forEach((item)=>{
          item.classList.add("text-gray-400")
          item.classList.remove("text-black")
      })
  }
})
emailIn.addEventListener("input" , ()=>{
  if(emailIn.value!="" || passIn.value!=""){
      btnLogin.classList.remove("bg-gray-500")
      btnLogin.classList.add("bg-black")
      btnLogin.classList.add("cursor-pointer")
      colorChange.forEach((item)=>{
          item.classList.remove("text-gray-400")
          item.classList.add("text-black")
      })
  }
  if(emailIn.value=="" || passIn.value==""){
      btnLogin.classList.remove("bg-black")
      btnLogin.classList.add("bg-gray-500")
      btnLogin.classList.remove("cursor-pointer")
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