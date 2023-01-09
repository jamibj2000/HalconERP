import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LocalStorage } from '../../../services'
import { clear } from '../../Login/UserSlice'

const NavbarHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username,setUsername] = useState('---');
  const [rolName,setRolName] = useState('');
  useEffect(() => {
    const ls = new LocalStorage()
  const usuario = ls.getAsJsonItem('usuario')
  const rolName = ls.getItem('rolName')
  if(usuario){
    setUsername(usuario.usuario?.NombreUsuario)
    setRolName(rolName || '') //idRol
  }
  }, [])
  
  const onLogout =()=>{
    const ls = new LocalStorage()
    ls.removeItem('access_token')
    ls.removeItem('usuario')
    ls.removeItem('idRol')
    ls.removeItem('rol')
    ls.removeItem('menu')
    ls.removeItem('rolName')
    ls.removeItem('dimensiones')
    dispatch(clear())
    console.log("logout")
    setTimeout(() => {
      
      navigate("/login",{replace:true})
    }, 300);
  }
  return (
    <div className="encabezado col-md-12 col-sm-12 d-flex justify-content-center align-items-center g-0">
      
      
      <div className="d-flex col-md-12 col-sm-12 justify-content-between align-items-center w-100 h-100"
        style={{ position: "relative" }}
      >
        <div
          className="col-md-2 d-flex justify-content-around align-items-center "
          style={{ userSelect: "none" }}
        >
        
        <img  src="/img/logo-halcon.png" alt="logo-halcon" width={65}/>
        <span> Halcon - ERP</span>
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center h-100">
          <div className="container-fluid h-100"></div>
        </div>
        <div
          className="col-md-2 d-flex justify-content-center align-items-center h-100"
          id="btn-perfil"
        >
          {/* profile */}
   <span> {rolName}. {username}</span>
          <div className="dropdown"  >
  <button style={{backgroundColor:'#1D3660',borderColor:'#1D3660'}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <img  src="/img/TempProfile.jpg" alt="profile halcon" width={30} style={{borderRadius:'50%'}} />

  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"  >
    <li><div className="dropdown-item" >Mi perfil</div></li>
    <li><div className="dropdown-item" onClick={()=>navigate('/inicio')} >Ofertas Académicas</div></li>
    
    <li><div className="dropdown-item"  onClick={()=>onLogout()}>Cerrar sesion</div></li>
  </ul>
</div>

          {/*  */}
          
         
        </div>
        <div
          className="col-md-2 d-flex flex-column"
          style={{
            position: "absolute",
            right: "0%",
            top: "100%",
            zIndex: 3,
            overflow: "hidden"
          }}
        >
          <div className="menu-perfil bg-light" id="opciones-perfil">
            <span className="opcion-perfil text-dark p-2 btn-custom">
              Mi perfil
            </span>
            <span className="opcion-perfil text-dark p-2 btn-custom">
              Configuración
            </span>
            <span className="opcion-perfil text-dark p-2 btn-custom">
              <span>Cerrar sesión</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarHeader