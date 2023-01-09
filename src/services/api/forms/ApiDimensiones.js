import axios from "axios";
import authAxios from "../AuthInterceptor";
import LocalStorage from "../../localStorage/LocalStorage";
import { BASE_URL } from "../config";

export class ApiDimensiones  {

  async  getDimensiones() {
    return authAxios.get(`${BASE_URL}/dimensiones`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async  getDimensionesById(id) {
    return authAxios.get(`${BASE_URL}/dimensiones/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async createDimensiones(data) {
    return authAxios.post(`${BASE_URL}/dimensiones`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };
  
  async updateDimensiones(data,id) {
    return authAxios.put(`${BASE_URL}/dimensiones/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };

  async deleteDimensiones(data,id) {
    return authAxios.put(`${BASE_URL}/dimensiones/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)
  };
 
}