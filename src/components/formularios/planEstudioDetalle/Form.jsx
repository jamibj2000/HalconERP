import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { TextArea } from '../componentsForm/textarea/textarea'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { Input } from '../componentsForm/input/input'
import { InputFile } from '../componentsForm/inputFile/inputFile'
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
        IdPlandeEstudio,
        Descripcion,
    } = formData

    const {
        studyPlan
    } = selectList

    return (
        <FormContainerModal title={ 'Detalle plan de estudio' }>
            <form onSubmit={ handleSubmit }>
                    <Select
                        name='IdPlandeEstudio'
                        onChange={ handleChange }
                        value={ IdPlandeEstudio }
                        label='Selecciona el plan de estudio'
                        optionValue='IdPlandeEstudio'
                        optionName='NombrePlanEstudio'
                        options={ studyPlan }
                    />
                    <TextArea
                        label='Descripción'
                        name='Descripcion'
                        value={ Descripcion }
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