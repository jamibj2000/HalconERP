import React, { useEffect, useState } from 'react';

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

// modal type : create-delete-update

const TiposTerceroPersona = () => {
    const [idPersona, setIdPersona] = useState('');
    const [idTipoPersona, setIdTipoPersona] = useState('');
    const [description, setDescription] = useState('');

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'tiposTerceroPersona'; /// url for service

    //! llamar list */
    const [list, setList] = useState([]);

    //! LLAMAR Y ASIGNAR LIST
    const fecthDataSelect = async () => {
        const apiSelect = new ApiDashboard();
        const IdPersona = await apiSelect.getData('persona');
        const IdTipoPersona = await apiSelect.getData('tiposTercero');

        if (IdPersona?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }
        if (IdTipoPersona?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }

        setList({
            IdPersona,
            IdTipoPersona,
        });
    };

    //! LOAD_DATA_API */
    useEffect(() => {
        const fecthData = async () => {
            setLoading(true);
            await fetchDataTable();
            await fecthDataSelect();
            setLoading(false);
        };
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

        // setItemSelected({})
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
            //  setDataTable([])
        }
    };

    //! LIMPIAR FORMULARIO
    const cleanFormValues = () => {
        setDescription('');
    };

    //! CLICK EVENTS
    const onCreate = () => {
        cleanFormValues();
        setIsOpenModalCreate(true);
        setModalType('/create');
        console.log('Array Select', list);
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
        setDescription(item.Descripcion);
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
                    IdPersona: idPersona,
                    IdTipoPersona: idTipoPersona,
                    Descripcion: description,
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
                itemSelected.IdTiposTerceroPersona,
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
                    IdPersona: idPersona,
                    IdTipoPersona: idTipoPersona,
                    Descripcion: description,
                },
                itemSelected.IdTiposTerceroPersona,
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
                                id="IdPersona"
                                name="IdPersona"
                                onChange={setIdPersona}
                                value={idPersona}
                                label="Persona"
                                required={true}
                                optionValue="IdPersona"
                                optionName="PrimerNombres"
                                options={list.IdPersona}
                            />
                            <Select
                                id="IdPersona"
                                name="IdPersona"
                                onChange={setIdTipoPersona}
                                value={idTipoPersona}
                                label="Persona"
                                required={true}
                                optionValue="IdTipoPersona"
                                optionName="Descripcion"
                                options={list.IdTipoPersona}
                            />

                            <TextArea
                                id="floatingTextarea"
                                label="Descripción"
                                name="description"
                                value={description}
                                onChange={setDescription}
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
        // MAIN CONTAINER
        <FormContainer progress="45" style={{ width: '60%' }}>
            {/* ***CREATE BUTTON**** */}
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onCreate}
            >
                Agregar Tipos Tercero Persona
            </button>
            {/* TABLE */}
            <Table
                titleColumn={['Id', 'Descripción', 'Actualizar', 'Eliminar']}
                data={dataTable}
                attributes={['Descripcion']} //codigo
                onDelete={onDelete}
                onUpdate={onUpdate}
            ></Table>

            {/* ****** MODALES ******  */}

            <Modal isOpen={isOpenModalCreate}>{Form()}</Modal>
            <Modal isOpen={isOpenModalUpdate}>{Form()}</Modal>

            <Modal isOpen={isOpenModalDelete}>
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

export { TiposTerceroPersona };
