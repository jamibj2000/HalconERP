import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Button } from './componentsForm/button/button'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const ActaAsistencia = () => {

    const [attendanceRecord, setAttendanceRecord] = useState('')
    const [record, setRecord] = useState("")
    const [profile, setProfile] = useState("")
    const [status, setStatus] = useState(false)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <FormContainer progress='45'>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                  <Select
                      id="id_attendanceRecord"
                      name='attendanceRecord'
                      onChange={ setAttendanceRecord }
                      value={ attendanceRecord }
                      label='Acta de asistencia'
                      options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaAsistencia celda IdActaAsistencia',] }
                  />

                  <Select
                      id="id_record"
                      name='record'
                      onChange={ setRecord }
                      value={ record }
                      label='Acta'
                      options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaAsistencia celda IdActa',] }
                  />

                  <Select
                      id="id_profile"
                      name='profile'
                      onChange={ setProfile }
                      value={ profile }
                      label='Persona'
                      options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaAsistencia celda Idpersona',] }
                  />
                </div>

                <Checkbox
                  id='id_status'
                  name='status'
                  checked={ status }
                  onChange={ setStatus }
                >
                  Obtener valor de la tabla de bases de datos 'Estado' celda
                  'Estado'
                </Checkbox>

                <ButtonsContainer>
                    <LeftButtonContainer>
                        <Button type='back'>
                            Atrás
                        </Button>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                        <Button 
                            type='send'
                            loading={ cargando }
                        >
                            Enviar
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainer>
    )
}

export { ActaAsistencia }