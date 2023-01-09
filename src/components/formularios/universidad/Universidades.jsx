import React, { useEffect, useRef, useState } from 'react'

import { TextArea } from '../componentsForm/textarea/textarea'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { Button } from '../componentsForm/button/button'
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer'
import { InputFile } from '../componentsForm/inputFile/inputFile'
import { Select } from '../componentsForm/select/Select'
import { Input } from '../componentsForm/input/input'
import ApiUniversidades from '../../../services/api/forms/ApiUniversidades'
import { FormContainer } from '../componentsForm/formContainer/FormContainer'
import { alertaTimer } from '../../../helpers/alertas'
import { Modal } from '../../modal/Modal'
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'

const Universidades = () => {

  const [universidad, setUniversidad] = useState('')
  const [universidades, setUniversidades] = useState([])
  const [estado, setEstado] = useState(null)
  const [attached, setAttached] = useState(false)
  const [descripcion, setDescripcion] = useState('')
  const [mision, setMision] = useState('')
  const [vision, setVision] = useState('')
  const [fecha, setFecha] = useState('')
  const [title, setTitle] = useState('')
  const [cargando, setCargando] = useState(false)
  const buttonModalCreate = useRef(null);
  const buttonModalUpdate = useRef(null);
  const buttonModalDelete = useRef(null);
  const [type,setType] = useState('create')
  const [itemUpdate,SetItemUpdate]=useState({})
  const [itemDelete,SetItemDelete]=useState({})
  const [isOpenCreate, setIsOpenCreate] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)


  useEffect(() => {
    console.log('HOLA UNIVERSIDAD---------')
    loadUniversidades()
    setTitle('Crear Universidad')
  }, []);

    const loadUniversidades= async ()=>{

      try{
        setCargando(true)
        const apiUniversidad = new ApiUniversidades()
        const data = await apiUniversidad.getUniversidades()
        if(data?.status){
          alertaTimer('Sesion ha expirado',null)
          return
        }
        if(data)setUniversidades(data)
        console.log('HOLA UNIVERSIDAD---------',data)
        setCargando(false)
      }catch(e){
        console.log(e)
      }
  }

const openModalUpdate = (item)=>{
  setType('update')
  setIsOpenUpdate(true)
  // const {IdUniversidad} = item
  SetItemUpdate(item)
  setTitle('Actualizar Universidad')
  // buttonModalUpdate.current.click()
  setDescripcion(item.Descripcion)
  setVision(item.Vision)
  setMision(item.Mision)
  

}
const openModalCreate = ()=>{
  setMision('')
  setVision('')
  setDescripcion('')
  setIsOpenCreate(!isOpenCreate)
}
const openModalDelete = (item)=>{
  SetItemDelete(item)
  setIsOpenDelete(!isOpenDelete)
}
const onCreate = (type)=>{
  setDescripcion('')
  setMision('')
  setVision('')
  setType('create')
  if(descripcion==='')return
  const dataToSubmit = {
    "Descripcion": descripcion,
    "Mision": mision,
    "Vision": vision,
    "FechaCreacion": new Date().toISOString().split('T')[0],
    "Imagen": null,
    "Estado": "1"
  }
  const apiUniversidades = new ApiUniversidades()
  apiUniversidades.createUniversidad(dataToSubmit).then(res=>{
    alertaTimer('Se ha creado con exito','success','2000')
    console.log(res)
  },).catch((e)=>{
    
    alertaTimer('ERROR','warning','1000')
  })
  
  loadUniversidades()


setTimeout(() => {
   setIsOpenCreate(false)
   
 }, 1000);
}

const onUpdate = ()=>{
  
  const {IdUniversidad} = itemUpdate
  if(descripcion==='')return
  const dataToSubmit = {
    "Descripcion": descripcion,
    "Mision": mision,
    "Vision": vision,
    "FechaCreacion": itemUpdate.FechaCreacion,
    "Imagen": null,
    "Estado": "1"
  }
  console.log("on update","item;",itemUpdate,"datatosubmit",dataToSubmit)
  const apiU = new ApiUniversidades()
  apiU.updateUniversidad(dataToSubmit,IdUniversidad).then(res=>{
    loadUniversidades()
    alertaTimer('Se ha Actualizado con exito','success','800')
    setTimeout(() => {
      setIsOpenUpdate(!isOpenUpdate)
      SetItemUpdate({})
      
    }, 1000);
    
  }).catch(e=>{
    alertaTimer('Error al actualizar','warning','1000')
    console.log("error when submi update",e)
  })
  SetItemUpdate({})

}


  const handleCloseCreate = () => {
    setIsOpenCreate(!isOpenCreate)
  }
  const handleCloseDelete = () => {
    SetItemDelete({})
    setIsOpenDelete(!isOpenDelete)
    
  }
  const handleCloseUpdate = () => {
    SetItemDelete({})
    setIsOpenUpdate(!isOpenUpdate)
    
  }
 


