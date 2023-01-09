import React, { useState } from "react";

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const Firma = () => {

    const [documentos, setDocumentos] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [estado, setEstado] = useState(false)
    const [firma, setFirma] = useState('')
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
                    percentage='65%'
                />
            </header>
            <main className="card-body">
                <form onSubmit={ handleSubmit }>
                    <Select
                        id="id_documentos"
                        label='Documentos de cursos'
                        name='documentos'
                        onChange={ setDocumentos }
                        value={ documentos }
                        options={ ['IdGrupo', 'Get value from database table CursosFirmas celda IdCursosDocumentos',] }
                    />

                    <TextArea
                        id="id_descripcion"
                        label='Descripción'
                        name='descripcion'
                        value={ descripcion }
                        onChange={ setDescripcion }
                        rows={ 10 }
                    />

                    <Input
                        id='id_firma'
                        label='Firma electrónica'
                        type='text'
                        name='firma'
                        onChange={ setFirma }
                        value={ firma }
                        required={ true }
                    />

                    <Checkbox
                        id="btn-checkstatus"
                        title='Estado'
                        onChange={ setEstado }
                        checked={ estado }
                        name='estado'
                    >
                        Get value from database table 'CursosFirmas' celda 'Estado'
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

export { Firma }