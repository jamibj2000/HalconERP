import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'

const MatrizCaracDetClase = () => {

    const [matriz, setMatriz] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <div  class="form-animado col-md-11 h-75 ">
            <div className="card">
                <header className="card-header">
                    <Progress
                        percentage='65%'
                    />
                </header>
                <main className="card-body">
                    <form onSubmit={ handleSubmit } >
                        <Select
                            id="id_matriz"
                            name='matriz'
                            onChange={ setMatriz }
                            value={ matriz }
                            label='Selecciona la matriz característica'
                            options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos idMatrizCaracteristicasAuto',] }
                        />
                        <TextArea
                            id="id_descripcion"
                            label='Descripción'
                            name='descripcion'
                            value={ descripcion }
                            onChange={ setDescripcion }
                        />
                        {/* Falta detalle, indicador */}
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

export { MatrizCaracDetClase }