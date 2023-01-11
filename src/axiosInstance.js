import axios from "axios";

export default function axiosInstance(conf) {
   return  axios.create({
        baseURL: conf.baseURL,
        headers: conf.headers
    });
}