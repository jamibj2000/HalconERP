import React from 'react'

import { TextAreaForm } from '../componentsForm/textarea/TextAreaForm'
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
        Descripcion,
    } = formData

    return (
        <FormContainerModal title={'Convocatoria'}>
            <form onSubmit={handleSubmit}>
                <TextAreaForm
                    name="Descripcion"
                    label="Descripción"
                    value={ Descripcion }
                    onChange={ handleChange }
                />
                <TextAreaForm
                    name="Descripcion"
                    label="Descripción"
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