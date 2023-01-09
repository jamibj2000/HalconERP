import React from 'react'

import { Select } from '../componentsForm/select/Select'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { Input } from '../componentsForm/input/input'
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
        selectList,
    } = props

    const {
        IdPersona,
        Descripcion,
        FechaInicio,
        FechaFin,
        IdTipoConvenio,
        IdClaseConvenios,
        FlagInstMulti,
        IdPais
    } = formData

    const {
        profile,
        agreementType,
        conventionClass,
        country
    } = selectList

    return (
        <FormContainerModal title={ 'Convenio' }>
            <form onSubmit={ handleSubmit } >
                <div className="row">
                    <div className="col-md-6">
                        <Select
                            name='IdPersona'
                            onChange={ handleChange }
                            value={ IdPersona }
                            label='Perfil'
                            optionValue='IdPersona'
                            optionName='PrimerNombres'
                            secondOptionName='SegundoApellidos'
                            options={ profile }
                        />

                        <Select
                            name='IdTipoConvenio'
                            onChange={ handleChange }
                            value={ IdTipoConvenio }
                            label='Tipo de convenio'
                            optionValue='IdTipoConvenio'
                            optionName='Descripcion'
                            options={ agreementType }
                        />

                        <Select
                            name='IdClaseConvenios'
                            onChange={ handleChange }
                            value={ IdClaseConvenios }
                            label='Clase de convenio'
                            optionValue='IdClaseConvenios'
                            optionName='Descripcion'
                            options={ conventionClass }
                        />

                        <Select
                            name='IdPais'
                            onChange={ handleChange }
                            value={ IdPais }
                            label='País'
                            optionValue='Idpaises'
                            optionName='Descripcion'
                            options={ country }
                        />

                        </div>
                        <div className="col-md-6">

                            <Checkbox
                                checked={ FlagInstMulti }
                                name='FlagInstMulti'
                                onChange={ handleChange }
                            >
                                Obtener valor de la tabla de bases de datos Convenio celda FlagInstMulti
                            </Checkbox>

                            <Input
                                label='Fecha de inicio'
                                type='date'
                                name='FechaInicio'
                                onChange={ handleChange }
                                value={ FechaInicio }
                            />

                            <Input
                                label='Fecha de finalización'
                                type='date'
                                name='FechaFin'
                                onChange={ handleChange }
                                value={ FechaFin }
                            />

                            <TextArea
                                label='Descripción'
                                name='Descripcion'
                                value={ Descripcion }
                                onChange={ handleChange }
                            />
                        </div>
                </div>

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