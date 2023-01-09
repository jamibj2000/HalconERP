import axios from "axios";
import LocalStorage from "../../localStorage/LocalStorage";
import authAxios from "../AuthInterceptor";
import { BASE_URL } from "../config";

export default class ApiUniversidades  {


  async  getUniversidades() {
    
    return authAxios.get(`${BASE_URL}/universidad`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  async  getUniversidadeById(id) {
    
    return authAxios.get(`${BASE_URL}/universidad/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  // async  postUniversidad(props) {
    
  //     return ''
  //  }

   async createUniversidad(data){
    return authAxios.post(`${BASE_URL}/universidad`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)  
    
    };
  
   async updateUniversidad(data,id){
    return authAxios.put(`${BASE_URL}/universidad/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)   
    
    };

    async deleteUniversidad(data,id){
      return authAxios.put(`${BASE_URL}/universidad/${id}`, data,{ 
        headers: {
        'Content-Type': 'application/json',
      },})
      .then( response => response.data) 
        
      
      };
   

  


 
}