import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jwt-decode'

export const userSlice = createSlice({
  name: 'user',
  initialState: {    
    dimensiones:[],
    accessToken:'',
    estado:null,
    idPersona:null,
    idUsuario:null,
    nombreUsuario:null,
    email:null,
    isAuthenticated:false,
    idRol:null,
    idDimension:null
  },
  reducers: {
    setUser: (state, action) => {
      // console.log(action,"action")
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const access_token = action.payload?.token  ?? localStorage.getItem('access_token');
      
      if(access_token){  
                // console.log(state.accessToken,"stateeeee")
          // const decodejwt_token =  jwt(access_token);
          
          // state.userId =   decodejwt_token?.userId

          state.accessToken =   access_token
          state.estado=action.payload.usuario?.Estado
          state.idPersona=action.payload.usuario?.IdPersona
          state.idUsuario=action.payload.usuario?.IdUsuario
          state.nombreUsuario=action.payload.usuario?.NombreUsuario
          state.email=action.payload.usuario?.email
          state.isAuthenticated=true
          state.dimensiones=action.payload?.dimensiones

          // state.idRol=action.payload?.IdUsuario //perhaps rol from login
          // state.idRol=action.payload?.IdUsuario //perhaps rol from login
          
          //to mask token jwt
      }

      
    },
    setIdDimension:(state,action)=>{
      state.idDimension = action.payload
    },
    setStateDimensiones:(state,action)=>{
      state.dimensiones = action.payload
    },
    clear: (state) => {
      state.dimensiones=[];
      state.accessToken=null;
      state.estado=null;
      state.idPersona=null;
      state.idUsuario=null;
      state.nombreUsuario=null;
      state.email=null;
      state.isAuthenticated=false;
    },
    setIdRol:(state,action)=>{
      state.idRol=action.payload; //same idusuario?

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setUser, clear,setIdDimension,setIdRol, setStateDimensiones } = userSlice.actions

export default userSlice.reducer