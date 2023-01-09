import React, { useEffect, useState } from 'react';

import { Button } from '../componentsForm/button/button';
import { Select } from '../componentsForm/select/Select';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';


import ApiDashboard from '../../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../../helpers/alertas';
import { Modal } from '../../modal/Modal';
import { Table } from '../componentsForm/table/Table';
import { Input } from '../componentsForm/input/input';



const Aspirante = () => {

    //! DECLARACION DE VARIABLES

    const [cedula, setCedula] = useState('');
    const [apeNombres, setApeNombres] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [idPais , setIdPais] = useState('');
    const [repdoc, setRepdoc] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [idPersona, setIdPersona] = useState('');
    const [puntaje, setPuntaje] = useState('');
    const [correo, setCorreo] = useState('');
    const [idProfesional, setIdProfesional] = useState('');
    const [idConvenio , setIdConvenio] = useState('');




    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'aspirantes'; //! endPointLastUrl

    
    //! llamar list */
    const [list, setList] = useState([]);

    //! LLAMAR Y ASIGNAR LIST
    const fecthDataSelect = async () => {
        const apiSelect = new ApiDashboard();
        const paises = await apiSelect.getData('paises')
        const persona = await apiSelect.getData('persona')
        const profesional = await apiSelect.getData('profesional')
        const convenio = await apiSelect.getData('convenio')

        if (paises?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }
        if (persona?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }
        if (profesional?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }
        if (convenio?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }

        setList({
            paises,
            persona,
            profesional,
            convenio
        })
    }


    //! FUNCION DE LLAMADO A LA CONSULTA DE DATOS
    useEffect(  () => {
        const fecthData = async () => {
            setLoading(true);
            await fetchDataTable();
            await fecthDataSelect();
            setLoading(false);
        }
        fecthData();
    }, []);


    //! SUBMIT CREATE OR UPDATE
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (modalType === '/create') {
            createService();
        }
        if (modalType === '/update') {
            updateService();
        }

        setLoading(false);

    };

    //! VALIDACION DE TOKEN
    const fetchDataTable = async () => {
        try {
            const api = new ApiDashboard();
            const data = await api.getData(endPointLastUrl);
            if (!!data.length) setDataTable(data);
            if (data?.status === 'Token is Expired') {
                alertaTimer('La sesion ha expirado', 'info', '4000');
                console.log('data exp', data);
            }
        } catch (e) {
            console.log('#Error fetching dataTable');
        }
    };

    //! LIMPIAR FORMULARIO
    const cleanFormValues = () => {
     

        setCedula('');
        setApeNombres('');
        setDireccion('');
        setTelefono('');
        setIdPais('');
        setRepdoc('');
        setEspecialidad('');
        setIdPersona('');
        setPuntaje('');
        setCorreo('');
        setIdProfesional('');
        setIdConvenio('');

    };

    //! CLICK EVENTS
    const onCreate = () => {
        cleanFormValues();
        setIsOpenModalCreate(true);
        setModalType('/create');
        fecthDataSelect();
        console.log('Listado para selects-->', list);
    };
    const onDelete = (item) => {
        setItemSelected(item);
        console.log(item, 'on delete selected:');
        setIsOpenModalDelete(true);
        setModalType('/delete');
    };
    const onUpdate = (item) => {
        setItemSelected(item);
        console.log('update item->', item);

        setCedula(item.Cedula);
        setApeNombres(item.ApeNombres);
        setDireccion(item.Direccion);
        setTelefono(item.telefono);
        setIdPais(item.idpais);
        setRepdoc(item.repdoc);
        setEspecialidad(item.especialidad);
        setIdPersona(item.IdPersona);
        setPuntaje(item.Puntaje);
        setCorreo(item.Correo);
        setIdProfesional(item.IdProfesional);
        setIdConvenio(item.IdConvenio);

   
        fecthDataSelect();

        setModalType('/update');
        setIsOpenModalUpdate(true);
    };


    //!CLOSE ALL MODALES
    const handleCloseModal = () => {
        setIsOpenModalCreate(false);
        setIsOpenModalUpdate(false);
        setIsOpenModalDelete(false);
    };

    //! SERVICE CREATE
    const createService = async () => {
        try {
            const api = new ApiDashboard();
            const data = await api.createData(
                {
                    Cedula: cedula,
                    ApeNombres: apeNombres,
                    Direccion: direccion,
                    telefono: telefono,
                    idpais: idPais,
                    repdoc: repdoc,
                    especialidad: especialidad,
                    IdPersona: idPersona,
                    Puntaje: puntaje,
                    Correo: correo,
                    IdProfesional: idProfesional,
                    IdConvenio: idConvenio,
                    /* Estado: 1, */
                },
                endPointLastUrl
            );
            console.log('data create', data);
            if (!!data.length) await setDataTable(data);
            if (data?.status === 'Token is Expired') {
                alertaTimer('La sesión ha expirado', 'info', '4000');
                console.log('data exp', data);
            }
            setIsOpenModalCreate(false);
            alertaSinBoton(
                'Se ha creado con éxito',
                'success',
                'center',
                '2000'
            );
            fetchDataTable();
            cleanFormValues();
        } catch (e) {}
    };

    //! SERVICE DELETE
    const deleteService = async () => {
        try {
          console.log('datain delete serivce exp', itemSelected);
          const api = new ApiDashboard();
          const data = await api.deleteData(
              {
                  Estado: 0,
              },
              itemSelected.IdAspirante,
              endPointLastUrl
          );
          // console.log("data response delete",data,itemSelected.IdPaises)
          if (!!data.length) setDataTable(data);
          if (data?.status === 'Token is Expired') {
              alertaTimer('La sesion ha expirado', 'info', '4000');
              // console.log("data exp",data)
          }
          setIsOpenModalCreate(false);
          handleCloseModal();
          alertaSinBoton(
              'Se ha eliminado con Exito',
              'success',
              'center',
              '2000'
          );

          fetchDataTable();
          cleanFormValues();
          setItemSelected({});
      } catch (e) {
          console.log('error delete');
      }
    };

    //! SERVICE UPDATE
    const updateService = async () => {
        try {
          const api = new ApiDashboard();
          const data = await api.updateData(
              {
                Cedula: cedula,
                ApeNombres: apeNombres,
                Direccion: direccion,
                telefono: telefono,
                idpais: idPais,
                repdoc: repdoc,
                especialidad: especialidad,
                IdPersona: idPersona,
                Puntaje: puntaje,
                Correo: correo,
                IdProfesional: idProfesional,
                IdConvenio: idConvenio,
              },
              itemSelected.IdAspirante,
              endPointLastUrl
          );
          if (!!data.length) setDataTable(data);
          if (data?.status === 'Token is Expired') {
              alertaTimer('La sesion ha expirado', 'info', '4000');
              console.log('data exp', data);
          }
          setIsOpenModalUpdate(false);
          alertaSinBoton(
              'Se ha actualizado con Exito',
              'success',
              'center',
              '2000'
          );
          fetchDataTable();
          setItemSelected({});
      } catch (error) {}
    };

    //!FORM
    const Form = () => {
        return (
            <>
                {/* ***FORM CREATE AND UPDATE**** */}
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <Input
                                label="Cedula"
                                type="number"
                                onChange={setCedula}
                                value={cedula}
                                required={true}
                            />

                            <Input
                                label="Nombres y Apellidos"
                                type="text"
                                onChange={setApeNombres}
                                value={apeNombres}
                                required={true}
                            />

                            <Input
                                label="Direccion"
                                type="text"
                                onChange={setDireccion}
                                value={direccion}
                                required={true}
                            />

                            <Input
                                label="Teléfono"
                                type="number"
                                onChange={setTelefono}
                                value={telefono}
                                required={true}
                            />

                            <Select
                                id="pais"
                                name="pais"
                                onChange={setIdPais}
                                value={idPais}
                                label="País"
                                required={true}
                                optionValue="Idpaises"
                                optionName="Descripcion"
                                options={list.paises}
                            />
                            <Select
                                id="repodoc"
                                name="repodoc"
                                onChange={setRepdoc}
                                value={repdoc}
                                label="Rep Doc"
                                required={true}
                                optionValue="Id"
                                optionName="Descripcion"
                                options={
                                    [
                                        { Id: 1, Descripcion: 'Repdoc 1 Llamar desde API' },
                                    ]
                                }
                            />
                            <Select
                                id="especialidad"
                                name="especialidad"
                                onChange={setEspecialidad}
                                value={especialidad}
                                label="Especialidad"
                                required={true}
                                optionValue="Id"
                                optionName="Descripcion"
                                options={
                                    [
                                        { Id: 1, Descripcion: 'Especialidad 1 Llamar desde API' },
                                    ]
                                }
                            />

                            <Select
                                id="persona"
                                name="persona"
                                onChange={setIdPersona}
                                value={idPersona}
                                label="Persona"
                                required={true}
                                optionValue="IdPersona"
                                optionName="PrimerNombres"
                                options={list.persona}
                            />

                            <Input
                                label="Puntaje"
                                type="number"
                                onChange={setPuntaje}
                                value={puntaje}
                                required={true}
                            />

                            <Input
                                label="Correo"
                                type="text"
                                onChange={setCorreo}
                                value={correo}
                                required={true}
                            />
                            <Select
                                id="idProfesional"
                                name="idProfesional"
                                onChange={setIdProfesional}
                                value={idProfesional}
                                label="ID - Profesional"
                                required={true}
                                optionValue="IdProfesional"
                                optionName="IdProfesional"
                                options={list.profesional}
                            />
                            <Select
                                id="idConvenio"
                                name="idConvenio"
                                onChange={setIdConvenio}
                                value={idConvenio}
                                label="Convenio"
                                required={true}
                                optionValue="IdConvenio"
                                optionName="Descripcion"
                                options={list.convenio}
                            />




                            
                        </div>
                    </div>
                    <ButtonsContainer>
                        <LeftButtonContainer>
                            <Button type="back" onClick={handleCloseModal}>
                                Cerrar
                            </Button>
                        </LeftButtonContainer>
                        <RightButtonContainer>
                            {modalType === '/update' && (
                                <Button type="send" loading={loading}>
                                    Actualizar
                                </Button>
                            )}

                            {modalType === '/create' && (
                                <Button type="send" loading={loading}>
                                    Crear
                                </Button>
                            )}
                        </RightButtonContainer>
                    </ButtonsContainer>
                </form>
            </>
        );
    };

    return (
        //! MAIN CONTAINER
        <FormContainer progress="45" style={{ width: '60%' }}>
            {/* ***CREATE BUTTON**** */}
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onCreate}
            >
                Agregar Aspirante
            </button>
            {/* TABLE */}
            <Table
                titleColumn={[
                    'Id',
                    'Cedula',
                    'ApeNombres',
                    'Direccion',
                    'telefono',
                    'idpais',
                    'repdoc',
                    'especialidad',
                    'IdPersona',
                    'Puntaje',
                    'Correo',
                    'IdProfesional',
                    'IdConvenio',
                    
                    'Actualizar',
                    'Eliminar',
                ]}
                data={dataTable}
                attributes={[
                    'Cedula',
                    'ApeNombres',
                    'Direccion',
                    'telefono',
                    'idpais',
                    'repdoc',
                    'especialidad',
                    'IdPersona',
                    'Puntaje',
                    'Correo',
                    'IdProfesional',
                    'IdConvenio',
                    
                ]} //codigo
                onDelete={onDelete}
                onUpdate={onUpdate}
            ></Table>

            {/* ****** MODALES ******  */}

            <Modal isOpen={isOpenModalCreate} >
                {Form()}
            </Modal>
            <Modal isOpen={isOpenModalUpdate} >
                {Form()}
            </Modal>

            <Modal isOpen={isOpenModalDelete} >
                <h1 style={{ marginBottom: '4rem' }}>
                    Estas seguro que deseas eliminar "
                    {itemSelected.Descripcion || ''}" ?{' '}
                </h1>
                <button onClick={deleteService} className="btn btn-danger">
                    Si
                </button>
                <button
                    style={{ marginLeft: '2rem' }}
                    onClick={handleCloseModal}
                    className="btn btn-secondary"
                >
                    No
                </button>
            </Modal>
        </FormContainer>
    );
};

export { Aspirante };
