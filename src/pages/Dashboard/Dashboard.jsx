import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSidebar from './parts/menuSidebar'
import NavbarHeader from './parts/navbarHeader';
import FormDesign from './parts/formDesign';
import FormTitle from './parts/formTitle';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate ,
    useNavigate,
    Outlet,
  } from "react-router-dom";
import { Fragment } from 'react';

/* estilos */
import './Dashboard.css';

/* componentes */
/* formularios */
// import ActividadesBienestar from '../../components/formularios/actividadesDeBienestar';
// import Asignatura from '../../components/formularios/asignatura';
// import AsignaturaMatriz from '../../components/formularios/asignaturaMatriz';

import { useDispatch, useSelector } from 'react-redux';
import { clear, setIdRol, setStateDimensiones, setUser } from '../Login/UserSlice';
import { Navbar } from '../../components/NavBar/NavBar';

import { getDimensiones } from '../../mocks/dimensiones.mock';
import ApiDashboard from "../../services/api/dashboard";
// import { Dimensiones } from "../../components/Dimensiones/Dimensiones";

import {setIdDimension} from '../Login/UserSlice'
import { LocalStorage } from "../../services";
import { alerta, alertaTimer } from "../../helpers/alertas";
import { Modal } from '../../components/modal/Modal'
import { SelectDimension } from "../../components/dimensionModal/selectDimension/SelectDimension";

const cookies = new Cookies();



function Dashboard()  {

  
  
  // const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lStorage = new LocalStorage
    const apiDashboard = new ApiDashboard()
    const user = useSelector(state=>state.user)
    const [showModalDimensiones,setShowModalDimensiones] = useState('none');
    const [dimension,setDimension] = useState({name:null,idDimension:null});
    const [dimensiones,setDimensiones] = useState([]);
    const [menu,setMenu] = useState([]);
    const [isOpen, setIsOpen] = useState(true)
    const dimensionesState = useSelector(state=>state.user.dimensiones)


    useEffect(()=>{
      const usuario = lStorage.getAsJsonItem('usuario')
      const menu = lStorage.getAsJsonItem('menu')
      
      dispatch(setUser(usuario))
      if(menu){
        // console.log(menu,"show menu")
        setMenu(menu)
        setShowModalDimensiones('none')
        navigate('inicio')
        return
      }
      if(!menu  || !dimensionesState.length || dimensionesState===undefined){ //lost state via url
      setShowModalDimensiones('initial')
        
        
        // dispatch(setDimensiones(newDimensiones))
        // setDimensiones()
        
      }
     
    },[])

    const handleChangeModal = () => {
      setIsOpen(!isOpen)
    }

    const onAcceptDimensiones = (item) => {
     setDimension(item)
    //  console.log("dimension selcte",item,"--",dimension)
      if(!item.Descripcion) {return}

      dispatch(setIdDimension(dimension.IdDimension));
      const idRol = lStorage.getItem('idRol')
      dispatch(setIdRol(idRol))
      
      apiDashboard.getMainMenu({
        IdRolUsuario:idRol,
        IdUsuario:user.idUsuario ,
        IdRolDimension:item.IdDimension
      }).then(res=>{
        setShowModalDimensiones('none')
        // console.log("data for menu here-->",res.menu)
        if(res.result==='exito'){
          lStorage.setAsStringItem('menu',res.menu)
          navigate('inicio')
          setMenu(res.menu,".____.")
          
          // console.log("should navigate",)
        }
        if(res.status==='Token is Expired'){
          alertaTimer("La sesion ha expirado",'info','4000')
          setTimeout(() => {
            
            navigate({to:'login',replace:true})
          }, 4000);
        }
      })
      handleChangeModal()
    }
    const Dimensiones =()=>{
      return<>
          <Modal isOpen={ isOpen }>
            <SelectDimension 
              dimensionesState={ dimensionesState }
              dimension={ dimension }
              onAcceptDimensiones={ onAcceptDimensiones }
              setDimension={ setDimension }
            />
          </Modal>
      </>
    }
    
    

 
// alert("hi")

return<>
<Dimensiones></Dimensiones>
<div className="container-fluid h-100">
  <div className="row h-100">
    <NavbarHeader />{/* De pruebas para probar en diseño */}
    <div className="contenedor col-md-12 col-sm-12 d-flex justify-content-center bg-primary g-0">
      <div className="col-md-2 d-flex justify-content-around bg-light h-100" style={{ position: "relative !important", zIndex: 3 }}>
        <MenuSidebar menu={menu} />{/* De pruebas para probar en diseño */}
      </div>
      <div className="bg-dark col-md-10 d-flex  align-items-center flex-column h-100" id="contenido-raiz">
        <FormTitle />{/* De pruebas para probar en diseño */}
        <Outlet />
      </div>
    </div>
  </div>
</div>     
</>
}



export { Dashboard }