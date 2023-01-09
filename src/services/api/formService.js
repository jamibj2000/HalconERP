import axios from "axios";
import LocalStorage from "../localStorage/LocalStorage";
import authAxios from "./AuthInterceptor";
import { BASE_URL } from "./config";

class FormService  {
    async  getAll(endPoint) {
        return authAxios.get(`${BASE_URL}/${endPoint}`, { 
            headers: {
            'Content-Type': 'application/json',
        },})
        .then( response => response.data)        
    }

    async  getById(endPoint, id) {
        return authAxios.get(`${BASE_URL}/${endPoint}/${id}`, { 
            headers: {
            'Content-Type': 'application/json',
        },})
        .then( response => response.data)    
    }

    async create(endPoint, data){
        return authAxios.post(`${BASE_URL}/${endPoint}`,{data}, { 
            headers: {
            'Content-Type': 'application/json',
        },})
        .then( response => response.data)  
    };
  
    async update(endPoint, data, id){
        return authAxios.put(`${BASE_URL}/${endPoint}/${id}`, data,{ 
            headers: {
            'Content-Type': 'application/json',
        },})
        .then( response => response.data)   
    };

    async delete(endPoint, data, id){
        return authAxios.put(`${BASE_URL}/${endPoint}/${id}`, data,{ 
            headers: {
            'Content-Type': 'application/json',
        },})
        .then( response => response.data) 
    }; 
}

export { FormService }