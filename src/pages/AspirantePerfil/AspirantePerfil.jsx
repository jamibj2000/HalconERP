import { useState } from "react"
import { Input } from "../../components/formularios/componentsForm/input/input"
import { NavbarHome } from "../../components/NavbarHome/NavbarHome"
import { AccordionAspirante } from "./parts/Accordion/AccordionAspirante"
import './AspirantePerfil.css'
import ApiInicio from "../../services/api/inicio/InicioService"

function AspirantePerfil() {
  const [aspiracionesList,setAspiracionesList] = useState([])
  const [cedula,setCedula] = useState('')
  const [fechaNacimiento,setFechaNacimiento] = useState('')

  const onSearch = async(e) =>{
    e.preventDefault()
    const apiInicio = new ApiInicio()
    const data = await apiInicio.getAspiranteByCedulaAndDate(cedula,fechaNacimiento)
    setAspiracionesList(data)
    console.log(fechaNacimiento,cedula,data)
  }
  
  return(<>
  <NavbarHome></NavbarHome>
  <div className="aspirante-perfil-container">
    <div className="aspirante-search-content">
      <form onSubmit={onSearch}>
      <Input
      label='Numero de cédula'
      type="number"
      onChange={setCedula}
      value={cedula}
      ></Input>
      <Input
      label='Fecha nacimiento'
      type="date"
      onChange={setFechaNacimiento}
      value={fechaNacimiento}
      // require={true}
      ></Input>
      <div class="d-grid gap-2">
        <button className="btn btn-primary" onClick={onSearch} type="submit">Buscar</button>
        <small>ESTADO DE BUSQUEDA...</small>
      </div>
      </form>
    </div>
    <AccordionAspirante  aspiracionesList ={aspiracionesList} ></AccordionAspirante>

  </div>

  </>)
}
export {AspirantePerfil}