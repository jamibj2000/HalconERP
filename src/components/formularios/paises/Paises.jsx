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
// import DataTable from 'react-data-table-component';

// modal type : create-delete-update

const Paises = () => {

  //STATES VALUES FORM
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [Alpha2, setAlpha2] = useState("");
  const [Alpha3, setAlpha3] = useState("");
  const [status, setStatus] = useState("");

  /// url for service
  const endPointLastUrl = 'paises' 

  const [loading, setLoading] = useState(false)
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
  const [itemSelected,setItemSelected] = useState({})
  const [dataTable,setDataTable] = useState([])
  const [modalType, setModalType] = useState('')

  //LOAD FIRST
  useEffect(() => {
    fetchDataTable()
    //here load select
  }, [])
  const fetchDataTable =async ()=>{
    try{
      const api = new ApiDashboard()
      const data = await api.getData(endPointLastUrl)
      if(!!data.length)setDataTable(data)
      if(data?.status==='Token is Expired'){
        alertaTimer("La sesion ha expirado",'info','4000')
        console.log("data exp",data)
      }

    }catch(e){
      console.log("#Error fetching dataTable")
      //  setDataTable([])
    }

  }

  // SUBMIT CREATE OR UPDATE
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if(modalType==='/create'){
      createService()
    }
    if(modalType==='/update'){
      updateService()
    
    }
  
    setLoading(false)
    
    // setItemSelected({})
  }

  
  const cleanFormValues = ()=>{
    setAlpha2('')
    setAlpha3('')
    setCode('')
    setDescription('')
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
    setAlpha2(item.Alpha2)
    setAlpha3(item.Alpha3)
    setCode(item.Codigo)
    setDescription(item.Descripcion)
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
      Alpha2:itemSelected.Alpha2,
      Alpha3:itemSelected.Alpha3,
      Descripcion:itemSelected.Descripcion,
      Codigo:itemSelected.Codigo,
      Estado:0,
    },itemSelected.Idpaises,endPointLastUrl)
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
      const data = await api.createData({
        // Codigo
        Alpha2:Alpha2,
        Alpha3:Alpha3,
        Descripcion:description,
        Codigo:code,
        Estado:1,
      },endPointLastUrl)
      if(!!data.length) await setDataTable(data)
      if(data?.status==='Token is Expired'){
          alertaTimer("La sesión ha expirado",'info','4000')
          console.log("data exp",data)
        }
      setIsOpenModalCreate(false)
      alertaSinBoton("Se ha creado con éxito",'success','center','2000')
      fetchDataTable()
      cleanFormValues()


    }catch(e){

    }
    

  }
  const updateService = async()=>{
  try {
  const api = new ApiDashboard()
  const data = await api.updateData({
    Alpha2:Alpha2,
    Alpha3:Alpha3,
    Descripcion:description,
    Codigo:code,
    Estado:1,
  },
  itemSelected.Idpaises,
  endPointLastUrl)
  if(!!data.length)setDataTable(data)
  if(data?.status==='Token is Expired'){
      alertaTimer("La sesion ha expirado",'info','4000')
      console.log("data exp",data)
    }
  setIsOpenModalUpdate(false)
  alertaSinBoton("Se ha actualizado con Exito",'success','center','2000')
  fetchDataTable()
  setItemSelected({})

  } catch (error) {
    
  }


  }
  //FORM
  const Form =()=>{
  return(<>
  {/* ***FORM CREATE AND UPDATE**** */}
  <form  onSubmit={handleSubmit}>
      <div className='container'>
      <div className="row">
        <Select
          id="id_code"
          name='code'
          onChange={setCode}
          value={code}
          label='Código'
          options={[
            {IdCodigo:'IdCódigo',key:'1',value:'12'}, 
            {IdCodigo:'IdCódigo',key:'2',value:'668'},
            {IdCodigo:'IdCódigo',key:'3',value:'768'},
          ]}
          />
        <Input
          label='Alpha2'
          type='Alpha2'
          onChange={setAlpha2}
          value={Alpha2}
          required={true}
        />
        <Input
          label='Alpha3'
          type='Alpha3'
          onChange={setAlpha3}
          value={Alpha3}
          required={true}
        />

        <TextArea
          id="floatingTextarea"
          label='Descripción'
          name='description'
          value={description}
          onChange={setDescription}
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
                    Agregar País
            </button>
       {/* TABLE */}
    <Table
    titleColumn={['Id','Código','Alpha2','Alpha3','Descripción','Actualizar','Eliminar']}
    data={ dataTable }
    attributes={['Idpaises','Alpha2','Alpha3','Descripcion']} //codigo
    onDelete={ onDelete }
    onUpdate={ onUpdate }
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

export { Paises }