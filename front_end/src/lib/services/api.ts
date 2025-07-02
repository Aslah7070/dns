import { env } from "../../configs/env.config";
import axios from "axios";
// import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL:env.BACKEND_URI, 
    withCredentials: true
});


export default axiosInstance; 