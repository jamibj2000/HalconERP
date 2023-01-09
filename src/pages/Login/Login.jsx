import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// HELPERS
import {validacionVacios, validarDimesion} from '../../helpers/validaciones';
import {alerta, alertaSinBoton} from '../../helpers/alertas';

//componentes
import rolsList from '../../mocks/roles';

import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'

// ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import {Auth} from '../../services/index';
import {LocalStorage} from '../../services/index';
import { setUser } from '../Login/UserSlice';
import { setIdRol } from '../Login/UserSlice';
import ApiDashboard from '../../services/api/dashboard';

// VARIABLES
const baseUrl = 'https://api.npoint.io/673fa190a6a05675cd51';
const cookies = new Cookies();





function Login  ()  {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dimension, setDimension] = useState('');
    const [rol, setRol] = useState('');
    const [, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [roles,setRoles] =useState([])
    
    useEffect(()=>{
         const _apiRoles = new ApiDashboard()
             _apiRoles.getRoles().then(res=>{
                 
                 console.log(setRoles(res),"ROLES");
                })

    },[])
    
    
    const iniciarSesion = async () => {
        setIsLoading(true)
        
        if(validacionVacios(username, password)) {
            alerta('Todos los campos son obligatorios', 'warning');
            setIsLoading(false)
            return;
        }
       

        if(rol === "") {
            alerta('Seleccione un rol', 'warning');
            setIsLoading(false)
            return;
        }
        console.log("ROL",rol,"username",username)
        try {
            const _auth = new Auth();
            // console.log("inputs",username,password,rol)
            const data = await _auth.loginUser({
                email:username,
              password,
              IdRolUsuario:rol
            //   IdRolUsuario:6
            //   dimension,
            });
            console.log("data",data)
            
            // setToken(data.access_token);
            /**
             * validate token and get userId,rol etc
             */

            const _lStorage = new LocalStorage();

            // _lStorage.removeItem('acces_token')
            _lStorage.setAsStringItem('usuario',data )
            _lStorage.setAsStringItem('dimensiones',data.dimensiones )
            _lStorage.setAsStringItem('rol',rol )
            _lStorage.setItem('access_token',data.token )
            // _lStorage.setItem('rolName',rol )
           
            // alerta("Bienvenido",'success')
            alertaSinBoton('Bienvenido','success','center',1000)
            setIsLoading(false)
            dispatch(setUser(data))
            _lStorage.setItem('idRol',rol)
            dispatch(setIdRol(rol))
            setTimeout(() => {
                console.log("loginnavigate to dashboar inicio")
                navigate("/dashboard/inicio");
            }, 2100);
        } catch (e) {            
              setIsLoading(false)
            alerta("Error username or password",'info')
          }
      
    };

    const onSetRol=(e)=>{
        
        const target = e.target
        const name = target.options[target.selectedIndex].text;
        console.log(name,"nameee")
        const ls = new LocalStorage();
       ls.setItem('rolName',name)
        setRol(e.target.value)

    }

    const   roleList = ()=>{
        return roles.map(rol => {
            if(rol.Estado==1){

                return <option  key={rol.IdRoles} value={rol.IdRoles}>{rol.Descripcion}</option>
            }
            return ''
        })
      }

    return (
        <>
            <div className="module">
                <div className="module-inside animacion">
                    <div className="bg-form-login">
                        <form className="form p-4" id="form" onSubmit={(e) => {
                            e.preventDefault();
                            iniciarSesion();
                        }}>
                            <div className="d-flex justify-content-around pb-4">
                                <img
                                    className="img1-form"
                                    src="./img/halcon_30-04-2022.jpeg"
                                    alt="logo-halcon"
                                />
                                <img
                                    className="img2-form"
                                    src="./img/descarga_30-04-2022.png"
                                    alt="logo-cea"
                                />
                            </div>
                            <div className="mb-2">
                                {/* <label htmlFor="username"></label> */}
                                {/* <select 
                                    value={dimension} 
                                    onChange={(e) => setDimension(e.target.value)}
                                    className="select-login form-control input-selector">
                                    <option value="" disabled>Dimension</option>
                                    <option value="cea">CEA</option>
                                    <option value="ies">IES</option>
                                    <option value="cia">CIA</option>
                                    <option value="train">Trainair Plus</option>
                                </select> */}
                            </div>
                            <div className="mb-3">
                                <select
                                name='rol'
                                    value={rol} 
                                    onChange={(e) => onSetRol(e)}
                                    id="rol"
                                    className="select-login form-control input-selector">
                                    <option value="" disabled>
                                        Seleccione Rol
                                    </option>
                                    {roleList()}

                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="username">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1">
                                            <i className="bi bi-person-fill" />
                                        </span>
                                    </div>
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="password">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <i className="bi bi-key-fill" />
                                        </span>
                                    </div>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary btn-login">
                                <div style={{ display: isLoading ? '' : 'none' }} className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                            </div>Ingresar
                            </button>
                        </form>
                    </div>
                    <div className="btn-moodle-login rounded module-inside d-flex justify-content-center form-group mt-3 col-md-12">
                        <a className="p-2 rounded w-100 d-flex justify-content-center boton-moodle" style={{ textDecoration: 'none' }} target="blank" href={"http://52.91.117.71/moodle"}> Ingresar a Moodle
                        </a >
                    </div>
                </div>
            </div>
        </>
    );
};

export { Login }
