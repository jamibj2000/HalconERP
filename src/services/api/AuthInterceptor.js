import axios from "axios";
import { ACCESS_TOKEN } from "./config";

const getTokenLocal = async()=>localStorage.getItem(ACCESS_TOKEN)?localStorage.getItem(ACCESS_TOKEN):'empty token in localstorage'

const authAxios = axios.create();

authAxios.interceptors.request.use(function (config) {
  return getTokenLocal() 
    .then((token) => {
     
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
});

export default authAxios;