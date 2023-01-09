import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { InputFile } from './componentsForm/inputFile/inputFile'
import { TextArea } from './componentsForm/textarea/textarea'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const EmisionGradoFase = () => {

    const [emision, setEmision] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [archivo, setArchivo] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <div className="card h-100">
            <header className="card-header">
                <Progress
                    percentage='33%'
                />
            </header>
            <main className="card-body">
                <form onSubmit={ handleSubmit }>
                    <Select
                        name='emision'
                        onChange={ setEmision }
                        value={ emision }
                        label='Selecciona la emisión de grado'
                        options={ ['opcion 1', 'opcion 2',] }
                    />
                    <TextArea
                        label='Descripción'
                        name='descripcion'
                        value={ descripcion }
                        onChange={ setDescripcion }
                    />
                    <InputFile
                        id='id_archivo'
                        label='Adjunta la emisión de grado'
                        name='archivo'
                        accept='image/*'
                        onChange={ setArchivo }
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
    )
}

export { EmisionGradoFase }