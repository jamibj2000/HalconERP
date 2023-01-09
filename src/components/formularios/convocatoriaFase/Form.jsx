import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { Input } from '../componentsForm/input/input'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { TextArea } from '../componentsForm/textarea/textarea'
import { Button } from '../componentsForm/button/button'
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainerModal } from '../componentsForm/formContainer/FormContainerModal'

const Form = props => {

    const {
        handleSubmit,
        handleChange,
        formData,
        loading,
        close,
        isCreate,
        selectList
    } = props

    const {
        IdConvocatoria,
        Descripcion,
        Observacion,
        FlagPuntaje,
        Puntaje,
        IdPersona
    } = formData

    const {
        announcement,
        profile
    } = selectList

    return (
        <FormContainerModal title={ 'Modo estudio' }>
            <form onSubmit={ handleSubmit }>
                <Select
                    name='IdConvocatoria'
                    onChange={ handleChange }
                    value={ IdConvocatoria }
                    label='Convocatoria'
                    optionValue='IdConvocatoria'
                    optionName='PrimerNombres'
                    options={ announcement }
                />
                <Select
                    name='IdPersona'
                    onChange={ handleChange }
                    value={ IdPersona }
                    label='Persona'
                    optionValue='IdPersona'
                    optionName='PrimerNombres'
                    options={ profile }
                />
                <Input
                    label='Puntaje'
                    type='text'
                    name='Puntaje'
                    onChange={ handleChange }
                    value={ Puntaje }
                    required={ true }
                />
                <TextArea
                    name="Descripcion"
                    label="Descripción"
                    value={ Descripcion }
                    onChange={ handleChange }
                />
                <TextArea
                    name="Observacion"
                    label="Descripción"
                    value={ Observacion }
                    onChange={ handleChange }
                />
                <Checkbox
                    name='FlagPuntaje'
                    value={ FlagPuntaje }
                    onChange={ handleChange }
                >
                    Obtener valor de la tabla de bases de 
                    datos 'FlagOferta'
                </Checkbox>
                <ButtonsContainer>
                    <LeftButtonContainer>
                        <Button type='back' onClick={ close }>
                            Cancelar
                        </Button>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                        <Button 
                            type='send'
                            loading={ loading }
                        >
                            { isCreate ? 'Crear' : 'Actualizar' }
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainerModal>
    )
}

export { Form }