import axios from "axios";
import authAxios from "../AuthInterceptor";
import LocalStorage from "../../localStorage/LocalStorage";
import { BASE_URL } from "../config";

export class ApiArea  {

  async  getArea() {
    return authAxios.get(`${BASE_URL}/area`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async  getAreaById(id) {
    return authAxios.get(`${BASE_URL}/area/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async createArea(data) {
    return authAxios.post(`${BASE_URL}/area`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };
  
  async updateArea(data,id) {
    return authAxios.put(`${BASE_URL}/area/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };

  async deleteArea(data,id) {
    return authAxios.put(`${BASE_URL}/area/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)
  };
 
}