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



const Persona = () => {

    //! DECLARACION DE VARIABLES
    const [idTipoPersona, setIdTipoPersona] = useState('');
    const [idTipoIdentidad, setIdTipoIdentidad] = useState('');
    const [numero, setNumero] = useState('');
    const [expedicion, setExpedicion] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [primerNombre, setPrimerNombre] = useState('');
    const [segundoNombre, setSegundoNombre] = useState('');
    const [idSexo, setIdSexo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [pais, setPais] = useState('');
    const [flagColombia, setFlagColombia] = useState(null);
    const [idMunicipio, setIdMunicipio] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [correoInstitucional, setCorreoInstitucional] = useState('');
    const [direccion, setDireccion] = useState('');
    const [idEstadoCivil, setIdEstadoCivil] = useState('');
    const [idEstracto, setIdEstracto] = useState('');




    const [loading, setLoading] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [dataTable, setDataTable] = useState([]);
    const [modalType, setModalType] = useState('');
    const endPointLastUrl = 'persona'; //! endPointLastUrl


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
        setIdTipoPersona('');
        setIdTipoIdentidad('');
        setNumero('');
        setExpedicion('');
        setPrimerApellido('');
        setSegundoApellido('');
        setPrimerNombre('');
        setSegundoNombre('');
        setIdSexo('');
        setFechaNacimiento('');
        setPais('');
        setFlagColombia(null);
        setIdMunicipio('');
        setTelefono('');
        setCorreo('');
        setCorreoInstitucional('');
        setDireccion('');
        setIdEstadoCivil('');
        setIdEstracto('');
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
        setIdTipoPersona(item.IdTipoPersona);
        setIdTipoIdentidad(item.IdTipoIdentidad);
        setNumero(item.numero);
        setExpedicion(item.FechaEspedicion);
        setPrimerApellido(item.PrimerApellidos);
        setSegundoApellido(item.SegundoApellidos);
        setPrimerNombre(item.PrimerNombres);
        setSegundoNombre(item.SegundoNombre);
        setIdSexo(item.IdSexo);
        setFechaNacimiento(item.FechaNacimiento);
        setPais(item.IdPais);
        setFlagColombia(item.FlagColombia);
        setIdMunicipio(item.IdMunicipio);
        setTelefono(item.TelefonoContacto);
        setCorreo(item.Email);
        setCorreoInstitucional(item.EmailInstitucional);
        setDireccion(item.Direccion);
        setIdEstadoCivil(item.IdEstadoCivil);
        setIdEstracto(item.IdEstracto);
        

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
                    IdTipoPersona: idTipoPersona,
                    IdTipoIdentidad: idTipoIdentidad,
                    numero: numero,
                    FechaEspedicion: expedicion,
                    PrimerApellidos: primerApellido,
                    SegundoApellidos: segundoApellido,
                    PrimerNombres: primerNombre,
                    SegundoNombre: segundoNombre,
                    IdSexo: idSexo,
                    FechaNacimiento: fechaNacimiento,
                    IdPais: pais,
                    FlagColombia: flagColombia,
                    IdMunicipio: idMunicipio,
                    TelefonoContacto: telefono,
                    Email: correo,
                    EmailInstitucional: correoInstitucional,
                    Direccion: direccion,
                    IdEstadoCivil: idEstadoCivil,
                    IdEstracto: idEstracto,
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
                IdTipoPersona: idTipoPersona,
                IdTipoIdentidad: idTipoIdentidad,
                numero: numero,
                FechaEspedicion: expedicion,
                PrimerApellidos: primerApellido,
                SegundoApellidos: segundoApellido,
                PrimerNombres: primerNombre,
                SegundoNombre: segundoNombre,
                IdSexo: idSexo,
                FechaNacimiento: fechaNacimiento,
                IdPais: pais,
                FlagColombia: flagColombia,
                IdMunicipio: idMunicipio,
                TelefonoContacto: telefono,
                Email: correo,
                EmailInstitucional: correoInstitucional,
                Direccion: direccion,
                IdEstadoCivil: idEstadoCivil,
                IdEstracto: idEstracto,
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
                                id="idTipoPersona"
                                name="idTipoPersona"
                                onChange={setIdTipoPersona}
                                value={idTipoPersona}
                                label="IdTipoPersona"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'TipoPersona 1',
                                    }
                                ]}
                            />

                            <Select
                                id="idTipoIdentidad"
                                name="idTipoIdentidad"
                                onChange={setIdTipoIdentidad}
                                value={idTipoIdentidad}
                                label="IdTipoIdentidad"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'TipoIdentidad 1',
                                    }
                                ]}
                            />

                            <Input
                                label="Número"
                                type="number"
                                onChange={setNumero}
                                value={numero}
                                required={true}
                            />

                            <Input
                                label="Fecha de Expedición"
                                type="date"
                                value={expedicion}
                                onChange={setExpedicion}
                                required={true}
                            />
                            <Input
                                label="Primer Nombre"
                                type="text"
                                value={primerNombre}
                                onChange={setPrimerNombre}
                                required={true}
                            />
                            <Input
                                label="Segundo Nombre"
                                type="text"
                                value={segundoNombre}
                                onChange={setSegundoNombre}
                                required={true}
                            />

                            <Input
                                label="Primer apellido"
                                type="text"
                                value={primerApellido}
                                onChange={setPrimerApellido}
                                required={true}
                            />
                            <Input
                                label="Segundo apellido"
                                type="text"
                                value={segundoApellido}
                                onChange={setSegundoApellido}
                                required={true}
                            />
                            <Select
                                id="IdSexo"
                                name="IdSexo"
                                onChange={setIdSexo}
                                value={idSexo}
                                label="Sexo"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'Sexo 1',
                                    }
                                ]}
                            />
                            <Input
                                label="Fecha de Nacimiento"
                                type="date"
                                value={fechaNacimiento}
                                onChange={setFechaNacimiento}
                                required={true}
                            />
                            <Select
                                id="IdPais"
                                name="IdPais"
                                onChange={setPais}
                                value={pais}
                                label="Sexo"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'País 1',
                                    }
                                ]}
                            />
                            <Select
                                id="IdMunicipio"
                                name="IdMunicipio"
                                onChange={setIdMunicipio}
                                value={idMunicipio}
                                label="Municipio"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'Municipio 1',
                                    }
                                ]}
                            />
                            <Input
                                label="Teléfono Contacto"
                                type="number"
                                onChange={setTelefono}
                                value={telefono}
                                required={true}
                            />
                            <Input
                                label="Email"
                                type="text"
                                value={correo}
                                onChange={setCorreo}
                                required={true}
                            />
                            <Input
                                label="Email Institucional"
                                type="text"
                                value={correoInstitucional}
                                onChange={setCorreoInstitucional}
                                required={true}
                            />
                            <Input
                                label="Dirección"
                                type="text"
                                value={direccion}
                                onChange={setDireccion}
                                required={true}
                            />

                            <Select
                                id="IdMunicipio"
                                name="IdMunicipio"
                                onChange={setIdEstadoCivil}
                                value={idEstadoCivil}
                                label="Estado Civil"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'Estado Civil 1',
                                    }
                                ]}
                            />
                            <Select
                                id="IdMunicipio"
                                name="IdMunicipio"
                                onChange={setIdEstracto}
                                value={idEstracto}
                                label="Estrato"
                                options={[
                                    {
                                        IdCodigo: 'IdCódigo',
                                        key: '1',
                                        value: 'Estrato 1',
                                    }
                                ]}
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
                    /* 'IdTipoPersona', */
                    /* 'IdTipoIdentidad', */
                    'Número',
                    'Expedición',
                    '1_Apellido',
                    '2_Apellido',
                    '1_Nombre',
                    '2_Nombre',
                    /* 'IdSexo', */
                    'Fecha_Nacimiento',
                    /* 'IdPais', */
                    /* 'FlagColombia', */
                    /* 'IdMunicipio', */
                    'Tlf_Contacto',
                    'Email',
                    'Email_Institucional',
                    'Dirección',
                    /* 'IdEstadoCivil', */
                    'Estrato',
                    'Actualizar',
                    'Eliminar',
                ]}
                data={dataTable}
                attributes={[
                    /* 'IdTipoPersona', */
                    /* 'IdTipoIdentidad', */
                    'numero',
                    'FechaEspedicion',
                    'PrimerApellidos',
                    'SegundoApellidos',
                    'PrimerNombres',
                    'SegundoNombre',
                    /* 'IdSexo', */
                    'FechaNacimiento',
                    /* 'IdPais', */
                    /* 'FlagColombia', */
                    /* 'IdMunicipio', */
                    'TelefonoContacto',
                    'Email',
                    'EmailInstitucional',
                    'Direccion',
                    /* 'IdEstadoCivil', */
                    'IdEstracto',
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

export { Persona };
