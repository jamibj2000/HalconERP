import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { NavbarHome } from "../../components/NavbarHome/NavbarHome"
import { AspiranteForm } from "./AspiranteForm"

function InscripcionAspirante (){
  const location = useLocation()
  const [cursoInformation,setCursoInformation] = useState()
 useEffect(() => {
  setCursoInformation(location.state) //idimension and curso:{}
  console.log("informacion del curso seleccionado",cursoInformation,location)
 }, [])
 
  
  return(
    <>
    <div>
    <NavbarHome></NavbarHome>
    <div className="inscripcion-aspirante-container">
    {/* incgrese formulario aspirante props location */}
    {/* <aspirante data={cursoinformacion}> */}
    <div className="card">
  <div className="card-header">
    Inscripción Aspirante 
  </div>
  <div className="card-body">
    <h5 className="card-title"> Nombre: {cursoInformation?.curso.Nombre} idCurso:{cursoInformation?.curso.IdCurso}  idDimensión:{cursoInformation?.idDimension}</h5>

     {/*  */}
     <div className="input-group mb-3">
        
<AspiranteForm cursoInformation={cursoInformation}></AspiranteForm>
    </div>
      {/*  */}
   
    
  </div>
</div>
     
    </div>

    </div>
    </>
  )
}
export {InscripcionAspirante}