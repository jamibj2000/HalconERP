import React, { useState } from 'react'

import { TextArea } from './componentsForm/textarea/textarea'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const TipoInscripcionAd = () => {

    const [descripcion, setDescripcion] = useState('')
    const [estado, setEstado] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
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
                        <TextArea
                            label='Descripción'
                            name='descripcion'
                            value={ descripcion }
                            onChange={ setDescripcion }
                        />
                        <Checkbox
                            id='id_estado'
                            value={ estado }
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
                                <Button type='send'>
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

export { TipoInscripcionAd }