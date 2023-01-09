import axios from "axios";
import LocalStorage from "../../localStorage/LocalStorage";
import authAxios from "../AuthInterceptor";
import { BASE_URL } from "../config";

export default class ApiGrupo {


  async  getGrupo() {
    
    return authAxios.get(`${BASE_URL}/grupo`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)
      
   }
  async  getGrupoById(id) {
    
    return authAxios.get(`${BASE_URL}/grupo/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  // async  postgrupo(props) {
    
  //     return ''
  //  }

   async createGrupo(data){
    return authAxios.post(`${BASE_URL}/grupo`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)  
    
    };
  
   async updateGrupo(data,id){
    return authAxios.put(`${BASE_URL}/grupo/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)   
    
    };

    async deleteGrupo(data,id){
      return authAxios.put(`${BASE_URL}/grupo/${id}`, data,{ 
        headers: {
        'Content-Type': 'application/json',
      },})
      .then( response => response.data) 
        
      
      };
   

  


 
}