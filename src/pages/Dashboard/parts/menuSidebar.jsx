import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './parts.css'
function MenuSidebar  ({menu})  {

  const menuList =()=>{
    return(

      !!menu.length && menu.map((item,index)=>{
        return (<>
        

        <div key={index} className="accordion" id={"accordionExample"+index} >
<div  key={index+'00'} className="accordion-item">
    <h2 className="accordion-header" id={"headingThree"+index}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseThree"+index} aria-expanded="false" aria-controls={"collapseThree"+index}>
        {item.modulo}
      </button>
    </h2>
    <div id={"collapseThree"+index} className="accordion-collapse collapse" aria-labelledby={"headingThree"+index} data-bs-parent={"#accordionExample"+index}>
      <div className="accordion-body">
      {!!item.ventanas && item.ventanas.map((itemVentana, index)=>{
                return(<>
                <li key={index+'99'}>
                   
              <Link  className=" " to={item.path_modulo+'/'+itemVentana.path_ventana}>{ itemVentana.descripcion} </Link>
                </li>
                </>)
              })}
      </div>
    </div>
  </div>

          </div>
 
          </>)
  }) 
    )
  }
  useEffect(()=>{
    // console.log(menu,"menu in menisidebar")
    
  },[menu])

  
  return(
    <>
    <div className='' 
    style={{
      display:'block', width: '100%',
      boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
      }}
      >
  <button className="btn btn-primary" type="button" style={{backgroundColor:'#1D3660',paddingBottom:'0.7rem',paddingTop:'0.7rem',color:'#00a3cc',borderBlockColor:'gray',width:'100%'}}><h5><Link to={'/dashboard/inicio'} >Inicio</Link></h5></button>
        <div className="main-menu-container" style={{height: '500px',overflowY: 'scroll'}}>
      {menuList()}
</div>
    </div>
  
    </>
  )
}

export default MenuSidebar