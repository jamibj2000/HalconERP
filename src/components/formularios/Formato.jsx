import React, { useState } from "react";

import { TextArea } from './componentsForm/textarea/textarea'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const Formato = () => {

    const [descripcion, setDescripcion] = useState('')
    const [estado, setEstado] = useState(false)
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
                    percentage='45%'
                />
            </header>
            <main className="card-body">
                <form onSubmit={ handleSubmit }>
                    <h4 className="card-title">Formato</h4>
                    <TextArea
                        id="id_descripcion"
                        label='Descripción'
                        name='descripcion'
                        value={ descripcion }
                        onChange={ setDescripcion }
                        rows={10}
                    />

                    <Checkbox
                        id="btn-checkstatus"
                        title='Estado'
                        onChange={ setEstado }
                        checked={ estado }
                        name='estado'
                    >
                      Obtener valor de la tabla de base de datos 'Formato' cell
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
    )
}

export { Formato }