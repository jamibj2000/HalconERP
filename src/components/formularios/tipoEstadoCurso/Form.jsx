import React from 'react'

import { Button } from '../componentsForm/button/button'
import { TextArea } from '../componentsForm/textarea/textarea'
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
        Descripcion,
    } = formData

    return (
        <FormContainerModal title={ 'Estado del curso' }>
            <form onSubmit={ handleSubmit }>
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