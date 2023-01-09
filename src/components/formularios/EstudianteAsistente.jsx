import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const EstudianteAsistente = () => {

    const [estudiante,setEstudiante] = useState('')
    const [fecha,setFecha] = useState('')
    const [asistencia,setAsistencia] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
      e.preventDefault()

      setCargando(true)
      //Funciones asincronas
      setCargando(false)
    }

    return (
        <div className="card">
          <header className="card-header">
              <Progress
                percentage='63%'
              />
          </header>
          <main className="card-body">
              <form onSubmit={ handleSubmit }>
                <div className="row">
                    <Select
                        name='estudiante'
                        onChange={ setEstudiante }
                        value={ estudiante }
                        label='Estudiante'
                        options={ ['opcion 1', 'opcion 2',] }
                    />

                    <Input
                        id='id_fecha'
                        label='Fecha'
                        type='date'
                        name='fecha'
                        onChange={ setFecha }
                        value={ fecha }
                        required={ true }
                    />

                    <Checkbox
                        id='id_asistencia'
                        value={ asistencia }
                        name='asistencia'
                        onChange={ setAsistencia }
                    >
                        Obtener valor de la tabla de bases de datos 'asistencia' celda
                        'flagAsistencia'
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
                  </div>
              </form>
          </main>
      </div>
  )
}

export { EstudianteAsistente }