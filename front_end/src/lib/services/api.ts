import { env } from "../../configs/env.config";
import axios from "axios";
// import Cookies from "js-cookie";
console.log("env.BACKEND_URI",env.BACKEND_URI);

const axiosInstance = axios.create({
    baseURL:env.BACKEND_URI, 
    withCredentials: true
});


export default axiosInstance; 