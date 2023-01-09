import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { TextArea } from '../componentsForm/textarea/textarea'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { Input } from '../componentsForm/input/input'
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
        IdTipoEstudio,
        NombrePlanEstudio,
        Observacion,
        IntenHoraria
    } = formData

    const {
        typeOfStudy,
    } = selectList

    return (
        <FormContainerModal title={'Plan de estudio'}>
            <form onSubmit={ handleSubmit }>
                <Select
                    name='IdTipoEstudio'
                    onChange={ handleChange }
                    value={ IdTipoEstudio }
                    label='Selecciona el plan de estudio'
                    optionValue='IdTipoEstudio'
                    optionName='Descripcion'
                    options={ typeOfStudy }
                />
                <Input
                    label='Nombre del plan de estudio'
                    type='text'
                    name='NombrePlanEstudio'
                    value={ NombrePlanEstudio }
                    onChange={ handleChange }
                />
                <TextArea
                    label='Observación'
                    name='Observacion'
                    value={ Observacion }
                    onChange={ handleChange }
                />
                <Input
                    label='Horario'
                    type='datetime-local'
                    name='IntenHoraria'
                    value={ IntenHoraria }
                    onChange={ handleChange }
                />
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