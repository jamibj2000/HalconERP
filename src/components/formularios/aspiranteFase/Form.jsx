import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { Input } from '../componentsForm/input/input'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
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
        IdAspirante,
        IdConvocatoriaFase,
        PuntajeAspiranteFase,
        FlagApro
    } = formData

    return (
        <FormContainerModal title={'Fase del aspirante'}>
            <form onSubmit={ handleSubmit }>
                <Select
                    name="IdAspirante"
                    onChange={ handleChange }
                    value={ IdAspirante }
                    label="Aspirante"
                    options={["opcion 1", "opcion 2"]}
                />

                <Select
                    name="IdConvocatoriaFase"
                    onChange={ handleChange }
                    value={ IdConvocatoriaFase }
                    label="Convocatoria"
                    options={["opcion 1", "opcion 2"]}
                />

                <Input
                    label="Puntaje aspirante fase"
                    type="number"
                    name={ PuntajeAspiranteFase }
                    onChange={ handleChange }
                    value={ PuntajeAspiranteFase }
                />
                
                <Checkbox
                    onChange={ handleChange }
                    checked={ FlagApro }
                    name='FlagApro'
                >
                    Obtener valor de la tabla de bases de datos 'Aprobado' celda
                    'Estado'
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