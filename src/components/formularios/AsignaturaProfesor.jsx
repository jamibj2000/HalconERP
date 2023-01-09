import React, { useState } from 'react'

import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import { Input } from './componentsForm/input/input';
import './componentsForm/button/button.css';

const AsignaturaProfesor = () => {

  const [profesor, setProfesor] = React.useState('')
  const [malla, setMalla] = React.useState('')
  const [tipo, setTipo] = React.useState('')
  const [horas, setHoras] = React.useState('')
  const [aula, setAula] = React.useState('')
  const [perfil, setPerfil] = React.useState('')
  const [calendario, setCalendario] = React.useState('')
  const [cargando, setCargando] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setCargando(true)
    setCargando(false)
  }
  return (
    <div>
      <div className="form-animado col-md-10 h-75">
        <div className="card h-100">
          <header>
            <div className="card-header">
              <Progress
                percentage='20%'
              />
            </div>
          </header>
          <main className="card-body">
            <form onSubmit={handleSubmit}>
            <Select
                name='profesor'
                value={profesor}
                onChange={setProfesor}
                label='Asignatura Profesor'
                options={['opcion 1', 'opcion 2',]}
              />
              <Select
                name='malla'
                value={malla}
                onChange={setMalla}
                label='Malla Curricular'
                options={['opcion 1', 'opcion 2',]}
              />
               <Select
                name='perfil'
                value={perfil}
                onChange={setPerfil}
                label='Perfil'
                options={['opcion 1', 'opcion 2',]}
              />
               <Select
                name='aula'
                value={aula}
                onChange={setAula}
                label='Aula'
                options={['opcion 1', 'opcion 2',]}
              />
              <Input
                label="Tipo del Curso"
                type="number"
                value={tipo}
                onChange={setTipo}
                required={true}
              />

              <Input
                label="Horas"
                type="number"
                value={horas}
                onChange={setHoras}
                required={true}
              />
      
              <Select
                name='number'
                value={calendario}
                onChange={setCalendario}
                label='Detalles del calendario'
                options={['opcion 1', 'opcion 2',]}
              />


              <ButtonsContainer>
                <LeftButtonContainer>
                  <Button type='back'>
                    Atrás
                  </Button>
                </LeftButtonContainer>
                <RightButtonContainer>
                  <Button
                    type='send'
                    loading={cargando}>
                    Enviar
                  </Button>
                </RightButtonContainer>
              </ButtonsContainer>
            </form>
          </main>
        </div>
      </div>
    </div >
  )
}

export { AsignaturaProfesor }