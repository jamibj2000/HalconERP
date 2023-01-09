import React from 'react'

import { Select } from '../componentsForm/select/Select'
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
    } = props

    const {
        IdDepartamento,
        Descripcion,
    } = formData

    const ciudad = [
        {
            key: 1,
            value: 'Bogotá'
        },
        {
            key: 2,
            value: 'Villavicencio'
        },
        {
            key: 3,
            value: 'Ibagué'
        }
    ]

    const departamento = [
        {
            key: 1,
            value: 'Cundinamarca'
        },
        {
            key: 2,
            value: 'Meta'
        },
        {
            key: 3,
            value: 'Tolima'
        },
        {
            key: 4,
            value: 'Huila'
        }
    ]

    return (
        <FormContainerModal title={'Ciudad'}>
            <form onSubmit={ handleSubmit }>
                <Select
                    name='IdDepartamento'
                    onChange={ handleChange }
                    value={ IdDepartamento || ''}
                    label='Departamento'
                    options={ departamento }
                />
                <TextArea
                    label='Descripción'
                    name='Descripcion'
                    value={ Descripcion || ''}
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