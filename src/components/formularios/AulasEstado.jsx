import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const AulasEstado = () => {

    const [aula, setAula] = useState('')
    const [inicio, setInicio] = useState('')
    const [final, setFinal] = useState('')
    const [estado, setEstado] = useState(false)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        
        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <div>
            <div className="card h-100">
               <header className="card-header">
                    <Progress
                        percentage='33%'
                    />
                </header>
                <main className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <Select
                            name='aula'
                            onChange={ setAula }
                            value={ aula }
                            label='Selecciona la aula'
                            options={ ['opcion 1', 'opcion 2',] }
                        />
                         <Input
                            id='id_inicio'
                            label='Fecha de inicio'
                            type='date'
                            name='inicio'
                            onChange={ setInicio } 
                            value={ inicio }
                            required={ true }
                        />
                         <Input
                            id='id_final'
                            label='Fecha de finalización'
                            type='date'
                            name='final'
                            onChange={ setFinal } 
                            value={ final }
                            required={ true }
                        />
                        <Checkbox
                            id='id_estado'
                            checked={ estado }
                            name='estado'
                            onChange={ setEstado }
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
                </main>
            </div>
        </div>
    )
}

export { AulasEstado }