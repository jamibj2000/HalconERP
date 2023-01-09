import React, { useEffect, useState } from 'react';

import { Select } from '../componentsForm/select/Select';
import { TextArea } from '../componentsForm/textarea/textarea';
import { Button } from '../componentsForm/button/button';
import { Input } from '../componentsForm/input/input';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainerModal } from '../componentsForm/formContainer/FormContainerModal';

import ApiDashboard from '../../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../../helpers/alertas';
import { Modal } from '../../modal/Modal';
import { Table } from '../componentsForm/table/Table';

const Convocatoria = () => {

    //! DECLARACION DE VARIABLES

    const [cupos, setCupos] = useState('');
    const [idCurso, setIdCurso] = useState('');
    const [idTipoConvocatoria, setIdTipoConvocatoria] = useState('');
    const [idConvenio, setIdConvenio] = useState('');
    const [flagPublico, setFlagPublico] = useState(null);


    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'convocatoria'; //! endPointLastUrl


    //! llamar list */
    const [list, setList] = useState([]);

    //! LLAMAR Y ASIGNAR LIST
    const fecthDataSelect = async () => {
        const apiSelect = new ApiDashboard();
        const curso = await apiSelect.getData('curso')
        const tipoconvocatoria = await apiSelect.getData('tipoConvocatoria')
        const convenio = await apiSelect.getData('convenio')

        if (curso?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }
        if (tipoconvocatoria?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }
        if (convenio?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }

        setList({
            curso,
            tipoconvocatoria,
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
     
        setCupos('');
        setIdCurso('');
        setIdTipoConvocatoria('');
        setIdConvenio('');
        setFlagPublico(null);

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
        setIdCurso(item.IdCurso);
        setIdTipoConvocatoria(item.IdTipoConvocatoria);
        setIdConvenio(item.IdConvenio);
        setCupos(item.Cupos);
        setFlagPublico(item.FlagPublico);

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
                    Cupos: cupos,
                    IdCurso: idCurso,
                    IdTipoConvocatoria: idTipoConvocatoria,
                    IdConvenio: idConvenio,
                    FlagPublico: flagPublico,
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
              itemSelected.IdConvocatoria,
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
                Cupos: cupos,
                IdCurso: idCurso,
                IdTipoConvocatoria: idTipoConvocatoria,
                IdConvenio: idConvenio,
                FlagPublico: flagPublico,
                Estado:1,
              },
              itemSelected.IdConvocatoria,
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
                <FormContainerModal title={'Convocatoria'} >
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="row">

                                <Input
                                    label="Cupos"
                                    type="number"
                                    onChange={setCupos}
                                    value={cupos}
                                    required={true}
                                />

                                <Select
                                    name='IdTipoEstadoCurso'
                                    onChange={ setIdCurso }
                                    value={ idCurso }
                                    label='Curso'
                                    required={true}
                                    optionValue='IdCurso'
                                    optionName='Nombre'
                                    options={ list.curso
                                }/>

                                <Select
                                    name="IdTipoConvocatoria"
                                    onChange={setIdTipoConvocatoria}
                                    value={idTipoConvocatoria}
                                    label="Convocatoria"
                                    required={true}
                                    optionValue='IdTipoConvocatoria'
                                    optionName='Descripcion'
                                    options={ list.tipoconvocatoria }
                                />

                                <Select
                                    id="IdConvenio"
                                    name="IdConvenio"
                                    onChange={setIdConvenio}
                                    value={idConvenio}
                                    label="IdConvenio"
                                    required={true}
                                    optionValue='IdConvenio'
                                    optionName='Descripcion'
                                    options={ list.convenio }
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
                </FormContainerModal>
            </>
        );
    };

    return (
        //! MAIN CONTAINER
        <div>
            {/* ***CREATE BUTTON**** */}
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onCreate}
            >
                Agregar Convocatoria
            </button>
            {/* TABLE */}
            <Table
                titleColumn={[
                    'Id',
                    'Cupos',
                    'IdCurso',
                    'IdTipoConvocatoria',
                    'IdConvenio',
                    'FlagPublico',
                    
                    'Actualizar',
                    'Eliminar',
                ]}
                data={dataTable}
                attributes={[
                    'Cupos',
                    'IdCurso',
                    'IdTipoConvocatoria',
                    'IdConvenio',
                    'FlagPublico',
                    
                ]} //codigo
                onDelete={onDelete}
                onUpdate={onUpdate}
                isLoading={ loading }
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
        </div>
    );
};

export { Convocatoria };
