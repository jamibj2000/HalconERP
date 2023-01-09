import React, { useEffect, useState } from 'react';

import { Select } from '../componentsForm/select/Select';
import { TextArea } from '../componentsForm/textarea/textarea';
import { Button } from '../componentsForm/button/button';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';

import ApiDashboard from '../../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../../helpers/alertas';
import { Modal } from '../../modal/Modal';
import { Table } from '../componentsForm/table/Table';

const Notas = () => {

    //! DECLARACION DE VARIABLES
    const [notas, setNotas] = useState('');
    const [idEstudiante, setIdEstudiante] = useState('');

    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'notas'; //! endPointLastUrl

//! llamar lista de select */
const [selectList, setSelectList] = useState([]);

//! LLAMAR Y ASIGNAR LISTA DE SELECCION EN FORMULARIO
const fecthDataSelect = async () => {
    const apiSelect = new ApiDashboard();
    const estudiante = await apiSelect.getData('estudiante')

    if (estudiante?.status === 'Token is Expired') {
        alertaTimer("La sesion ha expirado", 'info', '4000')
        return false
    }

    setSelectList({
        estudiante
    })
}
    //! FUNCION DE LLAMADO A LA CONSULTA DE DATOS
    useEffect(() => {
        fetchDataTable();
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
        setIdEstudiante('');
        setNotas('');
    };

    //! CLICK EVENTS
    const onCreate = () => {
        cleanFormValues();
        setIsOpenModalCreate(true);
        setModalType('/create');
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
        setNotas(item.Notas);
        setIdEstudiante(item.IdEstudiante);        

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
                    Notas: notas,
                    idEstudiante: idEstudiante,
                    Estado: 1,
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
              itemSelected.IdPersona,
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
                IdNotas: notas,
                IdEstudiante: idEstudiante,
                Estado:1,
              },
              itemSelected.IdPersona,
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

                            <Select
                                id="idEstudiante"
                                name="idEstudiante"
                                onChange={setIdEstudiante}
                                value={idEstudiante}
                                label="IdEstudiante"
                                required={true}
                                optionValue='IdEstudiante'
                                optionName='estudiante'
                                options={ selectList.estudiante }
                            />
                            <TextArea
                                id="notas"
                                label='Notas'
                                name='Notas'
                                value={notas}
                                onChange={setNotas}
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
                Agregar Persona
            </button>
            {/* TABLE */}
            <Table
                titleColumn={[
                    'Id',
                    'Estudiante',
                    'Notas',
                    'Estado',
                    'Actualizar',
                    'Eliminar',
                ]}
                data={dataTable}
                attributes={[
                    'IdEstudiante',
                    'Notas',
                    'Estado',
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

export { Notas };
