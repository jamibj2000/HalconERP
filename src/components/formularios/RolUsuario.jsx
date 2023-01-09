import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const RolUsuario = () => {
 
  const [rolUsuario, setRolUsuario] = useState('')
  const [usuario, setUsuario] = useState('')
  const [roles, setRoles] = useState('')
  const [dimensiones, setDimensiones] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    setCargando(true)
    //Funciones asincronas
    setCargando(false)
  }

  return(
    <div className="card h-100">
      <header className="card-header">
          <Progress
            percentage='65%'
          />
      </header>
      <main className="card-body">
        <form onSubmit={ handleSubmit }>
          <div className="row">
            <Select
              name='rolUsuario'
              onChange={ setRolUsuario }
              value={ rolUsuario }
              label='Usuario'
              options={ ['opcion 1', 'opcion 2',] }
            />

            <Select
              name='usuario'
              onChange={ setUsuario }
              value={ usuario }
              label='Usuario'
              options={ ['opcion 1', 'opcion 2',] }
            />

            <Select
              name='roles'
              onChange={ setRoles }
              value={ roles }
              label='Roles'
              options={ ['opcion 1', 'opcion 2',] }
            />

            <Select
              label='Dimensiones'
              name='dimensiones'
              onChange={ setDimensiones }
              value={ dimensiones }
              options={ ['opcion 1', 'opcion 2',] }
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
                      loading={ cargando }
                  >
                    Enviar
                  </Button>
              </RightButtonContainer>
          </ButtonsContainer>
        </form>
      </main>
    </div>
  )
}

export { RolUsuario }