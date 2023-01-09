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
        IdGrupo,
        IdActividades,
        IdModoEstudio,
        Nombre,
        FlagOferta,
        Observaciones,
        Repositorio,
        url,
        IdPlandeEstudio,
        IdProceso,
        IdPersona,
        FlagCalificacion,
        IdTipoEstadoCurso,
        IdTipoMecanismo,
        Codigo
    } = formData

    const {
        group,
        activities,
        studyMode,
        studyPlan,
        process,
        people,
        stateCourse,
        mechanism,
    } = selectList

    return (
        <FormContainerModal title={'Curso'}>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="col-md-6">
                        <Select
                            name='IdGrupo'
                            onChange={ handleChange }
                            value={ IdGrupo}
                            label='Grupo'
                            optionValue='Codigo'
                            optionName='Descripcion'
                            options={ group }
                        />

                        <Select
                            name='IdPersona'
                            onChange={ handleChange }
                            value={ IdPersona }
                            label='Perfil'
                            optionValue='IdPersona'
                            optionName='PrimerNombres'
                            options={ people }
                        />

                        <Input
                            label='Nombre'
                            type='text'
                            name='Nombre'
                            onChange={ handleChange }
                            value={ Nombre }
                        />

                        <Checkbox
                            name='FlagOferta'
                            value={FlagOferta}
                            onChange={ handleChange }
                        >
                            Obtener valor de la tabla de bases de 
                            datos 'FlagOferta'
                        </Checkbox>

                        <Select
                            name='IdActividades'
                            onChange={ handleChange }
                            value={ IdActividades }
                            label='Actividades'
                            optionValue='IdActividades'
                            optionName='Descripcion'
                            options={ activities }
                        />

                        <Select
                            name='IdPlandeEstudio'
                            onChange={ handleChange }
                            value={ IdPlandeEstudio }
                            label='Plan de estudio'
                            optionValue='IdPlandeEstudio'
                            optionName='NombrePlanEstudio'
                            options={ studyPlan }
                        />

                        <Select
                            name='IdProceso'
                            onChange={ handleChange }
                            value={ IdProceso }
                            label='Proceso del curso'
                            optionValue='IdProceso'
                            optionName='Descripcion'
                            options={ process }
                        />

                        <TextArea
                            label='Observaciones'
                            name='Observaciones'
                            value={ Observaciones }
                            onChange={ handleChange }
                        />
                    </div>
                    <div className="col-md-6">
                        
                        {/* Modo Estudio */}
                        <Select
                            name='IdModoEstudio'
                            onChange={ handleChange }
                            value={ IdModoEstudio }
                            label='Modo de estudiante'
                            optionValue='IdModoEstudio'
                            optionName='Descripcion'
                            options={ studyMode }
                        />

                        <Select
                            name='IdTipoEstadoCurso'
                            onChange={ handleChange }
                            value={ IdTipoEstadoCurso }
                            label='Estado del curso'
                            optionValue='IdTipoEstadoCurso'
                            optionName='Descripcion'
                            options={ stateCourse }
                        />

                        <Checkbox
                            checked={ FlagCalificacion }
                            name='FlagCalificacion'
                            onChange={ handleChange }
                        >
                            Obtener valor de la tabla de bases de datos 'FlagCalificacion'
                        </Checkbox>

                        <Select
                            name='IdTipoMecanismo'
                            onChange={ handleChange }
                            value={ IdTipoMecanismo }
                            label='Tipo de mecanismo'
                            optionValue='IdTipoMecanismo'
                            optionName='Descripcion'
                            options={ mechanism }
                        />

                        <InputFile
                            label='Repositorio'
                            name='Repositorio'
                            value={ Repositorio }
                            accept='image/*'
                            onChange={ handleChange }
                        />

                        <Input
                            label='URL'
                            type='text'
                            name='url'
                            onChange={ handleChange }
                            placeholder="https://..."
                            value={ url }
                        />

                        <Input
                            label='Código'
                            type='number'
                            name='Codigo'
                            onChange={ handleChange }
                            value={ Codigo }
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