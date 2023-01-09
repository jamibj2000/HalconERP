import React, { useState } from 'react'

import { Select } from './componentsForm/select/Select'
import { Button } from './componentsForm/button/button'
import { ProgressBar } from './componentsForm/progressBar/ProgressBar'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const ActaAcademica = () => {

    const [academicRecord, setAcademicRecord] = useState("")
    const [student, setStudent] = useState("")
    const [period, setPeriod] = useState("")  
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setLoading(true)
        //Funciones asincronas
        setLoading(false)
    }

  return (
        <FormContainer progress='45'>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <Select
                        id='id_academicRecord'
                        name='academicRecord'
                        onChange={ setAcademicRecord }
                        value={ academicRecord }
                        label='Acta académica'
                        options={ ['opcion 1', 'opcion 2',] }
                    />

                    <Select
                        id="id_period"
                        name='period'
                        onChange={ setPeriod }
                        value={ period }
                        label='Período'
                        options={ ['opcion 1', 'opcion 2',] }
                    />

                    <Select
                        id="id_student"
                        name='student'
                        onChange={ setStudent }
                        value={ student }
                        label='Estudiante'
                        options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaAcademica, Idstudent',] }
                    />
                </div>

                <ButtonsContainer>
                    <LeftButtonContainer>
                        <Button type='back'>
                            Atrás
                        </Button>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                        <Button 
                            type='send'
                            loading={ loading }
                        >
                            Enviar
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainer>
    )
}

export { ActaAcademica }