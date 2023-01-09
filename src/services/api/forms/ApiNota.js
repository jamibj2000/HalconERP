import axios from "axios";
import authAxios from "../AuthInterceptor";
import LocalStorage from "../../localStorage/LocalStorage";
import { BASE_URL } from "../config";

export class ApiNota  {

  async  getNota() {
    return authAxios.get(`${BASE_URL}/nota`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async  getNotaById(id) {
    return authAxios.get(`${BASE_URL}/nota/${id}`, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)    
  }

  async createNota(data) {
    return authAxios.post(`${BASE_URL}/nota`,{data}, { 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };
  
  async updateNota(data,id) {
    return authAxios.put(`${BASE_URL}/nota/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)     
  };

  async deleteNota(data,id) {
    return authAxios.put(`${BASE_URL}/nota/${id}`, data,{ 
      headers: {
      'Content-Type': 'application/json',
    },})
    .then( response => response.data)
  };
 
}