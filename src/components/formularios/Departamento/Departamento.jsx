import React, { useEffect, useState } from 'react'

import { Select } from '../componentsForm/select/Select';
import { TextArea } from '../componentsForm/textarea/textarea';
import { Button } from '../componentsForm/button/button';
import { Input } from '../componentsForm/input/input';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';

import ApiDashboard from '../../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../../helpers/alertas';
import { Modal } from '../../modal/Modal';
import { Table } from '../componentsForm/table/Table';
import {LoadingSpinner} from '../../LoadingSpinner/LoadingSpinner';

// modal type : create-delete-update

const Departamento = () => {

  //STATES VALUES FORM
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [paises, setPaises] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  //GET LOCAL STORAGE ROL VIA LS OR STATE MANG <------------->
  /// URL FORM SERVICE
  const endPointLastUrl = 'departamentos' 
  const titleCreate = 'Agregar Departamento'

  const [loading, setLoading] = useState(false)
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
  const [itemSelected,setItemSelected] = useState({})
  const [dataTable,setDataTable] = useState([])
  const [modalType, setModalType] = useState('')

  //FIRST COMPONENT LOAD 
  useEffect(() => {

    fetchDataTable()
    fetchDropDowns()
  }, [])

  const fetchDropDowns= async()=>{
    try{
      const api = new ApiDashboard()
      const dataPais = await api.getData('pais')
      if(dataPais?.status==='Token is Expired'){
        alertaTimer("La sesion ha expirado",'info','4000')
        return
      }
      setPaises(dataPais)

    }catch(e){}
  }

  const fetchDataTable =async ()=>{
    try{
      setLoading(true)
      const api = new ApiDashboard()
      const data = await api.getData(endPointLastUrl)
      if(!!data.length)setDataTable(data)
      if(data?.status==='Token is Expired'){
        alertaTimer("La sesion ha expirado",'info','4000')
      }
      setLoading(false) 

    }catch(e){
      console.log("#Error fetching dataTable")
      //  setDataTable([])
    }

  }

  // SUBMIT CREATE OR UPDATE
  const handleSubmit = e => {
    e.preventDefault()
    // if(descripcion==='')return
    setLoading(true)
    if(modalType==='/create'){
      createService()
    }
    if(modalType==='/update'){
      updateService()
    
    }
    setLoading(false)
  }

  // CLICK EVENTS
  const onCreate =()=>{
    cleanFormValues()
    setIsOpenModalCreate(true)
    setModalType('/create')  
  }
  const onDelete = (item)=>{
    setItemSelected(item);
    console.log(item,"on delete selected:")
    setIsOpenModalDelete(true)
    setModalType('/delete')    
  }
  const onUpdate = (item)=>{
    setItemSelected(item);
    console.log('update item->',item)
    setDescripcion(item.Descripcion)
    setPais(item.Idpais)    
    setModalType('/update')
    setIsOpenModalUpdate(true)
  }

//CLOSE ALL MODALES
  const handleCloseModal =()=>{
    setIsOpenModalCreate(false)
    setIsOpenModalUpdate(false)
    setIsOpenModalDelete(false)
  }
  // CALL SERVICES
  const deleteService = async ()=>{
  try{
    console.log("datain delete serivce exp",itemSelected)
    const api = new ApiDashboard();
    const data = await api.deleteData({
      // Codigo
      // IdPaises:itemSelected.IdPaises,
     
      Descripcion:itemSelected.Descripcion,
      Estado:0,
    },itemSelected.Iddepartamentos,endPointLastUrl)
    // console.log("data response delete",data,itemSelected.IdPaises)
    if(!!data.length)setDataTable(data)
    if(data?.status==='Token is Expired'){
        alertaTimer("La sesion ha expirado",'info','4000')
        // console.log("data exp",data)
      }
    setIsOpenModalCreate(false)
    handleCloseModal()
    alertaSinBoton("Se ha eliminado con Exito",'success','center','2000')

    fetchDataTable()
    cleanFormValues()
    setItemSelected({})


  }catch(e){
    console.log("error delete")
  }

  }
  const createService = async ()=>{
    try{
      const api = new ApiDashboard();
      console.log(pais,"pais")
      const data = await api.createData({
        // Codigo
        Idpais:pais,
        Descripcion:descripcion,
        Estado:1,
      },endPointLastUrl)
      if(!!data.length) await setDataTable(data)
      if(data?.status==='Token is Expired'){
          alertaTimer("La sesión ha expirado",'info','4000')
          console.log("data exp",data)
        }
      setIsOpenModalCreate(false)
      alertaSinBoton("Se ha creado con éxito",'success','center','1500')
      fetchDataTable()
      cleanFormValues()


    }catch(e){

    }
    

  }
  const updateService = async()=>{
  try {
    console.log(itemSelected,itemSelected.Idpaises)
  const api = new ApiDashboard()
  const data = await api.updateData({
    Descripcion:descripcion,
    Idpais:pais,
    Estado:1,
  },
  itemSelected.Iddepartamentos,
  endPointLastUrl)
  if(!!data.length)setDataTable(data)
  if(data?.status==='Token is Expired'){
      alertaTimer("La sesion ha expirado",'info','4000')
      console.log("data exp",data)
      return
    }
  setIsOpenModalUpdate(false)
  alertaSinBoton("Se ha actualizado con Exito",'success','center','2000')
  fetchDataTable()
  setItemSelected({})

  } catch (error) {
    
  }


  }

  const cleanFormValues = ()=>{
    setDescripcion('')
    setPais('')
  }

  //FORM
  const Form =()=>{
  return(<>
  {/* ***FORM CREATE AND UPDATE**** */}
  <form  onSubmit={handleSubmit}>
      <div className='container'>
      <div className="row">
      <select
      id="id-pais"
      name='pais'
      onChange={e => setPais(e.target.value)}
      value={pais}
      label='País'
      class="form-select" aria-label="pais">
        <option selected>Seleccione País</option>
      {!!paises && paises.map((item,index)=>{
        return<>
      <option key={index} value={item.Idpaises}>{item.Descripcion}</option>
        </>})
      }
</select>


          
         
        <Input
          label='Nombre'
          type='descripcion'
          onChange={setDescripcion}
          value={descripcion}
          required={true}
        />
       
            </div>
      </div>
      <ButtonsContainer>
        <LeftButtonContainer>
          <Button type='back' onClick={handleCloseModal}>
            Cerrar
          </Button>
        </LeftButtonContainer>
        <RightButtonContainer>
        {
            modalType==='/update' && <Button
            type='send'
            loading={loading}
          >
            Actualizar
          </Button>
            }
          
          {modalType==='/create' && 
          <Button
            type='send'
            loading={loading}
            >
            Crear
          </Button>}
        </RightButtonContainer>
      </ButtonsContainer>
    </form>
  </>)
  }

  return (
    // MAIN CONTAINER
    <FormContainer progress='45'style={{width:'60%'}}  >
      {/* ***CREATE BUTTON**** */}
      <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ onCreate }>
                    {titleCreate}
            </button>
       {/* TABLE */}
    
    <Table
    titleColumn={['Id','Descripción','Actualizar','Eliminar']}
    data={ dataTable }
    attributes={['Descripcion']} //codigo
    onDelete={ onDelete }
    onUpdate={ onUpdate }
    isLoading={loading}
    ></Table> 
  

      {/* ****** MODALES ******  */}

      <Modal isOpen={ isOpenModalCreate } close={ handleCloseModal }>
          { Form() }
      </Modal>
      <Modal isOpen={ isOpenModalUpdate } close={ handleCloseModal }>
          { Form() }
      </Modal>

      <Modal isOpen={ isOpenModalDelete } close={ handleCloseModal }>
                <h1 style={{marginBottom:'4rem'}}>Estas seguro que deseas eliminar "{itemSelected.Descripcion || '' }" ? </h1>
                <button 
                    onClick={ deleteService } 
                    className="btn btn-danger">
                        Si
                </button>
                <button style={{marginLeft:'2rem'}}
                    onClick={ handleCloseModal } 
                    className="btn btn-secondary">No</button>
            </Modal>

    </FormContainer>
    
  )

}

export { Departamento }