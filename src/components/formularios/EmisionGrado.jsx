import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Checkbox } from './componentsForm/checkbox/checkbox'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const EmisionGrado = () => {

    const [document, setDocument] = useState('')
    const [emision, setEmision] = useState('')
    const [modo, setModo] = useState('')
    const [pago, setPago] = useState(false)
    const [fase, setFase] = useState(false)
    const [proceso, setProceso] = useState('')
    const [numero, setNumero] = useState('')

    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
      e.preventDefault()

      setCargando(true)
      //Funciones asincronas
      setCargando(false)

    }

    return (
        <div>
            <div class="form-animado col-md-11 h-75 ">
            <div className="card h-100">
                <header className="card-header">
                    <Progress
                        percentage='33%'
                    />
                </header>
                <main className="card-body">
                    <form onSubmit={handleSubmit}>
                        <Select
                            name='grade'
                            onChange={setEmision}
                            value={emision}
                            label='Emisión de grado'
                            options={['opcion 1', 'opcion 2',]}
                        />
                        <Input
                            label="Numero emisión"
                            type="number"
                            onChange={ setNumero }
                            value={ numero }
                            required={ true }
                        />
                        <Select
                            name='Document'
                            onChange={ setDocument }
                            value={ document }
                            label='Documentos de cursos'
                            options={['opcion 1', 'opcion 2',]}
                        />

                        <Select
                            name='mode'
                            onChange={setModo}
                            value={modo}
                            label='Modo'
                            options={['opcion 1', 'opcion 2',]}
                        />
                        <Select
                            name='process'
                            onChange={setProceso}
                            value={proceso}
                            label='Proceso'
                            options={['opcion 1', 'opcion 2',]}
                        />

                        <Checkbox
                            label="Pago"
                            type="text"
                            onChange={ setPago }
                            checked={ pago }
                            required={ true }
                        />

                        <Checkbox
                            label="Fase grado"
                            id="id_Status"
                            name='status'
                            onChange={setFase}
                            checked={fase}

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
        </div>
    )
}

export { EmisionGrado } 