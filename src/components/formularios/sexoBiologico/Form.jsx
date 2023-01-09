import React from 'react'

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
        Descripcion,
        DescripcionDos,
    } = formData

    return (
        <FormContainerModal title={'Sexo biológico'}>
            <form onSubmit={ handleSubmit }>
                <TextArea
                    label='Primera descripción'
                    name='Descripcion'
                    value={ Descripcion || '' }
                    onChange={ handleChange }
                />

                <TextArea
                    label='Segunda descripción'
                    name='DescripcionDos'
                    value={ DescripcionDos || '' }
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