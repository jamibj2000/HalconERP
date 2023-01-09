import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarHome } from "../../components/NavbarHome/NavbarHome";
import ApiInicio from "../../services/api/inicio/InicioService";
import './Inicio.css'



function Inicio(){
  // alert("hola inicio")
  const [dimensiones,setDimensiones] = useState([])
  const navigate = useNavigate() 
  useEffect(() => {
    fetchData()
    console.log(dimensiones)
  }, [])

  const fetchData = async ()=>{
    const apiInicio = new ApiInicio()
    const data = await apiInicio.getPublicDimensiones()
    setDimensiones(data)
  }
  const onClickDimension = async(item)=>{
    // navigate("cursos",{state:item})
    navigate('../cursos',{state:item,replace:true})
    // const nav = navigate('login',{replace:true})
    console.log(item,"selected")
  }
  
  return(<>
  <img alt="fondo inicio" id="inicio-bg" src='./img/bg-bottom.png' />
  {/* <img alt="fondo inicio" id="inicio-bg" src='./img/iniciobg.jpg' /> */}
  <NavbarHome></NavbarHome>
  
<div className="content">
    <div className="row">
    <div className="col-7 left-content">
      <h2 className="main-text">Más de 50 años formando líderes</h2>
      <p className="main-text">Somos un Centro de Estudios Aeronáuticos con los más modernos simuladores y tecnología a la vanguardia que te prepararán para ser competitivo a nivel mundial.</p>
    {/* CARDSS */}
    <div className="cards-container">
  {!!dimensiones && dimensiones.map((item,index)=>{
    return(
      <div className="card dimensiones" onClick={()=>onClickDimension(item)} >
      <div key={index} className="card-body">
    <h5 className="card-title">{item.Descripcion}</h5>
    <h6 className="card-subtitle mb-2">{item.Siglas}</h6>
    {/* <p className="card-text">Some quick example text to build </p> */}
    {/* <Link to={"#"} className="card-link">Another link</Link> */}
  </div>
  </div>
    )
  })}



    </div>
    

    </div>
    <div className="col-5 right-content">
    <img src="./img/person.png" alt="halcon App Dev" id="portada-image" /> 
    </div>
    </div>
    
</div>





  </>)
}

export  {Inicio};