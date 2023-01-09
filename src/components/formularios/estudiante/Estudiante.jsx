import React, { useState } from 'react'

import { Input } from '../componentsForm/input/input';
import { Button } from '../componentsForm/button/button';
import { Select } from '../componentsForm/select/Select';
import { Checkbox } from '../componentsForm/checkbox/checkbox';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';

const Estudiante = () => {

  const [malla, setMalla] = React.useState('')
  const [perfil, setPerfil] = React.useState('')
  const [promedio, setPromedio] = React.useState('')
  const [fallas, setFallas] = React.useState('')
  const [estudiante, setEstudiante] = React.useState('')
  const [estado, setEstado] = React.useState(false)
  const [cargando, setCargando] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setCargando(true)
    setCargando(false)

  }

  return (
    <FormContainer progress='40'>
      <form onSubmit={handleSubmit}>
        <Select
          name="estudiante"
          onChange={setEstudiante}
          value={estudiante}
          label="Estudiante"
          options={["opcion 1", "opcion 2"]}
        />
        <Select
          name='perfil'
          value={perfil}
          onChange={setPerfil}
          label=' Perfil'
          options={['opcion 1', 'opcion 2',]}
        />
        <Select
          name='malla'
          value={malla}
          onChange={setMalla}
          label=' Malla Curricular'
          options={['opcion 1', 'opcion 2',]}
        />
        <Input
          label='Promedio de calificaciones'
          type='number'
          onChange={setPromedio}
          value={promedio}
          required={true}
        />
        <Input
          label='Fallas'
          type='text'
          onChange={setFallas}
          value={fallas}
          required={true}
        />
        <Checkbox
          id='id_Status'
          value={estado}
          name='status'
          onChange={setEstado}
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
              loading={cargando}
            >
              Enviar
            </Button>
          </RightButtonContainer>
        </ButtonsContainer>
      </form>
    </FormContainer>
  )
}

export { Estudiante }