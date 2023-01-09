
import authAxios from "../AuthInterceptor";
import { BASE_URL } from "../config";

export default class ApiCrud {

  async  obtenerRegistros(path) {    
    return authAxios.get(`${BASE_URL}/${path}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)          
   }

  async  obtenerRegistro(path,id) {    
    return authAxios.get(`${BASE_URL}/${path}/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)          
   }

   async crearRegistro(path,data){
    return authAxios.post(`${BASE_URL}/${path}`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)      
    };
  
   async actualizarRegistro(path,id,data){
    return authAxios.put(`${BASE_URL}/${path}/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)       
    };

    async eliminarRegistro(path,id,data){
      return authAxios.put(`${BASE_URL}/${path}/${id}`, data,{ 
        headers: {
        'Content-Type': 'application/json',
      },})
      .then( response => response.data)               
    };
}