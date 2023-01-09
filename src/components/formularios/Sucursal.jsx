import React, { useEffect, useRef, useState } from 'react'

import { TextArea } from './componentsForm/textarea/textarea'
import { Input } from './componentsForm/input/input'
import { Select } from './componentsForm/select/select'
import { FormContainer } from './componentsForm/formContainer/FormContainer'
import { alertaTimer } from '../../helpers/alertas'
import { Modal } from '../modal/Modal'


import ApiSucursales from '../../services/api/forms/ApiSucursales'

const Sucursal = () => {

  const [sucursales, setSucursales] = useState(false)
  
  
  const [descripcion, setDescripcion] = useState('')
  const [direccion, setDireccion] = useState('') 
  const [pais, setPais] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [sucursal, setSucursal] = useState('')
  const [fecha, setFecha] = useState('')
  const [universidad, setUniversidad] = useState('') 
  const [estado, setEstado] = useState('')
  const [cargando, setCargando] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const [title, setTitle] = useState('')
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
    loadSucursales()
    setTitle('Crear Universidad')
  }, []);


  const loadSucursales= async ()=>{
    const apiSucursales = new ApiSucursales()
    const data = await apiSucursales.getSucursales()
    setSucursales(data)
}

const openModalUpdate = (item)=>{
  
  setType('update')
  setIsOpenUpdate(true)
  // const {IdUniversidad} = item
  SetItemUpdate(item)
  setTitle('Actualizar Universidad')
  // buttonModalUpdate.current.click()
  setUniversidad(item.IdUniversidad)
  setDescripcion(item.Sucursal)
  setDireccion(item.Direccion)
  setPais(item.Idpaises)
  setDepartamento(item.IdDepartamento)
  setCiudad(item.Idciudad)
  setSucursal(item.IdTipoSucursal)

  console.log('ITEM------', item.IdTipoSucursal);




}

const openModalCreate = ()=>{
  setUniversidad('')
  setDescripcion('')
  setDireccion('')
  setPais('')
  setDepartamento('')
  setCiudad('')
  setSucursal('')
  setFecha('')
  setDescripcion('')
  setIsOpenCreate(!isOpenCreate)
}

const openModalDelete = (item)=>{
  SetItemDelete(item)
  setIsOpenDelete(!isOpenDelete)
}


