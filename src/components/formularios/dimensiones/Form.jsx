import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { TextArea } from '../componentsForm/textarea/textarea'
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
        isCreate
    } = props

    const { 
        idSucursal, 
        Reglamentacion, 
        Siglas, 
        Descripcion, 
        Observacion, 
    } = formData

    const sucursal = [
        {
            key: 1,
            value: 'Sucursal 1'
        },
        {
            key: 2,
            value: 'Sucursal 2'
        },
        {
            key: 3,
            value: 'Sucursal 3'
        }
    ]

    return (
        <FormContainerModal title={'Dimensión'}>
            <form onSubmit={ handleSubmit }>
                <Select
                    name='idSucursal'
                    onChange={ handleChange }
                    value={ idSucursal || '' }
                    label='Sucursal'
                    options={ sucursal }
                />

                <Input
                    id='id_reglamentacion'
                    label='Reglamentación'
                    type='text'
                    name='Reglamentacion'
                    onChange={ handleChange }
                    value={ Reglamentacion || '' }
                    required={ true }
                />

                <Input
                    id='id_siglas'
                    label='Siglas'
                    type='text'
                    name='Siglas'
                    onChange={ handleChange }
                    value={ Siglas || '' }
                    required={ true }
                />

                <TextArea
                    label='Descripción'
                    name='Descripcion'
                    value={ Descripcion || '' }
                    onChange={ handleChange }
                />

                <TextArea
                    label='Observación'
                    name='Observacion'
                    value={ Observacion || '' }
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