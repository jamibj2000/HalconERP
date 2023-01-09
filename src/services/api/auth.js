import axios from "axios";
import { BASE_URL } from "./config";



export default class Auth  {
  async  loginUser(credentials) {
    // return axios.post(`${BASE_URL_AUTH}/login`,credentials, { 
    return axios.post(`${BASE_URL}/login`,credentials, { 
      headers: {
      'Content-Type': 'application/json'
    },})
    .then( response => response.data);    
      
   }
  async  refreshToken(props) {
    
      return ''
   }
 
}

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaGFsY29uZXJwLmRvc3ZlLmNvL2FwaS9sb2dpbiIsImlhdCI6MTY1MjM3NDYzOCwiZXhwIjoxNjUyMzc4MjM4LCJuYmYiOjE2NTIzNzQ2MzgsImp0aSI6IkE2WGJnd3E3SktjTDQ0RXkiLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.JvyyScBb9q-Mt2JdoY0-gAputSIYtpcdjJrFEU-TMGg';

export function getSideMenu(token) {
  
  return axios.post( 'http://halconerp.dosve.co/api/menu',
  {IdUsuario: 6,IdRolUsuario:1,IdRolDimension:1},
  {headers: { Authorization: `Bearer ${token}`}})
    .then((res) => {
        const response = res.data.menu
        return response;
     })
    .catch(console.log)
}

// getSideMenu(token).then((res) => {
//   console.log(res);
// });


