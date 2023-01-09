import React, { useState } from 'react'

import { Select } from './componentsForm/select/Select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const Area = () => {

    const [codigo, setCodigo] = useState("");
    const [dimension, setDimension] = useState("");
    const [codigoE, setCodigoE] = useState("");
    const [persona, setPersona] = useState("");
    const [estado, setEstado] = useState(false);
    const [area, setArea] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <FormContainer progress='45'>
            <form onSubmit={ handleSubmit } >
             {/*    <Input
                    id='id_codigo'
                    label='Código'
                    type='number'
                    name='inicio'
                    onChange={ setCodigo }
                    value={ codigo }
                    required={ true }
                /> */}
                <Select
                    id="id_dimension"
                    name='dimension'
                    onChange={ setDimension }
                    value={ dimension }
                    label='Dimensión'
                    options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos IdDimension',] }
                />
                <Select
                    id="id_persona"
                    name='persona'
                    onChange={ setPersona }
                    value={ persona }
                    label='Persona'
                    options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos IdPersona',] }
                />
                <Select
                    id="id_area"
                    name='area'
                    onChange={ setArea }
                    value={ area }
                    label='Tipo área'
                    options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos IdTipoArea',] }
                />
                <Input
                    id='id_codigoE'
                    label='Código E'
                    type='number'
                    name='codigoE'
                    onChange={ setCodigoE }
                    value={ codigoE }
                    required={ true }
                />
                <TextArea
                    id="floatingTextarea"
                    label='Descripción'
                    name='descripcion'
                    value={ descripcion }
                    onChange={ setDescripcion }
                />
                <Checkbox
                    id="id_estado"
                    checked={ estado }
                    title='Estado'
                    name='estado'
                    onChange={ setEstado }
                >
                    Obtener valor de la tabla de bases de datos 'Estado' celda
                    'Estado'
                </Checkbox>
                <ButtonsContainer>
                    <LeftButtonContainer>
                        <Button type='back'>
                            Atrás
                        </Button>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                        <Button 
                            type='send'
                            loading={ cargando }
                        >
                            Enviar
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainer>
    )
}

export { Area }