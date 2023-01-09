
import authAxios from "../AuthInterceptor";
import { BASE_URL } from "../config";

export default class Apipaises  {


  async  getPaises() {
    
    return authAxios.get(`${BASE_URL}/pais`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  async  getPaisById(id) {
    
    return authAxios.get(`${BASE_URL}/pais/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
      
   }
  // async  postpais(props) {
    
  //     return ''
  //  }

   async createPais(data){
    return authAxios.post(`${BASE_URL}/universidad`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)  
    
    };
  
   async updatePais(data,id){
    return authAxios.put(`${BASE_URL}/pais/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)   
    
    };

    async deletePais(data,id){
      return authAxios.put(`${BASE_URL}/pais/${id}`, data,{ 
        headers: {
        'Content-Type': 'application/json',
      },})
      .then( response => response.data) 
        
      
      };
   

  


 
}