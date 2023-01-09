import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import ApiInicio from "../../services/api/inicio/InicioService";
import './Curso.css'
import {Aspirante} from '../../components/formularios/aspirantes/Aspirantes'
import { NavbarHome } from "../../components/NavbarHome/NavbarHome";
import ApiInicio from "../../services/api/inicio/InicioService";



function Cursos(){
  // alert("hola inicio")
  const [cursos,setCursos] = useState([])
  const location = useLocation()
  const [idDimension,SetIdDimension] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    console.log("location:",location)
    const {state:{IdDimension}} = location
    SetIdDimension(IdDimension)
    fetchData(IdDimension)
    console.log(Cursos)
  }, [])

  const fetchData = async (id)=>{
    try {
    const apiInicio = new ApiInicio()
    const data = await apiInicio.getCursosByIdDimension(id)
    setCursos(data)
      
    } catch (error) {
      console.log("error fetch")
    }
  }
  const onClickInscripcion = (item) =>{
    console.log(idDimension,"-",item,"statesend")
    navigate('../inscripcion-aspirante',{state:{idDimension,curso:item}})
  }
  
  return(<>
  <img alt="fondo inicio" id="inicio-bg" src='./img/bg-bottom.png' />
<NavbarHome></NavbarHome>
<div className="content">
    <div className="row">
    <div className="col-12">
      <h1 style={{color:'white',marginLeft:"2rem",marginTop:"2rem"}}>{location.state.Descripcion}</h1>
      <h4 style={{color:'white',marginLeft:"2rem"}}>Listado de cursos</h4>
      <div className="container cursos-container">
     {!!cursos && cursos.map((item,index)=>{
       return(<>
        {/*  */}
        <div key={index} className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={item.url} alt=" " />
          <div className="card-body">
            <h3 className="card-title">{item.Nombre}</h3>
            <p className="card-text">{item.Observaciones}</p>
            <button  onClick={()=>onClickInscripcion(item)} className="btn btn-primary">Inscribirse</button>
          </div>
        </div>
        {/*  */}

       
       </>)
     })}
     </div>
   {/* aspirante */}
   {/* aspirante */}
    

    </div>
    
    </div>
    
</div>





  </>)
}

export  {Cursos};