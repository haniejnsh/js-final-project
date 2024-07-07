import './style.css'
import {htmlOnboardingPg1,funcOnboardingPg1} from "./pages/onboardingpg1";
import {htmlOnboardingPg2,funcOnboardingPg2 } from "./pages/onboardingpg2";
import {htmlOnboardingPg3,funcOnboardingPg3} from "./pages/onboardingpg3";
import {htmlLoginPg,funcLoginPg} from "./pages/loginpg";
import {htmlSignUpPg,funcSignUpPg} from "./pages/signuppg";
import {htmlHomePg,funcHomePg} from "./pages/homepg";
import {htmlProductDetailsPg,funcProductDetailsPg} from "./pages/productdetailspg";
// import {testFunc} from "./pages/test";
import {htmlBrandPg,funcBrandPg} from "./pages/brandpg";
import {htmlPopularPg,funcPopularPg} from "./pages/popularpg"
// import {productDetailsPage , detailsFunc} from "./pages/productdetails";
// import {loginPage , loginFunc} from "./pages/login";
// import {signUpPage , signUpFunc} from "./pages/signup";
import Navigo from 'navigo';
if(!localStorage.getItem("allSelected")){
  const objSelected={selected:[]}
  localStorage.setItem("allSelected",JSON.stringify(objSelected))
}

export const router = new Navigo('/');
router.on('/', htmlOnboardingPg1,funcOnboardingPg1()).
on('/pg2', htmlOnboardingPg2,funcOnboardingPg2()).
on('/pg3', ()=> render(htmlOnboardingPg3() , funcOnboardingPg3)).
on('/login', ()=> render(htmlLoginPg() , funcLoginPg)).
on('/signup', ()=> render(htmlSignUpPg() , funcSignUpPg)).
on('/home', (info)=> render(htmlHomePg(info) , funcHomePg)).
on('/home/details/:id', (de)=> render(htmlProductDetailsPg(de) ,funcProductDetailsPg)).
on('/home/:brand', (b)=> render(htmlBrandPg(b) ,funcBrandPg)).
on('/popular', ()=> render(htmlPopularPg() ,funcPopularPg)).
resolve();

function render(children , func,func2){
  document.querySelector("#app").innerHTML=`${children}`;
    if(func){func()}
    if(func2){func2()}
}
// function render(children){
//   document.querySelector("body").innerHTML=`<div id="app" class="max-w-xs bg-white min-h-screen my-0 mx-auto border-gray-300 border-solid border-2 rounded flex">${children}</div>`;
//     // func()
// }
// function renderProduct(children){
//   document.querySelector("body").innerHTML=`<div class="menu-top">
//       <p><a href="/" data-navigo>home</a></p>
//       <p><a href="/product" data-navigo>product</a></p>
//     </div>
//     <div id="app"><div>${children}</div></div>
    // `;
    // func()
    // func2()
// }
// function logoutFunc(){
//   localStorage.clear();
//   alert("You are logged out of your account")
//   router.navigate("/");
// }
// router.on('/', homePage).
  // on('/product', productPage).
  // on('/product/:id', (det)=>render(productDetailsPage(det), detailsFunc)).
  // on('/login',()=> renderFullPage(loginPage() , loginFunc)).
  // on('/signup',()=> renderFullPage(signUpPage() , signUpFunc)).
  // on('/logout',()=> logoutFunc()).
  // resolve();

// router.on('/', homePage).
//   on('/prodact', prodactPage).
//   on('/prodact/:id', (det)=>prodactDetailsPage(det)).//در واقع اطلاعاتی از serch url بروزر میده
//   // on('/prodact/:id', prodactDetailsPage).
//   on('/contact', contactPage).
//   on('/aboat', aboatPage).
//   on('/dashboard', dashboardPage).
//   on('/login', loginPage)
//   .resolve();