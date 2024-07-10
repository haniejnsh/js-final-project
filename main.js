import './style.css'
import {htmlOnboardingPg1,funcOnboardingPg1} from "./pages/onboardingpg1";
import {htmlOnboardingPg2,funcOnboardingPg2 } from "./pages/onboardingpg2";
import {htmlOnboardingPg3,funcOnboardingPg3} from "./pages/onboardingpg3";
import {htmlLoginPg,funcLoginPg} from "./pages/loginpg";
import {htmlSignUpPg,funcSignUpPg} from "./pages/signuppg";
import {htmlHomePg,funcHomePg} from "./pages/homepg";
import {htmlProductDetailsPg,funcProductDetailsPg} from "./pages/productdetailspg";
import {htmlCartPg,funcCartPg} from "./pages/cartpg";
import {htmlBrandPg,funcBrandPg} from "./pages/brandpg";
import {htmlPopularPg,funcPopularPg} from "./pages/popularpg"
import {htmlCheckoutPg,funcCheckoutPg} from "./pages/checkoutpg";
import {htmlAddressPg,funcAddressPg} from "./pages/addresspg";
import {htmlPaymentPg,funcPaymentPg} from "./pages/paymentpg";
import {htmlPostTypePg,funcPostTypePg} from "./pages/posttypepg";
import {htmlSearchPg,funcSearchPg} from "./pages/searchpg";
import Navigo from 'navigo';
// localStorage.clear()
if(!localStorage.getItem("allSelected")){
  const objSelected={selected:[]}
  localStorage.setItem("allSelected",JSON.stringify(objSelected))
}
function checkAuth(next) {

  if (localStorage.getItem("token")) {
      next()
  } else {
      router.navigate("/login")
  }
}

function checkProtectedRoute(next) {
  if (!localStorage.getItem("token")) {
      next()
  } else {
      router.navigate("/home")
  }
}
function checkFirst(next) {
  if (!localStorage.getItem("first")) {
      next()
  } else {
      router.navigate("/login")
  }
}
function checkFirstPg3(next) {
  if (!localStorage.getItem("first")) {
      localStorage.setItem("first","true")
      next()
  } else {
      router.navigate("/login")
  }
}

export const router = new Navigo('/');
router.on('/',()=>checkFirst( htmlOnboardingPg1,funcOnboardingPg1())).
on('/pg2',()=>checkFirst(htmlOnboardingPg2,funcOnboardingPg2())).
on('/pg3',()=>checkFirstPg3(()=> render(htmlOnboardingPg3() , funcOnboardingPg3))).
on('/login',() => checkProtectedRoute (()=> render(htmlLoginPg() , funcLoginPg))).
on('/signup',() => checkProtectedRoute( ()=> render(htmlSignUpPg() , funcSignUpPg))).
on('/home',()=>checkAuth( (info)=> render(htmlHomePg(info) , funcHomePg))).
on('/home/details/:id',(de)=> render(htmlProductDetailsPg(de) ,funcProductDetailsPg)).
on('/home/:brand',(b)=> render(htmlBrandPg(b) ,funcBrandPg)).
on('/popular',()=>checkAuth( ()=> render(htmlPopularPg() ,funcPopularPg))).
on('/cart',()=>checkAuth( ()=> render(htmlCartPg() ,funcCartPg))).
on('/cart/checkout',()=>checkAuth( ()=> render(htmlCheckoutPg() ,funcCheckoutPg))).
on('/cart/checkout/address',()=>checkAuth( ()=> render(htmlAddressPg() ,funcAddressPg))).
on('/cart/checkout/payment',()=>checkAuth( ()=> render(htmlPaymentPg() ,funcPaymentPg))).
on('/cart/checkout/post',()=>checkAuth( ()=> render(htmlPostTypePg() ,funcPostTypePg))).
on('/search',()=>checkAuth( ()=> render(htmlSearchPg() ,funcSearchPg))).
resolve();

function render(children , func,func2){
  document.querySelector("#app").innerHTML=`${children}`;
    if(func){func()}
    if(func2){func2()}
}
