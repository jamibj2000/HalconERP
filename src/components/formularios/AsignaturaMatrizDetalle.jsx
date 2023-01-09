import React, { useState } from 'react'

import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { Input } from './componentsForm/input/input';
import { Checkbox } from './componentsForm/checkbox/checkbox';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import './componentsForm/button/button.css';

const AsignaturaMatrizDetalle = () => {

  const [asignatura, setAsignatura] = React.useState('')
  const [detalle, setDetalle] = React.useState('')
  const [asignatura1, setAsignatura1] = React.useState('')
  const [orden, setOrden] = React.useState('')
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
                name='detalle'
                value={detalle}
                onChange={setDetalle}
                label='Asignatura matriz detalle'
                options={['opcion 1', 'opcion 2',]}

              />
              <Select
                name='asignatura'
                value={asignatura}
                onChange={setAsignatura}
                label='Asignatura matriz '
                options={['opcion 1', 'opcion 2',]}
              />
              <Select
                name='asignatura1'
                value={asignatura1}
                onChange={setAsignatura1}
                label='Asignatura'
                options={['opcion 1', 'opcion 2',]}
              />
              <Input
                label="Orden"
                type="text"
                value={orden}
                onChange={setOrden}
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

export { AsignaturaMatrizDetalle }