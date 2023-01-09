import axios from "axios";
import { BASE_URL } from "../config";


export default class ApiInicio  {


  async  getPublicDimensiones() {
    return axios.get(`${BASE_URL}/listadoDimensiones`, { 
      headers: {
      'Content-Type': 'application/json'
    },})
    .then( response => response.data)    
      
   }

  async  getCursosByIdDimension(id) {
    return axios.get(`${BASE_URL}/listadoCursos?IdDimension=${id}`, { 
      headers: {
      'Content-Type': 'application/json'
    },})
    .then( response => response.data)    
      
   }
  async  getAspiranteByCedulaAndDate(ced,date) {
    return axios.get(`${BASE_URL}/consultarAspirante?Cedula=${ced}&FechaNacimiento=${date}`,{Cedula:ced,FechaNacimiento:date}, { 
      headers: {
      'Content-Type': 'application/json'
    },})
    .then( response => response.data)    
      
   }

  
  

 
}