import axios from "axios";
import { BASE_URL } from "./endPoint";

/* create axios instance with base url */
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});
