import React, { useEffect, useState } from 'react';

import { Button } from '../componentsForm/button/button';
import { Select } from '../componentsForm/select/Select';
import { TextArea } from '../componentsForm/textarea/textarea';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';

import ApiDashboard from '../../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../../helpers/alertas';
import { Modal } from '../../modal/Modal';
import { Table } from '../componentsForm/table/Table';
import { Input } from '../componentsForm/input/input';

const Sucursal = () => {
    //! DECLARACION DE VARIABLES

    const [universidad, setUniversidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [sucursal, setSucursal] = useState('');

    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'sucursalUniversidad'; //! endPointLastUrl

    //! llamar list */
    const [list, setList] = useState([]);

    //! LLAMAR Y ASIGNAR LIST
    const fecthDataSelect = async () => {
        const apiSelect = new ApiDashboard();
        const IdUniversidad = await apiSelect.getData('universidad');
        const paises = await apiSelect.getData('paises');
        const departamentos = await apiSelect.getData('departamentos');
        const ciudad = await apiSelect.getData('ciudad');
        const tipoSucursal = await apiSelect.getData('tipoSucursal');

        if (IdUniversidad?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }
        if (paises?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }
        if (departamentos?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }
        if (ciudad?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }
        if (tipoSucursal?.status === 'Token is Expired') {
            alertaTimer('La sesion ha expirado', 'info', '4000');
            return false;
        }

        setList({
            IdUniversidad,
            paises,
            departamentos,
            ciudad,
            tipoSucursal,
        });
    };

    //! LOAD_DATA_API */
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
     
        setUniversidad('')
        setDireccion('')
        setPais('')
        setDepartamento('')
        setCiudad('')
        setSucursal('')
    };

    //! CLICK EVENTS
    const onCreate = () => {
        cleanFormValues();
        setIsOpenModalCreate(true);
        setModalType('/create');
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
        console.log('ITEM ABIERTO--:', item);

        setModalType('/update');
        setIsOpenModalUpdate(true);
        setUniversidad(item.IdUniversidad);
        setDireccion(item.Direccion);
        setPais(item.Idpaises);
        setDepartamento(item.IdDepartamento);
        setCiudad(item.Idciudad);
        setSucursal(item.IdTipoSucursal)
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
                    IdUniversidad: universidad,
                    Direccion: direccion,
                    Idpais: pais,
                    IdDepartamento: departamento,
                    Idciudad: ciudad,
                    IdTipoSucursal: sucursal,
                },
                endPointLastUrl
            );
            console.log('Data Creada', data);
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
              itemSelected.IdSucursal,
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
                IdUniversidad: universidad,
                Direccion: direccion,
                Idpais: pais,
                IdDepartamento: departamento,
                Idciudad: ciudad,
                IdTipoSucursal: sucursal,
              },
              itemSelected.IdSucursal,
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
                                id="IdConvenio"
                                name="IdConvenio"
                                onChange={setUniversidad}
                                value={universidad}
                                label="Universidad"
                                required={true}
                                optionValue="IdUniversidad"
                                optionName="Descripcion"
                                options={list.IdUniversidad}
                            />

                            <TextArea
                                name="Direccion"
                                label="Dirección"
                                value={direccion}
                                onChange={setDireccion}
                                cols={30}
                                rows={2}
                            />

                            <Select
                                id="pais"
                                name="pais"
                                onChange={setPais}
                                value={pais}
                                label="País"
                                required={true}
                                optionValue="Idpaises"
                                optionName="Descripcion"
                                options={list.paises}
                            />

                            <Select
                                id="departamento"
                                name="departamento"
                                onChange={setDepartamento}
                                value={departamento}
                                label="Departamento"
                                required={true}
                                optionValue="Iddepartamentos"
                                optionName="Descripcion"
                                options={list.departamentos}
                            />
                            <Select
                                id="ciudad"
                                name="ciudad"
                                onChange={setCiudad}
                                value={ciudad}
                                label="Ciudad"
                                required={true}
                                optionValue="Idciudad"
                                optionName="Descripcion"
                                options={list.ciudad}
                            />
                            <Select
                                id="sucursal"
                                name="sucursal"
                                onChange={setSucursal}
                                value={sucursal}
                                label="Sucursal"
                                required={true}
                                optionValue="IdTipoSucursal"
                                optionName="Descripcion"
                                options={list.tipoSucursal}
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
                Agregar Sucursal
            </button>
            {/* TABLE */}
            <Table
                titleColumn={[
                    'Id',
                    'Universidad',
                    'Dirección',
                    'País',
                    'Departamento',
                    'Ciudad',
                    'Tipo Sucursal',

                    'Actualizar',
                    'Eliminar',
                ]}
                data={dataTable}
                attributes={[
                    'Universidad',
                    'Direccion',
                    'Pais',
                    'Departamento',
                    'Ciudad',
                    'TipoSucursal',
                ]} //codigo
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

export { Sucursal };
