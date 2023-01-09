import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const MatrizCaracteristicasAuto = () => {

    const [descripcion, setDescripcion] = useState('')
    const [matrizAuto, setMatrizAuto] = useState(false)
    const [peso, setPeso] = useState(false)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <div className="card roundedCard card-form-box">
            <div className="card h-100">
                <header>
                    <div className="card-header">
                        <Progress
                            percentage='33%'
                        />
                    </div>
                </header>
                <main className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <Input
                            label='Escribe tu peso'
                            type='number'
                            name='peso'
                            onChange={ setPeso }
                            value={ peso }
                            required={ true }
                        />
                        <TextArea
                            label='Descripción'
                            name='descripcion'
                            value={ descripcion }
                            onChange={ setDescripcion }
                        />
                        <Select
                            name='matrizAuto'
                            onChange={ setMatrizAuto }
                            value={ matrizAuto }
                            label='Selecciona la matriz'
                            options={ ['opcion 1', 'opcion 2',] }
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

export { MatrizCaracteristicasAuto }