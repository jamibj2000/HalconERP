import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const DocumentosCursos = () => {

    const [documento, setDocumento] = useState('')
    const [cursos, setCursos] = useState('')
    const [nombre, setNombre] = useState('')
    const [formato, setFormato] = useState('')
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
                <header className="card-header">
                    <Progress
                        percentage='33%'
                    />
                </header>
                <main className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <Input
                            id='id_nombre'
                            label='Nombre'
                            type='text'
                            onChange={ setNombre } 
                            value={ nombre }
                            required={ true }
                        />
                        <Select
                            name='documento'
                            onChange={ setDocumento }
                            value={ documento }
                            label='Documento de grado'
                            options={ ['opcion 1', 'opcion 2',] }
                        />
                        <Select
                            name='cursos'
                            onChange={ setCursos }
                            value={ cursos }
                            label='Curso'
                            options={ ['opcion 1', 'opcion 2',] }
                        />
                        <Select
                            name='formato'
                            onChange={ setFormato }
                            value={ formato }
                            label='formatoo'
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

export { DocumentosCursos }