import {ax} from "../api";
import { router } from "../main";
let flag
export function  htmlBrandPg(f) {
    console.log(f);
    flag=f
    return `
    hiiiiiiiiii`
}


export const funcBrandPg=()=>{
    console.log(flag.data);
}