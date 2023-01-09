import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const Acta = () => {

    const [record, setRecord] = useState("");
    const [degree, setDegree] = useState("");
    const [area, setArea] = useState("");
    const [state, setState] = useState("");
    const [date, setDate] = useState("");
    const [observation, setObservation] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setLoading(true)
        //Funciones asincronas
        setLoading(false)
    }

    return (
        <FormContainer progress='45'>
            <form onSubmit={ handleSubmit }>
                <Select
                    id="id_record"
                    name='record'
                    onChange={ setRecord }
                    value={ record }
                    label='Acta'
                    options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos Acta celda IdActa',] }
                />

                <Select
                    id="id_area"
                    name='area'
                    onChange={ setArea }
                    value={ area }
                    label='Area de la entidad'
                    options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos Acta celda IdAreaEntidad',] }
                />

                <Input
                    id='id_degree'
                    label='Título'
                    type='text'
                    name='degree'
                    onChange={ setDegree }
                    value={ degree }
                    required={ true }
                />

                <Input
                    id='id_date'
                    label='Fecha'
                    type='date'
                    name='date'
                    onChange={ setDate }
                    value={ date }
                    required={ true }
                />

                <TextArea
                    id="id_observation"
                    label='observationes Principales'
                    name='observation'
                    value={ observation }
                    onChange={ setObservation }
                />

                <TextArea
                    id="id_description"
                    label='Descripción'
                    name='description'
                    value={ description }
                    onChange={ setDescription }
                />

                <Checkbox
                    id="id_state"
                    checked={ state }
                    name='state'
                    onChange={ setState }
                >
                    Obtener valor de la tabla de bases de datos 'state' celda
                    'state'
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
                            loading={ loading }
                        >
                            Enviar
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainer>
    )
}

export { Acta }
