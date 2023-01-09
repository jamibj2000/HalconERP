import React, { useState } from 'react'

import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { TextArea } from './componentsForm/textarea/textarea';
import { Checkbox } from './componentsForm/checkbox/checkbox';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import './componentsForm/button/button.css';

const ActividadConvenio = () => {
    const [actividad, setActividad] = useState('')
    const [convenio, setConvenio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [resultado, setResultado] = useState('')
    const [cargando, setCargando] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        setCargando(false)
    }

    return (
        <div>
            <div className="form-animado col-md-11 h-75 ">
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
                                name='activity'
                                onChange={setActividad}
                                value={actividad}
                                label='Tipo actividad convenio'
                                options={['opcion 1', 'opcion 2',]}
                            />
                            <Select
                                name='agreement'
                                onChange={setConvenio}
                                value={convenio}
                                label='Convenio'
                                options={['opcion 1', 'opcion 2',]}
                            />
                            <TextArea
                                name="curse"
                                label="Descripción"
                                value={descripcion}
                                onChange={setDescripcion}
                                cols={30}
                                rows={2}
                            />
                            <Checkbox
                                id='id_Status'
                                value={resultado}
                                name='status'
                                onChange={setResultado}
                            >
                                Obtener valor de la tabla de bases de datos 'Resultado' celda
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

export { ActividadConvenio }