const Table =()=>{
  return(
    <>
    <table className="table">
    <thead>
      
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Descripción</th>
        <th scope="col">Misión</th>
        <th scope="col">Visión</th>
        <th scope="col">Fecha Creación</th>
        {/* <th scope="col">Imagen</th> */}
        <th scope="col">Actualizar</th>
        <th scope="col">Eliminar</th>

      </tr>
    </thead>
  <tbody>
    {!!universidades && universidades.map((item,index)=>{
      return(<>
      <tr key={index}>
      <th  scope="row" >{index+1}</th>
      <td>{item.Descripcion}</td>
      <td>{item.Mision}</td>
      <td>{item.Vision}</td>
      <td>{item.FechaCreacion}</td>
      {/* <td>{item.Imagen}</td> */}
      <td><button ref={buttonModalUpdate} type="button" class="btn btn-success" data-bs-toggle="modal" 
      onClick={()=>openModalUpdate(item)}
      data-bs-target="#staticBackdropUpdate">Actualizar</button></td>
      
      <td><button ref={buttonModalDelete} type="button" className="btn btn-danger" data-bs-target="#modalDelete" data-bs-toggle="modal" 
      onClick={()=>openModalDelete(item)}>Eliminar</button></td>
      
    </tr>

      </>)
    })}
  </tbody>
</table>
    </>
  )
}
 const FormCreate =()=>{
   return <>
   {/* FORM UNIVERSIDAD */}
   <form >
        <TextArea
          name="descripcion"
          label="Descripción"
          value={descripcion}
          onChange={setDescripcion}
          cols={30}
          rows={2}
        />
        <Input
          type="text"
          onChange={setMision}
          value={mision}
          label="Misión"
          required={true}
        />
        <Input
          type="text"
          onChange={setVision}
          value={vision}
          label="vision"
          required={true}
        />
        



        <button type="button" className="btn btn-secondary" onClick={handleCloseCreate} data-bs-dismiss="modal">Close</button>
        
  

       <button type="button" className="btn btn-primary" onClick={(e)=>onCreate()} >Crear</button>
        
       
      </form>
       {/* END FORM UNIVERSIDAD */}
   </>
 }
 const FormUpdate =()=>{
  return <>
  {/* FORM update UNIVERSIDAD */}
  <form >
       
       <TextArea
         name="descripcion"
         label="Descripción"
         value={descripcion}
         onChange={setDescripcion}
         
         cols={30}
         rows={2}
       />
       <Input
         type="text"
         onChange={setMision}
         value={mision}
         label="Misión"
         required={true}
       />
       <Input
         type="text"
         onChange={setVision}
         value={vision}
         label="vision"
         required={true}
       />
       
       <button type="button" className="btn btn-secondary"onClick={handleCloseUpdate}  data-bs-dismiss="modal">Close</button>
     
       <button   type="button" className="btn btn-primary" onClick={(e)=>onUpdate('update')} >Actualizar</button>
     </form>
      {/* END FORM UNIVERSIDAD */}
  </>
}
function onDelete(item){
  // alert(itemDelete.Descripcion)
  setIsOpenDelete(!isOpenDelete)
  console.log("ITEM DELETE",item)
  
  buttonModalDelete?.current?.click()
  // if(item.Estado==="1"){
    const apiUniversidades = new ApiUniversidades()
    const dataToDelete = {
      // "IdUniversidad":IdUniversidad,
      "Descripcion": item.Descripcion,
      "Mision": item.Mision,
      "Vision": item.Vision,
      "FechaCreacion": item.FechaCreacion,
      "Imagen": null,
      "Estado": "0"
    }
    apiUniversidades.deleteUniversidad(dataToDelete,itemDelete.IdUniversidad).then(res=>
      {
        alertaTimer('Elemento eliminado','success',800)
        loadUniversidades()
        console.log("holaaa ondelete",res,dataToDelete,itemDelete.IdUniversidad)
      }).catch(e=>{
        alertaTimer('Error','info',800)
      })
}

  return (
    <FormContainer progress='33'>
      
    <button 
      type="button" 
      class="btn btn-outline-primary" 
      onClick={()=> { 
        openModalCreate()
      }} >Crear Universidad
    </button>
      
      {cargando?<LoadingSpinner />:<Table />}

        <Modal isOpen={ isOpenCreate } close={ handleCloseCreate }>
          { FormCreate() }
        </Modal>
        <Modal isOpen={ isOpenUpdate } close={ handleCloseUpdate }>
          { FormUpdate() }
        </Modal>
        <Modal isOpen={ isOpenDelete } close={ handleCloseDelete }>
           <h1>Estas seguro que deseas eliminar  {itemDelete.Descripcion || ''} ?</h1>
           <button onClick={onDelete} className="btn btn-danger">Si</button>
           <button onClick={handleCloseDelete} className="btn btn-secondary">No</button>
        </Modal>

    </FormContainer>
  )
}

export { Universidades }