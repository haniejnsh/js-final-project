import axios from "axios";
export  const BASE_URL="http://localhost:3000";

// axios.defaults.baseURL=BASE_URL;
export const ax=axios.create({
    baseURL:BASE_URL
})