const onCreate = (type)=>{
  setUniversidad('')
  setDescripcion('')
  setDireccion('')
  setPais('')
  setDepartamento('')
  setCiudad('')
  setSucursal('')
  setFecha('')
  setType('create')
  setCargando(true)
  /* if(descripcion==='')return */
  const dataToSubmit = {
    "IdUniversidad":universidad,
    "Descripcion": descripcion,
    "Direccion": direccion,
    "Idpais": pais,
    "IdDepartamento": departamento,
    "IdCiudad": ciudad,
    "IdTipoSucursal": sucursal,
    "FechaCreacion": new Date().toISOString().split('T')[0],
    /* "FechaCreacion": fecha, */
    "Estado": "1"
  }
  console.log('DataSubmit----',dataToSubmit);

      const apiSucursales = new ApiSucursales()
      apiSucursales.createSucursales(dataToSubmit).then(res=>{
        alertaTimer('Se ha creado con exito','success','2000')
        console.log('RESPONSE CREATE UNIVERSIDAD----',res)
        loadSucursales()
      },).catch((e)=>{

        alertaTimer('ERROR','warning','1000')
      })
      setCargando(false)
      loadSucursales()

    setTimeout(() => {
      setIsOpenCreate(false)

    }, 1000); 


}
/* "FechaCreacion": new Date().toISOString().split('T')[0], */
const onUpdate = ()=>{
  console.log('ITEM----', itemUpdate);
  const {IdSucursal} = itemUpdate
  console.log(IdSucursal);
 if(Sucursal==='')return
  const dataToSubmit = {
    "IdUniversidad":universidad,
    "Descripcion": descripcion,
    "Direccion": direccion,
    "Idpais": pais,
    "IdDepartamento": departamento,
    "IdCiudad": ciudad,
    "IdTipoSucursal": sucursal,
    "FechaCreacion": itemUpdate.FechaCreacion,
    "Estado": "1"
  }

    console.log("on update","item;",itemUpdate,"datatosubmit",dataToSubmit)
  const apiU = new ApiSucursales()
  apiU.updateSucursales(dataToSubmit,IdSucursal).then(res=>{
    loadSucursales()
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


function onDelete(item){
  // alert(itemDelete.Descripcion)
  setIsOpenDelete(!isOpenDelete)
  console.log("ITEM DELETE",item)

  buttonModalDelete.current.click()
  // if(item.Estado==="1"){
    const apiSucursales = new ApiSucursales()
    const dataToDelete = {
      "Estado": "0"   
    }
    apiSucursales.deleteSucursales(dataToDelete,itemDelete.IdSucursal).then(res=>
      {
        alertaTimer('Elemento eliminado','success',800)
        loadSucursales()
        console.log("holaaa on",res,dataToDelete,itemDelete.IdSucursal)
      }).catch(e=>{
        alertaTimer('Error','info',800)
      })
    loadSucursales()
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

const onSetItemDelete= (itemSelected)=>{
  console.log("selected",itemSelected)
  SetItemDelete(itemSelected)
  console.log("selected",itemSelected)
}

  const Table =()=>{
  return(
  <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Sucursal</th>
      <th scope="col">Dirección</th>
      <th scope="col">País</th>
      <th scope="col">Departamento</th>
      <th scope="col">Cuidad</th>
      <th scope="col">Tipo Sucursal</th>
      <th scope="col">Fecha Creación</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Actualizar</th>

    </tr>
  </thead>
  <tbody>
    {!!sucursales && sucursales.map((item,index)=>{
      return(<>
    <tr key={index}>
      <th  scope="row" >{item.IdSucursal}</th>
      <td>{item.Sucursal}</td>
      <td>{item.Direccion}</td>
      <td>{item.Pais}</td>
      <td>{item.Departamento}</td>
      <td>{item.Ciudad}</td>
      <td>{item.TipoSucursal}</td>
      <td>{item.FechaCreacion}</td>
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
  {/* FORM SUCURSAL */}
  <form >
            <Select
              name='id_iniversidad'
              value={universidad}
              onChange={setUniversidad}
              label='Universidad'
              options={
                [
                  {
                      key:1,
                      value: 'CENTRO DE ESTUDIOS AERONAUTICOS- BOGOTA'
                  },
                ]
              }
              required={true}
            />


            <Input
              name="descripcion"
              label="Sucursal"
              value={descripcion}
              onChange={setDescripcion}
              type="text"
              placeholder="Ingresa la sucursal"
              required={true}
            />

            


            <Input
              type="text"
              onChange={setDireccion}
              value={direccion}
              label="Dirección"
              placeholder="Ingresa la dirección"
              required={true}
            />

            <Select
              name='pais'
              value={pais}
              onChange={setPais}
              label='País'
              options={
                [
                  {
                      key:1,
                      value: 'Colombia'
                  },
                  {
                      key:2,
                      value: 'Panama'
                  },
                ]
              }
              required={true}
            />
            <Select
              name='departamento'
              value={departamento}
              onChange={setDepartamento}
              label="Departamento"
              options={
                [
                  {
                      key:1,
                      value: 'Cundinamarca'
                  },
                  {
                      key:2,
                      value: 'Meta'
                  },
                ]
              }
              required={true}
            />
            <Select
              name='ciudad'
              value={ciudad}
              onChange={setCiudad}              
              label="Ciudad"
              options={
                [
                  {
                      key:1,
                      value: 'Bogotá'
                  },
                  {
                      key:2,
                      value: 'Villavicencio'
                  },
                ]
              }
              required={true}
            />
            <Select
              name='sucursal'
              value={sucursal}
              onChange={setSucursal}              
              label="Tipo Sucursal"
              options={
                [
                  {
                      key:1,
                      value: 'Principal'
                  },
                  {
                      key:2,
                      value: 'Secundaria'
                  },
                ] 
              }
              required={true}
            />
            
            <div className='d-flex justify-content-between pt-3'>
            <button type="button" className="btn btn-secondary" onClick={handleCloseCreate} data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={(e)=>onCreate()} >Crear</button>
            </div>
          </form>
      {/* END FORM SUCURSAL */}
  </>
}

const FormUpdate =()=>{


  return <>
  {/* FORM update UNIVERSIDAD */}
  <form >
       
            <Select
              name='id_iniversidad'
              value={universidad}
              onChange={setUniversidad}
              label='Universidad'
              options={
                [
                  {
                      key:1,
                      value: 'Universidad 1'
                  },
                ]
              }
              required={true}
            />

            <Input
              name="descripcion"
              label="Sucursal"
              value={descripcion}
              onChange={setDescripcion}
              type="text"
              placeholder="Ingresa la sucursal"
              required={true}
            />


            <Input
              type="text"
              onChange={setDireccion}
              value={direccion}
              label="Dirección"
              placeholder="Ingresa la dirección"
              required={true}
            />

            <Select
              name='pais'
              value={pais}
              onChange={setPais}
              label='País'
              options={
                [
                  {
                      key:1,
                      value: 'Colombia'
                  },
                  {
                      key:2,
                      value: 'Perú'
                  },
                ]
              }
              required={true}
            />

            <Select
              name='departamento'
              value={departamento}
              onChange={setDepartamento}
              label="Departamento"
              options={
                [
                  {
                      key:1,
                      value: 'Cundinamarca'
                  },
                  {
                      key:2,
                      value: 'Meta'
                  },
                ]
              }
              required={true}
            />

            <Select
              name='ciudad'
              value={ciudad}
              onChange={setCiudad}              
              label="Ciudad"
              options={
                [
                  {
                      key:1,
                      value: 'Bogotá'
                  },
                  {
                      key:2,
                      value: 'Villavicencio'
                  },
                ]
              }
              required={true}
            />

            <Select
              name='sucursal'
              value={sucursal}   
              onChange={setSucursal}              
              label="Tipo Sucursal"
              options={
                [
                  {
                      key:1,
                      value: 'Principal'
                  },
                  {
                      key:2,
                      value: 'Secundaria'
                  },
                ] 
              }
              required={true}
            />

       
       <button type="button" className="btn btn-secondary"onClick={handleCloseUpdate}  data-bs-dismiss="modal">Close</button>
     
       <button   type="button" className="btn btn-primary" onClick={(e)=>onUpdate('update')} >Actualizar</button>
     </form>
      {/* END FORM UNIVERSIDAD */}
  </>
}

  return (
    <FormContainer progress='33'>
      <button 
      type="button" 
      class="btn btn-outline-primary" 
      onClick={()=> { 
        openModalCreate()
      }} >Añadir Sucursal
    </button>
      {Table()}

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

export { Sucursal }