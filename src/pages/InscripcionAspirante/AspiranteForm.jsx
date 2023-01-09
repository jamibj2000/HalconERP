import React, { useEffect, useState } from 'react';

import { Button } from '../../components/formularios/componentsForm/button/button';
import { Select } from '../../components/formularios/componentsForm/select/Select';
import { ButtonsContainer } from '../../components/formularios/componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../../components/formularios/componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../../components/formularios/componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../../components/formularios/componentsForm/formContainer/FormContainer';


import ApiDashboard from '../../services/api/dashboard';
import { alertaSinBoton, alertaTimer } from '../../helpers/alertas';
import { Modal } from '../../components/modal/Modal';
import { Table } from '../../components/formularios/componentsForm/table/Table';
import { Input } from '../../components/formularios/componentsForm/input/input';
import { Navigate, useNavigate } from 'react-router-dom';



const AspiranteForm = (props) => {

    //! DECLARACION DE VARIABLES

   

    const [cupos, setCupos] = useState('');
    const [idCurso, setIdCurso] = useState('');
    const [fechaNacimiento,setFechaNacimiento] = useState('')
    const [idTipoConvocatoria, setIdTipoConvocatoria] = useState('');
    const [flagPublico, setFlagPublico] = useState(null);

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
    const navigate = useNavigate()

    //! LLAMAR Y ASIGNAR LIST
    const fecthDataSelect = async () => {
        const apiSelect = new ApiDashboard();
        /* const pais = await apiSelect.getData('pais') */
        const persona = await apiSelect.getData('persona')
        // const profesional = await apiSelect.getData('profesional')
        // const convenio = await apiSelect.getData('convenio')
        const paises = await apiSelect.getData('getPaises')

        /* console.log('Respuesta de pais', pais);
        if (pais?.status === 'Token is Expired') {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        } */
        if (
            persona?.status === 'Token is Expired' || 
            // profesional?.status === 'Token is Expired' ||
            paises?.status === 'Token is Expired'
        ) {
            alertaTimer("La sesion ha expirado", 'info', '4000')
            return false
        }

        setList({
            paises, 
            persona,
            // profesional,
            // convenio
        })
    }


    //! FUNCION DE LLAMADO A LA CONSULTA DE DATOS
    useEffect(  () => {
        const fecthData = async () => {
            setLoading(true);
            await fecthDataSelect();
            setLoading(false);
            console.log(props,"state props")

        }
        fecthData();
    }, [props]);


    //! SUBMIT CREATE OR UPDATE
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
       
        createService();
        
        setLoading(false);

    };

    //! VALIDACION DE TOKEN
   

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
        // cleanFormValues();
        setIsOpenModalCreate(true);
        setModalType('/create');
        fecthDataSelect();
        console.log('Listado para selects-->', list);
    };
  
   
    //!CLOSE ALL MODALES
   

    //! SERVICE CREATE
    const createService = async () => {
        try {
            const api = new ApiDashboard();
            const data = await api.createData(
                {
                    IdCurso:props.cursoInformation.curso.IdCurso,
                    Cedula: cedula,
                    FechaNacimiento:fechaNacimiento,
                    ApeNombres: apeNombres,
                    Direccion: direccion,
                    telefono: telefono,
                    idpais: idPais,
                    repdoc: null,//repdoc, //idk
                    especialidad: especialidad,
                    IdPersona: null, //idPersona, //not apply
                    Puntaje: puntaje,
                    Correo: correo,
                    // IdConvocatoria:null, //props.curso.IdConvocatoria
                    IdProfesional: null, //idProfesional, micro servicio de terceros
                    IdConvenio:null, //idConvenio, // not apply
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
setTimeout(() => {
    alertaTimer('Un correo  llegará en los proximos minutos con información de la siguiente fase','success',8000)

}, 2000);            
            // cleanFormValues();
        } catch (e) {}
    };

    const onBack =()=>{
      navigate('../')
    }

    //! SERVICE DELETE
   

    //! SERVICE UPDATE
   

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
                                label="Fecha Nacimiento"
                                type="date"
                                onChange={setFechaNacimiento}
                                value={fechaNacimiento}
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
                            {/* <Select
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
                            /> */}
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

                            {/* <Select
                                id="persona"
                                name="persona"
                                onChange={setIdPersona}
                                value={idPersona}
                                label="Persona"
                                required={true}
                                optionValue="IdPersona"
                                optionName="PrimerNombres"
                                options={list.persona}
                            /> */}

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
                            {/* <Select
                                id="idProfesional"
                                name="idProfesional"
                                onChange={setIdProfesional}
                                value={idProfesional}
                                label="ID - Profesional"
                                required={true}
                                optionValue="IdProfesional"
                                optionName="IdProfesional"
                                options={list.profesional}
                            /> */}
                            {/* <Select
                                id="idConvenio"
                                name="idConvenio"
                                onChange={setIdConvenio}
                                value={idConvenio}
                                label="Convenio"
                                required={true}
                                optionValue="IdConvenio"
                                optionName="Descripcion"
                                options={list.convenio}
                            />    */}
                        </div>
                    </div>
                    <ButtonsContainer>
                        <LeftButtonContainer>
                            <Button type="back" onClick={onBack}>
                                Atrás
                            </Button>
                        </LeftButtonContainer>
                        <RightButtonContainer>
                           <Button type="send" loading={loading} onClick={handleSubmit}>
                                    Enviar Inscripción
                                </Button>
                           
                        </RightButtonContainer>
                    </ButtonsContainer>
                </form>
            </>
        );
    };

    return (
        //! MAIN CONTAINER
        <FormContainer progress="45" style={{ width: '60%' }}>
    
            {Form()}
            
        </FormContainer>
    );
};

export { AspiranteForm };