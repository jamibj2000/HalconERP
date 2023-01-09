import axios from "axios";
// import LocalStorage from "../index";
import LocalStorage from '../localStorage/LocalStorage';
import authAxios from "./AuthInterceptor";
import { BASE_URL } from "./config";

// const token = _ls.getItem('access_token')?_ls.getItem('access_token'):''


export default class ApiDashboard  {


  async  getMainMenu(data) {
    // const datatest = {"IdUsuario": "6","IdRolUsuario":"1","IdRolDimension":"1"}
    const _ls = new LocalStorage();
    return axios.post(`${BASE_URL}/menu2`,data, { 
      headers: {
      'Content-Type': 'application/json',
      'Authorization' :`Bearer ${_ls.getItem('access_token')}`
    },})
    .then( response => response.data)    
      
   }
  async  getMenuNavbar(props) {
    
      return ''
   }
   

  async  getRoles(data) {
    return axios.get(`${BASE_URL}/getroles`,data, { 
      headers: {
      'Content-Type': 'application/json'
    },})
    .then( response => response.data)    
      
   }

   async  getData(lastUrl) {
    return authAxios.get(`${BASE_URL}/${lastUrl}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  async  getDataById(id,lastUrl) {
    
    return authAxios.get(`${BASE_URL}/${lastUrl}/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  // async  postUniversidad(props) {
    
  //     return ''
  //  }

   async createData(data,lastUrl){
    console.log("data",data);
    return authAxios.post(`${BASE_URL}/${lastUrl}`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)  
    
    };
  
   async updateData(data,id,lastUrl){
    console.log("data",data);
    return authAxios.put(`${BASE_URL}/${lastUrl}/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)   
    
    };

    async deleteData(data,id,lastUrl){
      return authAxios.put(`${BASE_URL}/${lastUrl}/${id}`, data,{ 
        headers: {
        'Content-Type': 'application/json',
      },})
      .then( response => response.data) 
        
      
      };

 
}