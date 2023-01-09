import React, { useState } from 'react'

import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { Checkbox } from './componentsForm/checkbox/checkbox';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import { Input } from './componentsForm/input/input';
import './componentsForm/button/button.css';

const Aulas = () => {

  const [tipo, setTipo] = React.useState('')
  const [aula, setAula] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const [capacidad, setCapacidad] = React.useState('')
  const [edificio, setEdificio] = React.useState('')
  const [activo, setActivo] = React.useState('')
  const [disponibilidad, setDisponibilidad] = React.useState('')
  const [estado, setEstado] = React.useState('')
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
                name='classroom'
                value={aula}
                onChange={setAula}
                label='Aula'
                options={['opcion 1', 'opcion 2',]}
              />
            <Select
                name='building'
                value={edificio}
                onChange={setEdificio}
                label='Edificio'
                options={['opcion 1', 'opcion 2',]}
              />
              <Select
                name='type'
                value={tipo}
                onChange={setTipo}
                label='Tipo de aula'
                options={['opcion 1', 'opcion 2',]}
              />
                <Select
                name='activ'
                value={activo}
                onChange={setActivo}
                label='Activo'
                options={['opcion 1', 'opcion 2',]}
              />
                 <Select
                name='availability'
                value={disponibilidad}
                onChange={setDisponibilidad}
                label='Disponibilidad'
                options={['opcion 1', 'opcion 2',]}
              />
               <Input
                label="Capacidad"
                type="text"
                value={capacidad}
                onChange={setCapacidad}
                required={true}
              />
              <Select
                name='number'
                value={numero}
                onChange={setNumero}
                label='Numero'
                options={['opcion 1', 'opcion 2',]}
              />
        
              <Checkbox
                id='id_Status'
                value={estado}
                name='status'
                onChange={setEstado}
              >
                Obtener valor de la tabla de bases de datos 'Estado' celda
                'Resultado'
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

export { Aulas }
